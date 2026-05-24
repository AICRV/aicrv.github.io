---
layout: subpage
title: Demos
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Demo Track Program
hero_image: /assets/img/P5_1_100910.jpg
hero_alt: Students working with 3D printers in a lab
tabs_include: partials/program_tabs.html
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Demos</h2>
    </div>
    <div class="section-body">
      <p>The Demo Track showcases live, interactive systems from across artificial intelligence, computer vision, and robotics. Demos may include hardware-based systems, robots, sensors, or interactive software prototypes.</p>
      <p>This page will be updated as accepted demos and presenter details are finalized. For the original call, see the <a href="{{ site.baseurl }}/calls/demos/">Call for Demos</a>.</p>
    </div>
  </div>
</section>

<section class="section program-overview">
  <div class="section-head">
    <h2>Schedule</h2>
  </div>
  <div class="program-overview-list">
    {% for day in site.data.demos.schedule %}
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
    <h2>Demos</h2>
    <p>Accepted demos will be listed here with presenters and logistics notes.</p>
  </div>

  <div class="nectar-paper-groups">
    {% for section in site.data.demos.demo_sections %}
      <section class="nectar-paper-group">
        <header>
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
        </header>
        {% if section.demos and section.demos.size > 0 %}
          <ol class="nectar-paper-list">
            {% for demo in section.demos %}
              <li class="nectar-paper">
                <h4>{{ demo.title }}</h4>
                {% if demo.presenters %}<p>{{ demo.presenters }}</p>{% endif %}
                <dl>
                  {% if demo.affiliation %}<div><dt>Affiliation</dt><dd>{{ demo.affiliation }}</dd></div>{% endif %}
                  {% if demo.session %}<div><dt>Session</dt><dd>{{ demo.session }}</dd></div>{% endif %}
                  {% if demo.time %}<div><dt>Time</dt><dd>{{ demo.time }}</dd></div>{% endif %}
                  {% if demo.room %}<div><dt>Room</dt><dd>{{ demo.room }}</dd></div>{% endif %}
                  {% if demo.needs %}<div><dt>Needs</dt><dd>{{ demo.needs }}</dd></div>{% endif %}
                </dl>
                {% if demo.description %}<p>{{ demo.description }}</p>{% endif %}
                {% if demo.url %}<a class="btn btn-outline btn-sm" href="{{ demo.url }}" target="_blank" rel="noopener">Demo link</a>{% endif %}
              </li>
            {% endfor %}
          </ol>
        {% else %}
          <p class="schedule-placeholder">Demo list to be announced.</p>
        {% endif %}
      </section>
    {% endfor %}
  </div>
</section>
