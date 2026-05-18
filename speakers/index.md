---
layout: subpage
title: Speakers
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Invited Speakers
hero_image: /assets/img/P2_1_100945.jpg
hero_alt: Conference speakers
---

<section class="section">
  <div class="container">
    <p class="section-body mb-4">Invited and featured speakers from the Canadian AI Conference, the Conference on Robots and Vision, and AI/CRV workshops.</p>

    <h2 class="h4 mt-4 mb-3">Canadian AI Conference</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.canadian_ai %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        {% if s.talk %}<p class="text-muted small mb-0">{{ s.talk }}</p>{% endif %}
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CAIAC)</a>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Conference on Robots and Vision — Keynotes</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.crv_keynotes %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CRV)</a>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Conference on Robots and Vision — Symposium Speakers</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.crv_symposium %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{{ s.name }}</h3>
        <p>{{ s.affiliation }}</p>
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">More info (CRV)</a>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Data and Model Protection in Generative AI — Invited Speakers</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_dmp_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Data and Model Protection in Generative AI — Student Speakers</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_dmp_student_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">AI and Biology</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_ai_biology_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">AI Strategy and Governance in Business</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_ai_strategy_governance_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Beyond the Hype: Building AI Strategy for the Future</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_beyond_hype_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">AI in Banking and Financial Services</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_ai_banking_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Industry Track</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_industry_track_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">Responsible AI Track</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_responsible_ai_track_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">AI for Science and Sustainability</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_ai_science_sustainability_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">AI Policy Forum — Keynote Speakers</h2>
    <div class="speaker-grid-full mb-5">
      {% for s in site.data.speakers.workshop_ai_policy_forum_keynote_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>

    <h2 class="h4 mt-4 mb-3">AI Policy Forum — Panel Speakers</h2>
    <div class="speaker-grid-full">
      {% for s in site.data.speakers.workshop_ai_policy_forum_panel_speakers %}
      <div class="speaker-card">
        <div class="speaker-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
        <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
        <p>{{ s.affiliation }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
