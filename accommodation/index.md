---
layout: page
---

<style>
/* Accommodation Page Styles */
.accommodation-page {
  /* margin-top: -1rem; */
}

/* Section with two-column layout */
.accommodation-section {
  padding: 80px 24px;
  background: #ffffff;
}

.accommodation-section-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 60px;
  align-items: start;
}

.accommodation-section-title {
  font-size: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--aicrv-ink, #1d2035);
  margin: 0;
  font-weight: 700;
}

.accommodation-section-content p {
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
  margin: 0;
}

.accommodation-tax-note {
  margin-top: 1rem !important;
}

/* Booking Section */
.booking-section {
  padding: 0 24px 80px;
  background: #ffffff;
}

.booking-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.booking-section-title {
  font-size: 1.8rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--aicrv-ink, #1d2035);
  margin: 0 0 30px 0;
  font-weight: 700;
}

/* Room Card */
.room-card {
  background: #f8f8f9;
  border-radius: 16px;
  padding: 28px 32px;
  margin-bottom: 30px;
}

.room-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e8;
  margin-bottom: 24px;
}

.room-card-info h3 {
  font-size: 1.3rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--aicrv-ink, #1d2035);
  margin: 0 0 6px 0;
}

.room-card-info p {
  font-size: 1rem;
  color: #6b6f7b;
  margin: 0;
}

.btn-apply {
  display: inline-block;
  background: transparent;
  color: var(--aicrv-ink, #1d2035);
  padding: 10px 32px;
  border: 2px solid var(--aicrv-ink, #1d2035);
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-apply:hover {
  background: var(--aicrv-ink, #1d2035);
  color: #ffffff;
}

/* Room Features Grid */
.room-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.room-features ul {
  list-style: disc;
  padding-left: 20px;
  margin: 0;
}

.room-features ul li {
  color: #4b4f5e;
  font-size: 0.95rem;
  line-height: 1.8;
}

/* Description text below room card */
.booking-description {
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
  margin-bottom: 16px;
}

.booking-description:last-child {
  margin-bottom: 0;
}

/* Reservations Section */
.reservations-section {
  padding: 60px 24px 80px;
  background: #ffffff;
}

.reservations-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 60px;
  align-items: start;
}

.reservations-title {
  font-size: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--aicrv-ink, #1d2035);
  margin: 0;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.reservations-content p {
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
  margin: 0;
}

/* Suggestions Section */
.suggestions-section {
  padding: 0 24px 100px;
  background: #ffffff;
}

.suggestions-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.suggestions-title {
  font-size: 1.8rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--aicrv-ink, #1d2035);
  margin: 0 0 30px 0;
  font-weight: 700;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .accommodation-section-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .accommodation-section-title {
    font-size: 1.8rem;
  }

  .reservations-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .room-features {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .accommodation-section {
    padding: 50px 20px;
  }

  .accommodation-section-title {
    font-size: 1.5rem;
  }

  .booking-section {
    padding: 0 20px 60px;
  }

  .booking-section-title {
    font-size: 1.5rem;
  }

  .room-card {
    padding: 20px 24px;
  }

  .room-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .room-features {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .reservations-section {
    padding: 40px 20px 60px;
  }

  .reservations-title {
    font-size: 1.5rem;
  }

  .suggestions-section {
    padding: 0 20px 80px;
  }

  .suggestions-title {
    font-size: 1.5rem;
  }
}
</style>

<div class="accommodation-page full-bleed">
  <!-- Hero Section -->
  <section class="calls-hero aicrv-banner" style="--hero-image: url('{{ site.baseurl }}/assets/img/P13_1_101210.jpg');">
    <div class="calls-hero-media" role="img" aria-label="Accommodation"></div>
    <div class="aicrv-banner-panel" aria-hidden="true"></div>
    <div class="aicrv-banner-text">
      <h1>Canadian Conference on AI, Robots & Vision (AI/CRV) 2026</h1>
      <p class="aicrv-banner-meta">Accommodation</p>
    </div>
  </section>

  <!-- Accommodation Intro Section -->
  <section class="accommodation-section">
    <div class="accommodation-section-inner">
      <h2 class="accommodation-section-title">Accommodation</h2>
      <div class="accommodation-section-content">
        <p>Options for staying near Simon Fraser University (SFU) during AI/CRV 2026: on-campus residence, on-campus hotel, and off-campus hotel.</p>
        <p class="accommodation-tax-note"><strong>All prices below are plus applicable taxes.</strong></p>
      </div>
    </div>
  </section>

  <!-- Dorms -->
  <section class="booking-section">
    <div class="booking-inner">
      <h2 class="booking-section-title">Dorms (On-campus residence)</h2>
      <div class="room-card">
        <div class="room-card-header">
          <div class="room-card-info">
            <h3>Courtyard Residence Housing</h3>
            <p><strong>CYR Private Residence Rooms:</strong> $70.00 per night + tax</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- On-campus hotel -->
  <section class="suggestions-section">
    <div class="suggestions-inner">
      <h2 class="suggestions-title">On-campus hotel: The Simon</h2>
      <div class="room-card">
        <div class="room-card-header">
          <div class="room-card-info">
            <h3>Double Queen &amp; Queen Room</h3>
            <p>$209.00 per night + tax</p>
          </div>
        </div>
      </div>
      <div class="room-card">
        <div class="room-card-header">
          <div class="room-card-info">
            <h3>Kitchenette Room</h3>
            <p>$234.00 per night + tax</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Off-campus hotel -->
  <section class="booking-section">
    <div class="booking-inner">
      <h2 class="booking-section-title">Off-campus hotel</h2>
      <div class="room-card">
        <div class="room-card-header">
          <div class="room-card-info">
            <h3>Executive Plaza Hotel</h3>
            <p>Price to be confirmed.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
