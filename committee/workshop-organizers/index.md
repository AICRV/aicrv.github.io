---
layout: subpage
title: Workshop Organizers
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshop Organizers
hero_image: /assets/img/P11_1_101211.jpg
hero_alt: Conference venue exterior
tabs_include: partials/organizer_tabs.html
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Workshop Organizers</h2>
    </div>
    <div class="section-body">
      <p>The following individuals are organizing the workshops at AI/CRV 2026.</p>
    </div>
  </div>

  <h3 class="h5 mt-4 mb-3">AI in Banking and Financial Services</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.workshop_ai_banking %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">Data and Model Protection in Generative AI</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.workshop_data_model_protection %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI Strategy and Governance in Business</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.workshop_ai_strategy_governance %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI for Science and Sustainability</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.workshop_ai_science_sustainability %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
    </div>
    {% endfor %}
  </div>
</section>
