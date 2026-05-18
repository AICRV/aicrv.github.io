---
layout: subpage
title: Responsible AI Track
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: responsible-ai
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Responsible AI Track</h2>
    </div>
    <div class="section-body">
      <p> The Responsible AI event will take place on 26 May 2026. See the detailed program: https://www.caiac.ca/en/conferences/canadianai-2026/responsible-ai </p>
      <p> <a class="btn btn-dark btn-sm" href="https://www.caiac.ca/en/conferences/canadianai-2026/responsible-ai">More Information</a> </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div> <h2> About the Workshop</h2> </div> 
    <div class="section-body"> 
      <p> Following the successful third edition of the Responsible AI event in 2025, we are excited that the event will be held again in 2026. We strongly believe in the importance and urgency of the Responsible and Ethical Development of Artificial Intelligence for Social Good. </p>
      <p> As outlined by the UNESCO Recommendation on the Ethics of Artificial Intelligence, AI technology may have unintended by-products that lead to discrimination, reinforce inequalities, infringe upon human rights, socially sort and disrupt democratic processes, limit access to services and intensify surveillance and unfair treatment of marginalized and minority groups. As such, we are committed to organizing a cohesive and dynamic program that embodies the paradigm of responsible development of AI so that AI researchers and practitioners can engage in critical analysis and integration of fairness, ethics, transparency, and algorithmic accountability in their work. </p>
      <p> This year's program will consist of the following events and will be open to all participants of the Canadian AI conference: </p>
      <ul>
        <li> Two keynote talks by international leaders in Responsible AI </li>
        <li> A student 3-minute-thesis (3MT) competition </li>
        <li> A student research poster session </li>
        <li> A panel featuring leaders in Responsible AI </li>
        <li> A live AI Ethics debate </li>
      </ul>
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
        {% for s in site.data.speakers.workshop_responsible_ai_track_speakers %}
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
