---
layout: page
---

<style>
/* Accommodation Page Styles */
.accommodation-page {
  margin-top: -1rem;
}

/* Hero Section */
.accommodation-hero {
  position: relative;
  min-height: 460px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.accommodation-hero-media {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(120deg, rgba(10, 14, 26, 0.15), rgba(10, 14, 26, 0.08)), url('{{ site.baseurl }}/assets/img/P13_1_101210.jpg');
  background-size: cover;
  background-position: center;
}

.accommodation-hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.accommodation-hero-card {
  max-width: 520px;
  background: rgba(192, 49, 95, 0.82);
  color: #ffffff;
  padding: 32px 36px;
  border-radius: 14px;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.25);
}

.accommodation-hero-card h1 {
  font-size: 2.2rem;
  margin-bottom: 8px;
  font-family: 'Space Grotesk', sans-serif;
}

.accommodation-hero-subtitle {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.95;
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
  .accommodation-hero {
    min-height: 360px;
  }

  .accommodation-hero-card {
    padding: 24px 28px;
  }

  .accommodation-hero-card h1 {
    font-size: 1.6rem;
  }

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
  <section class="accommodation-hero">
    <div class="accommodation-hero-media"></div>
    <div class="accommodation-hero-inner">
      <div class="accommodation-hero-card">
        <h1>Canadian AI/Robots & Vision Conference 2026</h1>
        <p class="accommodation-hero-subtitle">Accommodation</p>
      </div>
    </div>
  </section>

  <!-- Accommodation Intro Section -->
  <section class="accommodation-section">
    <div class="accommodation-section-inner">
      <h2 class="accommodation-section-title">Accommodation</h2>
      <div class="accommodation-section-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </section>

  <!-- Online Booking Instructions Section -->
  <section class="booking-section">
    <div class="booking-inner">
      <h2 class="booking-section-title">Online Booking Instructions</h2>

      <!-- Room Card -->
      <div class="room-card">
        <div class="room-card-header">
          <div class="room-card-info">
            <h3>Room Type</h3>
            <p>$000.00 per night - Single/Double</p>
          </div>
          <a href="#" class="btn-apply">Apply</a>
        </div>
        <div class="room-features">
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
            <li>sed do eiusmod tempor incididunt</li>
            <li>ut labore et dolore magna aliqua</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
            <li>sed do eiusmod tempor incididunt</li>
            <li>ut labore et dolore magna aliqua</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
            <li>sed do eiusmod tempor incididunt</li>
            <li>ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </div>

      <p class="booking-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class="booking-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>

  <!-- Reservations Section -->
  <section class="reservations-section">
    <div class="reservations-inner">
      <h2 class="reservations-title">Reservations</h2>
      <div class="reservations-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </section>

  <!-- Accommodation Suggestions Section -->
  <section class="suggestions-section">
    <div class="suggestions-inner">
      <h2 class="suggestions-title">Accommodation Suggestions</h2>

      <!-- Room Card -->
      <div class="room-card">
        <div class="room-card-header">
          <div class="room-card-info">
            <h3>Room Type</h3>
            <p>$000.00 per night - Single/Double</p>
          </div>
          <a href="#" class="btn-apply">Apply</a>
        </div>
        <div class="room-features">
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
            <li>sed do eiusmod tempor incididunt</li>
            <li>ut labore et dolore magna aliqua</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
            <li>sed do eiusmod tempor incididunt</li>
            <li>ut labore et dolore magna aliqua</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
            <li>sed do eiusmod tempor incididunt</li>
            <li>ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </div>

      <p class="booking-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class="booking-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>
</div>
