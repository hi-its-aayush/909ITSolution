(function () {
  const depth = (document.body.dataset.depth || '0') | 0;
  const root  = depth === 0 ? './' : '../'.repeat(depth);

  const nav = `
<nav id="site-nav">
  <div class="container">
    <div class="nav-inner">
      <a href="${root}index.html" class="nav-logo">909<span>IT</span></a>

      <ul class="nav-links">
        <li class="nav-item"><a href="${root}index.html" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="${root}about-us.html" class="nav-link">About Us</a></li>

        <li class="nav-item">
          <a class="nav-link" tabindex="0">Services<svg class="nav-caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></a>
          <div class="nav-dropdown">
            <div class="dropdown-grid">

              <!-- COL 1: MICROSOFT STACK -->
              <div class="dropdown-col">
                <h6 style="color:var(--red);border-bottom-color:rgba(227,27,35,0.2);">
                  Microsoft Stack
                  <span style="display:inline-block;margin-left:6px;font-size:9px;background:var(--red);color:#fff;padding:1px 6px;border-radius:2px;letter-spacing:0.06em;vertical-align:middle;">CORE</span>
                </h6>
                <ul>
                  <li><a href="${root}modern-workplace/microsoft-365-business.html">Microsoft 365 Business</a></li>
                  <li><a href="${root}modern-workplace/microsoft-intune.html">Microsoft Intune</a></li>
                  <li><a href="${root}modern-workplace/microsoft-teams.html">Microsoft Teams</a></li>
                  <li><a href="${root}modern-workplace/microsoft-teams-calling.html">Teams Calling</a></li>
                  <li><a href="${root}microsoft-azure-aws/microsoft-azure-consultants.html">Azure Consultants</a></li>
                  <li><a href="${root}microsoft-azure-aws/azure-cloud-infrastructure.html">Azure Cloud Infrastructure</a></li>
                  <li><a href="${root}d365-power-platform/dynamics-365.html">Dynamics 365</a></li>
                  <li><a href="${root}microsoft-azure-aws/microsoft-sentinel.html">Microsoft Sentinel</a></li>
                </ul>
              </div>

              <!-- COL 2: AI & AUTOMATION -->
              <div class="dropdown-col">
                <h6 style="color:var(--red);border-bottom-color:rgba(227,27,35,0.2);">
                  AI &amp; Automation
                  <span style="display:inline-block;margin-left:6px;font-size:9px;background:var(--red);color:#fff;padding:1px 6px;border-radius:2px;letter-spacing:0.06em;vertical-align:middle;">CORE</span>
                </h6>
                <ul>
                  <li><a href="${root}d365-power-platform/power-automate.html">Power Automate</a></li>
                  <li><a href="${root}quickrpa.html">QuickRPA</a></li>
                  <li><a href="${root}d365-power-platform/power-apps.html">Power Apps</a></li>
                  <li><a href="${root}d365-power-platform/power-virtual-agent.html">Copilot Studio</a></li>
                  <li><a href="${root}d365-power-platform/power-bi.html">Power BI</a></li>
                  <li><a href="${root}devops/azure-devops.html">Azure DevOps</a></li>
                  <li><a href="${root}devops/aws-devops.html">AWS DevOps</a></li>
                </ul>
              </div>

              <!-- COL 3: SECURITY & NETWORK -->
              <div class="dropdown-col">
                <h6 style="color:var(--red);border-bottom-color:rgba(227,27,35,0.2);">
                  Security &amp; Network
                  <span style="display:inline-block;margin-left:6px;font-size:9px;background:var(--red);color:#fff;padding:1px 6px;border-radius:2px;letter-spacing:0.06em;vertical-align:middle;">CORE</span>
                </h6>
                <ul>
                  <li><a href="${root}infrastructure-hybrid/fortinet-secure-sd-wan.html">FortiGate Firewall</a></li>
                  <li><a href="${root}infrastructure-hybrid/sd-wan-solutions.html">SD-WAN Solutions</a></li>
                  <li><a href="${root}infrastructure-hybrid/azure-hybrid-cloud.html">Azure Hybrid Cloud</a></li>
                  <li><a href="${root}cyber-security/index.html">Cyber Security</a></li>
                  <li><a href="${root}cyber-security/cloud-security.html">Cloud Security</a></li>
                  <li><a href="${root}cyber-security/network-security.html">Network Security</a></li>
                  <li><a href="${root}cyber-security/endpoint-security.html">Endpoint Security</a></li>
                  <li><a href="${root}cyber-security/it-cyber-security-risk-assessment.html">Risk Assessment</a></li>
                </ul>
              </div>

              <!-- COL 4: ALL OTHER SERVICES -->
              <div class="dropdown-col">
                <h6>All Other Services</h6>
                <ul>
                  <li><a href="${root}managed-it-services.html">Managed IT Services</a></li>
                  <li><a href="${root}small-business-it-support.html">Small Business IT</a></li>
                  <li><a href="${root}network-solutions.html">Network Solutions</a></li>
                  <li><a href="${root}microsoft-azure-aws/aws-cloud-infrastructure.html">AWS Cloud</a></li>
                  <li><a href="${root}medical-it-support/index.html">Medical IT Support</a></li>
                  <li><a href="${root}professional-services/it-consulting.html">IT Consulting</a></li>
                  <li><a href="${root}professional-services/cio-as-a-service.html">CIO-as-a-Service</a></li>
                  <li><a href="${root}professional-services/project-services.html">Project Services</a></li>
                </ul>
              </div>

            </div>
          </div>
        </li>

        <li class="nav-item"><a href="${root}quickrpa.html" class="nav-link">QuickRPA</a></li>
        <li class="nav-item"><a href="${root}blog.html" class="nav-link">Blog</a></li>
        <li class="nav-item"><a href="${root}contact-us.html" class="nav-link">Contact Us</a></li>
      </ul>

      <button class="hamburger-btn" aria-label="Toggle navigation menu" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <div class="nav-actions">
        <a href="https://www.909itacademy.com.au/" target="_blank" rel="noopener" class="nav-academy-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          909 Academy
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ext-icon"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
        </a>
        <a href="tel:0291457230" class="nav-phone">02 9145 7230</a>
        <a href="${root}contact-us.html" class="btn btn-primary">Get in Touch</a>
      </div>
    </div>
  </div>
</nav>`;

  const footer = `
<footer id="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${root}index.html" class="footer-logo">909<span>IT</span></a>
        <p>Certified Microsoft, AI Automation and Fortinet specialists helping Australian businesses in Healthcare, Construction, and Retail simplify IT and build for the future.</p>
        <div class="footer-contact">
          <a href="tel:0291457230">02 9145 7230</a>
          <a href="mailto:hello@909it.com.au">hello@909it.com.au</a>
          <a>Unit 2 GF 5-7 Parkes St, Parramatta NSW 2150</a>
        </div>
        <div style="margin-top:20px;">
          <a href="https://www.909itacademy.com.au/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--red);font-family:'Outfit',sans-serif;font-weight:600;border:1px solid rgba(227,27,35,0.3);padding:8px 14px;border-radius:var(--radius);transition:background 0.2s;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            909 IT Academy &nbsp;&rarr;
          </a>
          <p style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:8px;line-height:1.5;">Producing top quality industry experts<br>via our sister organisation.</p>
        </div>
      </div>
      <div class="footer-col">
        <h5>Microsoft Stack</h5>
        <ul>
          <li><a href="${root}modern-workplace/microsoft-365-business.html">Microsoft 365</a></li>
          <li><a href="${root}microsoft-azure-aws/azure-cloud-infrastructure.html">Azure Cloud</a></li>
          <li><a href="${root}d365-power-platform/dynamics-365.html">Dynamics 365</a></li>
          <li><a href="${root}modern-workplace/microsoft-intune.html">Intune</a></li>
          <li><a href="${root}modern-workplace/microsoft-teams.html">Teams</a></li>
          <li><a href="${root}microsoft-azure-aws/microsoft-sentinel.html">Sentinel</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Security &amp; Network</h5>
        <ul>
          <li><a href="${root}infrastructure-hybrid/fortinet-secure-sd-wan.html">FortiGate Firewall</a></li>
          <li><a href="${root}infrastructure-hybrid/sd-wan-solutions.html">SD-WAN</a></li>
          <li><a href="${root}cyber-security/index.html">Cyber Security</a></li>
          <li><a href="${root}cyber-security/network-security.html">Network Security</a></li>
          <li><a href="${root}cyber-security/endpoint-security.html">Endpoint Security</a></li>
          <li><a href="${root}managed-it-services.html">Managed IT</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="${root}about-us.html">About Us</a></li>
          <li><a href="${root}blog.html">Blog</a></li>
          <li><a href="${root}contact-us.html">Contact Us</a></li>
          <li><a href="${root}quickrpa.html">QuickRPA</a></li>
          <li><a href="${root}medical-it-support/index.html">Medical IT</a></li>
          <li><a href="https://www.909itacademy.com.au/" target="_blank" rel="noopener">909 IT Academy ↗</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} 909 IT Solutions Pty Ltd. All rights reserved.</p>
      <div class="footer-badges">
        <span class="footer-badge red">Microsoft Partner</span>
        <span class="footer-badge">Fortinet Partner</span>
        <span class="footer-badge">Sydney &amp; Canberra</span>
      </div>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Favicon
  const head = document.head;
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = root + 'favicon.svg';
  head.appendChild(favicon);

  // Open Graph & Twitter meta tags
  const pageTitle = document.title || '909 IT Solutions';
  const metaDesc = document.querySelector('meta[name="description"]');
  const description = metaDesc ? metaDesc.content : '';
  const ogTags = [
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: '909 IT Solutions' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://909it.com.au/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://909it.com.au/og-image.png' }
  ];
  ogTags.forEach(tag => {
    const meta = document.createElement('meta');
    if (tag.property) meta.setAttribute('property', tag.property);
    if (tag.name) meta.setAttribute('name', tag.name);
    meta.content = tag.content;
    head.appendChild(meta);
  });

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile hamburger menu
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  const siteNav = document.querySelector('#site-nav');

  if (hamburgerBtn && navLinks) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
      const isOpen = navLinks.classList.toggle('mobile-open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      overlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
        toggleMenu();
      }
    });

    // Mobile dropdown toggles
    navLinks.querySelectorAll('.nav-item').forEach(item => {
      const dropdown = item.querySelector('.nav-dropdown, .nav-dropdown-sm');
      const link = item.querySelector('.nav-link');
      if (dropdown && link) {
        link.addEventListener('click', e => {
          if (window.innerWidth <= 860) {
            e.preventDefault();
            // Close other open items
            navLinks.querySelectorAll('.nav-item.mobile-dropdown-open').forEach(other => {
              if (other !== item) other.classList.remove('mobile-dropdown-open');
            });
            item.classList.toggle('mobile-dropdown-open');
          }
        });
      }
    });

    // Close menu on window resize past mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && navLinks.classList.contains('mobile-open')) {
        toggleMenu();
      }
    });
  }
})();
