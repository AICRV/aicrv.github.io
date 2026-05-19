---
layout: subpage
title: AI Policy Forum
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: ai-policy-forum
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>AI Policy Forum</h2>
    </div>
    <div class="section-body">
      <p>Co-located with the Canadian Conference on AI, Robots &amp; Vision (AI/CRV), the AI Policy Forum is designed to bridge the worlds of innovation, business, and public policy. By bringing together researchers, entrepreneurs, business leaders, investors, and policymakers in one setting, this event creates a unique forum for dialogue between those developing frontier technologies and those shaping the economic and regulatory environment in which they will be deployed.</p>
      <p> <strong> 9:00am-17:30pm on May 25 2026, ASB 10900 </strong> </p>
      <!-- <p> <a class="btn btn-dark btn-sm" href="https://sites.google.com/vectorinstitute.ai/aicrv-2026/"> More Information </a> </p> -->
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.5888351280414!2d-122.91933427401428!3d49.27731809715406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679bf1a2d718b%3A0x9c74a8237eb2fc82!2sSFU&#39;s%20Big%20Data%20Hub!5e1!3m2!1sen!2sca!4v1779116056256!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>About the Forum</h2>
    </div>
    <div class="section-body">
      <p>As AI increasingly drives productivity, competitiveness, and institutional transformation, the policy and capital decisions made today will play a critical role in determining how its benefits are realized across the Canadian economy. This event will focus on the strategic priorities needed to translate cutting-edge AI research into world-class commercial applications, enhanced public sector capability, long-term economic growth and broad societal benefit.</p>
      <p>Through a series of focused panels, the forum will explore the intersection of AI innovation, capital formation and policymaking – from commercialization pathways and enterprise adoption to standards, public trust, and infrastructure investment. Particular emphasis will be placed on strengthening the Canadian AI ecosystem through collaboration across academia, industry and government.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Keynote Speakers</h2>
    </div>
    <div class="section-body">
      <div class="organizer-grid">
        {% for s in site.data.speakers.workshop_ai_policy_forum_keynote_speakers %}
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

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Panel Speakers</h2>
    </div>
    <div class="section-body">
      <div class="organizer-grid">
        {% for s in site.data.speakers.workshop_ai_policy_forum_panel_speakers %}
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
