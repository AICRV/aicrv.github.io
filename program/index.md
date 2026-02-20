---
layout: subpage
title: Canadian AI
hero_title: Canadian AI/Robots & Vision Conference 2026
hero_subtitle: Canadian AI Conference
hero_image: /assets/img/P6_1_101084.jpg
hero_alt: Audience listening to a presentation
tabs_include: partials/program_tabs.html
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Canadian AI</h2>
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
        <p>Invited speakers from the Canadian AI Conference. For full bios and talk details, see the <a href="https://www.caiac.ca/en/conferences/canadianai-2026/invited-speakers" target="_blank" rel="noopener">CAIAC invited speakers page</a>.</p>
      </div>
    </div>
    <div class="speaker-grid-full">
      {% for s in site.data.speakers.canadian_ai %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        {% if s.talk %}<p class="text-muted small mb-0">{{ s.talk }}</p>{% endif %}
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CAIAC)</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
