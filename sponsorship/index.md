---
layout: page
---

<style>
/* Sponsorship Page Styles */
.sponsorship-page {
  /* margin-top: -1rem; */
}

/* Hero Section */
.sponsorship-hero {
  position: relative;
  min-height: 640px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.sponsorship-hero-media {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(120deg, rgba(10, 14, 26, 0.15), rgba(10, 14, 26, 0.08)), url('{{ site.baseurl }}/assets/img/P12_1_sponsorship.jpg');
  background-size: cover;
  background-position: center;
}

.sponsorship-hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.sponsorship-hero-card {
  max-width: 520px;
  background: rgba(192, 49, 95, 0.82);
  color: #ffffff;
  padding: 32px 36px;
  border-radius: 14px;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.25);
}

.sponsorship-hero-card h1 {
  font-size: 2.2rem;
  margin-bottom: 8px;
  font-family: 'Space Grotesk', sans-serif;
}

.sponsorship-hero-subtitle {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.95;
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
  grid-template-columns: repeat(3, 1fr);
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
  .sponsorship-hero {
    min-height: 360px;
  }

  .sponsorship-hero-card {
    padding: 24px 28px;
  }

  .sponsorship-hero-card h1 {
    font-size: 1.6rem;
  }

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
  <section class="sponsorship-hero">
    <div class="sponsorship-hero-media"></div>
    <div class="sponsorship-hero-inner">
      <div class="sponsorship-hero-card">
        <h1>Canadian AI/Robots & Vision Conference 2026</h1>
        <p class="sponsorship-hero-subtitle">Sponsorship</p>
      </div>
    </div>
  </section>

  <!-- Become A Sponsor Section -->
  <section class="become-sponsor-section">
    <div class="become-sponsor-inner">
      <h2 class="become-sponsor-title">Become A Sponsor</h2>
      <div class="become-sponsor-content">
        <p>Join us in supporting the Canadian AI/Robots & Vision Conference 2026. Your sponsorship helps bring together researchers, industry leaders, and students to advance the fields of artificial intelligence, robotics, and computer vision. Connect with top talent, showcase your organization, and contribute to cutting-edge research initiatives.</p>
        <a href="mailto:sponsor@ai-crv.ca?subject=Sponsorship Inquiry" class="btn-contact">Contact Us</a>
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
          <p class="tier-description">Our premier sponsorship tier offering maximum visibility and engagement. Diamond sponsors receive exclusive naming rights, keynote speaking opportunities, premium booth placement, logo on all conference materials, dedicated networking sessions with researchers, and first access to recruiting top talent.</p>
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
          <p class="tier-description">Platinum sponsors enjoy prominent brand visibility with logo placement on conference website and materials, speaking opportunity at a workshop session, premium booth space, social media recognition, and access to exclusive networking events with industry leaders and researchers.</p>
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
          <p class="tier-description">Gold sponsors receive excellent exposure with logo on conference website, booth space in the exhibition area, opportunity to distribute promotional materials, recognition in conference program, and complimentary conference registrations for your team members.</p>
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
          <p class="tier-description">Silver sponsors are recognized with logo placement on the conference website, listing in the conference program, social media mentions, opportunity to include materials in attendee welcome bags, and complimentary conference registrations.</p>
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
          <p class="tier-description">Bronze sponsors receive recognition with logo on the conference website, acknowledgment during conference sessions, social media recognition, and complimentary conference registration to attend and network with attendees.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Meet Our Sponsor Partners -->
  <section class="sponsors-partners-section">
    <div class="sponsors-partners-inner">
      <h2 class="sponsors-partners-title">Meet Our Sponsor Partners</h2>
      <div class="sponsors-logo-grid">
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
        <div class="sponsor-logo-card">
          <!-- Sponsor logo placeholder -->
        </div>
      </div>
      <div class="sponsors-partners-cta">
        <a href="mailto:sponsor@ai-crv.ca?subject=Sponsorship Inquiry">Become a Sponsor <span>›</span></a>
      </div>
    </div>
  </section>
</div>
