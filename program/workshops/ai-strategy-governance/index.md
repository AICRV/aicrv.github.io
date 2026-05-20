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
  <!-- <div class="section-grid"> -->
    <div>
      <h2>AI for Strategy and Governance in Business</h2>
    </div>
    <div class="section-body">
      <p> <strong> 2pm-5:30pm on May 25 2026, Halpern Centre 114 </strong> </p>
      <!-- <p> <a class="btn btn-dark btn-sm" href="https://sites.google.com/vectorinstitute.ai/aicrv-2026/"> More Information </a> </p> -->
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.4544007736245!2d-122.91770930000001!3d49.279649799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679bfdb4fafaf%3A0xfb7019d08839efdf!2sHalpern%20Centre%2C%20Burnaby%2C%20BC%20V5A%201S6!5e1!3m2!1sen!2sca!4v1779113820442!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  <!-- </div> -->
</section>

<section class="section">
  <!-- <div class="section-grid"> -->
    <div>
      <h2>About the Workshop</h2>
    </div>
    <div class="section-body">
      <p>This workshop brings together researchers and practitioners to examine how organizations are generating value from AI while managing governance, risk, and organizational redesign.</p>
      <p>Themes include value realization, governance and assurance, operating models and incentives, and evaluation/evidence.</p>
      <p>The format will include invited talks, practitioner reactions, and a structured synthesis of top research questions and promising empirical approaches.</p>
      <p><strong>This workshop will be followed by a moderated industry panel on AI Strategy & Governance.</strong> </p>
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
        {% for s in site.data.speakers.workshop_ai_strategy_governance_speakers %}
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

<!-- {% include partials/workshop_acknowledgements.html %} --->
