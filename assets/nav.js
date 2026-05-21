/**
 * 909 IT Solutions — Shared Navigation & Footer
 * Include this script in every page. It auto-injects the nav and footer.
 * Uses data-page attribute on <body> to highlight active nav link.
 */

(function () {
  /* ─── Resolve root path based on depth ─── */
  const depth = (document.body.dataset.depth || '0') | 0;
  const root  = depth === 0 ? './' : '../'.repeat(depth);

  /* ─── Nav HTML ─── */
  const nav = `
<nav id="site-nav">
  <div class="container">
    <div class="nav-inner">
      <a href="${root}index.html" class="nav-logo">909<span>IT</span></a>

      <ul class="nav-links">

        <li class="nav-item">
          <a href="${root}index.html" class="nav-link">Home</a>
        </li>

        <li class="nav-item">
          <a href="${root}about-us.html" class="nav-link">About Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" tabindex="0">
            Services
            <svg class="nav-caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="nav-dropdown">
            <div class="dropdown-grid">

              <div class="dropdown-col">
                <h6>Managed IT</h6>
                <ul>
                  <li><a href="${root}managed-it-services.html">Managed IT Services</a></li>
                  <li><a href="${root}small-business-it-support.html">Small Business IT Support</a></li>
                  <li><a href="${root}network-solutions.html">Network Solutions</a></li>
                </ul>
              </div>

              <div class="dropdown-col">
                <h6>Microsoft Azure / AWS</h6>
                <ul>
                  <li><a href="${root}microsoft-azure-aws/microsoft-azure-consultants.html">Microsoft Azure Consultants</a></li>
                  <li><a href="${root}microsoft-azure-aws/azure-cloud-infrastructure.html">Azure Cloud Infrastructure</a></li>
                  <li><a href="${root}microsoft-azure-aws/aws-cloud-infrastructure.html">AWS Cloud Infrastructure</a></li>
                  <li><a href="${root}microsoft-azure-aws/azure-site-recovery.html">Azure Site Recovery</a></li>
                  <li><a href="${root}microsoft-azure-aws/aws-consultants.html">AWS Consultants</a></li>
                  <li><a href="${root}microsoft-azure-aws/microsoft-sentinel.html">Microsoft Sentinel</a></li>
                </ul>
              </div>

              <div class="dropdown-col">
                <h6>DevOps</h6>
                <ul>
                  <li><a href="${root}devops/devops-consultants.html">DevOps Consultants</a></li>
                  <li><a href="${root}devops/azure-devops.html">Azure DevOps</a></li>
                  <li><a href="${root}devops/aws-devops.html">AWS DevOps</a></li>
                </ul>
                <h6 style="margin-top:16px;">D365 &amp; Power Platform</h6>
                <ul>
                  <li><a href="${root}d365-power-platform/dynamics-365.html">Dynamics 365</a></li>
                  <li><a href="${root}d365-power-platform/power-apps.html">Power Apps</a></li>
                  <li><a href="${root}d365-power-platform/power-automate.html">Power Automate</a></li>
                  <li><a href="${root}d365-power-platform/power-bi.html">Power BI</a></li>
                  <li><a href="${root}d365-power-platform/power-virtual-agent.html">Power Virtual Agent</a></li>
                </ul>
              </div>

              <div class="dropdown-col">
                <h6>Infrastructure &amp; Hybrid</h6>
                <ul>
                  <li><a href="${root}infrastructure-hybrid/azure-hybrid-cloud.html">Azure Hybrid Cloud</a></li>
                  <li><a href="${root}infrastructure-hybrid/fortinet-secure-sd-wan.html">Fortinet Secure SD-WAN</a></li>
                  <li><a href="${root}infrastructure-hybrid/sd-wan-solutions.html">SD-WAN Solutions</a></li>
                </ul>
                <h6 style="margin-top:16px;">Professional Services</h6>
                <ul>
                  <li><a href="${root}professional-services/it-consulting.html">IT Consulting</a></li>
                  <li><a href="${root}professional-services/cio-as-a-service.html">CIO-as-a-Service</a></li>
                  <li><a href="${root}professional-services/strategy-consulting-road-mapping.html">Strategy &amp; Road Mapping</a></li>
                  <li><a href="${root}professional-services/project-services.html">Project Services</a></li>
                </ul>
                <h6 style="margin-top:16px;">Modern Workplace</h6>
                <ul>
                  <li><a href="${root}modern-workplace/microsoft-365-business.html">Microsoft 365 Business</a></li>
                  <li><a href="${root}modern-workplace/microsoft-365-consultants.html">Microsoft 365 Consultants</a></li>
                  <li><a href="${root}modern-workplace/microsoft-intune.html">Microsoft Intune</a></li>
                  <li><a href="${root}modern-workplace/microsoft-teams.html">Microsoft Teams</a></li>
                  <li><a href="${root}modern-workplace/microsoft-teams-calling.html">Teams Calling</a></li>
                  <li><a href="${root}modern-workplace/modern-workplace-solutions.html">Modern Workplace Solutions</a></li>
                </ul>
                <h6 style="margin-top:16px;">Medical IT</h6>
                <ul>
                  <li><a href="${root}medical-it-support/index.html">Medical IT Support</a></li>
                  <li><a href="${root}medical-it-support/healthcare-it-support-services.html">Healthcare IT Support</a></li>
                  <li><a href="${root}medical-it-support/private-practice-it-setup.html">Private Practice IT Setup</a></li>
                </ul>
              </div>

            </div>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" tabindex="0">
            Cyber Security
            <svg class="nav-caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="nav-dropdown nav-dropdown-sm">
            <ul>
              <li><a href="${root}cyber-security/index.html">Cyber Security Overview</a></li>
              <li><a href="${root}cyber-security/cloud-security.html">Cloud Security</a></li>
              <li><a href="${root}cyber-security/network-security.html">Network Security</a></li>
              <li><a href="${root}cyber-security/endpoint-security.html">Endpoint Security</a></li>
              <li><a href="${root}cyber-security/it-cyber-security-risk-assessment.html">IT Cyber Security &amp; Risk Assessment</a></li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a href="${root}quickrpa.html" class="nav-link">QuickRPA</a>
        </li>

        <li class="nav-item">
          <a href="${root}blog.html" class="nav-link">Blog</a>
        </li>

        <li class="nav-item">
          <a href="${root}contact-us.html" class="nav-link">Contact Us</a>
        </li>

      </ul>

      <div class="nav-actions">
        <a href="tel:0291457230" class="nav-phone">02 9145 7230</a>
        <a href="${root}contact-us.html" class="btn btn-primary">Get in Touch</a>
      </div>
    </div>
  </div>
</nav>`;

  /* ─── Footer HTML ─── */
  const footer = `
<footer id="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${root}index.html" class="footer-logo">909<span>IT</span></a>
        <p>Certified Microsoft, AI Automation and Fortinet specialists — helping Australian businesses simplify IT complexity and build for the future.</p>
        <div class="footer-contact">
          <a href="tel:0291457230">02 9145 7230</a>
          <a href="mailto:hello@909it.com.au">hello@909it.com.au</a>
          <a>Unit 2 GF 5-7 Parkes St, Parramatta NSW 2150</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="${root}managed-it-services.html">Managed IT Services</a></li>
          <li><a href="${root}modern-workplace/microsoft-365-business.html">Microsoft 365</a></li>
          <li><a href="${root}microsoft-azure-aws/azure-cloud-infrastructure.html">Azure Cloud</a></li>
          <li><a href="${root}d365-power-platform/power-automate.html">AI Automation</a></li>
          <li><a href="${root}cyber-security/index.html">Cyber Security</a></li>
          <li><a href="${root}medical-it-support/index.html">Medical IT</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Specialisations</h5>
        <ul>
          <li><a href="${root}modern-workplace/microsoft-365-business.html">Microsoft Stack</a></li>
          <li><a href="${root}infrastructure-hybrid/fortinet-secure-sd-wan.html">FortiGate Firewall</a></li>
          <li><a href="${root}quickrpa.html">AI &amp; RPA</a></li>
          <li><a href="${root}d365-power-platform/dynamics-365.html">Dynamics 365</a></li>
          <li><a href="${root}devops/azure-devops.html">Azure DevOps</a></li>
          <li><a href="${root}professional-services/cio-as-a-service.html">CIO-as-a-Service</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="${root}about-us.html">About Us</a></li>
          <li><a href="${root}blog.html">Blog</a></li>
          <li><a href="${root}contact-us.html">Contact Us</a></li>
          <li><a href="${root}quickrpa.html">QuickRPA</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} 909 IT Solutions Pty Ltd. All rights reserved.</p>
      <div class="footer-badges">
        <span class="footer-badge">Microsoft Partner</span>
        <span class="footer-badge">Fortinet Partner</span>
        <span class="footer-badge">Sydney &amp; Canberra</span>
      </div>
    </div>
  </div>
</footer>`;

  /* ─── Inject ─── */
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  /* ─── Scroll reveal ─── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

})();

#!/usr/bin/env node
/**
 * Generates all 909 IT Solutions inner pages
 * Run: node build-pages.js
 */

const fs = require('fs');
const path = require('path');

const BASE = __dirname;

/* ─── PAGE TEMPLATE ─── */
function page({ file, depth = 1, title, metaDesc, eyebrow, h1, heroDesc, breadcrumbs, features, aside, cards, extra = '' }) {
  const root = depth === 0 ? './' : '../'.repeat(depth);
  const bc = breadcrumbs.map((b, i) =>
    i < breadcrumbs.length - 1
      ? `<a href="${b.href}">${b.label}</a><span class="breadcrumb-sep">›</span>`
      : `<span>${b.label}</span>`
  ).join('');

  const featuresHTML = features.map(f => `
    <div class="feature-item reveal">
      <div class="feature-icon">${f.icon}</div>
      <div>
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    </div>`).join('');

  const asideHTML = aside ? `
    <div class="aside-panel">
      <h4>${aside.title}</h4>
      <ul class="aside-list">
        ${aside.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
      <a href="${root}contact-us.html" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:24px;">Get a Free Consultation →</a>
    </div>` : '';

  const cardsHTML = cards ? `
    <section class="section" style="background:var(--bg-2);">
      <div class="container">
        <div class="section-header reveal">
          <p class="label">Related Services</p>
          <h2>${cards.title}</h2>
        </div>
        <div class="cards-grid">
          ${cards.items.map(c => `
          <a href="${root}${c.href}" class="card reveal">
            <div class="card-icon">${c.icon}</div>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
            <span class="card-link">Learn more <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </a>`).join('')}
        </div>
      </div>
    </section>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — 909 IT Solutions</title>
<meta name="description" content="${metaDesc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${root}assets/style.css">
</head>
<body data-depth="${depth}">

<!-- ─── HERO ─── -->
<section class="page-hero">
  <div class="container">
    <p class="page-hero-eyebrow">${eyebrow}</p>
    <h1>${h1}</h1>
    <p>${heroDesc}</p>
    <div class="page-hero-actions">
      <a href="${root}contact-us.html" class="btn btn-primary">Free Consultation →</a>
      <a href="tel:0291457230" class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,0.35);">02 9145 7230</a>
    </div>
  </div>
</section>

<!-- ─── BREADCRUMB ─── -->
<div class="breadcrumb">
  <div class="container">
    <div class="breadcrumb-inner">
      <a href="${root}index.html">Home</a>
      <span class="breadcrumb-sep">›</span>
      ${bc}
    </div>
  </div>
</div>

<!-- ─── MAIN CONTENT ─── -->
<section class="section">
  <div class="container">
    <div class="two-col two-col-center">
      <div>
        <div class="feature-list">
          ${featuresHTML}
        </div>
      </div>
      <div>${asideHTML}</div>
    </div>
  </div>
</section>

${cardsHTML}
${extra}

<!-- ─── STATS ─── -->
<div class="stats-strip">
  <div class="container">
    <div class="stats-row">
      <div class="stat-block"><div class="stat-num">99.9%</div><div class="stat-desc">Uptime SLA</div></div>
      <div class="stat-block" style="text-align:center;"><div class="stat-num">&lt;2hr</div><div class="stat-desc">P1 Response</div></div>
      <div class="stat-block" style="text-align:center;"><div class="stat-num">200+</div><div class="stat-desc">Clients Supported</div></div>
      <div class="stat-block" style="text-align:center;"><div class="stat-num">10+</div><div class="stat-desc">Years Experience</div></div>
    </div>
  </div>
</div>

<!-- ─── CTA ─── -->
<section class="cta-band">
  <div class="container">
    <div class="cta-inner">
      <div>
        <h2>Ready to get started?</h2>
        <p>Talk to a 909 IT engineer — no sales pitch, just a real conversation about your environment.</p>
      </div>
      <div class="cta-actions">
        <a href="tel:0291457230" class="btn btn-white">02 9145 7230</a>
        <a href="${root}contact-us.html" class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,0.4);">Get in Touch</a>
      </div>
    </div>
  </div>
</section>

<script src="${root}assets/nav.js"></script>
</body>
</html>`;
}

/* ─── ICONS ─── */
const icons = {
  cloud:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>`,
  shield:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  grid:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>`,
  check:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>`,
  server:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  chart:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  users:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  network:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4h14V8M12 12v4"/></svg>`,
  bolt:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  lock:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  monitor:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  phone:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  hospital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  robot:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7M8 11V9M16 11V9M9 15h.01M15 15h.01M12 2a2 2 0 100 4 2 2 0 000-4z"/></svg>`,
  globe:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`,
  git:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>`,
};

/* ─── PAGE DEFINITIONS ─── */
const pages = [

  /* ── MANAGED IT SERVICES ── */
  { file: 'managed-it-services.html', depth: 0,
    title: 'Managed IT Services', metaDesc: '909 IT Solutions provides fully managed IT services in Sydney and Canberra, acting as your dedicated technology partner.',
    eyebrow: 'IT Services', h1: 'Managed IT Services', heroDesc: 'Proactive, reliable managed IT for Australian businesses. We handle your technology so you can focus on yours.',
    breadcrumbs: [{ label: 'Managed IT Services', href: '' }],
    features: [
      { icon: icons.monitor, title: '24/7 Service Desk', desc: 'Australian-based service desk available around the clock — logging tickets, remote troubleshooting, and escalating critical issues fast.' },
      { icon: icons.settings, title: 'Proactive Monitoring', desc: 'We monitor your systems before they break. Automated alerts, patch management, and preventive maintenance keep downtime near zero.' },
      { icon: icons.network, title: 'Network Management', desc: 'End-to-end management of your LAN, WAN, Wi-Fi, VPN, and perimeter — including firewall and switch configuration.' },
      { icon: icons.check, title: 'Vendor Management', desc: 'We manage your technology vendors on your behalf — ISPs, hardware suppliers, SaaS vendors — so you have one point of contact.' },
    ],
    aside: { title: 'What's Included', items: ['24/7 Help Desk Support', 'Remote & On-site Assistance', 'Proactive System Monitoring', 'Patch & Update Management', 'Network Management', 'Backup & Disaster Recovery', 'Monthly Reporting', 'Vendor Management'] },
    cards: { title: 'Related Services', items: [
      { href: 'small-business-it-support.html', icon: icons.users, title: 'Small Business IT Support', desc: 'Tailored support packages for small businesses — straightforward, affordable, and effective.' },
      { href: 'network-solutions.html', icon: icons.network, title: 'Network Solutions', desc: 'Structured cabling, wireless, switching, and routing — designed and deployed by our engineers.' },
      { href: 'professional-services/it-consulting.html', icon: icons.settings, title: 'IT Consulting', desc: 'Strategic technology advice from experienced consultants who understand your business.' },
    ]} },

  /* ── SMALL BUSINESS IT ── */
  { file: 'small-business-it-support.html', depth: 0,
    title: 'Small Business IT Support', metaDesc: 'Affordable, reliable IT support for small businesses in Sydney and Canberra from 909 IT Solutions.',
    eyebrow: 'IT Services', h1: 'Small Business IT Support', heroDesc: 'Practical, affordable IT support designed for small Australian businesses — without the enterprise price tag.',
    breadcrumbs: [{ label: 'Small Business IT Support', href: '' }],
    features: [
      { icon: icons.check, title: 'Flexible Support Plans', desc: 'Choose hourly, block-hour, or monthly managed support. We scale to your needs — no lock-in beyond what you want.' },
      { icon: icons.monitor, title: 'Remote & On-site', desc: 'Most issues resolved remotely within minutes. For hands-on work, our engineers come to you in Sydney or Canberra.' },
      { icon: icons.server, title: 'Setup & Procurement', desc: 'New workstations, printers, servers, or networking gear — we spec, procure, and configure everything.' },
      { icon: icons.lock, title: 'Security Essentials', desc: 'Antivirus, email filtering, backup, and basic firewall — the security fundamentals every small business needs.' },
    ],
    aside: { title: 'Package Includes', items: ['Email & Connectivity Support', 'Workstation Setup & Config', 'Software Licensing Help', 'Printer & Peripheral Setup', 'Basic Security & Backup', 'Microsoft 365 Management', 'On-demand On-site Visits', 'Business Hours Phone Support'] },
    cards: null },

  /* ── NETWORK SOLUTIONS ── */
  { file: 'network-solutions.html', depth: 0,
    title: 'Network Solutions', metaDesc: '909 IT Solutions designs and delivers enterprise and SMB network infrastructure across Sydney and Canberra.',
    eyebrow: 'Infrastructure', h1: 'Network Solutions', heroDesc: 'From structured cabling to enterprise wireless — we design, deploy, and manage reliable network infrastructure.',
    breadcrumbs: [{ label: 'Network Solutions', href: '' }],
    features: [
      { icon: icons.network, title: 'Network Design & Architecture', desc: 'We design networks that fit your space, your growth plans, and your budget — before a cable is pulled.' },
      { icon: icons.server, title: 'Switching & Routing', desc: 'Enterprise switching from Cisco, Meraki, MikroTik — configured for performance, segmentation, and security.' },
      { icon: icons.bolt, title: 'Wireless Infrastructure', desc: 'Site surveys, access point placement, Wi-Fi 6 deployment, and ongoing wireless management.' },
      { icon: icons.shield, title: 'Network Security', desc: 'VLAN segmentation, firewall integration, intrusion detection, and secure remote access.' },
    ],
    aside: { title: 'Technologies', items: ['Cisco Meraki', 'MikroTik', 'Fortinet', 'Ubiquiti', 'Aruba Wireless', 'Structured Cabling', 'VLAN & Segmentation', 'VPN & Remote Access'] },
    cards: null },

  /* ── MICROSOFT AZURE CONSULTANTS ── */
  { file: 'microsoft-azure-aws/microsoft-azure-consultants.html', depth: 1,
    title: 'Microsoft Azure Consultants', metaDesc: 'Certified Microsoft Azure consultants in Sydney. 909 IT Solutions plans, migrates, and manages Azure environments.',
    eyebrow: 'Microsoft Azure', h1: 'Microsoft Azure Consultants', heroDesc: 'Certified Azure architects and engineers who design, migrate, and optimise cloud infrastructure that actually works.',
    breadcrumbs: [{ label: 'Microsoft Azure / AWS', href: '../microsoft-azure-aws/microsoft-azure-consultants.html' }, { label: 'Microsoft Azure Consultants', href: '' }],
    features: [
      { icon: icons.cloud, title: 'Azure Migration Planning', desc: 'Discovery, dependency mapping, and phased migration plans to move your workloads to Azure with minimal disruption.' },
      { icon: icons.server, title: 'Infrastructure as Code', desc: 'Bicep, ARM, and Terraform templates for repeatable, auditable Azure infrastructure deployments.' },
      { icon: icons.lock, title: 'Azure Security & Compliance', desc: 'Azure Policy, Defender for Cloud, RBAC design, and compliance frameworks — built in from day one.' },
      { icon: icons.chart, title: 'Azure Cost Optimisation', desc: 'Reserved instances, right-sizing, Advisor recommendations — we reduce your Azure spend without sacrificing performance.' },
    ],
    aside: { title: 'Our Azure Expertise', items: ['Azure Virtual Machines', 'Azure Virtual Network', 'Azure Active Directory / Entra ID', 'Azure Kubernetes Service', 'Azure SQL & Cosmos DB', 'Azure App Service', 'Azure Monitor & Log Analytics', 'Microsoft Defender for Cloud'] },
    cards: { title: 'Related Azure Services', items: [
      { href: 'azure-cloud-infrastructure.html', icon: icons.cloud, title: 'Azure Cloud Infrastructure', desc: 'Full infrastructure build-out in Azure — VNets, VMs, storage, and connectivity.' },
      { href: 'azure-site-recovery.html', icon: icons.shield, title: 'Azure Site Recovery', desc: 'Business continuity and disaster recovery with Azure Site Recovery.' },
      { href: '../devops/azure-devops.html', icon: icons.git, title: 'Azure DevOps', desc: 'CI/CD pipelines, boards, repos, and test plans — end-to-end DevOps on Azure.' },
    ]} },

  /* ── AZURE CLOUD INFRASTRUCTURE ── */
  { file: 'microsoft-azure-aws/azure-cloud-infrastructure.html', depth: 1,
    title: 'Azure Cloud Infrastructure', metaDesc: 'Azure cloud infrastructure design and deployment by 909 IT Solutions — virtual machines, networking, storage, and hybrid connectivity.',
    eyebrow: 'Microsoft Azure', h1: 'Azure Cloud Infrastructure', heroDesc: 'Enterprise Azure infrastructure built right — scalable, secure, and designed by certified Azure architects.',
    breadcrumbs: [{ label: 'Microsoft Azure / AWS', href: '' }, { label: 'Azure Cloud Infrastructure', href: '' }],
    features: [
      { icon: icons.cloud, title: 'Virtual Machine Deployment', desc: 'Right-sized Azure VMs with availability sets, scale sets, and automated backup — configured and monitored by our team.' },
      { icon: icons.network, title: 'Azure Networking', desc: 'VNets, subnets, NSGs, peering, ExpressRoute, and VPN Gateway — a network that mirrors your on-premises design in the cloud.' },
      { icon: icons.server, title: 'Azure Storage & Databases', desc: 'Blob storage, Azure Files, Azure SQL, Cosmos DB — the right data tier for every workload.' },
      { icon: icons.lock, title: 'Hybrid Connectivity', desc: 'Azure Arc, Azure AD Connect, and ExpressRoute for seamless hybrid environments where cloud meets on-premises.' },
    ],
    aside: { title: 'Infrastructure Services', items: ['Azure Virtual Machines', 'Azure Virtual Network', 'Azure Storage Accounts', 'Azure SQL Managed Instance', 'Azure Load Balancer', 'Azure Firewall', 'ExpressRoute & VPN Gateway', 'Azure Backup & Recovery'] },
    cards: null },

  /* ── AWS CLOUD INFRASTRUCTURE ── */
  { file: 'microsoft-azure-aws/aws-cloud-infrastructure.html', depth: 1,
    title: 'AWS Cloud Infrastructure', metaDesc: '909 IT Solutions delivers AWS cloud infrastructure — EC2, VPC, S3, RDS, and multi-cloud environments for Australian businesses.',
    eyebrow: 'AWS', h1: 'AWS Cloud Infrastructure', heroDesc: 'AWS cloud infrastructure designed and managed by certified engineers — reliable, scalable, and cost-optimised.',
    breadcrumbs: [{ label: 'Microsoft Azure / AWS', href: '' }, { label: 'AWS Cloud Infrastructure', href: '' }],
    features: [
      { icon: icons.cloud, title: 'EC2 & Compute', desc: 'Right-sized EC2 instances with auto-scaling groups, Elastic Load Balancing, and spot instance strategies for cost efficiency.' },
      { icon: icons.network, title: 'VPC & Networking', desc: 'Custom VPC architecture with subnets, route tables, security groups, NAT gateways, and Transit Gateway connectivity.' },
      { icon: icons.server, title: 'S3 & Storage', desc: 'S3 bucket design with lifecycle policies, versioning, cross-region replication, and storage class optimisation.' },
      { icon: icons.lock, title: 'AWS Security', desc: 'IAM design, AWS Config, CloudTrail, GuardDuty, and Security Hub — security built into every layer of your AWS environment.' },
    ],
    aside: { title: 'AWS Services', items: ['Amazon EC2', 'Amazon VPC', 'Amazon S3 & EFS', 'Amazon RDS & Aurora', 'AWS IAM & Security Hub', 'AWS CloudWatch', 'AWS Transit Gateway', 'AWS Backup'] },
    cards: null },

  /* ── AZURE SITE RECOVERY ── */
  { file: 'microsoft-azure-aws/azure-site-recovery.html', depth: 1,
    title: 'Azure Site Recovery', metaDesc: 'Business continuity and disaster recovery with Azure Site Recovery, implemented by 909 IT Solutions.',
    eyebrow: 'Microsoft Azure', h1: 'Azure Site Recovery', heroDesc: 'Keep your business running through any disruption with Azure Site Recovery — automated failover for your critical workloads.',
    breadcrumbs: [{ label: 'Microsoft Azure / AWS', href: '' }, { label: 'Azure Site Recovery', href: '' }],
    features: [
      { icon: icons.shield, title: 'Automated Failover', desc: 'Replicate on-premises VMs and physical servers to Azure with automated failover — RTO in minutes, not hours.' },
      { icon: icons.check, title: 'Replication Policies', desc: 'Granular replication policies by workload, with RPO as low as 30 seconds for critical systems.' },
      { icon: icons.server, title: 'DR Testing', desc: 'Regular failover drills without impacting production — validate your recovery plans before you ever need them.' },
      { icon: icons.settings, title: 'Monitoring & Alerting', desc: 'Real-time replication health monitoring with Azure Monitor integration and automated alerts on any replication degradation.' },
    ],
    aside: { title: 'ASR Capabilities', items: ['Hyper-V & VMware Replication', 'Physical Server Replication', 'Azure-to-Azure DR', 'App-consistent Snapshots', 'Automated Failover Plans', 'Network Mapping', 'Custom Replication Policies', 'Compliance Reporting'] },
    cards: null },

  /* ── AWS CONSULTANTS ── */
  { file: 'microsoft-azure-aws/aws-consultants.html', depth: 1,
    title: 'AWS Consultants', metaDesc: 'Expert AWS consulting from 909 IT Solutions — cloud strategy, architecture, migration, and ongoing management.',
    eyebrow: 'AWS', h1: 'AWS Consultants', heroDesc: 'AWS-certified consultants who design, migrate, and optimise cloud architectures for Australian businesses.',
    breadcrumbs: [{ label: 'Microsoft Azure / AWS', href: '' }, { label: 'AWS Consultants', href: '' }],
    features: [
      { icon: icons.cloud, title: 'AWS Architecture Design', desc: 'Well-Architected Framework reviews and architecture design aligned with the five pillars: operational excellence, security, reliability, performance, cost.' },
      { icon: icons.bolt, title: 'Cloud Migration', desc: 'Lift-and-shift, re-platforming, and re-architecting — we choose the right migration strategy for each workload.' },
      { icon: icons.chart, title: 'Cost Optimisation', desc: 'Reserved Instance analysis, Savings Plans, right-sizing, and eliminating unused resources — we reduce your AWS bill.' },
      { icon: icons.lock, title: 'Security Posture Review', desc: 'IAM, VPC design, logging, and compliance controls — we identify and fix gaps before they become incidents.' },
    ],
    aside: { title: 'Consulting Services', items: ['Well-Architected Reviews', 'Cloud Strategy & Roadmap', 'Migration Assessment', 'DevOps & IaC Consulting', 'Cost Optimisation Review', 'Security Posture Review', 'Training & Enablement', 'Ongoing Cloud Management'] },
    cards: null },

  /* ── MICROSOFT SENTINEL ── */
  { file: 'microsoft-azure-aws/microsoft-sentinel.html', depth: 1,
    title: 'Microsoft Sentinel', metaDesc: '909 IT Solutions deploys and manages Microsoft Sentinel SIEM for cloud-native security operations.',
    eyebrow: 'Security', h1: 'Microsoft Sentinel', heroDesc: 'Cloud-native SIEM and SOAR — detect, investigate, and respond to threats across your entire Microsoft environment.',
    breadcrumbs: [{ label: 'Microsoft Azure / AWS', href: '' }, { label: 'Microsoft Sentinel', href: '' }],
    features: [
      { icon: icons.shield, title: 'Sentinel Deployment', desc: 'Full Sentinel workspace setup, data connector configuration, and integration with your M365, Azure, and third-party log sources.' },
      { icon: icons.bolt, title: 'Detection Rules & Analytics', desc: 'Custom KQL detection rules, Microsoft security alerts, and threat intelligence integration — tuned for your environment.' },
      { icon: icons.settings, title: 'SOAR Playbooks', desc: 'Automated response playbooks using Logic Apps — isolate endpoints, block IPs, and notify your team without manual intervention.' },
      { icon: icons.chart, title: 'Managed Sentinel', desc: 'Ongoing Sentinel management including alert triage, rule tuning, workbook dashboards, and regular threat hunting.' },
    ],
    aside: { title: 'Sentinel Capabilities', items: ['Log Analytics Workspace Setup', 'Microsoft 365 Connector', 'Azure AD / Entra ID Logs', 'Defender XDR Integration', 'Custom KQL Detection Rules', 'SOAR Playbook Automation', 'Threat Intelligence Feeds', 'Compliance Dashboards'] },
    cards: null },

  /* ── DEVOPS CONSULTANTS ── */
  { file: 'devops/devops-consultants.html', depth: 1,
    title: 'DevOps Consultants', metaDesc: 'Expert DevOps consulting from 909 IT Solutions — CI/CD pipelines, IaC, containers, and cloud-native DevOps practices.',
    eyebrow: 'DevOps', h1: 'DevOps Consultants', heroDesc: 'Accelerate your software delivery and infrastructure operations with DevOps practices implemented by experienced engineers.',
    breadcrumbs: [{ label: 'DevOps Consultants', href: '' }],
    features: [
      { icon: icons.git, title: 'CI/CD Pipeline Design', desc: 'End-to-end pipelines from code commit to production deployment — automated builds, tests, and releases.' },
      { icon: icons.cloud, title: 'Infrastructure as Code', desc: 'Terraform, Bicep, and ARM templates for repeatable, version-controlled infrastructure that eliminates configuration drift.' },
      { icon: icons.server, title: 'Container & Kubernetes', desc: 'Docker containerisation, AKS/EKS cluster design, Helm charts, and GitOps workflows with ArgoCD or Flux.' },
      { icon: icons.chart, title: 'Observability & Monitoring', desc: 'Azure Monitor, Prometheus, Grafana, and Application Insights — full observability across your applications and infrastructure.' },
    ],
    aside: { title: 'DevOps Toolchain', items: ['Azure DevOps', 'GitHub Actions', 'Terraform / Bicep', 'Docker & Kubernetes', 'Helm & ArgoCD', 'Azure Monitor', 'SonarQube', 'Trivy / Security Scanning'] },
    cards: null },

  /* ── AZURE DEVOPS ── */
  { file: 'devops/azure-devops.html', depth: 1,
    title: 'Azure DevOps', metaDesc: '909 IT Solutions implements Azure DevOps — boards, repos, pipelines, test plans, and artefact feeds.',
    eyebrow: 'DevOps', h1: 'Azure DevOps', heroDesc: 'Complete Azure DevOps implementation — from project setup to fully automated CI/CD pipelines and sprint management.',
    breadcrumbs: [{ label: 'Azure DevOps', href: '' }],
    features: [
      { icon: icons.git, title: 'Azure Pipelines', desc: 'YAML-based multi-stage pipelines for build, test, and deploy — including environments, approvals, and deployment gates.' },
      { icon: icons.server, title: 'Azure Repos', desc: 'Git repository setup with branch policies, pull request workflows, code review enforcement, and secret scanning.' },
      { icon: icons.chart, title: 'Azure Boards', desc: 'Agile boards, backlogs, sprint planning, and work item tracking — configured to your team's workflow.' },
      { icon: icons.lock, title: 'Azure Artefacts', desc: 'Private NuGet, npm, and Python feeds with upstream sources — managed artefact lifecycle for your dependencies.' },
    ],
    aside: { title: 'Azure DevOps Modules', items: ['Azure Pipelines (CI/CD)', 'Azure Repos (Git)', 'Azure Boards (Agile)', 'Azure Artefacts (Packages)', 'Azure Test Plans', 'Service Connections', 'Pipeline Security', 'Deployment Environments'] },
    cards: null },

  /* ── AWS DEVOPS ── */
  { file: 'devops/aws-devops.html', depth: 1,
    title: 'AWS DevOps', metaDesc: '909 IT Solutions implements AWS DevOps using CodePipeline, CodeBuild, CodeDeploy, and CloudFormation.',
    eyebrow: 'DevOps', h1: 'AWS DevOps', heroDesc: 'AWS-native DevOps pipelines and infrastructure automation — from CodeCommit to CodeDeploy and beyond.',
    breadcrumbs: [{ label: 'AWS DevOps', href: '' }],
    features: [
      { icon: icons.git, title: 'AWS CodePipeline', desc: 'End-to-end delivery pipelines orchestrating CodeBuild, CodeDeploy, and third-party integrations.' },
      { icon: icons.server, title: 'CloudFormation & CDK', desc: 'Infrastructure as Code using CloudFormation templates and AWS CDK — repeatable, version-controlled stack deployments.' },
      { icon: icons.cloud, title: 'ECS & EKS Deployments', desc: 'Containerised application deployment on ECS Fargate and EKS with rolling updates and blue/green strategies.' },
      { icon: icons.chart, title: 'CloudWatch & X-Ray', desc: 'Application and infrastructure observability with CloudWatch dashboards, alarms, and X-Ray distributed tracing.' },
    ],
    aside: { title: 'AWS DevOps Services', items: ['AWS CodePipeline', 'AWS CodeBuild', 'AWS CodeDeploy', 'AWS CloudFormation / CDK', 'Amazon ECS & EKS', 'AWS Lambda', 'Amazon CloudWatch', 'AWS X-Ray'] },
    cards: null },

  /* ── DYNAMICS 365 ── */
  { file: 'd365-power-platform/dynamics-365.html', depth: 1,
    title: 'Dynamics 365', metaDesc: '909 IT Solutions implements and customises Microsoft Dynamics 365 for Australian businesses — CRM, ERP, and business applications.',
    eyebrow: 'D365 & Power Platform', h1: 'Microsoft Dynamics 365', heroDesc: 'Unify your sales, service, finance, and operations on Dynamics 365 — implemented and customised by certified Microsoft consultants.',
    breadcrumbs: [{ label: 'D365 & Power Platform', href: '' }, { label: 'Dynamics 365', href: '' }],
    features: [
      { icon: icons.users, title: 'D365 Sales & CRM', desc: 'Configure Dynamics 365 Sales to manage leads, opportunities, and customer relationships — integrated with Outlook and Teams.' },
      { icon: icons.chart, title: 'D365 Customer Service', desc: 'Case management, knowledge base, SLA tracking, and omnichannel support built on Dynamics 365 Customer Service.' },
      { icon: icons.server, title: 'D365 Finance & Operations', desc: 'ERP implementation covering financial management, supply chain, manufacturing, and project accounting.' },
      { icon: icons.settings, title: 'Customisation & Integration', desc: 'Custom entities, workflows, plugins, and Power Automate integrations — Dynamics 365 shaped to your business processes.' },
    ],
    aside: { title: 'D365 Modules', items: ['Dynamics 365 Sales', 'Dynamics 365 Customer Service', 'Dynamics 365 Marketing', 'Dynamics 365 Finance', 'Dynamics 365 Supply Chain', 'Dynamics 365 Business Central', 'Dataverse Integration', 'Power Platform Connection'] },
    cards: null },

  /* ── POWER APPS ── */
  { file: 'd365-power-platform/power-apps.html', depth: 1,
    title: 'Power Apps', metaDesc: '909 IT Solutions builds custom Power Apps for Australian businesses — canvas apps, model-driven apps, and Dataverse solutions.',
    eyebrow: 'Power Platform', h1: 'Microsoft Power Apps', heroDesc: 'Build custom business apps without traditional development cost — canvas apps, model-driven apps, and Dataverse-powered solutions.',
    breadcrumbs: [{ label: 'D365 & Power Platform', href: '' }, { label: 'Power Apps', href: '' }],
    features: [
      { icon: icons.grid, title: 'Canvas App Development', desc: 'Pixel-perfect custom apps connecting to SharePoint, SQL, Dataverse, and hundreds of data sources — built to your exact process.' },
      { icon: icons.server, title: 'Model-Driven Apps', desc: 'Data-driven apps built on Dataverse with business rules, forms, views, and dashboards — ideal for complex data management.' },
      { icon: icons.globe, title: 'Power Pages (Portals)', desc: 'External-facing web portals powered by Dataverse — customer self-service, partner portals, and public-facing forms.' },
      { icon: icons.settings, title: 'Governance & ALM', desc: 'Environment strategy, DLP policies, solution packaging, and deployment pipelines for enterprise Power Apps governance.' },
    ],
    aside: { title: 'Power Apps Capabilities', items: ['Canvas App Development', 'Model-Driven Apps', 'Power Pages Portals', 'Dataverse Design', 'Custom Connectors', 'Mobile-Responsive Apps', 'Offline Capability', 'Power Automate Integration'] },
    cards: null },

  /* ── POWER AUTOMATE ── */
  { file: 'd365-power-platform/power-automate.html', depth: 1,
    title: 'Power Automate', metaDesc: '909 IT Solutions designs and deploys Power Automate flows — approval workflows, data sync, AI Builder, and RPA with Desktop flows.',
    eyebrow: 'Power Platform', h1: 'Microsoft Power Automate', heroDesc: 'Automate repetitive business processes across your Microsoft stack — approvals, notifications, data sync, and beyond.',
    breadcrumbs: [{ label: 'D365 & Power Platform', href: '' }, { label: 'Power Automate', href: '' }],
    features: [
      { icon: icons.bolt, title: 'Cloud Flows', desc: 'Automated and scheduled cloud flows connecting Microsoft 365, SharePoint, Teams, Outlook, Dynamics 365, and 400+ connectors.' },
      { icon: icons.robot, title: 'Desktop Flows & RPA', desc: 'Attended and unattended desktop automation using Power Automate Desktop — automate legacy applications and manual data entry.' },
      { icon: icons.check, title: 'Approval Workflows', desc: 'Multi-stage approval processes with escalation, delegation, and full audit trail — replacing email chains for good.' },
      { icon: icons.settings, title: 'AI Builder Integration', desc: 'Document processing, form recognition, and prediction models built into your flows using Power Automate AI Builder.' },
    ],
    aside: { title: 'Automation Use Cases', items: ['Employee Onboarding Flows', 'Invoice & PO Approvals', 'SharePoint Document Routing', 'Teams Notifications & Bots', 'Data Migration & Sync', 'Legacy App Automation (RPA)', 'IT Request Handling', 'Compliance & Audit Trails'] },
    cards: null },

  /* ── POWER BI ── */
  { file: 'd365-power-platform/power-bi.html', depth: 1,
    title: 'Power BI', metaDesc: '909 IT Solutions implements Power BI for Australian businesses — dashboards, data models, and enterprise BI governance.',
    eyebrow: 'Power Platform', h1: 'Microsoft Power BI', heroDesc: 'Transform your data into decisions with Power BI — interactive dashboards, semantic models, and enterprise-grade BI.',
    breadcrumbs: [{ label: 'D365 & Power Platform', href: '' }, { label: 'Power BI', href: '' }],
    features: [
      { icon: icons.chart, title: 'Dashboard Development', desc: 'Interactive Power BI dashboards built on your data — KPIs, trends, drill-downs, and role-level security for every audience.' },
      { icon: icons.server, title: 'Data Modelling', desc: 'Star schema data models in Power BI Desktop, DAX measures, calculated columns, and optimised query folding.' },
      { icon: icons.cloud, title: 'Power BI Service & Gateways', desc: 'Power BI Service workspace setup, scheduled refresh, on-premises data gateways, and Microsoft Fabric integration.' },
      { icon: icons.lock, title: 'Row-Level Security', desc: 'RLS and OLS design to ensure users only see the data they should — configured correctly from day one.' },
    ],
    aside: { title: 'Power BI Services', items: ['Dashboard Design & Build', 'Data Modelling (DAX)', 'Power Query & ETL', 'Power BI Service Setup', 'Gateway Configuration', 'Row-Level Security', 'Microsoft Fabric Integration', 'Report Embedding'] },
    cards: null },

  /* ── POWER VIRTUAL AGENT ── */
  { file: 'd365-power-platform/power-virtual-agent.html', depth: 1,
    title: 'Power Virtual Agent', metaDesc: '909 IT Solutions builds intelligent chatbots with Microsoft Copilot Studio (formerly Power Virtual Agent) for internal and customer-facing use.',
    eyebrow: 'Power Platform', h1: 'Power Virtual Agent / Copilot Studio', heroDesc: 'Build intelligent chatbots and AI assistants without code — answer FAQs, automate tasks, and support your team 24/7.',
    breadcrumbs: [{ label: 'D365 & Power Platform', href: '' }, { label: 'Power Virtual Agent', href: '' }],
    features: [
      { icon: icons.robot, title: 'Bot Design & Build', desc: 'Conversational bots in Microsoft Copilot Studio — topics, entities, slots, and conversation flows designed around your use cases.' },
      { icon: icons.bolt, title: 'Power Automate Integration', desc: 'Bots that trigger real actions — look up data, raise tickets, send emails, update records — via Power Automate connectors.' },
      { icon: icons.globe, title: 'Multi-Channel Deployment', desc: 'Deploy to Teams, SharePoint, your website, or Dynamics 365 Customer Service — one bot, multiple channels.' },
      { icon: icons.chart, title: 'Analytics & Optimisation', desc: 'Built-in session analytics, CSAT tracking, and escalation to live agents — continuous improvement of your bot\'s performance.' },
    ],
    aside: { title: 'Bot Capabilities', items: ['Natural Language Understanding', 'Multi-turn Conversations', 'Power Automate Actions', 'Dataverse Integration', 'Teams & SharePoint Deploy', 'Live Agent Escalation', 'CSAT & Analytics', 'Copilot Studio (GPT-powered)'] },
    cards: null },

  /* ── AZURE HYBRID CLOUD ── */
  { file: 'infrastructure-hybrid/azure-hybrid-cloud.html', depth: 1,
    title: 'Azure Hybrid Cloud', metaDesc: '909 IT Solutions designs and implements Azure Hybrid Cloud environments — connecting on-premises infrastructure with Azure.',
    eyebrow: 'Infrastructure & Hybrid', h1: 'Azure Hybrid Cloud', heroDesc: 'Connect your on-premises infrastructure to Azure seamlessly — a true hybrid environment designed by certified engineers.',
    breadcrumbs: [{ label: 'Infrastructure & Hybrid', href: '' }, { label: 'Azure Hybrid Cloud', href: '' }],
    features: [
      { icon: icons.cloud, title: 'Azure Arc', desc: 'Manage on-premises servers, Kubernetes clusters, and data services from Azure — a single control plane across environments.' },
      { icon: icons.network, title: 'ExpressRoute & VPN', desc: 'Private, high-bandwidth connectivity between your datacentre and Azure via ExpressRoute or IPsec VPN.' },
      { icon: icons.server, title: 'Azure AD Connect / Entra Connect', desc: 'Identity synchronisation between on-premises Active Directory and Entra ID — single identity for hybrid environments.' },
      { icon: icons.check, title: 'Azure File Sync', desc: 'Centralise file shares in Azure while keeping local cache on Windows Server for fast access at every site.' },
    ],
    aside: { title: 'Hybrid Technologies', items: ['Azure Arc', 'Azure ExpressRoute', 'Azure VPN Gateway', 'Entra ID Connect', 'Azure File Sync', 'Azure Stack HCI', 'Windows Admin Centre', 'Azure Monitor for Hybrid'] },
    cards: null },

  /* ── FORTINET SECURE SD-WAN ── */
  { file: 'infrastructure-hybrid/fortinet-secure-sd-wan.html', depth: 1,
    title: 'Fortinet Secure SD-WAN', metaDesc: '909 IT Solutions deploys Fortinet Secure SD-WAN for Australian businesses — simplifying branch connectivity and security.',
    eyebrow: 'Fortinet | Core Specialisation', h1: 'Fortinet Secure SD-WAN', heroDesc: 'Simplify branch networking and reduce WAN costs with Fortinet Secure SD-WAN — deployed and managed by certified Fortinet engineers.',
    breadcrumbs: [{ label: 'Infrastructure & Hybrid', href: '' }, { label: 'Fortinet Secure SD-WAN', href: '' }],
    features: [
      { icon: icons.network, title: 'SD-WAN Deployment', desc: 'FortiGate-based SD-WAN across all your sites — centralised management, application steering, and automated path selection.' },
      { icon: icons.shield, title: 'Security-Driven Networking', desc: 'Security and networking converged in a single FortiGate appliance — no separate firewall required at each branch.' },
      { icon: icons.chart, title: 'WAN Optimisation', desc: 'Intelligent traffic steering using link quality metrics — critical applications always get the best available path.' },
      { icon: icons.settings, title: 'FortiManager & FortiAnalyzer', desc: 'Centralised SD-WAN policy management and analytics from FortiManager, with deep visibility from FortiAnalyzer.' },
    ],
    aside: { title: 'Fortinet Technologies', items: ['FortiGate SD-WAN', 'FortiManager', 'FortiAnalyzer', 'FortiOS Security Profiles', 'MPLS Replacement', 'Zero-Touch Provisioning', 'Application Steering', 'SLA-Based Path Selection'] },
    cards: null },

  /* ── SD-WAN SOLUTIONS ── */
  { file: 'infrastructure-hybrid/sd-wan-solutions.html', depth: 1,
    title: 'SD-WAN Solutions', metaDesc: '909 IT Solutions designs and deploys SD-WAN for multi-site Australian businesses — vendor-agnostic assessment and implementation.',
    eyebrow: 'Infrastructure', h1: 'SD-WAN Solutions', heroDesc: 'Replace expensive MPLS with intelligent, secure SD-WAN — better performance, lower cost, and full visibility across every site.',
    breadcrumbs: [{ label: 'Infrastructure & Hybrid', href: '' }, { label: 'SD-WAN Solutions', href: '' }],
    features: [
      { icon: icons.network, title: 'Multi-Site Connectivity', desc: 'Connect branch offices, retail sites, warehouses, and cloud resources with a unified, managed SD-WAN overlay.' },
      { icon: icons.bolt, title: 'MPLS Migration', desc: 'Structured migration from MPLS to broadband + SD-WAN — reducing monthly WAN costs while improving resilience.' },
      { icon: icons.shield, title: 'Integrated Security', desc: 'Next-gen firewall, IPS, URL filtering, and SSL inspection at every site — security that travels with your WAN.' },
      { icon: icons.chart, title: 'Centralised Management', desc: 'Single dashboard for all sites — policy deployment, health monitoring, and troubleshooting from one place.' },
    ],
    aside: { title: 'SD-WAN Vendors', items: ['Fortinet Secure SD-WAN', 'Cisco Meraki SD-WAN', 'Vendor Assessment & Selection', 'MPLS to SD-WAN Migration', 'Dual-WAN Failover', 'QoS & Application Shaping', 'Zero-Touch Provisioning', 'Ongoing Managed SD-WAN'] },
    cards: null },

  /* ── IT CONSULTING ── */
  { file: 'professional-services/it-consulting.html', depth: 1,
    title: 'IT Consulting', metaDesc: '909 IT Solutions provides expert IT consulting for Australian businesses — technology strategy, assessments, and advisory services.',
    eyebrow: 'Professional Services', h1: 'IT Consulting', heroDesc: 'Strategic technology advice from experienced consultants — helping Australian businesses make better IT decisions.',
    breadcrumbs: [{ label: 'Professional Services', href: '' }, { label: 'IT Consulting', href: '' }],
    features: [
      { icon: icons.chart, title: 'Technology Assessment', desc: 'Comprehensive review of your current IT environment — infrastructure, security, licensing, and processes — with actionable findings.' },
      { icon: icons.settings, title: 'IT Strategy Development', desc: 'A multi-year technology roadmap aligned to your business objectives, budget, and risk tolerance.' },
      { icon: icons.lock, title: 'Security Consulting', desc: 'Independent security posture assessment covering people, process, and technology — with a prioritised remediation plan.' },
      { icon: icons.cloud, title: 'Cloud Readiness', desc: 'Cloud readiness assessment for Azure or AWS migration — workload prioritisation, cost modelling, and migration planning.' },
    ],
    aside: { title: 'Consulting Services', items: ['IT Environment Assessment', 'Technology Roadmapping', 'Cloud Readiness Review', 'Security Posture Assessment', 'Vendor Selection Advisory', 'Budget Planning Support', 'Board-Level IT Reporting', 'Post-M&A IT Integration'] },
    cards: null },

  /* ── CIO AS A SERVICE ── */
  { file: 'professional-services/cio-as-a-service.html', depth: 1,
    title: 'CIO-as-a-Service', metaDesc: '909 IT Solutions provides CIO-as-a-Service — senior IT leadership for businesses that need strategic guidance without a full-time CIO.',
    eyebrow: 'Professional Services', h1: 'CIO-as-a-Service', heroDesc: 'Senior IT leadership on demand — strategic guidance, vendor management, and board reporting without the full-time executive cost.',
    breadcrumbs: [{ label: 'Professional Services', href: '' }, { label: 'CIO-as-a-Service', href: '' }],
    features: [
      { icon: icons.users, title: 'IT Leadership', desc: 'An experienced CIO acting as your technology executive — attending board meetings, presenting strategy, and owning IT outcomes.' },
      { icon: icons.chart, title: 'Budget & Vendor Oversight', desc: 'IT budget management, vendor contract negotiation, and spend oversight — maximising value from every technology dollar.' },
      { icon: icons.settings, title: 'Technology Governance', desc: 'Policies, standards, and governance frameworks that protect your business and keep IT aligned to regulatory requirements.' },
      { icon: icons.check, title: 'Digital Transformation Leadership', desc: 'Leading transformation programs — cloud migration, ERP implementation, AI adoption — with accountability and momentum.' },
    ],
    aside: { title: 'CIO Services Include', items: ['Board & Executive Reporting', 'IT Strategic Planning', 'Budget Management', 'Vendor Negotiation', 'IT Governance Frameworks', 'Project Portfolio Oversight', 'Team Leadership & Mentoring', 'Risk Management'] },
    cards: null },

  /* ── STRATEGY CONSULTING ── */
  { file: 'professional-services/strategy-consulting-road-mapping.html', depth: 1,
    title: 'Strategy Consulting & Road Mapping', metaDesc: '909 IT Solutions helps Australian businesses develop practical IT strategies and technology roadmaps for growth.',
    eyebrow: 'Professional Services', h1: 'Strategy Consulting & Road Mapping', heroDesc: 'A practical technology roadmap that connects your IT investments to your business goals — not just a slide deck.',
    breadcrumbs: [{ label: 'Professional Services', href: '' }, { label: 'Strategy Consulting & Road Mapping', href: '' }],
    features: [
      { icon: icons.chart, title: 'Current State Assessment', desc: 'Deep-dive into your existing IT environment — infrastructure, applications, people, process, and security — to understand where you are.' },
      { icon: icons.check, title: 'Future State Design', desc: 'Define where your technology needs to be in 1, 3, and 5 years — aligned to your growth, risk, and financial objectives.' },
      { icon: icons.settings, title: 'Prioritised Roadmap', desc: 'A sequenced roadmap of initiatives with effort estimates, dependencies, and business impact scores — executable, not aspirational.' },
      { icon: icons.bolt, title: 'Quarterly Reviews', desc: 'Ongoing roadmap governance — quarterly check-ins to review progress, adjust for business changes, and reprioritise.' },
    ],
    aside: { title: 'Roadmap Deliverables', items: ['Current State Report', 'Gap Analysis', 'Future State Architecture', 'Initiative Register', '3-Year IT Roadmap', 'Budget Forecast', 'Risk Register', 'Board Presentation'] },
    cards: null },

  /* ── PROJECT SERVICES ── */
  { file: 'professional-services/project-services.html', depth: 1,
    title: 'Project Services', metaDesc: '909 IT Solutions delivers complex IT projects on time and on budget — project management, delivery, and quality assurance.',
    eyebrow: 'Professional Services', h1: 'Project Services', heroDesc: 'Experienced project delivery for complex IT initiatives — on time, on budget, and properly handed over.',
    breadcrumbs: [{ label: 'Professional Services', href: '' }, { label: 'Project Services', href: '' }],
    features: [
      { icon: icons.check, title: 'Project Management', desc: 'Certified PMs running structured delivery — scope, schedule, budget, risks, and stakeholder communication managed rigorously.' },
      { icon: icons.users, title: 'Business Analysis', desc: 'Requirements gathering, process mapping, and solution design — ensuring technical delivery solves the right business problem.' },
      { icon: icons.settings, title: 'Change Management', desc: 'User adoption plans, training, and communication strategies so your people actually use what we build.' },
      { icon: icons.chart, title: 'Quality Assurance', desc: 'Structured testing, UAT coordination, and quality gates before anything goes live — protecting your go-live date.' },
    ],
    aside: { title: 'Project Delivery', items: ['Project Charter & Initiation', 'Stakeholder Management', 'Risk & Issue Tracking', 'Agile & Waterfall Delivery', 'Business Analysis', 'UAT Coordination', 'Change Management', 'Post-Project Review'] },
    cards: null },

  /* ── M365 BUSINESS ── */
  { file: 'modern-workplace/microsoft-365-business.html', depth: 1,
    title: 'Microsoft 365 Business', metaDesc: '909 IT Solutions implements and manages Microsoft 365 Business for Australian businesses — licensing, migration, and ongoing support.',
    eyebrow: 'Modern Workplace | Core Specialisation', h1: 'Microsoft 365 Business', heroDesc: 'The complete Microsoft 365 Business implementation — from licensing and migration to training and ongoing management.',
    breadcrumbs: [{ label: 'Modern Workplace', href: '' }, { label: 'Microsoft 365 Business', href: '' }],
    features: [
      { icon: icons.grid, title: 'Licensing & Procurement', desc: 'Microsoft 365 licensing advice, procurement, and optimisation — the right SKU for every user, at the right price.' },
      { icon: icons.bolt, title: 'Email & Data Migration', desc: 'Mailbox, OneDrive, SharePoint, and Teams migration from on-premises Exchange, Google Workspace, or other platforms.' },
      { icon: icons.lock, title: 'Security Baseline', desc: 'MFA, Conditional Access, Defender for Microsoft 365, and DLP policies — the M365 security baseline your business needs.' },
      { icon: icons.check, title: 'Ongoing Management', desc: 'User provisioning, licence management, policy updates, and helpdesk support for your entire M365 tenant.' },
    ],
    aside: { title: 'M365 Services', items: ['Tenant Setup & Configuration', 'Email Migration (Exchange/Gmail)', 'SharePoint Architecture', 'OneDrive & File Migration', 'Microsoft Teams Setup', 'Conditional Access & MFA', 'Defender for M365', 'Ongoing Tenant Management'] },
    cards: null },

  /* ── M365 CONSULTANTS ── */
  { file: 'modern-workplace/microsoft-365-consultants.html', depth: 1,
    title: 'Microsoft 365 Consultants', metaDesc: 'Certified Microsoft 365 consultants from 909 IT Solutions — deployment, governance, adoption, and ongoing M365 expertise.',
    eyebrow: 'Modern Workplace', h1: 'Microsoft 365 Consultants', heroDesc: 'Certified M365 consultants who go beyond setup — governance, adoption, security, and long-term optimisation of your tenant.',
    breadcrumbs: [{ label: 'Modern Workplace', href: '' }, { label: 'Microsoft 365 Consultants', href: '' }],
    features: [
      { icon: icons.settings, title: 'Tenant Governance', desc: 'Information architecture, naming conventions, guest access policies, and Microsoft 365 Groups governance — controlled from day one.' },
      { icon: icons.users, title: 'Adoption & Training', desc: 'User training, champion programs, and change management to drive genuine adoption of Microsoft 365 across your organisation.' },
      { icon: icons.lock, title: 'Compliance & Data Protection', desc: 'Microsoft Purview, retention policies, sensitivity labels, DLP rules, and eDiscovery — M365 compliance built properly.' },
      { icon: icons.chart, title: 'M365 Roadmap Advisory', desc: 'Guidance on new Microsoft 365 features, Copilot readiness, and a phased adoption plan to extract maximum value from your licence.' },
    ],
    aside: { title: 'Consulting Areas', items: ['Tenant Architecture Review', 'Microsoft 365 Governance', 'Purview & Compliance', 'Copilot Readiness', 'Teams Governance', 'SharePoint Governance', 'M365 Security Review', 'Adoption Programs'] },
    cards: null },

  /* ── MICROSOFT INTUNE ── */
  { file: 'modern-workplace/microsoft-intune.html', depth: 1,
    title: 'Microsoft Intune', metaDesc: '909 IT Solutions implements Microsoft Intune for device management — MDM, MAM, Autopilot, and compliance policies.',
    eyebrow: 'Modern Workplace | Core Specialisation', h1: 'Microsoft Intune', heroDesc: 'Manage every device in your organisation from the cloud — Windows, macOS, iOS, and Android — with Microsoft Intune.',
    breadcrumbs: [{ label: 'Modern Workplace', href: '' }, { label: 'Microsoft Intune', href: '' }],
    features: [
      { icon: icons.server, title: 'MDM Enrolment', desc: 'Automated device enrolment for Windows Autopilot, Apple DEP, and Android Zero-Touch — devices configured before users unbox them.' },
      { icon: icons.settings, title: 'Configuration Policies', desc: 'Device restrictions, Wi-Fi profiles, VPN, email, and certificate deployment — all managed centrally from Intune.' },
      { icon: icons.lock, title: 'Compliance & Conditional Access', desc: 'Compliance policies that gate access to corporate data — non-compliant devices blocked at the door, automatically.' },
      { icon: icons.check, title: 'App Management (MAM)', desc: 'Deploy, update, and retire applications across your entire fleet — including MAM-WE for BYOD without full MDM enrolment.' },
    ],
    aside: { title: 'Intune Capabilities', items: ['Windows Autopilot', 'Apple Business Manager', 'Android Zero-Touch', 'Configuration Profiles', 'Compliance Policies', 'Conditional Access Integration', 'App Deployment & Patching', 'Endpoint Analytics'] },
    cards: null },

  /* ── MICROSOFT TEAMS ── */
  { file: 'modern-workplace/microsoft-teams.html', depth: 1,
    title: 'Microsoft Teams', metaDesc: '909 IT Solutions deploys and optimises Microsoft Teams for Australian businesses — governance, adoption, and integration.',
    eyebrow: 'Modern Workplace', h1: 'Microsoft Teams', heroDesc: 'Make Microsoft Teams your digital workplace — properly governed, well-adopted, and integrated with your business systems.',
    breadcrumbs: [{ label: 'Modern Workplace', href: '' }, { label: 'Microsoft Teams', href: '' }],
    features: [
      { icon: icons.users, title: 'Teams Architecture & Governance', desc: 'Team naming policies, creation controls, guest access, lifecycle management, and channel templates — Teams done right.' },
      { icon: icons.check, title: 'Teams Apps & Integrations', desc: 'Power Apps, Power Automate, and third-party app integration — embedding your business tools directly into Teams.' },
      { icon: icons.lock, title: 'Teams Security', desc: 'Information barriers, sensitivity labels, meeting policies, and external access controls — keeping sensitive conversations secure.' },
      { icon: icons.bolt, title: 'Adoption & Training', desc: 'End-user training, team champion programs, and change management to drive genuine Teams adoption across your organisation.' },
    ],
    aside: { title: 'Teams Services', items: ['Tenant-Wide Teams Policies', 'Governance Framework', 'Guest & External Access', 'Teams App Deployment', 'Sensitivity Label Integration', 'Meeting Room Devices', 'Adoption Programs', 'Teams Rooms (MTR)'] },
    cards: null },

  /* ── TEAMS CALLING ── */
  { file: 'modern-workplace/microsoft-teams-calling.html', depth: 1,
    title: 'Microsoft Teams Calling', metaDesc: '909 IT Solutions migrates businesses to Microsoft Teams Calling — Direct Routing, Calling Plans, and Operator Connect.',
    eyebrow: 'Modern Workplace', h1: 'Microsoft Teams Calling', heroDesc: 'Replace your phone system with Microsoft Teams — Direct Routing, Calling Plans, and Operator Connect implemented by certified engineers.',
    breadcrumbs: [{ label: 'Modern Workplace', href: '' }, { label: 'Microsoft Teams Calling', href: '' }],
    features: [
      { icon: icons.phone, title: 'Direct Routing', desc: 'Connect your existing SIP carrier to Teams via a certified Session Border Controller — full PSTN calling through Teams.' },
      { icon: icons.check, title: 'Calling Plans & Operator Connect', desc: 'Microsoft Calling Plans and Operator Connect options assessed and implemented — the simplest path to Teams telephony.' },
      { icon: icons.server, title: 'PBX Migration', desc: 'Structured migration from legacy PBX — number porting, voicemail configuration, auto-attendants, and call queues.' },
      { icon: icons.settings, title: 'Teams Rooms Integration', desc: 'Meeting room devices configured for Teams Calling — video conferencing and PSTN calls from every room.' },
    ],
    aside: { title: 'Calling Capabilities', items: ['Direct Routing (SBC)', 'Microsoft Calling Plans', 'Operator Connect', 'Number Porting', 'Auto Attendants', 'Call Queues', 'Voicemail Integration', 'Teams Rooms Devices'] },
    cards: null },

  /* ── MODERN WORKPLACE SOLUTIONS ── */
  { file: 'modern-workplace/modern-workplace-solutions.html', depth: 1,
    title: 'Modern Workplace Solutions', metaDesc: '909 IT Solutions delivers end-to-end Modern Workplace solutions — enabling secure, productive hybrid work for Australian businesses.',
    eyebrow: 'Modern Workplace', h1: 'Modern Workplace Solutions', heroDesc: 'Enable your team to work securely from anywhere — a complete Modern Workplace built on Microsoft technology.',
    breadcrumbs: [{ label: 'Modern Workplace', href: '' }, { label: 'Modern Workplace Solutions', href: '' }],
    features: [
      { icon: icons.grid, title: 'Microsoft 365 Foundation', desc: 'M365, Intune, Teams, SharePoint, and OneDrive — the complete Microsoft Modern Workplace stack, deployed and configured.' },
      { icon: icons.lock, title: 'Zero Trust Security', desc: 'Conditional Access, MFA, Identity Protection, and Microsoft Defender — a Zero Trust security posture for hybrid work.' },
      { icon: icons.bolt, title: 'Hybrid Work Enablement', desc: 'VPN or ZTNA, Intune-managed devices, SharePoint collaboration, and Teams communication — seamless for in-office and remote.' },
      { icon: icons.users, title: 'Adoption & Change Management', desc: 'Training programs, champion networks, and communication campaigns to drive genuine adoption across your workforce.' },
    ],
    aside: { title: 'Modern Workplace Stack', items: ['Microsoft 365 Business', 'Microsoft Intune & Autopilot', 'Microsoft Teams', 'SharePoint Online', 'OneDrive for Business', 'Entra ID & Conditional Access', 'Microsoft Defender', 'Microsoft Purview'] },
    cards: null },

  /* ── MEDICAL IT SUPPORT ── */
  { file: 'medical-it-support/index.html', depth: 1,
    title: 'Medical IT Support', metaDesc: '909 IT Solutions provides specialist IT support for healthcare providers — compliant, secure, and tailored for medical practices.',
    eyebrow: 'Medical IT', h1: 'Medical IT Support', heroDesc: 'Specialist IT support for healthcare — secure, compliant, and designed for the demands of Australian medical practices.',
    breadcrumbs: [{ label: 'Medical IT Support', href: '' }],
    features: [
      { icon: icons.hospital, title: 'Clinical System Support', desc: 'Support for clinical software — Best Practice, Medical Director, Genie, and more — with engineers who understand healthcare workflows.' },
      { icon: icons.lock, title: 'Healthcare Security & Compliance', desc: 'HIPAA-aligned security controls, My Health Record compliance, data handling policies, and staff awareness training.' },
      { icon: icons.server, title: 'Medical Network Infrastructure', desc: 'Segmented clinical and guest networks, secure Wi-Fi, VPN, and firewall configurations designed for healthcare environments.' },
      { icon: icons.settings, title: 'After-Hours Support', desc: 'Extended support hours for healthcare — because patient care doesn\'t stop at 5pm and neither should your IT support.' },
    ],
    aside: { title: 'Healthcare IT Services', items: ['Clinical Software Support', 'Best Practice / Genie Support', 'HIPAA Compliance Review', 'My Health Record Integration', 'Healthcare Network Design', 'Secure Wi-Fi for Practices', 'Backup & DR for Clinical Data', 'Staff Security Training'] },
    cards: null },

  /* ── HEALTHCARE IT ── */
  { file: 'medical-it-support/healthcare-it-support-services.html', depth: 1,
    title: 'Healthcare IT Support Services', metaDesc: '909 IT Solutions delivers comprehensive IT support services for hospitals, clinics, and healthcare providers across Australia.',
    eyebrow: 'Medical IT', h1: 'Healthcare IT Support Services', heroDesc: 'Comprehensive IT support for hospitals, clinics, and allied health providers — built around the needs of healthcare professionals.',
    breadcrumbs: [{ label: 'Medical IT Support', href: '../medical-it-support/index.html' }, { label: 'Healthcare IT Support Services', href: '' }],
    features: [
      { icon: icons.hospital, title: 'Multi-Site Healthcare IT', desc: 'Managed IT for healthcare groups with multiple clinics — consistent service delivery, policies, and monitoring across all sites.' },
      { icon: icons.lock, title: 'Patient Data Security', desc: 'Data classification, encryption, access controls, and audit logging to protect sensitive patient information at every layer.' },
      { icon: icons.settings, title: 'Healthcare Integrations', desc: 'Pathology, radiology, and pharmacy system integrations — ensuring clinical data flows securely between systems.' },
      { icon: icons.chart, title: 'IT Asset Management', desc: 'Full inventory of workstations, tablets, medical devices, and network equipment — lifecycle managed and audited.' },
    ],
    aside: { title: 'Healthcare IT Coverage', items: ['Hospitals & Day Surgeries', 'General Practice Clinics', 'Specialist Medical Practices', 'Allied Health Providers', 'Pathology & Radiology', 'Aged Care Facilities', 'Telehealth Infrastructure', 'Medical Device Networking'] },
    cards: null },

  /* ── PRIVATE PRACTICE ── */
  { file: 'medical-it-support/private-practice-it-setup.html', depth: 1,
    title: 'Private Practice IT Setup', metaDesc: '909 IT Solutions provides complete IT setup for new medical private practices — from network to clinical software.',
    eyebrow: 'Medical IT', h1: 'Private Practice IT Setup', heroDesc: 'Everything your new medical practice needs from day one — network, workstations, clinical software, and security.',
    breadcrumbs: [{ label: 'Medical IT Support', href: '../medical-it-support/index.html' }, { label: 'Private Practice IT Setup', href: '' }],
    features: [
      { icon: icons.network, title: 'Practice Network Design', desc: 'Structured cabling, Wi-Fi, firewall, and clinical/guest network segmentation — designed for a healthcare environment.' },
      { icon: icons.monitor, title: 'Workstation & Hardware Setup', desc: 'Procurement, configuration, and deployment of workstations, printers, scanners, and clinical peripherals.' },
      { icon: icons.hospital, title: 'Clinical Software Installation', desc: 'Best Practice, Medical Director, Genie, and supporting software installed, configured, and data migrated.' },
      { icon: icons.lock, title: 'Security & Backup', desc: 'Antivirus, firewall, email filtering, and automated backup — the security and recovery foundation for your practice data.' },
    ],
    aside: { title: 'Practice Setup Includes', items: ['Network Design & Cabling', 'Workstation Procurement & Config', 'Clinical Software Setup', 'Best Practice / Genie Install', 'Firewall & Security Config', 'Staff Email & Microsoft 365', 'Backup & Recovery Setup', 'Staff Training & Handover'] },
    cards: null },

  /* ── CYBER SECURITY INDEX ── */
  { file: 'cyber-security/index.html', depth: 1,
    title: 'Cyber Security', metaDesc: '909 IT Solutions provides comprehensive cyber security services for Australian businesses — cloud, network, endpoint, and risk assessment.',
    eyebrow: 'Cyber Security', h1: 'Cyber Security Services', heroDesc: 'Protect your business from evolving cyber threats — comprehensive security services designed for Australian organisations.',
    breadcrumbs: [{ label: 'Cyber Security', href: '' }],
    features: [
      { icon: icons.shield, title: 'Security Strategy', desc: 'We start with a risk assessment and build a pragmatic, prioritised security strategy — not a compliance checklist.' },
      { icon: icons.lock, title: 'Multi-Layer Protection', desc: 'Cloud, network, endpoint, email, and identity security working together — defence-in-depth across your entire attack surface.' },
      { icon: icons.chart, title: 'Threat Detection & Response', desc: 'Microsoft Sentinel SIEM, Defender XDR, and managed detection — identifying and containing threats before they become incidents.' },
      { icon: icons.settings, title: 'Ongoing Security Management', desc: 'Security isn\'t a project — it\'s a programme. We provide ongoing management, patch oversight, and regular security reviews.' },
    ],
    aside: { title: 'Security Services', items: ['IT Security Risk Assessment', 'Cloud Security', 'Network Security (FortiGate)', 'Endpoint Security', 'Email Security', 'Microsoft Sentinel SIEM', 'Security Awareness Training', 'Incident Response'] },
    cards: { title: 'Security Services', items: [
      { href: 'cloud-security.html', icon: icons.cloud, title: 'Cloud Security', desc: 'Secure your Azure, M365, and AWS environments with proper controls and monitoring.' },
      { href: 'network-security.html', icon: icons.shield, title: 'Network Security', desc: 'FortiGate firewall, IDS/IPS, and network segmentation to protect your perimeter and internal traffic.' },
      { href: 'endpoint-security.html', icon: icons.monitor, title: 'Endpoint Security', desc: 'Microsoft Defender, Intune compliance, and EDR to protect every device in your fleet.' },
      { href: 'it-cyber-security-risk-assessment.html', icon: icons.check, title: 'Risk Assessment', desc: 'A structured IT security risk assessment — free for new clients — to identify and prioritise your security gaps.' },
    ]} },

  /* ── CLOUD SECURITY ── */
  { file: 'cyber-security/cloud-security.html', depth: 1,
    title: 'Cloud Security', metaDesc: '909 IT Solutions secures Azure, Microsoft 365, and AWS cloud environments with proper controls, monitoring, and compliance.',
    eyebrow: 'Cyber Security', h1: 'Cloud Security', heroDesc: 'Secure your cloud environments from misconfigurations, threats, and data breaches — Microsoft and AWS cloud security expertise.',
    breadcrumbs: [{ label: 'Cyber Security', href: 'index.html' }, { label: 'Cloud Security', href: '' }],
    features: [
      { icon: icons.cloud, title: 'Azure Security Posture', desc: 'Microsoft Defender for Cloud, Azure Policy, and Secure Score remediation — a hardened Azure environment.' },
      { icon: icons.lock, title: 'M365 Security Baseline', desc: 'Conditional Access, MFA, Defender for M365, DLP, and sensitivity labels — the M365 security baseline properly configured.' },
      { icon: icons.shield, title: 'AWS Security Controls', desc: 'GuardDuty, Security Hub, CloudTrail, Config, and IAM best practices — AWS security that actually works.' },
      { icon: icons.settings, title: 'CSPM & Monitoring', desc: 'Cloud Security Posture Management with continuous compliance checks, drift detection, and alert-driven remediation.' },
    ],
    aside: { title: 'Cloud Security Coverage', items: ['Microsoft Defender for Cloud', 'Azure Policy & Blueprints', 'M365 Secure Score', 'Conditional Access Design', 'Microsoft Purview DLP', 'AWS GuardDuty', 'AWS Security Hub', 'Cloud Identity Security'] },
    cards: null },

  /* ── NETWORK SECURITY ── */
  { file: 'cyber-security/network-security.html', depth: 1,
    title: 'Network Security', metaDesc: '909 IT Solutions delivers enterprise network security using FortiGate, IDS/IPS, network segmentation, and zero trust access.',
    eyebrow: 'Cyber Security', h1: 'Network Security', heroDesc: 'Protect your network from threats at every layer — FortiGate firewall, IDS/IPS, network segmentation, and zero trust access.',
    breadcrumbs: [{ label: 'Cyber Security', href: 'index.html' }, { label: 'Network Security', href: '' }],
    features: [
      { icon: icons.shield, title: 'FortiGate Next-Gen Firewall', desc: 'Application-aware firewall with IPS, URL filtering, SSL inspection, and antivirus — enterprise security at every site.' },
      { icon: icons.network, title: 'Network Segmentation', desc: 'VLAN design, micro-segmentation, and firewall zoning to limit the blast radius of any breach.' },
      { icon: icons.lock, title: 'Zero Trust Network Access', desc: 'ZTNA implementation replacing VPN — identity-verified, device-checked access to resources regardless of location.' },
      { icon: icons.check, title: 'Penetration Testing Advisory', desc: 'We work with trusted pen test partners to identify exploitable vulnerabilities in your network before attackers do.' },
    ],
    aside: { title: 'Network Security Stack', items: ['FortiGate NGFW', 'Intrusion Prevention (IPS)', 'DNS Filtering', 'SSL/TLS Inspection', 'VLAN Segmentation', 'Zero Trust Network Access', 'Network Access Control', 'Wireless Security'] },
    cards: null },

  /* ── ENDPOINT SECURITY ── */
  { file: 'cyber-security/endpoint-security.html', depth: 1,
    title: 'Endpoint Security', metaDesc: '909 IT Solutions delivers endpoint security using Microsoft Defender, Intune, and EDR — protecting every device in your business.',
    eyebrow: 'Cyber Security', h1: 'Endpoint Security', heroDesc: 'Protect every workstation, laptop, and mobile device with enterprise-grade endpoint security managed from the cloud.',
    breadcrumbs: [{ label: 'Cyber Security', href: 'index.html' }, { label: 'Endpoint Security', href: '' }],
    features: [
      { icon: icons.monitor, title: 'Microsoft Defender for Endpoint', desc: 'MDE deployment, onboarding, and ongoing management — behavioural detection, automated investigation, and response.' },
      { icon: icons.settings, title: 'Intune Compliance Policies', desc: 'Device compliance policies that gate access to corporate data — non-compliant devices locked out automatically.' },
      { icon: icons.lock, title: 'Application Control', desc: 'Windows Defender Application Control and AppLocker policies to prevent unauthorised software execution.' },
      { icon: icons.shield, title: 'Endpoint Detection & Response', desc: 'EDR with 24/7 alert triage, threat hunting, and incident response — knowing what happened and stopping it from spreading.' },
    ],
    aside: { title: 'Endpoint Protection Stack', items: ['Microsoft Defender for Endpoint', 'Intune Device Compliance', 'Application Control (WDAC)', 'BitLocker Management', 'Patch & Vulnerability Mgmt', 'EDR Alerting & Triage', 'Mobile Threat Defence', 'Endpoint Analytics'] },
    cards: null },

  /* ── RISK ASSESSMENT ── */
  { file: 'cyber-security/it-cyber-security-risk-assessment.html', depth: 1,
    title: 'IT Cyber Security & Risk Assessment', metaDesc: '909 IT Solutions provides IT security risk assessments for Australian businesses — identifying gaps and prioritising remediation.',
    eyebrow: 'Cyber Security', h1: 'IT Cyber Security & Risk Assessment', heroDesc: 'A structured, independent review of your IT security posture — identifying gaps and delivering a clear remediation roadmap.',
    breadcrumbs: [{ label: 'Cyber Security', href: 'index.html' }, { label: 'IT Cyber Security & Risk Assessment', href: '' }],
    features: [
      { icon: icons.chart, title: 'Security Posture Review', desc: 'Structured assessment covering network, endpoints, identity, cloud, email, and backup — evaluated against industry frameworks.' },
      { icon: icons.lock, title: 'Vulnerability Assessment', desc: 'Authenticated vulnerability scanning of your environment to identify missing patches, misconfigurations, and exposures.' },
      { icon: icons.check, title: 'Risk Register', desc: 'A prioritised risk register with likelihood, impact, and recommended controls — written for both technical and executive audiences.' },
      { icon: icons.shield, title: 'Remediation Roadmap', desc: 'Practical, sequenced remediation plan with effort estimates and business impact — not just a list of findings.' },
    ],
    aside: { title: 'Assessment Coverage', items: ['Network Security Review', 'Identity & Access Management', 'Endpoint Security Review', 'Cloud Security Posture', 'Email & Phishing Controls', 'Backup & Recovery Review', 'Security Awareness', 'Compliance Gap Analysis'] },
    cards: null },

];

/* ─── GENERATE ─── */
let count = 0;
pages.forEach(p => {
  const html = page(p);
  const filepath = path.join(BASE, p.file);
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, html, 'utf8');
  count++;
  console.log(`✓ ${p.file}`);
});
console.log(`\n✅ Generated ${count} pages`);