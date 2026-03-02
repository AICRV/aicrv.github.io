---
layout: page
---

<style>
/* Sponsorship Page Styles */
.sponsorship-page {
  /* margin-top: -1rem; */
}

/* Become A Sponsor Section */
.become-sponsor-section {
  padding: 80px 24px;
  background: #ffffff;
}

.become-sponsor-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 60px;
  align-items: center;
}

.become-sponsor-title {
  font-size: 2.4rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--aicrv-ink, #1d2035);
  margin: 0;
  font-weight: 700;
}

.become-sponsor-content p {
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
  margin-bottom: 24px;
}

.become-sponsor-content .btn-contact {
  display: inline-block;
  background: var(--aicrv-ink, #1d2035);
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s ease;
}

.become-sponsor-content .btn-contact:hover {
  background: #2d3052;
  color: #ffffff;
}

/* Tiers Section */
.tiers-section {
  padding: 60px 24px 80px;
  background: #ffffff;
}

.tiers-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* Individual Tier Card - Alternating Layout */
.tier-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 60px;
}

.tier-row:last-child {
  margin-bottom: 0;
}

.tier-row.reverse .tier-image {
  order: 2;
}

.tier-row.reverse .tier-content {
  order: 1;
}

.tier-image {
  position: relative;
}

.tier-image img {
  width: 100%;
  max-width: 380px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  display: block;
}

.tier-content {
  padding: 10px 0;
}

.tier-header {
  display: flex;
  align-items: baseline;
  gap: 18px;
  margin-bottom: 18px;
}

.tier-name {
  font-size: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--aicrv-ink, #1d2035);
  margin: 0;
}

.tier-price {
  font-size: 1.4rem;
  color: #6b6f7b;
  font-weight: 500;
}

.tier-description {
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
}

.tier-list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 1rem 0;
}

.tier-list li {
  position: relative;
  padding-left: 1.25em;
  margin-bottom: 0.5em;
  color: #4b4f5e;
  line-height: 1.6;
}

.tier-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--aicrv-ink, #1d2035);
}

/* Sponsors Partners Section */
.sponsors-partners-section {
  background: var(--aicrv-pink, #c0315f);
  padding: 70px 24px 80px;
  color: #ffffff;
}

.sponsors-partners-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.sponsors-partners-title {
  font-size: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
}

.sponsors-logo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}

.sponsor-logo-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.sponsor-logo-card img {
  max-width: 80%;
  max-height: 60px;
  object-fit: contain;
}

.sponsors-partners-cta {
  text-align: right;
  margin-top: 20px;
}

.sponsors-partners-cta a {
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.sponsors-partners-cta a:hover {
  text-decoration: underline;
  color: #ffffff;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .become-sponsor-inner {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .become-sponsor-title {
    font-size: 2rem;
  }

  .tier-row {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .tier-row.reverse .tier-image,
  .tier-row.reverse .tier-content {
    order: 0;
  }

  .tier-image {
    text-align: center;
  }

  .tier-image img {
    max-width: 320px;
    margin: 0 auto;
  }

  .tier-header {
    justify-content: center;
    flex-wrap: wrap;
  }

  .tier-content {
    text-align: center;
  }

  .sponsors-logo-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sponsors-partners-cta {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .become-sponsor-section {
    padding: 50px 20px;
  }

  .become-sponsor-title {
    font-size: 1.7rem;
  }

  .tiers-section {
    padding: 40px 20px 60px;
  }

  .tier-name {
    font-size: 1.6rem;
  }

  .tier-price {
    font-size: 1.2rem;
  }

  .sponsors-logo-grid {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .sponsor-logo-card {
    height: 80px;
  }
}
</style>

<div class="sponsorship-page full-bleed">
  <!-- Hero Section -->
  <section class="calls-hero aicrv-banner" style="--hero-image: url('{{ site.baseurl }}/assets/img/P12_1_sponsorship.jpg');">
    <div class="calls-hero-media" role="img" aria-label="Sponsorship"></div>
    <div class="aicrv-banner-panel" aria-hidden="true"></div>
    <div class="aicrv-banner-text">
      <h1>Canadian Conference on AI, Robots &amp; Vision (AI/CRV) 2026</h1>
      <p class="aicrv-banner-meta">Sponsorship</p>
    </div>
  </section>

  <!-- Become A Sponsor Section -->
  <section class="become-sponsor-section">
    <div class="become-sponsor-inner">
      <h2 class="become-sponsor-title">Become A Sponsor</h2>
      <div class="become-sponsor-content">
        <p>Join us in supporting the Canadian Conference on AI, Robots &amp; Vision (AI/CRV) 2026. Your sponsorship helps bring together researchers, industry leaders, and students to advance the fields of artificial intelligence, robotics, and computer vision. Connect with top talent, showcase your organization, and contribute to cutting-edge research initiatives.</p>
        <a href="mailto:aicrv2026sponsorship@googlegroups.com?subject=Sponsorship Inquiry" class="btn-contact">Contact Us</a>
      </div>
    </div>
  </section>

  <!-- Sponsorship Tiers -->
  <section class="tiers-section">
    <div class="tiers-inner">
      <!-- Diamond Tier -->
      <div class="tier-row">
        <div class="tier-image">
          <img src="{{ site.baseurl }}/assets/img/P12_2_1_diamond.png" alt="Diamond Sponsorship">
        </div>
        <div class="tier-content">
          <div class="tier-header">
            <h3 class="tier-name">Diamond</h3>
            <span class="tier-price">$20,000</span>
          </div>
          <ul class="tier-list">
            <li>4 full registrations</li>
            <li>Opportunity to give a 5-minute talk at the banquet</li>
            <li>Display a 1-minute promo video during welcome reception or banquet</li>
            <li>Dedicated table at welcome reception with sponsor branding</li>
            <li>Opportunity to contribute content to the official conference newsletter</li>
            <li>Official recognition during welcome reception and banquet</li>
            <li>Display one roll-up stand at reception, main conference rooms and registration desk</li>
            <li>Premium exhibition space at prime location during poster sessions with the largest space and priority placement</li>
            <li>Opportunity to arrange a recruiting lunch with top talents (catering costs passed on to the sponsor)</li>
            <li>Opportunity to speak on an industry panel</li>
            <li>Logo on the Canadian AI/CRV 2026 conference website</li>
            <li>Access to a private meeting room during the main conference</li>
            <li>License to use the "Official Conference Sponsor" label</li>
            <li>Welcome reception sponsorship package included</li>
            <li>Coffee break sponsorship package included</li>
            <li>Conference Lanyard Co-Branding (Diamond sponsors' logos printed on attendee lanyards)</li>
          </ul>
        </div>
      </div>

      <!-- Platinum Tier -->
      <div class="tier-row reverse">
        <div class="tier-image">
          <img src="{{ site.baseurl }}/assets/img/P12_2_2_platinum.png" alt="Platinum Sponsorship">
        </div>
        <div class="tier-content">
          <div class="tier-header">
            <h3 class="tier-name">Platinum</h3>
            <span class="tier-price">$10,000</span>
          </div>
          <ul class="tier-list">
            <li>3 full registrations</li>
            <li>Display a 1-minute promotional video during welcome reception or banquet</li>
            <li>Dedicated table at welcome reception with sponsor branding</li>
            <li>Official recognition during welcome reception and banquet</li>
            <li>Display one roll-up stand at welcome reception, main conference rooms, and registration desk</li>
            <li>Large exhibition space during poster sessions</li>
            <li>Opportunity to arrange a recruiting lunch with top talents (catering costs passed on to the sponsor)</li>
            <li>Opportunity to speak on an industry panel</li>
            <li>Logo on the Canadian AI/CRV 2026 conference website</li>
            <li>Access to a private meeting room during the main conference</li>
            <li>License to use the "Official Conference Sponsor" label</li>
            <li>Coffee break sponsorship package included</li>
          </ul>
        </div>
      </div>

      <!-- Gold Tier -->
      <div class="tier-row">
        <div class="tier-image">
          <img src="{{ site.baseurl }}/assets/img/P12_2_3_gold.png" alt="Gold Sponsorship">
        </div>
        <div class="tier-content">
          <div class="tier-header">
            <h3 class="tier-name">Gold</h3>
            <span class="tier-price">$5,000</span>
          </div>
          <ul class="tier-list">
            <li>2 full registrations</li>
            <li>Official recognition during welcome reception and banquet</li>
            <li>Display one roll-up stand at registration desk</li>
            <li>Exhibition space during poster sessions</li>
            <li>Logo on the Canadian AI/CRV 2026 conference website</li>
            <li>License to use the "Official Conference Sponsor" label</li>
          </ul>
        </div>
      </div>

      <!-- Silver Tier -->
      <div class="tier-row reverse">
        <div class="tier-image">
          <img src="{{ site.baseurl }}/assets/img/P12_2_4_silver.png" alt="Silver Sponsorship">
        </div>
        <div class="tier-content">
          <div class="tier-header">
            <h3 class="tier-name">Silver</h3>
            <span class="tier-price">$3,000</span>
          </div>
          <ul class="tier-list">
            <li>1 full registration</li>
            <li>Official recognition during welcome reception and banquet</li>
            <li>Display one roll-up stand at registration desk</li>
            <li>Logo on the Canadian AI/CRV 2026 conference website</li>
            <li>License to use the "Official Conference Sponsor" label</li>
          </ul>
        </div>
      </div>

      <!-- Bronze Tier -->
      <div class="tier-row">
        <div class="tier-image">
          <img src="{{ site.baseurl }}/assets/img/P12_2_5_bronze.png" alt="Bronze Sponsorship">
        </div>
        <div class="tier-content">
          <div class="tier-header">
            <h3 class="tier-name">Bronze</h3>
            <span class="tier-price">$1,500</span>
          </div>
          <ul class="tier-list">
            <li>Official recognition during welcome reception and banquet</li>
            <li>Logo on the Canadian AI/CRV 2026 conference website</li>
            <li>License to use the "Official Conference Sponsor" label</li>
          </ul>
        </div>
      </div>

      <!-- Additional Opportunities -->
      <div class="tier-row" style="margin-top: 48px; padding-top: 48px; border-top: 1px solid #e6e7ef;">
        <div class="tier-content" style="grid-column: 1 / -1;">
          <h3 class="tier-name mb-3">Additional Opportunities</h3>
          <p class="tier-description mb-1"><strong>Prize Sponsorship</strong></p>
          <ul class="tier-list">
            <li>Best Paper Award ($2,000)</li>
            <li>Best Student Paper Award ($1,500)</li>
          </ul>
          <p class="tier-description mb-1 mt-3"><strong>Keynote Sponsor</strong> — $3,500</p>
          <ul class="tier-list">
            <li>Official recognition and display of sponsor logo at the start of keynote talk</li>
          </ul>
          <p class="tier-description mb-1 mt-3"><strong>Welcome Reception Sponsor</strong> — $2,500</p>
          <ul class="tier-list">
            <li>Space for one piece of advertising material (roll-ups, brochures etc.) during ice breaker</li>
            <li>Prominent display of the logo during the reception</li>
          </ul>
          <p class="tier-description mb-1 mt-3"><strong>Coffee Break Sponsor</strong> — $1,000</p>
          <ul class="tier-list">
            <li>Space for one piece of advertising material (folder, brochures etc.) during a coffee break of your choice</li>
            <li>Prominent display of the logo during the break</li>
          </ul>
          <p class="tier-description mb-1 mt-4"><strong>Early Bird Offers</strong></p>
          <p class="tier-description">Sponsor us before November 30th, 2025, to save 15% with our early bird rates.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Full PDF Brochure -->
  <section class="become-sponsor-section" style="padding-top: 40px;">
    <div class="tiers-inner">
      <h2 class="become-sponsor-title" style="text-align: center; margin-bottom: 24px;">Full Sponsorship Brochure</h2>
      <p style="text-align: center; margin-bottom: 24px; color: #4b4f5e;">View or download the complete sponsorship package.</p>
      <div style="max-width: 900px; margin: 0 auto;">
        <object data="{{ site.baseurl }}/assets/pdf/sponsorship.pdf" type="application/pdf" width="100%" height="800" style="border-radius: 12px; border: 1px solid #e6e7ef;">
          <p>Your browser does not support PDF embedding. <a href="{{ site.baseurl }}/assets/pdf/sponsorship.pdf" target="_blank" rel="noopener">Download the PDF</a>.</p>
        </object>
      </div>
    </div>
  </section>

  <!-- Meet Our Sponsor Partners -->
  <section class="sponsors-partners-section">
    <div class="sponsors-partners-inner">
      <h2 class="sponsors-partners-title">Meet Our Sponsor Partners</h2>
      <div class="sponsors-logo-grid">
        <a class="sponsor-logo-card" href="https://vectorinstitute.ai" target="_blank" rel="noopener" title="Vector Institute" style="text-decoration: none;">
          <img src="{{ site.baseurl }}/assets/img/sponsors/vector.png" alt="Vector Institute" style="max-width: 80%; max-height: 60px; object-fit: contain;">
        </a>
        <a class="sponsor-logo-card" href="https://www.dobot-robots.com" target="_blank" rel="noopener" title="Dobot" style="text-decoration: none;">
          <img src="{{ site.baseurl }}/assets/img/sponsors/dobot.svg" alt="Dobot" style="max-width: 80%; max-height: 60px; object-fit: contain;">
        </a>
        <a class="sponsor-logo-card" href="https://wayve.ai" target="_blank" rel="noopener" title="Wayve" style="text-decoration: none;">
          <img src="{{ site.baseurl }}/assets/img/sponsors/wayve.svg" alt="Wayve" style="max-width: 80%; max-height: 60px; object-fit: contain;">
        </a>
        <a class="sponsor-logo-card" href="https://www.rbc.com" target="_blank" rel="noopener" title="RBC" style="text-decoration: none;">
          <img src="{{ site.baseurl }}/assets/img/sponsors/rbc.svg" alt="RBC" style="max-width: 80%; max-height: 60px; object-fit: contain;">
        </a>
      </div>
      <div class="sponsors-partners-cta">
        <a href="mailto:aicrv2026sponsorship@googlegroups.com?subject=Sponsorship Inquiry">Become a Sponsor <span>›</span></a>
      </div>
    </div>
  </section>
</div>
