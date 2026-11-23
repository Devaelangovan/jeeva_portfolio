/**
 * JEEVAN V — Creative Director Portfolio Website
 * High-performance, accessible, vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Header Scroll & Active Section Highlighting ---
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy for Nav links
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // --- 2. Mobile Menu Toggle ---
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. Live Broadcast SMPTE Timecode Clock (24 FPS) ---
  const studioClockDigits = document.querySelectorAll('.clock-digits, .live-timecode-display');
  let frame = 18;
  let seconds = 39;
  let minutes = 24;
  let hours = 1;

  setInterval(() => {
    frame++;
    if (frame >= 24) {
      frame = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours = (hours + 1) % 24;
        }
      }
    }
    const pad = num => String(num).padStart(2, '0');
    const timecodeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frame)}`;

    studioClockDigits.forEach(el => {
      if (el) el.textContent = timecodeStr;
    });
  }, 1000 / 24);

  // --- 4. Interactive Project Filter Tabs ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 5. Project Deep Dive Modal Dialog ---
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalRole = document.getElementById('modal-role');
  const modalBody = document.getElementById('modal-body');
  const modalVisual = document.getElementById('modal-visual');
  const viewDetailBtns = document.querySelectorAll('.view-project-details-btn');

  const projectDetailsDatabase = {
    'tamizha': {
      title: 'Tamizha Tamizha & Samayal Express',
      role: 'Production & Content Development | Zee Tamil Broadcast',
      image: 'assets/media/tamizha/tamizha-set-main.jpg',
      tag: 'AUTHENTIC STUDIO SET PHOTOGRAPHY',
      description: `Contributed to the production and content development of two flagship shows: Tamizha Tamizha and Samayal Express. Assisted in scriptwriting, research, and pre-production activities for both programs. Coordinated with the creative team to ensure smooth execution of episodes. Played a key role in enhancing show quality through innovative content ideas.`,
      deliverables: [
        'Pre-Production Content Planning: Topic research, speaker background profiling, and debate rundown structures.',
        'Script Supervision: Segment scripting, host cues, dialogue hooks, and episode pacing.',
        'Production Coordination: Cross-department alignment between technical directors, camera operators, and talent.',
        'Show Quality Optimization: Innovative concept staging for audience engagement and multi-camera culinary cues.'
      ],
      tools: ['Zee Tamil Studio Arenas', 'Content Rundown Matrices', 'Scripting Suites', 'Multi-Cam Lighting Grids']
    },
    'biggboss': {
      title: 'Bigg Boss (Season 9)',
      role: 'Story Editor & Control Room Operator | Star Vijay',
      image: 'assets/media/biggboss/bigg-boss-pcr-desk.jpg',
      tag: 'AUTHENTIC PCR VIDEO ARCHIVE // PRODUCTION CONTROL ROOM',
      description: `Experienced Story Editor for large-scale reality television formats, with hands-on responsibility for monitoring and controlling live house activities from the control room panel. Expert in real-time decision-making, storyline development, and stream segmentation to ensure strong narrative flow. Skilled in dividing live feeds, marking precise timecodes, trimming raw footage, and creating tough cuts for final content lock. Proven ability to collaborate with creative directors, editors, and production teams to deliver engaging, broadcast-ready episodes under tight timelines.`,
      deliverables: [
        'Live House Monitoring: 24/7 observation of contestant interactions across multi-camera control room panels.',
        'Real-time Storyline Development: Identifying conflict arcs, emotional peaks, and narrative threads as they happen.',
        'Stream Segmentation & Timecoding: Precision timecode logging, feed splitting, and raw footage trimming.',
        'Tough Cuts for Final Content Lock: Building high-tension episode cuts and collaborating with editors to meet broadcast deadlines.'
      ],
      tools: ['Production Control Room (PCR) Panels', 'Video Stream Switchers', 'SMPTE Timecode Loggers', 'DaVinci Resolve / Premiere Pro']
    },
    'baghayam': {
      title: 'Baghayam TV',
      role: 'Field Coordinator (Current) | Baghayam Broadcast',
      image: 'assets/media/logos/bhagyam-tv-logo.png',
      tag: 'FIELD BROADCAST COORDINATION // LIVE OB UNIT',
      description: `Currently working at Baghayam TV as a Field Coordinator, managing temple-based television shoots and field operations. Responsible for coordinating shooting schedules, arranging permissions, handling on-site logistics, and ensuring smooth execution of productions. Experienced in working with production teams, camera crews, and local authorities to facilitate successful shoots. Skilled in field management, team coordination, and problem-solving.`,
      deliverables: [
        'On-Ground Field Management: Overseeing outdoor broadcasts, temple schedule coordination, and mobile crew deployments.',
        'Permits & Local Authorities: Securing official site permissions and community compliance for smooth shooting.',
        'Logistics & Technical Synchronization: Managing gear transport, outdoor power systems, wireless feeds, and camera crews.',
        'Real-time Problem Solving: Resolving environmental, weather, and scheduling hurdles under live field conditions.'
      ],
      tools: ['Location Call Sheets', 'Field Video Transmitters', 'OB Unit Scheduling', 'Live Crew Logistics']
    }
  };

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectDetailsDatabase[projKey];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalRole.textContent = data.role;
      modalVisual.src = data.image;
      modalVisual.alt = data.title;

      let htmlContent = `
        <p class="modal-main-desc" style="font-size: 1.05rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 1.5rem;">${data.description}</p>
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          <h4 style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent-blue); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem;">Core Execution &amp; Responsibilities:</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${data.deliverables.map(item => `
              <li style="display: flex; gap: 0.75rem; font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">
                <span style="color: var(--accent-blue); font-weight: bold;">•</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Directorial Environments:</span>
          ${data.tools.map(tool => `<span class="tag-item" style="color: var(--accent-blue);">${tool}</span>`).join('')}
        </div>
      `;

      modalBody.innerHTML = htmlContent;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // --- 6. Studio Photo Strip Switcher ---
  const setThumbs = document.querySelectorAll('.set-thumb');
  const mainPreview = document.getElementById('tamizha-main-preview');

  setThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      setThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const src = thumb.getAttribute('data-src');
      const title = thumb.getAttribute('data-title');
      const sub = thumb.getAttribute('data-sub');

      if (mainPreview) {
        mainPreview.style.opacity = '0.4';
        setTimeout(() => {
          mainPreview.src = src;
          mainPreview.setAttribute('data-src', src);
          mainPreview.setAttribute('data-title', title);
          mainPreview.setAttribute('data-sub', sub);
          mainPreview.style.opacity = '1';
        }, 120);
      }
    });
  });

  // --- 7. Live PCR Console Video Player ---
  const pcrVideo = document.getElementById('pcr-featured-video');
  const pcrPlayToggle = document.getElementById('pcr-play-toggle');
  const pcrMuteToggle = document.getElementById('pcr-mute-toggle');
  const pcrActiveLabel = document.getElementById('pcr-active-label');
  const pcrFeedPills = document.querySelectorAll('.pcr-feed-pill');

  if (pcrVideo && pcrPlayToggle) {
    pcrPlayToggle.addEventListener('click', () => {
      if (pcrVideo.paused) {
        pcrVideo.play().then(() => {
          pcrPlayToggle.querySelector('.pcr-btn-text').textContent = 'Pause Feed';
          pcrPlayToggle.querySelector('svg').innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
        }).catch(err => console.log('Playback error:', err));
      } else {
        pcrVideo.pause();
        pcrPlayToggle.querySelector('.pcr-btn-text').textContent = 'Play Feed';
        pcrPlayToggle.querySelector('svg').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      }
    });

    if (pcrMuteToggle) {
      pcrMuteToggle.addEventListener('click', () => {
        pcrVideo.muted = !pcrVideo.muted;
        pcrMuteToggle.querySelector('.pcr-mute-text').textContent = pcrVideo.muted ? 'Unmute' : 'Mute';
      });
    }

    pcrFeedPills.forEach(pill => {
      pill.addEventListener('click', () => {
        pcrFeedPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const videoSrc = pill.getAttribute('data-video');
        const videoTitle = pill.getAttribute('data-title');

        if (pcrActiveLabel) pcrActiveLabel.textContent = videoTitle.toUpperCase();

        pcrVideo.pause();
        pcrVideo.src = videoSrc;
        pcrVideo.load();
        pcrVideo.play().then(() => {
          pcrPlayToggle.querySelector('.pcr-btn-text').textContent = 'Pause Feed';
          pcrPlayToggle.querySelector('svg').innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
        }).catch(() => {
          pcrPlayToggle.querySelector('.pcr-btn-text').textContent = 'Play Feed';
          pcrPlayToggle.querySelector('svg').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
        });
      });
    });
  }

  // --- 8. Media Vault Category Filter Tabs ---
  const vaultFilterBtns = document.querySelectorAll('button[data-vault-filter]');
  const vaultCards = document.querySelectorAll('.vault-card');

  vaultFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vaultFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCat = btn.getAttribute('data-vault-filter');

      vaultCards.forEach(card => {
        const cat = card.getAttribute('data-vault-cat');
        if (filterCat === 'all' || cat === filterCat) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 9. Media Lightbox Dialog (HD Image & Video Viewer) ---
  const lightboxOverlay = document.getElementById('media-lightbox');
  const lightboxContainer = document.getElementById('lightbox-media-container');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxSub = document.getElementById('lightbox-sub');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const openLightboxBtns = document.querySelectorAll('.open-lightbox-btn');

  function openLightbox(type, src, title, sub) {
    if (!lightboxOverlay || !lightboxContainer) return;

    lightboxContainer.innerHTML = '';
    if (type === 'video') {
      const vid = document.createElement('video');
      vid.src = src;
      vid.controls = true;
      vid.autoplay = true;
      vid.playsInline = true;
      vid.style.maxWidth = '100%';
      vid.style.maxHeight = '62vh';
      vid.style.backgroundColor = '#000';
      lightboxContainer.appendChild(vid);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = title || 'Authentic Production Asset';
      img.style.maxWidth = '100%';
      img.style.maxHeight = '62vh';
      img.style.objectFit = 'contain';
      lightboxContainer.appendChild(img);
    }

    if (lightboxTitle) lightboxTitle.textContent = title || 'Broadcast Production Asset';
    if (lightboxSub) lightboxSub.textContent = sub || 'Authentic Television Footage / Photography';

    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (lightboxContainer) {
      const vid = lightboxContainer.querySelector('video');
      if (vid) {
        vid.pause();
        vid.src = '';
      }
      setTimeout(() => {
        lightboxContainer.innerHTML = '';
      }, 300);
    }
  }

  openLightboxBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const type = btn.getAttribute('data-type');
      const src = btn.getAttribute('data-src');
      const title = btn.getAttribute('data-title');
      const sub = btn.getAttribute('data-sub');
      openLightbox(type, src, title, sub);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', e => {
      if (e.target === lightboxOverlay) closeLightbox();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeModal();
    }
  });

  // --- 10. Clipboard Copy with Toast Feedback ---
  const copyButtons = document.querySelectorAll('.copy-action-btn');
  const toast = document.getElementById('toast-notice');
  const toastMessage = document.getElementById('toast-message');

  function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          fallbackCopyText(textToCopy);
        });
      } else {
        fallbackCopyText(textToCopy);
      }
    });
  });

  function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied to clipboard: ${text}`);
    } catch (err) {
      showToast(`Copy failed. Please manually select text.`);
    }
    document.body.removeChild(textarea);
  }

  // --- 7. Interactive Contact Form ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.textContent = 'Please fill out all required fields.';
          formStatus.style.color = '#EF4444';
        }
        return;
      }

      if (formStatus) {
        formStatus.textContent = 'Preparing email dispatch...';
        formStatus.style.color = 'var(--accent-blue)';
      }

      // Generate mailto link as direct action
      const mailtoUrl = `mailto:jeevaustin94@gmail.com?subject=${encodeURIComponent(subject || 'Creative Collaboration Inquiry - ' + name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

      setTimeout(() => {
        if (formStatus) {
          formStatus.textContent = 'Opening your email client... Thank you!';
          formStatus.style.color = '#10B981';
        }
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 700);
    });
  }

  // --- 8. Back to Top Smooth Scroll ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
