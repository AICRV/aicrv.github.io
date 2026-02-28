---
layout: subpage
title: Conference Organizers
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Conference Organizers
hero_image: /assets/img/P10_1_101060.jpg
hero_alt: Campus walkway scene
tabs_include: partials/organizer_tabs.html
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Conference Organizers</h2>
    </div>
    <div class="section-body">
      <p>AI/CRV 2026 is organized by the <a href="https://www.caiac.ca/" target="_blank" rel="noopener">Canadian Artificial Intelligence Association (CAIAC)</a> and the <a href="https://www.cipprs.org/" target="_blank" rel="noopener">Canadian Image Processing and Pattern Recognition Society (CIPPRS)</a>.</p>
    </div>
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV General Chairs</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.general_chairs %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      <a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI Program Chairs</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.ai_program_chairs %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">CRV Program Chairs</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.crv_program_chairs %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI Graduate Student Symposium Track Chairs</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.gss_chairs %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Sponsorship Chairs</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.sponsorship_chairs %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.email %}<p class="small"><a href="mailto:{{ o.email }}">{{ o.email }}</a></p>{% endif %}
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Finance Chair</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.finance_chair %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Publicity Chairs</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.publicity_chairs %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Workshop Chair</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.workshop_chair %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Demo Chair</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.demo_chair %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Nectar Track Chairs</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.nectar_track_chairs %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV International Engagement Chair</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.international_engagement_chair %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI Industry Track Chair</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.industry_chair %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Local Arrangements Chair</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.local_arrangement_chair %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">AI/CRV Registration Chair</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.registration_chair %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">CAIAC Treasurer</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.caiac_treasurer %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">CIPPRS Treasurer</h3>
  <div class="organizer-grid">
    {% for o in site.data.organizers.cipprs_treasurer %}
    <div class="organizer-card">
      <div class="organizer-photo"{% if o.photo %} style="background-image: url('{{ o.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
      <h3>{{ o.name }}</h3>
      <p>{{ o.affiliation }}</p>
      {% if o.url != "" %}<a href="{{ o.url }}" target="_blank" rel="noopener" class="btn btn-outline btn-sm mt-2">Profile</a>{% endif %}
    </div>
    {% endfor %}
  </div>

  <h3 class="h5 mt-4 mb-3">Assistants</h3>
  <div class="section-body">
    <ul class="mb-0">
      {% for a in site.data.organizers.assistants %}
      <li>{{ a.name }}, {{ a.affiliation }}</li>
      {% endfor %}
    </ul>
  </div>
</section>
