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
  document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.role-panel').forEach(p => p.style.display = 'none');
  const p = document.getElementById(panel);
  if (p) p.style.display = 'block';
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
      <div style="display:flex; align-items:center; gap:1.25rem;">
        <a href="dashboard.html?tab=notifications" style="color:var(--text2); font-size:1.1rem; text-decoration:none; position:relative; transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--text2)'" title="Notifications">
          🔔
          <span style="position:absolute; top:-2px; right:-2px; width:8px; height:8px; background:#C43060; border-radius:50%;"></span>
        </a>
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


