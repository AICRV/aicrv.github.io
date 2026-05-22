---
layout: page
title: Venue and Transportation
---

<style>
/* Venue and Transportation Page Styles */
.venue-page {
  /* margin-top: -1rem; */
}

.venue-section {
  padding: 80px 24px;
  background: #ffffff;
}

.venue-section-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 60px;
  align-items: start;
}

.venue-section-title {
  font-size: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--aicrv-ink, #1d2035);
  margin: 0;
  font-weight: 700;
}

.venue-section-content p {
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
  margin: 0 0 12px 0;
}

.venue-section-content p:last-child {
  margin-bottom: 0;
}

.venue-section-content ul {
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
  padding-left: 22px;
  margin: 8px 0 0 0;
}

.venue-section-content ul li {
  margin-bottom: 4px;
}

.venue-section-content a {
  color: #0563c1;
  text-decoration: underline;
}

.venue-block {
  padding: 0 24px 60px;
  background: #ffffff;
}

.venue-block-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.venue-block-title {
  font-size: 1.8rem;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--aicrv-ink, #1d2035);
  margin: 0 0 24px 0;
  font-weight: 700;
}

.venue-summary-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}

.venue-summary-table th,
.venue-summary-table td {
  border: 1px solid #d8d8de;
  padding: 14px 18px;
  text-align: left;
  color: #1d2035;
}

.venue-summary-table th {
  background: #f8f8f9;
  font-weight: 700;
  width: 40%;
}

.venue-map-figure {
  margin: 0 0 28px 0;
}

.venue-map-figure img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid #e6e7ef;
}

.venue-map-caption {
  font-size: 0.9rem;
  color: #6b6f7b;
  margin-top: 10px;
  font-style: italic;
  text-align: center;
}

.shuttle-schedule {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 8px;
}

.shuttle-schedule th,
.shuttle-schedule td {
  border: 1px solid #d8d8de;
  padding: 14px 18px;
  text-align: left;
  color: #1d2035;
  vertical-align: top;
}

.shuttle-schedule th {
  background: #1d2035;
  color: #ffffff;
  font-weight: 700;
}

.venue-cta {
  margin: 18px 0 0;
}

.venue-cta a {
  display: inline-block;
  background: transparent;
  color: var(--aicrv-ink, #1d2035);
  padding: 10px 28px;
  border: 2px solid var(--aicrv-ink, #1d2035);
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.venue-cta a:hover {
  background: var(--aicrv-ink, #1d2035);
  color: #ffffff;
}

.venue-links {
  margin-top: 12px;
  color: #4b4f5e;
  line-height: 1.75;
  font-size: 1rem;
}

.venue-links a {
  color: #0563c1;
  text-decoration: underline;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .venue-section-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .venue-section-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 600px) {
  .venue-section {
    padding: 50px 20px;
  }

  .venue-section-title {
    font-size: 1.5rem;
  }

  .venue-block {
    padding: 0 20px 40px;
  }

  .venue-block-title {
    font-size: 1.4rem;
  }

  .venue-summary-table th,
  .venue-summary-table td,
  .shuttle-schedule th,
  .shuttle-schedule td {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
}
</style>

<div class="venue-page full-bleed">
  <!-- Hero Section -->
  <section class="calls-hero aicrv-banner" style="--hero-image: url('{{ site.baseurl }}/assets/img/P1_1_100923.jpg');">
    <div class="calls-hero-media" role="img" aria-label="Venue and Transportation"></div>
    <div class="aicrv-banner-panel" aria-hidden="true"></div>
    <div class="aicrv-banner-text">
      <h1>Canadian Conference on AI, Robots &amp; Vision (AI/CRV) 2026</h1>
      <p class="aicrv-banner-meta">Venue and Transportation</p>
    </div>
  </section>

  <!-- Intro -->
  <section class="venue-section">
    <div class="venue-section-inner">
      <h2 class="venue-section-title">AI/CRV 2026 Venue and Transportation Guide</h2>
      <div class="venue-section-content">
        <p><em>Simon Fraser University, Burnaby Campus</em></p>
        <table class="venue-summary-table">
          <tbody>
            <tr>
              <th>Campus</th>
              <td>SFU Burnaby campus / SFU Transit Exchange</td>
            </tr>
            <tr>
              <th>On-Campus Accommodation</th>
              <td>Courtyard Residence / The Simon</td>
            </tr>
            <tr>
              <th>Off-Campus Hotel</th>
              <td>Executive Plaza Hotel Coquitlam, 405 North Road</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Venue map -->
  <section class="venue-block">
    <div class="venue-block-inner">
      <h2 class="venue-block-title">Venue map</h2>
      <figure class="venue-map-figure">
        <img src="{{ site.baseurl }}/assets/img/venue/venue-map.png" alt="AI/CRV 2026 venue map of SFU Burnaby Campus" />
      </figure>
      <div class="venue-section-content">
        <ul>
          <li>AI main room: Diamond Family Auditorium</li>
          <li>CRV main room: SUB Ballroom 5000</li>
          <li>Registration desk: AQ North Corridor (Monday), Diamond Family Auditorium (Tuesday – Friday)</li>
          <li>Other venue areas:
            <ul>
              <li>Student Union Building (SUB 4200 and SUB Ballroom 5000)</li>
              <li>Halpern Centre</li>
              <li>BLU 10011</li>
              <li>Big Data Hub (ASB 10900)</li>
              <li>Monday workshops and special tracks: Halpern Centre 126/114, SUB 4200, BLU 10011, and ASB 10900.</li>
            </ul>
          </li>
          <li>Lunches are at Dining Commons. On-campus accommodations include Courtyard Residence / The Simon.</li>
          <li>Poster printing: Cornerstone, marked with the blue dot on the map.</li>
          <li>Shuttle pickup/dropoff: marked near the Transportation Centre / Halpern Centre area.</li>
          <li>Program details: <a href="https://www.ai-crv.ca/#program">View the full schedule</a></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Getting from Off-Campus Hotel -->
  <section class="venue-block">
    <div class="venue-block-inner">
      <h2 class="venue-block-title">Getting to SFU Burnaby Campus from Off-Campus Hotel</h2>
      <div class="venue-section-content">
        <p>The Executive Plaza Hotel Coquitlam, is a 10-minute to 25-minute drive from the SFU Burnaby Campus.</p>
      </div>

      <h3 style="margin-top: 32px; font-family: 'Space Grotesk', sans-serif; color: var(--aicrv-ink, #1d2035);">Shuttles</h3>
      <div class="venue-section-content">
        <ul>
          <li>Advance sign-up is required. Each shuttle has a capacity of 50 passengers.</li>
          <li>Confirmed shuttle riders will receive a small sticker on their conference badge. Volunteers may check for this sticker at the shuttle pickup point, especially on Wednesday.</li>
          <li>Confirmed riders should arrive at the shuttle pickup point at least 10 minutes before departure. Seats that are not claimed close to departure time may be released to waitlisted attendees.</li>
          <li>If a shuttle reaches capacity, additional sign-ups will be placed on the waitlist in order of submission.</li>
          <li>Campus pickup/dropoff: use the Shuttle Pickup/Dropoff point shown on the venue map above.</li>
          <li>Hotel pickup/dropoff: Executive Plaza Hotel Coquitlam.</li>
        </ul>
      </div>
      <div class="venue-cta">
        <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=fmfoBInJuUeGGdg9Wl9sZwX-LCZy7QhBklwAwx3uqW9UN0Y5UlVINE05UzgzQjRIUjEzNUI3RUo0Ri4u" target="_blank" rel="noopener">Shuttle sign-up link: AI/CRV 2026 Shuttle Sign-Up Form</a>
      </div>

      <table class="shuttle-schedule">
        <thead>
          <tr>
            <th>Day</th>
            <th>Times</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Monday, Tuesday, Thursday, Friday</strong></td>
            <td><strong>7:45 AM - Executive Plaza Hotel -> SFU<br>6:00 PM - SFU -> Executive Plaza Hotel</strong></td>
          </tr>
          <tr>
            <td><strong>Wednesday</strong></td>
            <td><strong>7:45 AM - Executive Plaza Hotel -> SFU<br>6:00 PM, 6:15 PM, 6:30 PM, 6:45 PM, 9:30 PM, 10:00 PM - SFU -> Executive Plaza Hotel</strong></td>
          </tr>
        </tbody>
      </table>

      <h3 style="margin-top: 32px; font-family: 'Space Grotesk', sans-serif; color: var(--aicrv-ink, #1d2035);">Public Transit</h3>
      <div class="venue-section-content">
        <ul>
          <li>Travel from Executive Plaza Hotel to SFU Transit Exchange is usually about 32-49 minutes by transit, depending on the route, wait times, and traffic.</li>
          <li>Google Maps or TransLink may suggest several route options depending on departure time.</li>
          <li>Return trip: use the same route in reverse.</li>
          <li>Check Google Maps or TransLink Trip Planner before travelling for live schedules.</li>
        </ul>
      </div>

      <figure class="venue-map-figure" style="margin-top: 24px;">
        <img src="{{ site.baseurl }}/assets/img/venue/transit-route.png" alt="Transit route options from Executive Plaza Hotel Coquitlam to SFU Transit Exchange" />
        <figcaption class="venue-map-caption">Route options from Executive Plaza Hotel Coquitlam to SFU Transit Exchange. Options and travel times may change; attendees should check live schedules before travelling.</figcaption>
      </figure>

      <p class="venue-links"><strong>Route and schedule links:</strong>
        <a href="https://www.translink.ca/trip-planner" target="_blank" rel="noopener">TransLink Trip Planner</a> |
        <a href="https://www.translink.ca/schedules-and-maps/route/145/direction/0/schedule" target="_blank" rel="noopener">Route 145 schedule</a> |
        <a href="https://www.translink.ca/schedules-and-maps/route/143/direction/1/schedule" target="_blank" rel="noopener">Route 143 schedule</a> |
        <a href="https://www.translink.ca/schedules-and-maps/route/144/direction/0/schedule" target="_blank" rel="noopener">Route 144 schedule</a> |
        <a href="https://www.translink.ca/schedules-and-maps/route/136/direction/0/schedule" target="_blank" rel="noopener">Route 136 schedule</a>
      </p>

      <div class="venue-section-content" style="margin-top: 16px;">
        <p><strong>Fare and payment:</strong> The hotel-to-campus route is normally a one-zone trip if starting from Lougheed Town Centre Station. Current adult one-zone fares are $3.35 by cash/contactless or $2.70 with Compass Stored Value. TransLink accepts Compass Card/Ticket, contactless cards, mobile wallets, and cash on buses. <a href="https://www.translink.ca/transit-fares/pricing-and-fare-zones" target="_blank" rel="noopener">TransLink fare details</a></p>
      </div>
    </div>
  </section>

  <!-- Getting from YVR -->
  <section class="venue-block">
    <div class="venue-block-inner">
      <h2 class="venue-block-title">Getting to SFU Burnaby Campus from Vancouver International Airport (YVR)</h2>
      <div class="venue-section-content">
        <ul>
          <li>The SFU Burnaby Campus is about a 45-minute to 90-minute drive from the Vancouver International Airport, depending on traffic.</li>
          <li><strong>From Vancouver International Airport (YVR) to SFU Burnaby by public transit:</strong> take the Canada Line from YVR-Airport Station toward downtown Vancouver, then connect to SkyTrain/bus service toward SFU. A common route is Canada Line -> Waterfront/Expo Line -> Production Way-University Station -> Bus 145 -> SFU Transit Exchange.</li>
          <li>Use TransLink Trip Planner or Google Maps on the travel day for the fastest route, since the best connection can change by time of day.</li>
          <li>Travellers leaving YVR by Canada Line may be charged the YVR AddFare in addition to the regular transit fare.</li>
        </ul>
      </div>
      <p class="venue-links"><strong>Useful links:</strong>
        <a href="https://www.yvr.ca/en/passengers/transportation/public-transportation" target="_blank" rel="noopener">YVR public transportation</a> |
        <a href="https://www.translink.ca/transit-fares/transferring-and-addfare" target="_blank" rel="noopener">TransLink YVR AddFare</a>
      </p>
    </div>
  </section>

  <!-- Parking -->
  <section class="venue-block" style="padding-bottom: 100px;">
    <div class="venue-block-inner">
      <h2 class="venue-block-title">Parking Information</h2>
      <div class="venue-section-content">
        <ul>
          <li>Parking at SFU Burnaby is paid parking. There is no free parking on campus.</li>
          <li>Recommended parking area for attendees near the main conference area: West Parkade / West Lot, subject to availability and signage.</li>
          <li>Current West Parkade online parking rates shown in Honk include approximately $5.10 for 1 hour, $9.85 for 2 hours, $14.60 for 3 hours, and $19.35 all day. Rates may change; attendees should check SFU parking/Honk before driving.</li>
        </ul>
      </div>
      <p class="venue-links"><strong>Useful links:</strong>
        <a href="https://www.sfu.ca/parking/Parking/visitors.html" target="_blank" rel="noopener">SFU visitor parking</a> |
        <a href="https://www.sfu.ca/parking/rates--refunds---forms.html" target="_blank" rel="noopener">SFU parking rates</a> |
        <a href="https://parking.honkmobile.com/hourly/zones/9355" target="_blank" rel="noopener">West Parkade online parking rates</a>
      </p>
    </div>
  </section>
</div>
