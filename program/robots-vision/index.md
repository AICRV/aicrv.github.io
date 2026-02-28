---
layout: subpage
title: Conference on Robots & Vision
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Conference on Robots & Vision
hero_image: /assets/img/P8_1_101215.jpg
hero_alt: Robotics lab equipment
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Conference on Robots &amp; Vision</h2>
    </div>
    <div class="section-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</section>

<section class="section program-overview">
  <h2>Program Overview</h2>
  <div class="program-overview-list">
    <div class="program-overview-card">
      <div>
        <p class="program-overview-title">Event Title</p>
        <p>Chair: TBA</p>
      </div>
      <div class="program-overview-meta">
        <p><strong>Time:</strong> Lorem ipsum dolor sit amet</p>
        <p><strong>Room:</strong> Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div class="program-overview-card is-plain">
      <div>
        <p class="program-overview-title">Event Title</p>
        <p>Chair: TBA</p>
      </div>
      <div class="program-overview-meta">
        <p><strong>Time:</strong> Lorem ipsum dolor sit amet</p>
        <p><strong>Room:</strong> Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div class="program-overview-card">
      <div>
        <p class="program-overview-title">Event Title</p>
        <p>Chair: TBA</p>
      </div>
      <div class="program-overview-meta">
        <p><strong>Time:</strong> Lorem ipsum dolor sit amet</p>
        <p><strong>Room:</strong> Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
  <div class="calls-submit">
    <a class="btn btn-dark btn-sm" href="#">Detailed Program</a>
  </div>
</section>

<section class="section speakers full-bleed">
  <div class="container">
    <div class="speakers-header">
      <h2>Speakers</h2>
      <div class="speakers-description">
        <p>Invited speakers from the Conference on Robots and Vision. For full bios and talk details, see the <a href="https://www.computerrobotvision.org/invited.html" target="_blank" rel="noopener">CRV invited speakers page</a>.</p>
      </div>
    </div>
    <h3 class="h5 mt-4 mb-3">Keynote Speakers</h3>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.crv_keynotes %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CRV)</a>
      </div>
      {% endfor %}
    </div>
    <h3 class="h5 mt-4 mb-3">Symposium Speakers</h3>
    <div class="speaker-grid-full">
      {% for s in site.data.speakers.crv_symposium %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CRV)</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
