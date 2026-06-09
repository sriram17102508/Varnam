/* ===== VARNAM SHARED JS ===== */

/* TOAST */
let _toastTimer;
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* LOADER */
function initLoader() {
  const bar = document.getElementById('loader-fill');
  if (bar) {
    setTimeout(() => { bar.style.width = '100%'; }, 100);
    setTimeout(() => { const l = document.getElementById('loader'); if (l) l.classList.add('done'); }, 1600);
  }
}
window.addEventListener('load', initLoader);

/* SCROLL FADE */
function initScrollFade() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.fade').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    io.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', initScrollFade);

/* MODAL */
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ROLE TABS */
function switchRole(tab, panel) {
  const tabsContainer = tab.parentElement;
  if (tabsContainer) {
    tabsContainer.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
  }
  tab.classList.add('active');
  
  const targetPanel = document.getElementById(panel);
  if (targetPanel) {
    const parent = targetPanel.parentElement;
    if (parent) {
      Array.from(parent.children).forEach(child => {
        if (child.tagName === 'DIV' && child !== tabsContainer && !child.classList.contains('modal-header')) {
          child.style.display = 'none';
        }
      });
    }
    targetPanel.style.display = 'block';
  }
}

/* NAV ACTIVE */
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});

/* FOOTER SUBSCRIBE */
function footerSubscribe() {
  const v = document.getElementById('footer-email');
  if (v && v.value) { toast('✦ Subscribed! Welcome to Varnam.'); v.value = ''; }
  else toast('Please enter your email.');
}

/* AUTHENTICATION STATE SYSTEM */
function loginUser(email, isVendor) {
  localStorage.setItem('varnam_logged_in', 'true');
  localStorage.setItem('varnam_user_email', email || 'sita@example.com');
  localStorage.setItem('varnam_user_name', isVendor ? 'Organizer Partner' : 'Sita and Sriram');
  if (window.toast) {
    toast('🎉 Welcome to Varnam!');
  } else {
    alert('🎉 Welcome to Varnam!');
  }
  checkAuthState();
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1000);
}

function logoutUser(e) {
  if (e) e.preventDefault();
  localStorage.removeItem('varnam_logged_in');
  localStorage.removeItem('varnam_user_email');
  localStorage.removeItem('varnam_user_name');
  if (window.toast) {
    toast('🚪 Logged out successfully.');
  } else {
    alert('🚪 Logged out successfully.');
  }
  if (window.location.pathname.includes('dashboard.html')) {
    window.location.href = 'index.html';
  } else {
    checkAuthState();
  }
}

function checkAuthState() {
  const isLoggedIn = localStorage.getItem('varnam_logged_in') === 'true';
  const navAuth = document.getElementById('nav-auth-section');
  if (!navAuth) return;

  if (isLoggedIn) {
    const userName = localStorage.getItem('varnam_user_name') || 'Sita and Sriram';
    navAuth.innerHTML = `
      <style>
        .notification-dropdown.active .notif-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }
      </style>
      <div style="display:flex; align-items:center; gap:1.25rem;">
        <div class="notification-dropdown" style="position:relative; display:inline-block;">
          <div class="notif-trigger" style="color:var(--text2); font-size:1.1rem; cursor:pointer; position:relative; transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--text2)'" onclick="this.parentElement.classList.toggle('active');">
            🔔
            <span id="notif-badge" style="position:absolute; top:-2px; right:-2px; width:8px; height:8px; background:#C43060; border-radius:50%;"></span>
          </div>
          <div class="notif-menu" style="position:absolute; top:100%; right:-10px; margin-top:0.8rem; background:var(--ink2); border:1px solid var(--border); border-radius:var(--r8); width:300px; opacity:0; visibility:hidden; transform:translateY(10px); transition:all 0.25s cubic-bezier(0.23, 1, 0.32, 1); box-shadow:0 10px 30px rgba(0,0,0,0.5); z-index:600; padding:0;">
            <div style="padding:0.8rem 1rem; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-family:'Outfit',sans-serif; font-weight:600; font-size:0.9rem; color:var(--text);">Notifications</span>
              <span style="font-size:0.7rem; color:var(--gold); cursor:pointer;" onclick="document.getElementById('notif-badge').style.display='none'; this.style.color='var(--text3)'; this.innerText='Read'">✓ Mark all as read</span>
            </div>
            
            <div style="max-height:240px; overflow-y:auto; scrollbar-width:thin;">
              <a href="dashboard.html?tab=notifications" style="display:block; padding:0.8rem 1rem; border-bottom:1px solid var(--border); text-decoration:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(212,168,67,0.05)'" onmouseout="this.style.background='transparent'">
                <div style="font-family:'Outfit',sans-serif; font-size:0.82rem; font-weight:600; color:var(--text); margin-bottom:0.25rem;">💳 Payment Reminder</div>
                <div style="font-size:0.75rem; color:var(--text2); line-height:1.4;">Advance payment for Taj Palace is due tomorrow.</div>
              </a>
              <a href="dashboard.html?tab=notifications" style="display:block; padding:0.8rem 1rem; text-decoration:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(212,168,67,0.05)'" onmouseout="this.style.background='transparent'">
                <div style="font-family:'Outfit',sans-serif; font-size:0.82rem; font-weight:600; color:var(--text); margin-bottom:0.25rem;">💌 New RSVP</div>
                <div style="font-size:0.75rem; color:var(--text2); line-height:1.4;">Rohan and family have confirmed their attendance.</div>
              </a>
            </div>

            <div style="padding:0.5rem; border-top:1px solid var(--border); text-align:center; background:rgba(255,255,255,0.02); border-bottom-left-radius:var(--r8); border-bottom-right-radius:var(--r8);">
              <a href="dashboard.html?tab=notifications" style="font-family:'Outfit',sans-serif; font-size:0.8rem; font-weight:600; color:var(--gold); text-decoration:none; display:block; padding:0.4rem; transition:color 0.2s;" onmouseover="this.style.color='#F0C96A'" onmouseout="this.style.color='var(--gold)'">View All Notifications →</a>
            </div>
          </div>
        </div>

        <div class="profile-dropdown">
          <div class="profile-trigger" style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
            <div class="user-avatar-small" style="width:32px; height:32px; border-radius:50%; background:linear-gradient(135deg,var(--gold),var(--rose)); display:flex; align-items:center; justify-content:center; font-size:0.9rem; color:#fff; font-weight:700;">💍</div>
            <span class="profile-name" style="font-size:0.85rem; font-weight:600; color:var(--text); max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${userName}</span>
            <span class="dropdown-arrow" style="font-size:0.6rem; color:var(--text3); transition:transform 0.2s;">▼</span>
          </div>
          <div class="profile-menu">
            <a href="dashboard.html" class="profile-menu-item">📊 Dashboard</a>
            <a href="dashboard.html?tab=settings" class="profile-menu-item">⚙️ Settings</a>
            <div class="profile-menu-divider"></div>
            <a href="#" onclick="logoutUser(event)" class="profile-menu-item logout">🚪 Log Out</a>
          </div>
        </div>
      </div>
    `;
  } else {
    navAuth.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('login-modal')">Sign In</button>
      <button class="btn btn-gold" onclick="openModal('signup-modal')">Get Started</button>
    `;
  }
}

document.addEventListener('DOMContentLoaded', checkAuthState);

function beginJourney(e) {
  if (e) e.preventDefault();
  localStorage.setItem('varnam_logged_in', 'true');
  localStorage.setItem('varnam_setup_complete', 'false');
  // Clear previous wedding planning details to force a fresh setup
  localStorage.removeItem('varnam_user_name');
  localStorage.removeItem('varnam_user_email');
  localStorage.removeItem('varnam_wedding_date');
  localStorage.removeItem('varnam_wedding_city');
  localStorage.removeItem('varnam_phone_bride');
  localStorage.removeItem('varnam_phone_groom');
  localStorage.removeItem('varnam_budget_total');
  localStorage.removeItem('varnam_expenses');
  localStorage.removeItem('varnam_guests');
  localStorage.removeItem('varnam_timeline');
  window.location.href = 'dashboard.html?setup=1';
}


/* ── UNIVERSAL SEARCH BAR IN HEADER ── */
document.addEventListener('DOMContentLoaded', () => {
  const navInner = document.querySelector('nav .inner');
  if (!navInner) return;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .nav-search-container {
      position: relative;
      margin: 0 1.5rem;
      flex: 1;
      max-width: 320px;
    }
    #universal-search:focus {
      background: rgba(255,255,255,0.1) !important;
      border-color: rgba(229,193,88,0.5) !important;
      box-shadow: 0 0 12px rgba(229,193,88,0.2);
    }
    @media(max-width: 768px) {
      .nav-search-container {
        margin: 0 0.5rem;
        max-width: 200px;
      }
    }
    @media(max-width: 480px) {
      .nav-search-container {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Create search element
  const searchContainer = document.createElement('div');
  searchContainer.className = 'nav-search-container';
  searchContainer.innerHTML = `
    <input type="text" id="universal-search" placeholder="Search VaranAI, venues, themes..." style="
      width: 100%;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      padding: 0.45rem 1rem 0.45rem 2.2rem;
      color: var(--text, #F0EAE2);
      font-family: inherit;
      font-size: 0.8rem;
      outline: none;
      transition: all 0.3s;
    " />
    <span style="position: absolute; left: 0.8rem; top: 50%; transform: translateY(-50%); color: var(--text3, #6A5A50); font-size: 0.8rem; pointer-events: none;">🔍</span>
    <div id="search-suggestions" style="
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 0.5rem;
      background: var(--ink2, #0f0b10);
      border: 1px solid rgba(229,193,88,0.25);
      border-radius: var(--r8, 8px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      z-index: 9999;
      display: none;
      max-height: 280px;
      overflow-y: auto;
      padding: 0.5rem 0;
    "></div>
  `;

  // Insert search container before nav-links
  const navLinks = navInner.querySelector('.nav-links');
  const navLogo = navInner.querySelector('.nav-logo');
  if (navLinks) {
    navInner.insertBefore(searchContainer, navLinks);
  } else if (navLogo) {
    navInner.insertBefore(searchContainer, navLogo.nextSibling);
  } else {
    navInner.appendChild(searchContainer);
  }

  const input = document.getElementById('universal-search');
  const suggestions = document.getElementById('search-suggestions');

  function showSuggestions() {
    const val = input.value.trim().toLowerCase();
    if (!val) {
      suggestions.style.display = 'none';
      return;
    }
    let items = [];
      // Search venues
      if (window.VARNAM_KB && window.VARNAM_KB.venues) {
        window.VARNAM_KB.venues.topVenues.forEach(v => {
          if (v.name.toLowerCase().includes(val) || v.city.toLowerCase().includes(val) || v.type.toLowerCase().includes(val)) {
            items.push({ title: `🏰 ${v.name} (${v.city})`, link: "venues.html", type: "Venue" });
          }
        });
      }

      // Search vendors
      if (window.VARNAM_KB && window.VARNAM_KB.vendors) {
        window.VARNAM_KB.vendors.featured.forEach(v => {
          if (v.name.toLowerCase().includes(val) || v.type.toLowerCase().includes(val) || v.city.toLowerCase().includes(val)) {
            items.push({ title: `🎯 ${v.name} (${v.type})`, link: "vendors.html", type: "Vendor" });
          }
        });
      }

      // Search themes
      if (window.VARNAM_KB && window.VARNAM_KB.themes) {
        window.VARNAM_KB.themes.list.forEach(t => {
          if (t.name.toLowerCase().includes(val) || t.vibe.toLowerCase().includes(val)) {
            items.push({ title: `🎨 ${t.name}`, link: "themes.html", type: "Theme" });
          }
        });
      }

      // Search features & pages
      const pages = [
        { name: "VaranAI Assistant Support", link: "#", keywords: ["chat", "ai", "bot", "assistant", "varanai", "help"], type: "Chatbot", click: () => { toggleChat(); } },
        { name: "Dashboard & Guest Manager", link: "dashboard.html", keywords: ["dashboard", "guest", "rsvp", "checklist", "timeline"], type: "Page" },
        { name: "Budget Planning & Expenses", link: "dashboard.html?tab=budget", keywords: ["budget", "tracker", "cost", "payment", "expense"], type: "Page" },
        { name: "Vendor Registration Portal", link: "dashboard.html?tab=vendors", keywords: ["register", "signup", "join", "vendor", "business"], type: "Page" },
        { name: "Venues Marketplace", link: "venues.html", keywords: ["venue", "palace", "resort", "hotel", "location"], type: "Page" },
        { name: "Vendors Marketplace", link: "vendors.html", keywords: ["vendor", "photographer", "makeup", "decor", "caterer"], type: "Page" }
      ];

      pages.forEach(p => {
        if (p.name.toLowerCase().includes(val) || p.keywords.some(k => k.includes(val))) {
          items.push(p);
        }
      });

    if (items.length === 0) {
      suggestions.innerHTML = `
        <div style="padding: 0.6rem 0.9rem; font-size: 0.8rem; color: var(--text3, #6A5A50);">
          No results found for "${input.value}"
        </div>
      `;
    } else {
      suggestions.innerHTML = `
        <div style="padding: 0.35rem 0.9rem; font-size: 0.65rem; color: var(--text3, #6A5A50); font-family: monospace; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.03);">
          Search Results
        </div>
        ${items.slice(0, 7).map((item, idx) => `
          <a href="${item.link}" id="search-item-${idx}" style="
            display: block;
            padding: 0.6rem 0.9rem;
            font-size: 0.8rem;
            color: var(--text, #F0EAE2);
            text-decoration: none;
            transition: all 0.2s;
            border-bottom: 1px solid rgba(255,255,255,0.02);
            display: flex;
            justify-content: space-between;
            align-items: center;
          " onmouseover="this.style.background='rgba(229,193,88,0.08)'" onmouseout="this.style.background='transparent'">
            <span>${item.title || item.name}</span>
            <span style="font-size: 0.6rem; background: rgba(229,193,88,0.12); color: #E5C158; padding: 0.15rem 0.4rem; border-radius: 4px; font-family: monospace;">${item.type}</span>
          </a>
        `).join('')}
      `;

      // Attach clicks to special features (like opening chatbot)
      items.slice(0, 7).forEach((item, idx) => {
        if (item.click) {
          const el = document.getElementById(`search-item-${idx}`);
          if (el) {
            el.addEventListener('click', (e) => {
              e.preventDefault();
              item.click();
              suggestions.style.display = 'none';
              input.value = '';
            });
          }
        }
      });
    }
    suggestions.style.display = 'block';
  }

  input.addEventListener('focus', showSuggestions);
  input.addEventListener('input', showSuggestions);

  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
      suggestions.style.display = 'none';
    }
  });

  // Dynamic font overrides for prices and stats
  function applyOutfitFont() {
    document.querySelectorAll('.theme-stat-num, .stat-num, .vc-stat-val, .ms-val, .pkg-price, .vd-price, .capacity-val, .price-font, .outfit-font').forEach(el => {
      el.style.setProperty('font-family', "'Outfit', sans-serif", 'important');
    });
    
    // Scan all div, span, p, td, th for inline styled Cormorant Garamond / serif that contain numbers or ₹
    document.querySelectorAll('div, span, p, td, th').forEach(el => {
      if (el.style.fontFamily && (el.style.fontFamily.includes('Cormorant Garamond') || el.style.fontFamily.includes('serif'))) {
        if (el.textContent.includes('₹') || /\d+/.test(el.textContent)) {
          el.style.setProperty('font-family', "'Outfit', sans-serif", 'important');
        }
      }
    });
  }
  applyOutfitFont();
  setTimeout(applyOutfitFont, 300);
  setTimeout(applyOutfitFont, 800);
});


