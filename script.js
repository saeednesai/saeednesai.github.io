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

/* ==========================================================
   Cover art (inline SVG per category) — recolors with theme
   via CSS custom properties (cover-a / cover-b classes).
   ========================================================== */
function coverSVG(type){
  const w = 400, h = 300;
  const wrap = (inner) => `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
    <rect width="${w}" height="${h}" fill="var(--surface-alt)"/>${inner}</svg>`;

  switch(type){
    case 'circuit':
      return wrap(`
        <g class="cover-a" fill="none" stroke-width="2">
          <path d="M40 60 H160 V120 H260 V60 H360"/>
          <path d="M40 220 H140 V160 H320 V220 H360"/>
          <path d="M200 40 V260"/>
        </g>
        <g class="cover-a-fill">
          <circle cx="40" cy="60" r="5"/><circle cx="160" cy="120" r="5"/><circle cx="260" cy="60" r="5"/>
          <circle cx="360" cy="60" r="5"/><circle cx="140" cy="220" r="5"/><circle cx="320" cy="160" r="5"/>
          <circle cx="360" cy="220" r="5"/>
        </g>`);
    case 'network':
      return wrap(`
        <g class="cover-b" fill="none" stroke-width="2">
          <path d="M200 150 L90 90 M200 150 L310 90 M200 150 L90 210 M200 150 L310 210 M200 150 L200 60"/>
        </g>
        <g class="cover-b-fill">
          <circle cx="200" cy="150" r="9"/>
          <circle cx="90" cy="90" r="6"/><circle cx="310" cy="90" r="6"/>
          <circle cx="90" cy="210" r="6"/><circle cx="310" cy="210" r="6"/><circle cx="200" cy="60" r="6"/>
        </g>`);
    case 'support':
      return wrap(`
        <g class="cover-a" fill="none" stroke-width="2">
          <rect x="70" y="90" width="150" height="90" rx="16"/>
          <rect x="180" y="140" width="150" height="90" rx="16"/>
        </g>
        <g class="cover-a-fill"><circle cx="115" cy="135" r="4"/><circle cx="145" cy="135" r="4"/><circle cx="175" cy="135" r="4"/></g>`);
    case 'hex':
      return wrap(hivePattern());
    case 'hive':
      return wrap(hivePattern());
    case 'web':
      return wrap(`
        <g class="cover-a" fill="none" stroke-width="2">
          <rect x="60" y="60" width="280" height="180" rx="10"/>
          <path d="M60 100 H340"/>
        </g>
        <g class="cover-a-fill"><circle cx="82" cy="80" r="4"/><circle cx="100" cy="80" r="4"/><circle cx="118" cy="80" r="4"/></g>
        <g class="cover-b" fill="none" stroke-width="2"><path d="M100 140 H300 M100 170 H260 M100 200 H280"/></g>`);
    case 'calendar':
      return wrap(`
        <g class="cover-a" fill="none" stroke-width="2">
          <rect x="80" y="70" width="240" height="180" rx="10"/>
          <path d="M80 120 H320 M140 60 V90 M260 60 V90"/>
        </g>
        <g class="cover-b-fill"><rect x="190" y="150" width="40" height="40" rx="6"/></g>`);
    case 'chart':
      return wrap(`
        <g class="cover-a-fill">
          <rect x="90" y="170" width="34" height="70"/>
          <rect x="150" y="130" width="34" height="110"/>
          <rect x="210" y="90" width="34" height="150"/>
          <rect x="270" y="150" width="34" height="90"/>
        </g>
        <path class="cover-b" fill="none" stroke-width="2" d="M90 150 L167 110 L227 130 L287 70"/>`);
    case 'shield':
      return wrap(`
        <g class="cover-a" fill="none" stroke-width="2">
          <path d="M200 60 L300 95 V150 C300 200 260 230 200 245 C140 230 100 200 100 150 V95 Z"/>
        </g>
        <path class="cover-b" fill="none" stroke-width="3" d="M165 150 L190 175 L240 120"/>`);
    case 'sliders':
      return wrap(`
        <g class="cover-a" stroke-width="2">
          <line x1="80" y1="100" x2="320" y2="100"/>
          <line x1="80" y1="150" x2="320" y2="150"/>
          <line x1="80" y1="200" x2="320" y2="200"/>
        </g>
        <g class="cover-b-fill">
          <circle cx="150" cy="100" r="10"/><circle cx="250" cy="150" r="10"/><circle cx="190" cy="200" r="10"/>
        </g>`);
    case 'extract':
      return wrap(`
        <g class="cover-a" fill="none" stroke-width="2">
          <rect x="60" y="100" width="90" height="100" rx="8"/>
          <rect x="250" y="100" width="90" height="100" rx="8"/>
        </g>
        <g class="cover-b" stroke-width="2"><path d="M155 150 H245" stroke-dasharray="6 6"/></g>
        <g class="cover-b-fill"><path d="M230 140 L250 150 L230 160 Z"/></g>`);
    default:
      return wrap(swarmDots());
  }
}
function hivePattern(){
  const cx=200, cy=150, r=42;
  const centers = [[0,0],[1.5*r,0.87*r],[1.5*r,-0.87*r],[-1.5*r,0.87*r],[-1.5*r,-0.87*r],[0,1.74*r],[0,-1.74*r]];
  return centers.map(([dx,dy],i)=>{
    const x=cx+dx, y=cy+dy;
    const pts=[0,60,120,180,240,300].map(a=>{
      const rad=Math.PI/180*a;
      return `${x+r*Math.cos(rad)},${y+r*Math.sin(rad)}`;
    }).join(' ');
    return `<polygon points="${pts}" class="${i===0?'cover-b':'cover-a'}" fill="none" stroke-width="2"/>`;
  }).join('');
}
function swarmDots(){
  let out = '';
  for(let i=0;i<24;i++){
    const x = 40 + Math.random()*320;
    const y = 40 + Math.random()*220;
    const r = 3 + Math.random()*4;
    out += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" class="cover-a-fill" opacity="${(0.4+Math.random()*0.6).toFixed(2)}"/>`;
  }
  return out;
}

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
function renderProjects(){
  const grid = document.getElementById('projects-masonry');
  grid.innerHTML = projects.map(p => `
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
});

/* ==========================================================
   Lightbox (quick low-detail preview)
   ========================================================== */
const lbBackdrop = document.getElementById('lightbox-backdrop');
const lbBox = document.getElementById('lightbox-box');
const lbClose = document.getElementById('lightbox-close');
let lbLastFocus = null;

function openLightbox(id){
  const item = services.find(s => s.id === id) || projects.find(p => p.id === id);
  if (!item) return;
  lbBox.innerHTML = `
    <div class="lb-media">${coverSVG(item.cover)}</div>
    <div class="lb-text">
      <h3>${item.title[currentLang]}</h3>
      <p>${item.blurb[currentLang]}</p>
    </div>`;
  lbLastFocus = document.activeElement;
  lbBackdrop.classList.add('is-open');
  lbClose.focus();
}
function closeLightbox(){
  lbBackdrop.classList.remove('is-open');
  if (lbLastFocus) lbLastFocus.focus();
}
lbClose.addEventListener('click', closeLightbox);
lbBackdrop.addEventListener('click', (e) => { if (e.target === lbBackdrop) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    if (lbBackdrop.classList.contains('is-open')) closeLightbox();
    if (navOverlay.classList.contains('is-open')) closeNav();
  }
});

/* ==========================================================
   Fullscreen hamburger nav
   ========================================================== */
const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('nav-overlay');
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
   Init
   ========================================================== */
applyLanguage(currentLang);
