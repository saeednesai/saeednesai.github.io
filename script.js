/* ==========================================================
   Header: hidden over the hero, appears from About onward
   ========================================================== */
(function headerVisibility(){
  const header = document.querySelector('.site-header');
  const hero = document.getElementById('top');
  if (!header || !hero || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-pinned', !entry.isIntersecting);
  }, { threshold: 0, rootMargin: '-64px 0px 0px 0px' });
  observer.observe(hero);
})();

/* ==========================================================
   Theme (light default, persisted)
   ========================================================== */
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.setAttribute('aria-pressed', theme === 'dark');
}
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
// initial state already set inline in <head> to avoid flash; just sync aria
applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

/* coverSVG(), hivePattern(), swarmDots() now live in data.js
   so index.html and both detail pages share identical artwork. */

const ICON_ZOOM = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>`;
const ICON_LINK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/></svg>`;

/* ==========================================================
   i18n + rendering
   ========================================================== */
let currentLang = localStorage.getItem('lang') || 'en';

function t(key){
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function renderExperience(){
  const list = document.getElementById('experience-list');
  list.innerHTML = experience.map(item => `
    <li>
      <div class="tl-date">${item.date[currentLang]}</div>
      <h3>${item.role[currentLang]}</h3>
      <ul>${item.bullets[currentLang].map(b => `<li>${b}</li>`).join('')}</ul>
    </li>`).join('');
}

function renderServices(){
  const grid = document.getElementById('services-grid');
  grid.innerHTML = services.map(s => `
    <article class="card">
      <div class="card-media">
        ${coverSVG(s.cover)}
        <div class="card-overlay">
          <button type="button" class="icon-btn" data-lightbox="${s.id}" aria-label="${t('preview_label')}">${ICON_ZOOM}</button>
          <a class="icon-btn" href="service-details.html?id=${s.id}&lang=${currentLang}" aria-label="${t('details_label')}">${ICON_LINK}</a>
        </div>
      </div>
      <div class="card-body">
        <h3>${s.title[currentLang]}</h3>
        <p>${s.blurb[currentLang]}</p>
        <a class="card-detail-link" href="service-details.html?id=${s.id}&lang=${currentLang}">${t('details_label')}</a>
      </div>
    </article>`).join('');
  attachCardEvents();
}

let activeFilter = 'all';
let masonryInstance = null;

function renderProjects(){
  const grid = document.getElementById('projects-masonry');
  grid.innerHTML = '<div class="masonry-sizer"></div>' + projects.map(p => `
    <article class="card project-card ${activeFilter !== 'all' && p.category !== activeFilter ? 'is-hidden' : ''}" data-category="${p.category}">
      <div class="card-media">
        ${coverSVG(p.cover)}
        <div class="card-overlay">
          <button type="button" class="icon-btn" data-lightbox="${p.id}" aria-label="${t('preview_label')}">${ICON_ZOOM}</button>
          <a class="icon-btn" href="project-details.html?id=${p.id}&lang=${currentLang}" aria-label="${t('details_label')}">${ICON_LINK}</a>
        </div>
      </div>
      <div class="card-body">
        <div class="project-tag">${p.tag[currentLang]}</div>
        <h3>${p.title[currentLang]}</h3>
        <p>${p.blurb[currentLang]}</p>
        <a class="card-detail-link" href="project-details.html?id=${p.id}&lang=${currentLang}">${t('details_label')}</a>
      </div>
    </article>`).join('');
  attachCardEvents();
  initMasonry();
}

function initMasonry(){
  const grid = document.getElementById('projects-masonry');
  if (typeof Masonry === 'undefined') return; // CDN unavailable, layout falls back to normal flow
  if (masonryInstance) masonryInstance.destroy();
  masonryInstance = new Masonry(grid, {
    itemSelector: '.project-card:not(.is-hidden)',
    columnWidth: '.masonry-sizer',
    percentPosition: true,
    gutter: 22
  });
}

function attachCardEvents(){
  document.querySelectorAll('[data-lightbox]').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(btn.getAttribute('data-lightbox')));
  });
}

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
  });

  renderExperience();
  renderServices();
  renderProjects();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

/* ==========================================================
   Project filter (masonry)
   ========================================================== */
document.getElementById('filter-bar').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  activeFilter = btn.getAttribute('data-filter');
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('is-active', b === btn));
  document.querySelectorAll('#projects-masonry .project-card').forEach(card => {
    card.classList.toggle('is-hidden', activeFilter !== 'all' && card.getAttribute('data-category') !== activeFilter);
  });
  if (masonryInstance){
    masonryInstance.reloadItems();
    masonryInstance.layout();
  }
});

/* ==========================================================
   Preview modal (Bootstrap Carousel — prev/next through
   every service or every project without closing)
   ========================================================== */
let previewCarousel = null;

function openLightbox(id){
  const isService = services.some(s => s.id === id);
  const list = isService ? services : projects;
  const idx = list.findIndex(x => x.id === id);
  const inner = document.getElementById('previewCarouselInner');

  inner.innerHTML = list.map((item, i) => `
    <div class="carousel-item ${i === idx ? 'active' : ''}">
      <div class="lb-media">${coverSVG(item.cover)}</div>
      <div class="lb-text">
        <h3>${item.title[currentLang]}</h3>
        <p>${item.blurb[currentLang]}</p>
        <a class="card-detail-link" href="${isService ? 'service-details.html' : 'project-details.html'}?id=${item.id}&lang=${currentLang}">${t('details_label')}</a>
      </div>
    </div>`).join('');

  const carouselEl = document.getElementById('previewCarousel');
  if (previewCarousel) previewCarousel.dispose();
  previewCarousel = new bootstrap.Carousel(carouselEl, { interval: false, ride: false });

  const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('previewModal'));
  modal.show();
}

/* ==========================================================
   Fullscreen hamburger nav
   ========================================================== */
const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('nav-overlay');
const navOverlayClose = document.getElementById('nav-overlay-close');
if (navOverlayClose) navOverlayClose.addEventListener('click', () => closeNav());
function openNav(){
  navOverlay.classList.add('is-open');
  hamburger.classList.add('is-active');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeNav(){
  navOverlay.classList.remove('is-open');
  hamburger.classList.remove('is-active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', () => {
  navOverlay.classList.contains('is-open') ? closeNav() : openNav();
});
navOverlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navOverlay.classList.contains('is-open')) closeNav();
});

/* ==========================================================
   Contact form (Web3Forms)
   ========================================================== */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = t('form_sending');
  try {
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    const data = await res.json();
    if (data.success) { status.textContent = t('form_success'); form.reset(); }
    else { status.textContent = t('form_error'); }
  } catch (err) { status.textContent = t('form_error'); }
});

/* ==========================================================
   Swarm hero animation (subtle, respects reduced motion)
   ========================================================== */
(function swarm(){
  const canvas = document.getElementById('swarm-canvas');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w, h, boids = [];
  const COUNT = 34;

  function resize(){
    const hero = canvas.parentElement;
    w = canvas.width = hero.offsetWidth;
    h = canvas.height = hero.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function initBoids(){
    boids = [];
    for (let i = 0; i < COUNT; i++){
      boids.push({ x: Math.random()*w, y: Math.random()*h, vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5 });
    }
  }
  initBoids();

  function dotColor(){
    return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#C97C1B';
  }

  function step(){
    ctx.clearRect(0,0,w,h);
    const color = dotColor();
    for (let i=0;i<boids.length;i++){
      const b = boids[i];
      let ax=0, ay=0, cx=0, cy=0, sx=0, sy=0, n=0;
      for (let j=0;j<boids.length;j++){
        if (i===j) continue;
        const o = boids[j];
        const dx=o.x-b.x, dy=o.y-b.y, d2=dx*dx+dy*dy;
        if (d2 < 6000){
          cx+=o.x; cy+=o.y; n++;
          ax+=o.vx; ay+=o.vy;
          if (d2 < 900){ sx-=dx; sy-=dy; }
        }
      }
      if (n>0){
        cx = cx/n - b.x; cy = cy/n - b.y;
        b.vx += cx*0.0003 + ax/n*0.02 + sx*0.002;
        b.vy += cy*0.0003 + ay/n*0.02 + sy*0.002;
      }
      const speed = Math.hypot(b.vx,b.vy) || 0.001, max=0.8;
      if (speed>max){ b.vx=b.vx/speed*max; b.vy=b.vy/speed*max; }
      b.x += b.vx; b.y += b.vy;
      if (b.x<0) b.x=w; if (b.x>w) b.x=0;
      if (b.y<0) b.y=h; if (b.y>h) b.y=0;
      ctx.beginPath();
      ctx.arc(b.x,b.y,1.8,0,Math.PI*2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(step);
  }

  if (reduceMotion){ initBoids(); step(); }
  else { requestAnimationFrame(step); }
})();

/* ==========================================================
   Active-section tracking (highlights the matching nav link
   as the user scrolls, including the Contact CTA)
   ========================================================== */
(function activeSectionTracking(){
  const sectionIds = ['about', 'experience', 'skills', 'services', 'projects', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll('.nav-desktop a[href^="#"]'));

  function setActive(id){
    navLinks.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
    });
  }

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));
})();

/* ==========================================================
   Init
   ========================================================== */
applyLanguage(currentLang);
