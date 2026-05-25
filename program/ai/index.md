---
layout: subpage
title: Canadian AI
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
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
      <p>The Canadian Conference on AI is sponsored by Canadian Artificial Intelligence Association (CAIAC) and invites papers that present original work in all areas of artificial intelligence (AI), either theoretical or applied. The conference was held biennially from 1976 to 2000, and annually from then on. The inaugural conference in 1976 took place in Vancouver, and this year the conference returns to Vancouver for its 50-year anniversary!</p>
    </div>
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
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
        {% if s.talk %}<p class="text-muted small mb-0">{{ s.talk }}</p>{% endif %}
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CAIAC)</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
<section class="section">
<div class="calls-submit">
    <a class="btn btn-dark btn-sm" href="https://www.caiac.ca/en/conferences/canadianai-2026/program">Schedule</a>
</div>
</section>
