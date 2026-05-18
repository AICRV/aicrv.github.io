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
      <div class="program-overview-list">
        <div class="program-overview-card is-plain">
          <div>
            <p class="program-overview-title">Panel #1: Navigating AI Safety Challenges</p>
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
            <p class="program-overview-title">Panel #2: Open Model and Open Access in AI</p>
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

{% include partials/workshop_acknowledgements.html %}
