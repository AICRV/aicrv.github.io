---
layout: subpage
title: AI for Science and Sustainability
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: ai-science
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>AI for Science and Sustainability</h2>
    </div>
    <div class="section-body">
      <p> <strong> 9am-5pm on May 25 2026, Halpern Centre 126 </strong> </p>
      <p> <a class="btn btn-dark btn-sm" href="https://sites.google.com/vectorinstitute.ai/aicrv-2026/"> More Information </a> </p>
      <p>Join us for the AI for Science and Sustainability Workshop @ AI/CRV 2026 in Vancouver, BC on May 25! Organized by the Vector Institute and co-hosted by UBC and SFU, this workshop brings together researchers and students across industry, academia and government. Together, we will explore the latest developments in AI for scientific discovery and sustainability in areas such as climate change, ecology, and agriculture as well as advances in more efficient/green AI. We aim to bridge the gap between disciplines to foster collaborations and innovations at the intersection of AI, science, and the environment. Join us in Vancouver, a city globally recognized for its commitment to sustainability and its cutting-edge AI research ecosystem. The workshop will feature talks, posters, a panel, and networking opportunities.</p>
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
        {% for s in site.data.speakers.workshop_ai_science_sustainability_speakers %}
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
