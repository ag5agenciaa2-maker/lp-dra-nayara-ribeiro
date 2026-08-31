// ============ NR ADVOCACIA PREVIDENCIÁRIA · script.js ============

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---------- Nav scroll state ----------
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ---------- Mobile drawer ----------
  const burgerBtn = document.getElementById('burgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    drawer?.classList.add('is-open');
    drawerOverlay?.classList.add('is-open');
    drawer?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer?.classList.remove('is-open');
    drawerOverlay?.classList.remove('is-open');
    drawer?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  burgerBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerOverlay?.addEventListener('click', closeDrawer);
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  // ---------- FAQ accordion ----------
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-item__q');
    const a = item.querySelector('.faq-item__a');
    q?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-item__a').style.maxHeight = null;
        }
      });
      item.classList.toggle('is-open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });

  // ---------- WhatsApp bubble (padrão nicho jurídico rigoroso: sem badge) ----------
  const waFloat = document.getElementById('whatsappFloat');
  const waMessage = document.getElementById('whatsapp-message');
  const waClose = document.querySelector('.close-whatsapp-bubble');

  // Botão flutuante aparece imediato
  if (waFloat) {
    setTimeout(() => waFloat.classList.add('is-visible'), 300);
  }

  let bubbleAutoHideTimer = null;
  let bubbleDismissed = false;

  function showBubble() {
    if (bubbleDismissed || !waMessage) return;
    waMessage.classList.add('is-visible');
    bubbleAutoHideTimer = setTimeout(hideBubble, 15000);
  }
  function hideBubble() {
    waMessage?.classList.remove('is-visible');
    clearTimeout(bubbleAutoHideTimer);
  }

  // Balão aparece 25s depois do carregamento (comportamento rigoroso, sem badge de notificação)
  setTimeout(showBubble, 25000);

  waClose?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    bubbleDismissed = true;
    hideBubble();
  });

});
