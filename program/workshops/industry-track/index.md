---
layout: subpage
title: Industry Track
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: industry
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Industry Track</h2>
    </div>
    <div class="section-body">
      <p>The Industry Track takes place on Wednesday, May 27 in The Presentation Studio (ASB 10900).</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.6615352895374!2d-122.91616408175057!3d49.27734440902078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679bf1767cc6b%3A0x16e37c430148082b!2sApplied%20Sciences%20Bldg%2C%20Burnaby%2C%20BC%20V5A%204Y7!5e1!3m2!1sen!2sca!4v1779200291096!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Program Overview</h2>
    </div>
    <div class="section-body">
      <div class="program-overview-list">
        <div class="program-overview-card is-plain">
          <div>
            <p class="program-overview-title">Panel #1: Open Model and Open Access in AI</p>
            <p> Moderator: Newvick Lee (Software Engineer - Self-Hosted Models, GitLab) </p>
            <p> Panelists: Kris Krug (BC + AI Ecosystem), Dr. Jekaterina Novikova (Principal AI Research Scientist, Vanguard), Dr. Annie Ying (Engineering Manager - Self-hosted Models, GitLab), Prof. Steve DiPaola (Professor, Simon Fraser University, joined through video recordings)</p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 2:00pm-3:00pm</p>
          </div>
        </div>
        <div class="program-overview-card">
          <div>
            <p class="program-overview-title">Keynote: Research from Pixels to Proteins: Scaling Generative AI for Scientific Discovery</p>
            <p>Dr. Karsten Kreis, Principal Research Scientist, NVIDIA</p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 3:00pm-3:30pm</p>
          </div>
        </div>
        <div class="program-overview-card is-plain">
          <div>
            <p class="program-overview-title">Coffee Break</p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 3:30pm-4:00pm</p>
          </div>
        </div>
        <div class="program-overview-card">
          <div>
            <p class="program-overview-title">Panel #2: Navigating AI Safety </p>
            <p> Moderator: Alka Tandan (Founder, Reframe & Refine) </p>
            <p> Panelists: <ul>  
              <li> Robert Barton (Distinguished AI Engineer, Cisco Systems)</li>
              <li> Dr. Eric Brochu (Member of Technical Staff - Superintelligence Team, Microsoft)</li>
              <li> Mitu Mann (AVP - Data/ML Governance, Interact)</li>
              <li> Dr. Eric Oosenbrug (Data & Design Researcher, Government of British Columbia) </li>
              <li> Dr. Annika Rosanowski (Senior Advisor, Mitacs)</li>
            </ul></p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 4:00pm-5:00pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Speakers</h2>
    </div>
    <div class="section-body">
      <div class="organizer-grid">
        {% for s in site.data.speakers.workshop_industry_track_speakers %}
        <div class="organizer-card">
          <div class="organizer-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
          <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
          <p>{{ s.affiliation }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<!-- {% include partials/workshop_acknowledgements.html %} -->
