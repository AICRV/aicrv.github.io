---
layout: subpage
title: Advisory Board
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Advisory Board
hero_image: /assets/img/P10_1_101060.jpg
hero_alt: Campus walkway scene
tabs_include: partials/organizer_tabs.html
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Advisory Board</h2>
    </div>
    <div class="section-body">
      <p>The Advisory Board provides strategic guidance and support for AI/CRV 2026.</p>
    </div>
  </div>

  <h3 class="h5 mt-4 mb-3">Advisory Board Members</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.advisory_board %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>
</section>
