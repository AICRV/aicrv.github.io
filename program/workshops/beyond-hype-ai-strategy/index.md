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
  <!-- <div class="section-grid"> -->
    <div>
      <h2>Beyond the Hype: Building AI Strategy for the Future</h2>
    </div>
    <div class="section-body">
      <p> <strong> 17:30pm-19:30pm on May 25 2026, <a href="https://maps.google.com/?cid=18118009684340895711&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=CA&source=embed"> Halpern Centre 126 </a> </strong> </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.4544007736245!2d-122.91770930000001!3d49.279649799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679bfdb4fafaf%3A0xfb7019d08839efdf!2sHalpern%20Centre%2C%20Burnaby%2C%20BC%20V5A%201S6!5e1!3m2!1sen!2sca!4v1779113820442!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  <!-- </div> -->
</section>

<section class="section">
  <!-- <div class="section-grid"> -->
    <div>
      <h2>About the Event</h2>
    </div>
    <div class="section-body">
      <p>Artificial intelligence is advancing rapidly, with many organizations struggling between experimentation and long-term impact. While technical capabilities evolve, a difficult challenge lies in building the organizational, governance, and strategic foundations that enable AI to scale responsibly and sustainably.</p>
      <p>This panel brings together perspectives from academia, industry, and policy to explore how organizations can move beyond short-term pilots toward long-term AI capability. The discussion will focus on practical approaches to building future-ready strategies that emphasize adaptability, resilience, and responsible governance. Panelists will examine how decisions made today around technology, data, talent, operating models, and oversight structures will shape organizational outcomes over the next decade.</p>
      <p>Designed for both researchers and practitioners, this session connects AI innovation with real-world implementation challenges, offering a grounded view of how to build AI strategies that are not only effective, but durable, and aligned with evolving societal and organizational expectations.</p>
    </div>
  <!-- </div> -->
</section>

<section class="section">
  <!-- <div class="section-grid"> -->
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
  <!-- </div> -->
</section>

<!-- {% include partials/workshop_acknowledgements.html %} -->
