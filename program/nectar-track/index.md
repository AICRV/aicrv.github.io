---
layout: subpage
title: Nectar Track
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Nectar Track Program
hero_image: /assets/img/P1_3_1_101294.png
hero_alt: Conference attendees collaborating
tabs_include: partials/program_tabs.html
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Nectar Track</h2>
    </div>
    <div class="section-body">
      <p>The Nectar Track highlights emerging ideas and recently published work across machine learning, natural language processing, robotics, and computer vision. The track includes Spotlight presentations for recently accepted work and Exploration Edge presentations for preliminary research.</p>
      <p>This page will be updated as paper assignments and presenter details are finalized. For the original call, see the <a href="{{ site.baseurl }}/calls/nectar-track/">Call for Nectar Track Contributions</a>.</p>
    </div>
  </div>
</section>

<section class="section program-overview">
  <div class="section-head">
    <h2>Schedule</h2>
  </div>
  <div class="program-overview-list">
    {% for day in site.data.nectar_track.schedule %}
      <div class="nectar-day">
        <h3>{{ day.day }}</h3>
        {% for session in day.sessions %}
          <div class="program-overview-card">
            <div>
              <p class="program-overview-title">{{ session.title }}</p>
              <p>{{ session.description }}</p>
            </div>
            <div class="program-overview-meta">
              <p><strong>Time:</strong> {{ session.time }}</p>
              <p><strong>Room:</strong> {{ session.room }}</p>
              <p><strong>Format:</strong> {{ session.format }}</p>
            </div>
          </div>
        {% endfor %}
      </div>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2>Papers</h2>
    <p>Accepted Nectar Track papers will be listed by presentation track.</p>
  </div>

  <div class="nectar-paper-groups">
    {% for section in site.data.nectar_track.paper_sections %}
      <section class="nectar-paper-group">
        <header>
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
        </header>
        {% if section.papers and section.papers.size > 0 %}
          <ol class="nectar-paper-list">
            {% for paper in section.papers %}
              <li class="nectar-paper">
                <h4>{{ paper.title }}</h4>
                {% if paper.authors %}<p>{{ paper.authors }}</p>{% endif %}
                <dl>
                  {% if paper.session %}<div><dt>Session</dt><dd>{{ paper.session }}</dd></div>{% endif %}
                  {% if paper.time %}<div><dt>Time</dt><dd>{{ paper.time }}</dd></div>{% endif %}
                  {% if paper.room %}<div><dt>Room</dt><dd>{{ paper.room }}</dd></div>{% endif %}
                  {% if paper.venue %}<div><dt>Venue</dt><dd>{{ paper.venue }}</dd></div>{% endif %}
                  {% if paper.area %}<div><dt>Area</dt><dd>{{ paper.area }}</dd></div>{% endif %}
                  {% if paper.info %}<div><dt>{{ paper.info }}</dt></div>{% endif %}
                </dl>
                {% if paper.url %}<a class="btn btn-outline btn-sm" href="{{ paper.url }}" target="_blank" rel="noopener">Paper link</a>{% endif %}
              </li>
            {% endfor %}
          </ol>
        {% else %}
          <p class="schedule-placeholder">Paper list to be announced.</p>
        {% endif %}
      </section>
    {% endfor %}
  </div>
</section>
