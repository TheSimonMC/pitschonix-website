(() => {
  'use strict';

  const config = window.PITSCHONIX_CONFIG || {};
  const tr = (text) => window.PNX_I18N ? window.PNX_I18N.t(text) : text;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const toast = document.querySelector('[data-toast]');
  const toastText = document.querySelector('[data-toast-text]');
  let toastTimer = 0;

  const showToast = (message, mark = '✓') => {
    if (!toast || !toastText) return;
    window.clearTimeout(toastTimer);
    toastText.textContent = message;
    const markNode = toast.querySelector('.toast__mark');
    if (markNode) markNode.textContent = mark;
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
  };

  const fallbackCopy = (value) => {
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    input.remove();
    return result;
  };

  const copyText = async (value) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else if (!fallbackCopy(value)) {
        throw new Error('Clipboard fallback failed');
      }
      showToast(window.PNX_I18N?.language === 'de' ? `${value} wurde in die Zwischenablage kopiert.` : `${value} copied to your clipboard.`);
    } catch (error) {
      showToast(window.PNX_I18N?.language === 'de' ? `Kopieren fehlgeschlagen. Serveradresse: ${value}` : `Copy failed. Server address: ${value}`, '!');
    }
  };

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', () => copyText(button.dataset.copy));
  });

  const closeMenu = () => {
    if (!menuToggle || !navMenu) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      navMenu.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });

    navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')]
    .filter((link) => link.getAttribute('href').length > 1);
  const trackedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && trackedSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, { threshold: [0.2, 0.45, 0.7], rootMargin: '-20% 0px -55% 0px' });

    trackedSections.forEach((section) => sectionObserver.observe(section));
  }

  const setStatus = ({ state, label, detail, players }) => {
    document.querySelectorAll('[data-status-dot]').forEach((dot) => {
      dot.dataset.state = state;
    });
    document.querySelectorAll('[data-status-label]').forEach((node) => {
      node.textContent = tr(label);
    });
    document.querySelectorAll('[data-status-detail]').forEach((node) => {
      node.textContent = tr(detail);
    });
    document.querySelectorAll('[data-player-count]').forEach((node) => {
      node.textContent = players || '— / —';
    });
  };

  const fetchServerStatus = async () => {
    const endpoint = config.liveStatusEndpoint;
    if (!endpoint) {
      setStatus({
        state: 'unknown',
        label: 'Status unavailable',
        detail: 'Use pitschonix.eu to connect.',
        players: '— / —'
      });
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 6500);

    try {
      const response = await fetch(endpoint, {
        signal: controller.signal,
        cache: 'no-store',
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error(`Status request failed: ${response.status}`);
      const data = await response.json();

      if (data && data.online) {
        const online = Number.isFinite(data.players?.online) ? data.players.online : '—';
        const max = Number.isFinite(data.players?.max) ? data.players.max : '—';
        const clientRange = typeof config.supportedClientRange === 'string' && config.supportedClientRange.trim()
          ? config.supportedClientRange.trim()
          : '1.8–26.2';
        const playerText = online === '—'
          ? (window.PNX_I18N?.language === 'de' ? 'Spielerzahl nicht verfügbar' : 'player count unavailable')
          : (window.PNX_I18N?.language === 'de' ? `${online} Spieler online` : `${online} player${online === 1 ? '' : 's'} online`);
        setStatus({
          state: 'online',
          label: 'Server online',
          detail: `Minecraft Java ${clientRange} · ${playerText}`,
          players: `${online} / ${max}`
        });
      } else {
        setStatus({
          state: 'offline',
          label: 'Server offline',
          detail: 'The network may be in development or maintenance.',
          players: '0 / —'
        });
      }
    } catch (error) {
      setStatus({
        state: 'unknown',
        label: 'Status unavailable',
        detail: 'The live status service could not be reached.',
        players: '— / —'
      });
    } finally {
      window.clearTimeout(timeout);
    }
  };

  setStatus({
    state: 'unknown',
    label: 'Checking server',
    detail: 'Live status updates automatically.',
    players: '— / —'
  });
  fetchServerStatus();

  const social = config.social || {};
  document.querySelectorAll('[data-social]').forEach((link) => {
    const platform = link.dataset.social;
    const url = social[platform];
    if (typeof url === 'string' && url.trim()) {
      link.href = url.trim();
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      return;
    }

    link.classList.add('is-pending');
    link.setAttribute('aria-description', 'Official link coming soon');
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const label = platform === 'x' ? 'X' : platform.charAt(0).toUpperCase() + platform.slice(1);
      showToast(window.PNX_I18N?.language === 'de' ? `Der offizielle ${label}-Link wird bald ergänzt.` : `Official ${label} link will be added soon.`, '•');
    });
  });

  const configLinks = {
    panel: config.panelUrl,
    status: config.statusUrl
  };

  document.querySelectorAll('[data-config-link]').forEach((link) => {
    const key = link.dataset.configLink;
    const url = configLinks[key];
    if (typeof url === 'string' && url.trim()) {
      link.href = url.trim();
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      if (image.dataset.fallbackUsed === 'true') return;
      image.dataset.fallbackUsed = 'true';
      image.src = image.dataset.fallback;
    });
  });

  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--ry', `${x * 4.4}deg`);
        card.style.setProperty('--rx', `${y * -4.4}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--ry', '0deg');
        card.style.setProperty('--rx', '0deg');
      });
    });
  }

  const faqItems = [...document.querySelectorAll('.faq-list details')];
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
