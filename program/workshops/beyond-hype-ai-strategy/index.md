---
layout: subpage
title: "Beyond the Hype: Building AI Strategy for the Future"
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: beyond-hype
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Beyond the Hype: Building AI Strategy for the Future</h2>
    </div>
    <div class="section-body">
      <p> </p>
      
      <h3>About the Event</h3>
      <p>Artificial intelligence is advancing rapidly, with many organizations struggling between experimentation and long-term impact. While technical capabilities evolve, a difficult challenge lies in building the organizational, governance, and strategic foundations that enable AI to scale responsibly and sustainably.</p>
      <p>This panel brings together perspectives from academia, industry, and policy to explore how organizations can move beyond short-term pilots toward long-term AI capability. The discussion will focus on practical approaches to building future-ready strategies that emphasize adaptability, resilience, and responsible governance. Panelists will examine how decisions made today around technology, data, talent, operating models, and oversight structures will shape organizational outcomes over the next decade.</p>
      <p>Designed for both researchers and practitioners, this session connects AI innovation with real-world implementation challenges, offering a grounded view of how to build AI strategies that are not only effective, but durable, and aligned with evolving societal and organizational expectations.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Confirmed Speakers</h2>
    </div>
    <div class="section-body">
      <div class="organizer-grid">
        {% for s in site.data.speakers.workshop_beyond_hype_speakers %}
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
