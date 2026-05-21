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
