/* ============================================
   NR ADVOCACIA — script.js
   Vanilla ES6 · IntersectionObserver · rAF
   ============================================ */

(() => {
  'use strict';

  /* ---------- Data ---------- */
  const SERVICES = [
    { n: '01', name: 'Divórcio Extrajudicial e Judicial', desc: 'Separação consensual ou litigiosa, com foco em acordo, partilha e proteção da família.' },
    { n: '02', name: 'Pensão Alimentícia e Exoneração', desc: 'Fixação, revisão e exoneração de pensão com cálculos atualizados e previsibilidade.' },
    { n: '03', name: 'Inventário Extrajudicial e Judicial', desc: 'Encerramento do espólio, partilha de bens e liberação de imóveis presos há anos.' },
    { n: '04', name: 'Adjudicação Extrajudicial e Judicial', desc: 'Formalização da propriedade quando há promessa de compra e venda não escriturada.' },
    { n: '05', name: 'Usucapião Extrajudicial e Judicial', desc: 'Regularização fundiária para quem mora ou possui o imóvel há anos sem documentação.' },
    { n: '06', name: 'Ações Possessórias', desc: 'Reintegração, manutenção e interdito proibitório para defender sua posse legítima.' },
    { n: '07', name: 'Análise para Compra e Venda de Imóveis', desc: 'Due diligence imobiliária, leitura de matrícula e assessoria contratual antes de assinar.' },
    { n: '08', name: 'Assessoria a Imobiliárias e Condomínios', desc: 'Contratos, pareceres e treinamentos jurídicos para corretores e síndicos.' },
    { n: '09', name: 'Ações de Defesa do Consumidor', desc: 'Atuação contra práticas abusivas, vícios de produto e descumprimento contratual.' },
    { n: '10', name: 'Testamento', desc: 'Planejamento sucessório claro para proteger sua vontade e quem você ama.' },
    { n: '11', name: 'Doação com Usufruto', desc: 'Transferência patrimonial em vida com reserva de uso, segurança e economia fiscal.' }
  ];

  const REVIEWS = [
    { name: 'Michele Araujo', when: 'Há 2 meses', text: 'Excelente profissional! Foi muito atenciosa, competente e resolveu nosso caso com muita dedicação e responsabilidade. Nos passou segurança em todo o processo e sempre esteve disponível para esclarecer nossas dúvidas. Super recomendo!' },
    { name: 'Gustavo Arraes', when: 'Há 1 mês', text: 'Advogada excelente que sempre está a nossa disposição para as atualizações ou qualquer dúvida!' },
    { name: 'Beatriz Nogueira', when: 'Há 5 meses', text: 'Participei de um treinamento com a Dra. Nayara sobre documentação imobiliária e foi muito bom! Ela nos ensinou a interpretar matrículas e transcrições de uma forma simples e leve, mostrando muita experiência em Direito Imobiliário. Recomendo demais!' },
    { name: 'Marcelo Cardoso', when: 'Há 8 meses', text: 'Excelente profissional. Já me atendeu em dois processos, ambos finalizados com êxito. Em uma questão que não era a área dela, me indicou uma colega. Em outro caso, foi sincera em dizer que não poderia me atender no momento. Achei muito legal não querer "agarrar o mundo sem ter braços".' },
    { name: 'Luiz Fernandes', when: 'Há 6 meses', text: 'Foi ótima experiência. Profissional muito qualificada, experiente, dedicada, com vasto conhecimento na área de advocacia, educada, compreensiva e atenciosa.' },
    { name: 'Vilma Pinto de Andrade Silva', when: 'Há 7 meses', text: 'A minha experiência com a administração da Doutora Nayara é muito positiva. Uma excelente profissional que me dá suporte todas as vezes que preciso. Eu super indico, podem confiar.' },
    { name: 'Nathalia Leonardo', when: 'Há 5 meses · Local Guide', text: 'Dra. Nayara foi super atenciosa, prestativa, muito competente e muito clara em suas condutas. Super recomendado.' }
  ];

  const FAQS = [
    { q: 'Posso entrar com usucapião do meu imóvel?', a: 'Depende. Para analisar a viabilidade é necessário recolher dados sobre a história da posse, analisar a matrícula do imóvel e demais documentos. Após a análise, será possível falar sobre honorários e despesas com cartório e certidões. O serviço de Estudo de Viabilidade é realizado pelo escritório com honestidade — se o caso não for viável, você saberá antes de investir.' },
    { q: 'Meu inventário está parado há anos. Dá para resolver?', a: 'Na maioria dos casos sim. A escolha entre inventário extrajudicial (mais rápido) ou judicial depende de fatores como existência de testamento, herdeiros incapazes e acordo entre as partes. Faço um diagnóstico inicial e apresento um cronograma realista, com os custos envolvidos.' },
    { q: 'Vocês atendem online? Eu moro em outra cidade do RJ.', a: 'Sim. O atendimento virtual está disponível para todo o estado do Rio de Janeiro, com horário estendido até as 22h para quem trabalha durante o dia. Reuniões por vídeo, assinatura digital e acompanhamento processual remoto.' },
    { q: 'Qual a diferença entre divórcio extrajudicial e judicial?', a: 'O extrajudicial é feito em cartório, em uma única escritura, e é possível quando há consenso e não há filhos menores ou incapazes sem questões pendentes. O judicial é necessário quando há filhos menores, litígio sobre partilha ou guarda. Avalio seu caso e indico o caminho mais rápido e econômico possível.' },
    { q: 'Como funcionam os honorários?', a: 'Nenhum honorário é fechado antes da análise inicial do caso. Após a primeira reunião e o estudo de viabilidade, você recebe uma proposta clara — com valor, forma de pagamento e o que está incluso. Sem surpresas ao longo do processo.' },
    { q: 'Vou comprar um imóvel. Vale contratar advogado antes?', a: 'Sempre vale. A análise jurídica antes da assinatura evita dor de cabeça depois: leitura completa da matrícula, verificação de ônus, pendências fiscais, regularidade do vendedor e do imóvel. Custa uma fração do valor do negócio e protege o investimento da sua vida.' }
  ];

  /* ---------- Nav scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Smooth anchor (with offset) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  /* ---------- Render Services ---------- */
  const servicesList = document.getElementById('services-list');
  const VISIBLE_COUNT = 6;

  if (servicesList) SERVICES.forEach((s, i) => {
    const el = document.createElement('article');
    el.className = 'service' + (i >= VISIBLE_COUNT ? ' service--hidden' : '');
    el.innerHTML = `
      <span class="service__num">${s.n}</span>
      <div class="service__body">
        <h3 class="service__name">${s.name}</h3>
        <p class="service__desc">${s.desc}</p>
      </div>
      <span class="service__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </span>
    `;
    servicesList.appendChild(el);
  });

  /* Botão "ver mais / ver menos" */
  const toggleBtn = document.getElementById('services-toggle');
  let expanded = false;
  if (toggleBtn) toggleBtn.addEventListener('click', () => {
    expanded = !expanded;
    servicesList.querySelectorAll('.service--hidden').forEach(el => {
      el.classList.toggle('service--visible', expanded);
    });
    toggleBtn.querySelector('.services-toggle__label').textContent = expanded
      ? 'Ver menos serviços'
      : `Ver mais ${SERVICES.length - VISIBLE_COUNT} serviços`;
    toggleBtn.querySelector('.services-toggle__icon').style.transform = expanded
      ? 'rotate(180deg)'
      : 'rotate(0deg)';

    /* anima os cards recém-revelados */
    if (expanded) {
      servicesList.querySelectorAll('.service--hidden.service--visible').forEach((el, i) => {
        setTimeout(() => {
          if (!el.classList.contains('is-visible')) el.classList.add('is-visible');
        }, i * 80);
      });
    }
  });

  if (servicesList) {
    const serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = [...servicesList.children].indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('is-visible'), idx * 80);
          serviceObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.service:not(.service--hidden)').forEach(s => serviceObserver.observe(s));
  }

  /* ---------- Render Reviews Carousel ---------- */
  const carousel = document.getElementById('reviewsCarousel');
  const dotsEl = document.getElementById('reviewDots');
  if (carousel && dotsEl) REVIEWS.forEach((r, i) => {
    const card = document.createElement('article');
    card.className = 'review-card' + (i === 0 ? ' is-active' : '');
    card.innerHTML = `
      <div class="review-card__quotemark">"</div>
      <p class="review-card__body">${r.text}</p>
      <div class="review-card__meta">
        <span class="review-card__avatar">${r.name.charAt(0)}</span>
        <div class="review-card__who">
          <span class="review-card__name">${r.name}</span>
          <span class="review-card__when">${r.when} · Google</span>
        </div>
        <span class="review-card__stars">★★★★★</span>
      </div>
    `;
    carousel.appendChild(card);

    const dot = document.createElement('button');
    dot.className = 'reviews__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Avaliação ${i + 1}`);
    dot.addEventListener('click', () => goToReview(i));
    dotsEl.appendChild(dot);
  });

  if (carousel && dotsEl) {
    let currentReview = 0;
    let reviewTimer;
    const reviewCards = carousel.querySelectorAll('.review-card');
    const reviewDots = dotsEl.querySelectorAll('.reviews__dot');

    function goToReview(i) {
      currentReview = (i + REVIEWS.length) % REVIEWS.length;
      reviewCards.forEach((c, k) => c.classList.toggle('is-active', k === currentReview));
      reviewDots.forEach((d, k) => d.classList.toggle('is-active', k === currentReview));
      resetTimer();
    }
    function resetTimer() {
      clearInterval(reviewTimer);
      reviewTimer = setInterval(() => goToReview(currentReview + 1), 5000);
    }
    const prevBtn = document.getElementById('reviewPrev');
    const nextBtn = document.getElementById('reviewNext');
    if (prevBtn) prevBtn.addEventListener('click', () => goToReview(currentReview - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToReview(currentReview + 1));
    carousel.addEventListener('mouseenter', () => clearInterval(reviewTimer));
    carousel.addEventListener('mouseleave', resetTimer);
    resetTimer();
  }

  /* ---------- FAQ ---------- */
  const faqList = document.getElementById('faqList');
  if (faqList) {
    FAQS.forEach((f, i) => {
      const item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML = `
        <button class="faq-item__q" aria-expanded="false">
          <span>${f.q}</span>
          <span class="faq-item__icon" aria-hidden="true"></span>
        </button>
        <div class="faq-item__a"><div class="faq-item__a-inner">${f.a}</div></div>
      `;
      faqList.appendChild(item);
    });
    faqList.addEventListener('click', e => {
      const btn = e.target.closest('.faq-item__q');
      if (!btn) return;
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('is-open');
      faqList.querySelectorAll('.faq-item.is-open').forEach(x => x.classList.remove('is-open'));
      if (!wasOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Counters ---------- */
  const countersSection = document.getElementById('counters');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.counter__num').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.querySelector('.counter__num-suffix');
        const duration = 1800;
        const start = performance.now();
        const animate = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = Math.floor(target * eased);
          el.textContent = val;
          if (suffix) el.appendChild(suffix);
          if (t < 1) requestAnimationFrame(animate);
          else {
            el.textContent = target;
            if (suffix) el.appendChild(suffix);
          }
        };
        requestAnimationFrame(animate);
      });
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  if (countersSection) counterObserver.observe(countersSection);

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---------- Parallax on about image (rAF + IO) ---------- */
  const aboutImage = document.querySelector('.about__image');
  if (aboutImage) {
    let ticking = false;
    let inView = false;
    const aboutObs = new IntersectionObserver((entries) => {
      entries.forEach(e => inView = e.isIntersecting);
    }, { threshold: 0 });
    aboutObs.observe(document.querySelector('.about'));

    const updateParallax = () => {
      if (!inView) { ticking = false; return; }
      const rect = aboutImage.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const offset = (center - vh / 2) / vh;
      const y = Math.max(-20, Math.min(20, -offset * 20));
      aboutImage.style.transform = `translateY(${y}px) scale(1.02)`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
    }, { passive: true });
  }

  /* ---------- Form validation ---------- */
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  const validators = {
    name: v => v.trim().split(/\s+/).length >= 2,
    phone: v => /^[\d\s()+\-]{10,}$/.test(v.replace(/\s/g, '')) && v.replace(/\D/g, '').length >= 10,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    subject: v => v.trim().length > 0,
    msg: v => v.trim().length >= 10
  };

  // phone mask
  const phoneInput = document.getElementById('f-phone');
  if (phoneInput) phoneInput.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 10) v = v.replace(/(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    else if (v.length > 6) v = v.replace(/(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5}).*/, '($1) $2');
    else if (v.length > 0) v = v.replace(/(\d{0,2}).*/, '($1');
    e.target.value = v;
  });

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let allValid = true;
      Object.keys(validators).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        const group = input.closest('.form__group');
        const valid = validators[key](input.value);
        group.classList.toggle('is-error', !valid);
        if (!valid) allValid = false;
      });
      if (!allValid) return;
      successMsg.classList.add('is-active');
      form.querySelector('.form__submit').style.display = 'none';
      setTimeout(() => {
        form.reset();
        successMsg.classList.remove('is-active');
        form.querySelector('.form__submit').style.display = '';
      }, 5000);
    });

    // live-clear error on input
    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.form__group').classList.remove('is-error');
      });
    });
  }

  /* ---------- About gallery strip — troca de foto principal ---------- */
  const portraitImg = document.querySelector('.about__portrait-img');
  const stripItems  = document.querySelectorAll('.gallery-strip__item');

  if (portraitImg && stripItems.length) {
    stripItems.forEach(item => {
      item.addEventListener('click', () => {
        const thumbSrc = item.querySelector('img').src;
        const thumbAlt = item.querySelector('img').alt;

        /* destaca o thumb clicado */
        stripItems.forEach(i => i.classList.remove('is-active'));
        item.classList.add('is-active');

        /* fade out → troca src → fade in */
        portraitImg.classList.add('is-switching');
        setTimeout(() => {
          portraitImg.src = thumbSrc;
          portraitImg.alt = thumbAlt;
          portraitImg.classList.remove('is-switching');
        }, 350);
      });
    });
  }

  /* ---------- Video Playlist & Control ---------- */
  const setupVideoPlaylist = (videoId, btnId, playlist = null) => {
    const video = document.getElementById(videoId);
    const btn = document.getElementById(btnId);
    if (!video || !btn) return;

    let playlistIndex = 0;

    const handlePlay = () => {
      btn.style.display = 'none';
      video.controls = true;
      video.play();
    };

    btn.addEventListener('click', handlePlay);
    btn.addEventListener('keydown', e => { 
      if (e.key === 'Enter' || e.key === ' ') { 
        e.preventDefault(); 
        handlePlay(); 
      } 
    });

    if (playlist && playlist.length > 0) {
      video.addEventListener('ended', () => {
        playlistIndex = (playlistIndex + 1) % playlist.length;
        video.src = playlist[playlistIndex];
        video.play();
      });
    }

    video.addEventListener('pause', () => {
      if (!video.ended && !video.seeking) {
        btn.style.display = '';
        video.controls = false;
      }
    });
  };

  setupVideoPlaylist('officeVideo', 'officePlayBtn');
  setupVideoPlaylist('rpvVideo', 'rpvPlayBtn', [
    'https://assets.cdn.filesafe.space/7hzaWcGgawCV1WudlwA7/media/69ec14cb9a82ea51cf82d9b6.mp4',
    'https://assets.cdn.filesafe.space/7hzaWcGgawCV1WudlwA7/media/69ec14cb9fe87a9994c6a009.mp4'
  ]);

  /* ---------- Mobile Drawer ---------- */
  const drawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay');
  const burger = document.querySelector('.nav__burger');
  const drawerClose = document.querySelector('.mobile-drawer__close');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    if (drawerOverlay) drawerOverlay.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (drawerOverlay) drawerOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (drawerOverlay) drawerOverlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if (drawerOverlay) drawerOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
  }

  if (burger) burger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-drawer__links a').forEach(a => {
    a.addEventListener('click', () => closeDrawer());
  });

})();
