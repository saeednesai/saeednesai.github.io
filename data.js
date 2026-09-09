/* =========================================================
   Central content + i18n store.
   Add a new language by adding a key to `translations`
   and a same-shaped object to each item below.
   ========================================================= */

const translations = {
  en: {
    nav_about: "About", nav_experience: "Experience", nav_skills: "Skills",
    nav_services: "Services", nav_projects: "Projects", nav_contact: "Contact",
    hero_name: "Saeed Nesai",
    hero_sub: "Software engineer building the systems companies run on — from backend code to the network underneath it.",
    hero_meta: "Software development, systems administration, and swarm-intelligence research",
    hero_cta: "Get in touch",
    hero_secondary: "Read my story",
    about_title: "About",
    about_p1: "I'm a software engineer working across the stack: C#, Delphi, ASP.NET Core, and SQL on one side, Windows Server infrastructure and Cisco networks on the other. Most of my work has been inside small and mid-sized companies, where being the only developer on a project means owning it end to end — from database design to the server it deploys on.",
    about_p2: "Outside client work, I follow swarm intelligence and metaheuristic algorithms — bee colony optimization in particular — closely enough to have presented research on it at an international conference. I like problems that reward patience: tuning a report that's slow for the wrong reason, or comparing two algorithms until the difference between them is obvious.",
    about_fact_email: "Email", about_fact_phone: "Phone / WhatsApp / Telegram",
    about_fact_linkedin: "LinkedIn", about_fact_degree: "Degree",
    about_degree_value: "B.Sc. Computer Engineering — Software",
    experience_title: "Experience",
    skills_title: "Skills",
    skill_group_programming: "Programming", skill_group_web: "Web",
    skill_group_systems: "Systems & Networking", skill_group_ai: "AI & Algorithms",
    services_title: "Services", services_lead: "What I can help with, based on the work I do most.",
    projects_title: "Projects", projects_lead: "A selection of work from the past several years.",
    filter_all: "All", filter_software: "Software", filter_systems: "Systems", filter_research: "Research",
    contact_title: "Get in touch",
    contact_lead: "The fastest way to reach me is email or WhatsApp/Telegram. I read everything myself.",
    contact_email_label: "Email", contact_phone_label: "Phone", contact_linkedin_label: "LinkedIn",
    form_name: "Name", form_email: "Email", form_message: "Message",
    form_send: "Send message", form_sending: "Sending…",
    form_success: "Message sent — thank you.", form_error: "Something went wrong. Please email me directly.",
    footer_copy: "© 2016–2026 Saeed Nesai",
    details_label: "Details", preview_label: "Preview",
    theme_light: "Light", theme_dark: "Dark",
    back_home: "← Back to home"
  },
  fa: {
    nav_about: "درباره", nav_experience: "سوابق", nav_skills: "مهارت‌ها",
    nav_services: "خدمات", nav_projects: "پروژه‌ها", nav_contact: "تماس",
    hero_name: "سعید نسایی",
    hero_sub: "مهندس نرم‌افزاری که سیستم‌های موردنیاز شرکت‌ها را می‌سازد — از کد بک‌اند تا شبکه‌ای که رویش اجرا می‌شود.",
    hero_meta: "توسعه نرم‌افزار، مدیریت سیستم و شبکه، و پژوهش در هوش ازدحامی",
    hero_cta: "در تماس باشید",
    hero_secondary: "بیشتر بدانید",
    about_title: "درباره من",
    about_p1: "مهندس نرم‌افزاری هستم که در سراسر پشته‌ی فناوری کار می‌کنم: از یک‌سو #C، دلفی، ASP.NET Core و پایگاه‌داده، و از سوی دیگر زیرساخت ویندوز سرور و شبکه‌های سیسکو. بیشتر کارهایم در شرکت‌های کوچک و متوسط بوده، جایی‌که تنها توسعه‌دهنده بودن یعنی مسئولیت یک پروژه را از طراحی پایگاه‌داده تا سروری که رویش اجرا می‌شود، بر عهده گرفتن.",
    about_p2: "خارج از کار مشتری‌محور، هوش ازدحامی و الگوریتم‌های ابرابتکاری را دنبال می‌کنم — به‌ویژه بهینه‌سازی مبتنی بر کلونی زنبور عسل — تا جایی‌که نتیجه‌ی پژوهشم را در یک کنفرانس بین‌المللی ارائه کرده‌ام. مسائلی را دوست دارم که به شکیبایی پاداش می‌دهند: تنظیم گزارشی که به دلیل خاصی کند شده، یا مقایسه‌ی دو الگوریتم تا زمانی‌که تفاوتشان کاملاً روشن شود.",
    about_fact_email: "ایمیل", about_fact_phone: "تلفن / واتس‌اپ / تلگرام",
    about_fact_linkedin: "لینکدین", about_fact_degree: "مدرک تحصیلی",
    about_degree_value: "کارشناسی مهندسی کامپیوتر - نرم‌افزار",
    experience_title: "سوابق کاری",
    skills_title: "مهارت‌ها",
    skill_group_programming: "برنامه‌نویسی", skill_group_web: "وب",
    skill_group_systems: "سیستم و شبکه", skill_group_ai: "هوش مصنوعی و الگوریتم‌ها",
    services_title: "خدمات", services_lead: "کارهایی که بیشترین تجربه را در آن‌ها دارم.",
    projects_title: "پروژه‌ها", projects_lead: "گزیده‌ای از کارهای چند سال اخیر.",
    filter_all: "همه", filter_software: "نرم‌افزار", filter_systems: "سیستم", filter_research: "پژوهش",
    contact_title: "در تماس باشید",
    contact_lead: "سریع‌ترین راه تماس، ایمیل یا واتس‌اپ/تلگرام است. شخصاً همه‌ی پیام‌ها را می‌خوانم.",
    contact_email_label: "ایمیل", contact_phone_label: "تلفن", contact_linkedin_label: "لینکدین",
    form_name: "نام", form_email: "ایمیل", form_message: "پیام",
    form_send: "ارسال پیام", form_sending: "در حال ارسال…",
    form_success: "پیام ارسال شد — سپاسگزارم.", form_error: "مشکلی پیش آمد. لطفاً مستقیم ایمیل بزنید.",
    footer_copy: "© ۲۰۱۶–۲۰۲۶ سعید نسایی",
    details_label: "جزئیات", preview_label: "پیش‌نمایش",
    theme_light: "روشن", theme_dark: "تاریک",
    back_home: "→ بازگشت به صفحه اصلی"
  },
  pt: {
    nav_about: "Sobre", nav_experience: "Experiência", nav_skills: "Habilidades",
    nav_services: "Serviços", nav_projects: "Projetos", nav_contact: "Contato",
    hero_name: "Saeed Nesai",
    hero_sub: "Engenheiro de software que constrói os sistemas que as empresas usam — do código de back-end à rede por trás dele.",
    hero_meta: "Desenvolvimento de software, administração de sistemas e pesquisa em inteligência de enxame",
    hero_cta: "Entrar em contato",
    hero_secondary: "Conheça minha história",
    about_title: "Sobre",
    about_p1: "Sou engenheiro de software e atuo em toda a pilha tecnológica: de um lado C#, Delphi, ASP.NET Core e bancos de dados; do outro, infraestrutura Windows Server e redes Cisco. A maior parte do meu trabalho foi em empresas pequenas e médias, onde ser o único desenvolvedor significa assumir um projeto do design do banco de dados até o servidor onde ele roda.",
    about_p2: "Fora do trabalho com clientes, acompanho inteligência de enxame e algoritmos metaheurísticos — em especial a otimização por colônia de abelhas — a ponto de já ter apresentado pesquisa sobre o tema em uma conferência internacional. Gosto de problemas que recompensam paciência: ajustar um relatório lento pelo motivo errado, ou comparar dois algoritmos até a diferença entre eles ficar óbvia.",
    about_fact_email: "E-mail", about_fact_phone: "Telefone / WhatsApp / Telegram",
    about_fact_linkedin: "LinkedIn", about_fact_degree: "Formação",
    about_degree_value: "Bacharelado em Engenharia da Computação — Software",
    experience_title: "Experiência",
    skills_title: "Habilidades",
    skill_group_programming: "Programação", skill_group_web: "Web",
    skill_group_systems: "Sistemas e Redes", skill_group_ai: "IA e Algoritmos",
    services_title: "Serviços", services_lead: "No que costumo ajudar, com base no trabalho que mais realizo.",
    projects_title: "Projetos", projects_lead: "Uma seleção de trabalhos dos últimos anos.",
    filter_all: "Todos", filter_software: "Software", filter_systems: "Sistemas", filter_research: "Pesquisa",
    contact_title: "Entre em contato",
    contact_lead: "A forma mais rápida de me alcançar é por e-mail ou WhatsApp/Telegram. Eu mesmo leio tudo.",
    contact_email_label: "E-mail", contact_phone_label: "Telefone", contact_linkedin_label: "LinkedIn",
    form_name: "Nome", form_email: "E-mail", form_message: "Mensagem",
    form_send: "Enviar mensagem", form_sending: "Enviando…",
    form_success: "Mensagem enviada — obrigado.", form_error: "Algo deu errado. Envie um e-mail diretamente.",
    footer_copy: "© 2016–2026 Saeed Nesai",
    details_label: "Detalhes", preview_label: "Pré-visualização",
    theme_light: "Claro", theme_dark: "Escuro",
    back_home: "← Voltar ao início"
  }
};

const experience = [
  {
    id: "exp1",
    role: { en: "Software Support Specialist", fa: "کارشناس پشتیبانی نرم‌افزار", pt: "Especialista em Suporte de Software" },
    date: { en: "Aug 2019 — Present", fa: "مرداد ۱۳۹۸ — تاکنون", pt: "Ago 2019 — Atual" },
    bullets: {
      en: [
        "Designed and built an internal employee booking system for travel and stays, similar to Airbnb Experiences, using ASP.NET Core.",
        "Built backend modules for security patrol management software in C# and ASP.NET Core.",
        "Customized attendance software for hundreds of client companies using Delphi, C#, and SQL."
      ],
      fa: [
        "طراحی و پیاده‌سازی یک سامانه‌ی رزرو داخلی برای سفر و اقامت کارکنان، مشابه Airbnb Experiences، با استفاده از ASP.NET Core.",
        "توسعه‌ی ماژول‌های بک‌اند برای نرم‌افزار مدیریت گشت امنیتی با #C و ASP.NET Core.",
        "سفارشی‌سازی نرم‌افزار حضور و غیاب برای صدها شرکت مشتری با دلفی، #C و SQL."
      ],
      pt: [
        "Projetei e desenvolvi um sistema interno de reservas para viagens e hospedagem dos funcionários, similar ao Airbnb Experiences, usando ASP.NET Core.",
        "Desenvolvi módulos de back-end para o software de gestão de rondas de segurança em C# e ASP.NET Core.",
        "Personalizei o software de controle de ponto para centenas de empresas clientes usando Delphi, C# e SQL."
      ]
    }
  },
  {
    id: "exp2",
    role: { en: "Technical Support & System Management", fa: "پشتیبانی فنی و مدیریت سیستم", pt: "Suporte Técnico e Gestão de Sistemas" },
    date: { en: "May 2018 — Aug 2019", fa: "اردیبهشت ۱۳۹۷ — مرداد ۱۳۹۸", pt: "Mai 2018 — Ago 2019" },
    bullets: {
      en: [
        "Supported attendance systems and retail equipment, keeping downtime to a minimum.",
        "Built a network- and USB-based data extraction module in C# for attendance devices."
      ],
      fa: [
        "پشتیبانی از سامانه‌های حضور و غیاب و تجهیزات فروشگاهی، با حداقل زمان از کارافتادگی.",
        "توسعه‌ی ماژول استخراج داده از دستگاه‌های حضور و غیاب از طریق شبکه و USB با #C."
      ],
      pt: [
        "Dei suporte a sistemas de controle de ponto e equipamentos de varejo, mantendo o tempo de inatividade no mínimo.",
        "Desenvolvi um módulo em C# para extração de dados via rede e USB de dispositivos de ponto."
      ]
    }
  },
  {
    id: "exp3",
    role: { en: "Technical Support Specialist", fa: "کارشناس پشتیبانی فنی", pt: "Especialista em Suporte Técnico" },
    date: { en: "2017 — May 2018", fa: "۱۳۹۶ — اردیبهشت ۱۳۹۷", pt: "2017 — Mai 2018" },
    bullets: {
      en: ["Supported accounting, sales, attendance, and payroll software for business clients."],
      fa: ["پشتیبانی از نرم‌افزارهای حسابداری، فروش، حضور و غیاب و حقوق و دستمزد برای مشتریان."],
      pt: ["Dei suporte a softwares de contabilidade, vendas, ponto e folha de pagamento para clientes empresariais."]
    }
  },
  {
    id: "exp4",
    role: { en: "Freelance IT Specialist", fa: "متخصص فناوری اطلاعات (فریلنسر)", pt: "Especialista de TI Freelancer" },
    date: { en: "2015 — 2016", fa: "۱۳۹۴ — ۱۳۹۵", pt: "2015 — 2016" },
    bullets: {
      en: ["Built and maintained responsive WordPress sites and provided web development and IT support to independent clients."],
      fa: ["طراحی و نگهداری وب‌سایت‌های واکنش‌گرا با وردپرس و ارائه‌ی خدمات توسعه‌ی وب و پشتیبانی فنی به مشتریان مستقل."],
      pt: ["Criei e mantive sites responsivos em WordPress, além de oferecer desenvolvimento web e suporte técnico a clientes independentes."]
    }
  },
  {
    id: "exp5",
    role: { en: "Administrative & Operations Manager", fa: "مدیر اداری و عملیات", pt: "Gerente Administrativo e de Operações" },
    date: { en: "2014", fa: "۱۳۹۳", pt: "2014" },
    bullets: {
      en: ["Ran daily administrative operations and coordinated workflows across departments."],
      fa: ["مدیریت عملیات روزانه‌ی اداری و هماهنگی جریان کار بین بخش‌ها."],
      pt: ["Conduzi as operações administrativas diárias e coordenei fluxos de trabalho entre departamentos."]
    }
  },
  {
    id: "exp6",
    role: { en: "Public Relations Officer (Part-time)", fa: "کارشناس روابط عمومی (پاره‌وقت)", pt: "Assessor de Relações Públicas (meio período)" },
    date: { en: "2013 — 2014", fa: "۱۳۹۲ — ۱۳۹۳", pt: "2013 — 2014" },
    bullets: {
      en: ["Maintained the university's administrative automation system and website content."],
      fa: ["نگهداری سامانه‌ی اتوماسیون اداری و به‌روزرسانی محتوای وب‌سایت."],
      pt: ["Mantive o sistema de automação administrativa da universidade e atualizei o conteúdo do site."]
    }
  },
  {
    id: "exp7",
    role: { en: "Teaching Assistant", fa: "دستیار آموزشی", pt: "Assistente de Ensino" },
    date: { en: "2012 — 2013", fa: "۱۳۹۱ — ۱۳۹۲", pt: "2012 — 2013" },
    bullets: {
      en: ["Assisted teaching Computer Architecture, and Languages and Machines Theory."],
      fa: ["دستیاری در تدریس دروس معماری کامپیوتر و نظریه‌ی زبان‌ها و ماشین‌ها."],
      pt: ["Auxiliei no ensino de Arquitetura de Computadores e Teoria de Linguagens e Máquinas."]
    }
  }
];

const services = [
  {
    id: "svc-1", cover: "circuit",
    title: { en: "Custom software development", fa: "توسعه‌ی نرم‌افزار سفارشی", pt: "Desenvolvimento de software sob medida" },
    blurb: {
      en: "Desktop and web applications in C#, Delphi, and ASP.NET Core, backed by SQL Server or MySQL — from internal booking tools to reporting systems.",
      fa: "برنامه‌های دسکتاپ و وب با #C، دلفی و ASP.NET Core، مبتنی بر SQL Server یا MySQL — از ابزارهای رزرو داخلی تا سامانه‌های گزارش‌گیری.",
      pt: "Aplicações desktop e web em C#, Delphi e ASP.NET Core, com SQL Server ou MySQL — de ferramentas internas de reserva a sistemas de relatórios."
    },
    detail: {
      en: [
        "I build applications end to end — requirements, database design, implementation, and deployment. Most projects use C# and ASP.NET Core for web backends, Delphi for desktop line-of-business tools, and SQL Server or MySQL underneath.",
        "Typical projects: internal booking tools, reporting dashboards, and business software tailored to how a specific company actually works, rather than a generic off-the-shelf fit."
      ],
      fa: [
        "برنامه‌های کاربردی را از ابتدا تا انتها می‌سازم — از تحلیل نیاز و طراحی پایگاه‌داده تا پیاده‌سازی و استقرار. بیشتر پروژه‌هایم از #C و ASP.NET Core برای بک‌اند وب، دلفی برای ابزارهای دسکتاپ سازمانی، و SQL Server یا MySQL در لایه‌ی داده استفاده می‌کنند.",
        "نمونه‌ی پروژه‌ها: ابزارهای رزرو داخلی، داشبوردهای گزارش‌گیری، و نرم‌افزارهایی که دقیقاً منطبق با نحوه‌ی کار یک شرکت خاص طراحی شده‌اند، نه یک راه‌حل عمومی و از پیش آماده."
      ],
      pt: [
        "Desenvolvo aplicações do início ao fim — levantamento de requisitos, modelagem de banco de dados, implementação e implantação. A maioria dos projetos usa C# e ASP.NET Core no back-end web, Delphi para ferramentas desktop corporativas, e SQL Server ou MySQL na camada de dados.",
        "Projetos típicos: ferramentas internas de reserva, painéis de relatórios e softwares de negócio feitos sob medida para o funcionamento real de uma empresa específica, em vez de uma solução genérica pronta."
      ]
    }
  },
  {
    id: "svc-2", cover: "network",
    title: { en: "Systems & network administration", fa: "مدیریت سیستم و شبکه", pt: "Administração de sistemas e redes" },
    blurb: {
      en: "Windows Server environments, Active Directory, DHCP/DNS, and Cisco networking — setup, troubleshooting, and ongoing management.",
      fa: "محیط‌های ویندوز سرور، اکتیو دایرکتوری، DHCP/DNS و شبکه‌ی سیسکو — راه‌اندازی، عیب‌یابی و مدیریت مستمر.",
      pt: "Ambientes Windows Server, Active Directory, DHCP/DNS e redes Cisco — configuração, solução de problemas e gestão contínua."
    },
    detail: {
      en: [
        "I set up and maintain Windows Server environments — Active Directory, DHCP, DNS, Hyper-V, IIS, RRAS — and configure Cisco routers and switches for small and mid-sized office networks.",
        "This covers new setups, troubleshooting recurring issues, and keeping infrastructure stable as a company grows."
      ],
      fa: [
        "راه‌اندازی و نگهداری محیط‌های ویندوز سرور شامل اکتیو دایرکتوری، DHCP، DNS، Hyper-V، IIS و RRAS، و پیکربندی روترها و سوییچ‌های سیسکو برای شبکه‌های اداری کوچک و متوسط.",
        "این خدمت شامل راه‌اندازی جدید، رفع مشکلات تکرارشونده و حفظ پایداری زیرساخت با رشد شرکت است."
      ],
      pt: [
        "Configuro e mantenho ambientes Windows Server — Active Directory, DHCP, DNS, Hyper-V, IIS, RRAS — além de configurar roteadores e switches Cisco para redes de escritórios pequenos e médios.",
        "Isso inclui novas instalações, solução de problemas recorrentes e manutenção da estabilidade da infraestrutura à medida que a empresa cresce."
      ]
    }
  },
  {
    id: "svc-3", cover: "support",
    title: { en: "Technical support & training", fa: "پشتیبانی فنی و آموزش", pt: "Suporte técnico e treinamento" },
    blurb: {
      en: "Ongoing support for business software — attendance, payroll, accounting — plus staff training during rollouts and migrations.",
      fa: "پشتیبانی مستمر از نرم‌افزارهای کسب‌وکار — حضور و غیاب، حقوق و دستمزد، حسابداری — همراه با آموزش کارکنان هنگام استقرار سیستم جدید.",
      pt: "Suporte contínuo para softwares essenciais do negócio — ponto, folha de pagamento, contabilidade — além de treinamento da equipe durante implantações."
    },
    detail: {
      en: [
        "Ongoing support for business-critical software — attendance, payroll, accounting, and retail systems — including installation, troubleshooting, and maintenance.",
        "When new systems roll out, I also run staff training so the transition doesn't stall adoption."
      ],
      fa: [
        "پشتیبانی مداوم از نرم‌افزارهای حیاتی کسب‌وکار شامل حضور و غیاب، حقوق و دستمزد، حسابداری و سامانه‌های فروشگاهی؛ از نصب و عیب‌یابی تا نگهداری.",
        "هنگام استقرار سامانه‌های جدید، آموزش کارکنان را نیز انجام می‌دهم تا روند انتقال با مشکل مواجه نشود."
      ],
      pt: [
        "Suporte contínuo para softwares críticos do negócio — ponto, folha de pagamento, contabilidade e sistemas de varejo — incluindo instalação, solução de problemas e manutenção.",
        "Quando novos sistemas entram em operação, também conduzo treinamentos para que a transição não trave a adoção."
      ]
    }
  },
  {
    id: "svc-4", cover: "hex",
    title: { en: "AI & optimization research", fa: "پژوهش هوش مصنوعی و بهینه‌سازی", pt: "Pesquisa em IA e otimização" },
    blurb: {
      en: "Swarm intelligence and metaheuristic algorithm work for research or applied optimization problems. Nonprofit collaboration welcome.",
      fa: "کار روی هوش ازدحامی و الگوریتم‌های ابرابتکاری برای مسائل پژوهشی یا کاربردی بهینه‌سازی. همکاری غیرانتفاعی هم پذیرفته می‌شود.",
      pt: "Trabalho com inteligência de enxame e algoritmos metaheurísticos para problemas de pesquisa ou otimização aplicada. Colaboração sem fins lucrativos é bem-vinda."
    },
    detail: {
      en: [
        "I follow swarm intelligence and metaheuristic (evolutionary) algorithms, with a specific focus on bee-colony-based optimization. I've compared algorithm variants on benchmark functions and presented the results at an international conference (ICKIS 2014).",
        "I'm open to research collaboration or applied optimization problems — nonprofit cooperation is welcome, with copyright respected on both sides."
      ],
      fa: [
        "هوش ازدحامی و الگوریتم‌های ابرابتکاری (تکاملی) را دنبال می‌کنم، با تمرکز ویژه بر بهینه‌سازی مبتنی بر کلونی زنبور عسل. نسخه‌های مختلف الگوریتم را روی توابع محک مقایسه کرده و نتایج را در یک کنفرانس بین‌المللی (ICKIS 2014) ارائه داده‌ام.",
        "برای همکاری پژوهشی یا مسائل بهینه‌سازی کاربردی آماده‌ام — همکاری غیرانتفاعی هم با رعایت حق کپی‌رایت دو طرف پذیرفته می‌شود."
      ],
      pt: [
        "Acompanho inteligência de enxame e algoritmos metaheurísticos (evolutivos), com foco específico em otimização baseada em colônias de abelhas. Já comparei variantes de algoritmos em funções de benchmark e apresentei os resultados em uma conferência internacional (ICKIS 2014).",
        "Estou aberto a colaborações de pesquisa ou problemas aplicados de otimização — colaboração sem fins lucrativos é bem-vinda, respeitando os direitos autorais de ambas as partes."
      ]
    }
  },
  {
    id: "svc-5", cover: "web",
    title: { en: "WordPress & web development", fa: "توسعه‌ی وردپرس و وب", pt: "WordPress e desenvolvimento web" },
    blurb: {
      en: "Responsive WordPress builds for small businesses and individuals, matched to their branding and goals.",
      fa: "وب‌سایت‌های واکنش‌گرای وردپرسی برای کسب‌وکارهای کوچک و افراد، متناسب با هویت بصری آن‌ها.",
      pt: "Sites responsivos em WordPress para pequenas empresas e profissionais, alinhados à identidade visual já existente."
    },
    detail: {
      en: [
        "Responsive WordPress sites for small businesses and individuals, built around their existing branding rather than a generic theme feel.",
        "Includes setup, customization, and the ongoing tweaks that come up after launch."
      ],
      fa: [
        "طراحی وب‌سایت‌های وردپرسی واکنش‌گرا برای کسب‌وکارهای کوچک و افراد، بر پایه‌ی هویت بصری موجودشان به‌جای یک قالب عمومی.",
        "شامل راه‌اندازی، سفارشی‌سازی و رفع‌ونصب‌های پس از راه‌اندازی است."
      ],
      pt: [
        "Sites responsivos em WordPress para pequenas empresas e profissionais, construídos em torno da identidade visual já existente, em vez de um tema genérico.",
        "Inclui configuração, personalização e os ajustes que surgem após o lançamento."
      ]
    }
  }
];

const projects = [
  {
    id: "prj-1", category: "software", cover: "calendar",
    tag: { en: "Software · ASP.NET Core", fa: "نرم‌افزار · ASP.NET Core", pt: "Software · ASP.NET Core" },
    title: { en: "Employee booking system", fa: "سامانه‌ی رزرو کارکنان", pt: "Sistema de reservas para funcionários" },
    blurb: {
      en: "An internal reservation platform for staff travel and accommodation, built like Airbnb Experiences for company use.",
      fa: "بستری داخلی برای رزرو سفر و اقامت کارکنان، به سبک Airbnb Experiences برای استفاده‌ی سازمانی.",
      pt: "Plataforma interna de reservas para viagens e hospedagem da equipe, inspirada no Airbnb Experiences para uso corporativo."
    },
    detail: {
      en: ["An internal reservation platform built for the company, modeled loosely on Airbnb Experiences or Booking.com but scoped to employee travel and accommodation. It replaced manual booking coordination with a self-service system, reducing back-and-forth between staff and administrators."],
      fa: ["یک پلتفرم رزرو داخلی که برای شرکت ساخته شد، به‌طور کلی مشابه Airbnb Experiences یا Booking.com اما محدود به سفر و اقامت کارکنان. این سامانه هماهنگی دستی رزرو را با یک سیستم خوداتکا جایگزین کرد و رفت‌وآمد بین کارکنان و مدیران را کاهش داد."],
      pt: ["Uma plataforma de reservas interna construída para a empresa, vagamente inspirada no Airbnb Experiences ou Booking.com, mas limitada a viagens e hospedagem de funcionários. Substituiu a coordenação manual de reservas por um sistema de autoatendimento, reduzindo a troca de mensagens entre equipe e administradores."]
    }
  },
  {
    id: "prj-2", category: "software", cover: "chart",
    tag: { en: "Software · Delphi, FastReport", fa: "نرم‌افزار · دلفی, FastReport", pt: "Software · Delphi, FastReport" },
    title: { en: "Attendance & reporting suite", fa: "مجموعه‌ی گزارش‌گیری حضور و غیاب", pt: "Conjunto de relatórios de ponto" },
    blurb: {
      en: "Analytical and operational reports for attendance, personnel, and shop-management systems.",
      fa: "گزارش‌های تحلیلی و عملیاتی برای سامانه‌های حضور و غیاب، پرسنلی و مدیریت فروشگاه.",
      pt: "Relatórios analíticos e operacionais para sistemas de ponto, pessoal e gestão de lojas."
    },
    detail: {
      en: ["A set of analytical and operational reports covering attendance, personnel records, and shop management, used internally to replace ad-hoc spreadsheet reporting with consistent, repeatable output."],
      fa: ["مجموعه‌ای از گزارش‌های تحلیلی و عملیاتی برای حضور و غیاب، پرونده‌های پرسنلی و مدیریت فروشگاه، که گزارش‌گیری مبتنی بر اکسل موردی را با خروجی یکپارچه و قابل تکرار جایگزین کرد."],
      pt: ["Um conjunto de relatórios analíticos e operacionais cobrindo ponto, registros de pessoal e gestão de lojas, usado internamente para substituir relatórios improvisados em planilhas por uma saída consistente e repetível."]
    }
  },
  {
    id: "prj-3", category: "software", cover: "shield",
    tag: { en: "Software · C#, ASP.NET Core", fa: "نرم‌افزار · #C, ASP.NET Core", pt: "Software · C#, ASP.NET Core" },
    title: { en: "Security patrol backend", fa: "بک‌اند گشت امنیتی", pt: "Back-end de rondas de segurança" },
    blurb: {
      en: "Backend modules for security patrol management software used across client sites.",
      fa: "ماژول‌های بک‌اند برای نرم‌افزار مدیریت گشت امنیتی مورد استفاده در سایت‌های مشتری.",
      pt: "Módulos de back-end para o software de gestão de rondas de segurança usado em locais de clientes."
    },
    detail: {
      en: ["Backend modules that run the logic behind patrol scheduling and check-ins for client security teams."],
      fa: ["ماژول‌های بک‌اندی که منطق زمان‌بندی گشت و ثبت ورود را برای تیم‌های امنیتی مشتریان اجرا می‌کنند."],
      pt: ["Módulos de back-end que executam a lógica por trás do agendamento de rondas e dos check-ins para as equipes de segurança dos clientes."]
    }
  },
  {
    id: "prj-4", category: "software", cover: "sliders",
    tag: { en: "Software · Delphi, C#, SQL", fa: "نرم‌افزار · دلفی, #C, SQL", pt: "Software · Delphi, C#, SQL" },
    title: { en: "Attendance software customization", fa: "سفارشی‌سازی نرم‌افزار حضور و غیاب", pt: "Personalização de software de ponto" },
    blurb: {
      en: "Configured and customized attendance software for hundreds of companies, removing manual secondary calculations.",
      fa: "پیکربندی و سفارشی‌سازی نرم‌افزار حضور و غیاب برای صدها شرکت، و حذف نیاز به محاسبه‌ی دستی ثانویه.",
      pt: "Configuração e personalização de software de ponto para centenas de empresas, eliminando a necessidade de cálculo manual secundário."
    },
    detail: {
      en: ["Configured and customized an attendance software product for hundreds of client companies, tailoring calculation rules so businesses no longer needed a secondary manual calculation step."],
      fa: ["پیکربندی و سفارشی‌سازی محصول نرم‌افزار حضور و غیاب برای صدها شرکت مشتری، با تنظیم قوانین محاسباتی به‌گونه‌ای که دیگر نیازی به محاسبه‌ی دستی ثانویه نبود."],
      pt: ["Configurei e personalizei um produto de software de ponto para centenas de empresas clientes, ajustando as regras de cálculo para que não fosse mais necessário um cálculo manual secundário."]
    }
  },
  {
    id: "prj-5", category: "systems", cover: "extract",
    tag: { en: "Systems · C#", fa: "سیستم · #C", pt: "Sistemas · C#" },
    title: { en: "Attendance device data extraction", fa: "استخراج داده از دستگاه‌های حضور و غیاب", pt: "Extração de dados de dispositivos de ponto" },
    blurb: {
      en: "A network- and USB-based module for pulling data from attendance devices into the main software.",
      fa: "ماژولی برای دریافت داده از دستگاه‌های حضور و غیاب از طریق شبکه و USB.",
      pt: "Módulo para extrair dados de dispositivos de ponto via rede e USB."
    },
    detail: {
      en: ["A module that pulls data from attendance devices over both network and USB connections, feeding it into the main attendance software without manual export/import steps."],
      fa: ["ماژولی که داده را هم از طریق شبکه و هم USB از دستگاه‌های حضور و غیاب می‌خواند و بدون نیاز به خروجی/ورودی دستی، مستقیم به نرم‌افزار اصلی وارد می‌کند."],
      pt: ["Um módulo que extrai dados de dispositivos de ponto tanto por rede quanto por USB, alimentando o software principal sem etapas manuais de exportação/importação."]
    }
  },
  {
    id: "prj-6", category: "research", cover: "hive",
    tag: { en: "Research · ICKIS 2014", fa: "پژوهش · ICKIS 2014", pt: "Pesquisa · ICKIS 2014" },
    title: { en: "Bee algorithms compared", fa: "مقایسه‌ی الگوریتم‌های زنبور عسل", pt: "Comparação de algoritmos de abelhas" },
    blurb: {
      en: "A comparative study of the Artificial Bee Colony algorithm and the Bee Algorithm on benchmark functions, presented at ICKIS 2014.",
      fa: "مطالعه‌ی مقایسه‌ای الگوریتم کلونی زنبور عسل مصنوعی و الگوریتم زنبور روی توابع محک، ارائه‌شده در ICKIS 2014.",
      pt: "Estudo comparativo entre o algoritmo de Colônia Artificial de Abelhas e o Algoritmo das Abelhas em funções de benchmark, apresentado na ICKIS 2014."
    },
    detail: {
      en: ["A comparative study of the Artificial Bee Colony algorithm and the Bee Algorithm across a set of benchmark functions, examining where each optimization approach performs better and why."],
      fa: ["مطالعه‌ای مقایسه‌ای بین الگوریتم کلونی زنبور عسل مصنوعی و الگوریتم زنبور روی مجموعه‌ای از توابع محک، برای بررسی این‌که هرکدام در چه شرایطی عملکرد بهتری دارند و چرا."],
      pt: ["Um estudo comparativo entre o algoritmo de Colônia Artificial de Abelhas e o Algoritmo das Abelhas em um conjunto de funções de benchmark, analisando onde cada abordagem de otimização se sai melhor e por quê."]
    }
  }
];
