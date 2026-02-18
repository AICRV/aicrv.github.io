---
layout: subpage
title: Speakers
hero_title: Canadian AI/Robots & Vision Conference 2026
hero_subtitle: Invited Speakers
hero_image: /assets/img/P2_1_100945.jpg
hero_alt: Conference speakers
---

<section class="section">
  <div class="container">
    <p class="section-body mb-4">Invited speakers from the Canadian AI Conference and the Conference on Robots and Vision. For full bios and talk details, see the official conference pages linked below.</p>

    <h2 class="h4 mt-4 mb-3">Canadian AI Conference</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.canadian_ai %}
      <div class="speaker-card">
        <div class="speaker-photo" aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        {% if s.talk %}<p class="text-muted small mb-0">{{ s.talk }}</p>{% endif %}
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CAIAC)</a>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Conference on Robots and Vision — Keynotes</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.crv_keynotes %}
      <div class="speaker-card">
        <div class="speaker-photo" aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CRV)</a>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Conference on Robots and Vision — Symposium Speakers</h2>
    <div class="speaker-grid-full">
      {% for s in site.data.speakers.crv_symposium %}
      <div class="speaker-card">
        <div class="speaker-photo" aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CRV)</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
