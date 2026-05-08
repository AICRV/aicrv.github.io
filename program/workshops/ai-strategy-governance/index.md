---
layout: subpage
title: "AI Strategy and Governance in Business: Research Frontiers on Organizational Value, Risk, and Design"
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: ai-governance
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>About the Workshop</h2>
    </div>
    <div class="section-body">
      <p>This workshop brings together researchers and practitioners to examine how organizations are generating value from AI while managing governance, risk, and organizational redesign.</p>
      <p>Themes include value realization, governance and assurance, operating models and incentives, and evaluation/evidence.</p>
      <p>The format will include invited talks, practitioner reactions, and a structured synthesis of top research questions and promising empirical approaches.</p>
      <p><strong>This workshop will be followed by a moderated industry panel on AI Strategy & Governance.</strong> </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Confirmed Speakers</h2>
    </div>
    <div class="section-body">
      <!-- <p> <li> Terri Griffith, Keith Beedie Chair in Innovation and Entrepreneurship, Simon Fraser University's Beedie School of Business </li> </p>
      <p> <li> Blaize Horner Reich, Professor Emerita, Beedie School of Business, SFU and Board Director, ICD.D and coach </li> </p>
      <p> <li> Samantha Seto, Assistant Professor, Accounting, Beedie School of Business </li> </p>
      <p> <li> Aishwarya Deep Shukla, Assistant Professor, MIS, Beedie School of Business </li> </p> -->
      <div class="organizer-grid">
        {% for s in site.data.speakers.workshop_dmp_speakers %}
        <div class="organizer-card">
          <div class="organizer-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
          <h3>{% if s.url %}<a href="{{ s.url }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
          <p>{{ s.affiliation }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<!-- {% include partials/workshop_acknowledgements.html %} --->
