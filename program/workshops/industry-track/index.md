---
layout: subpage
title: Industry Track
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: industry
---

<section class="section">
  <!-- <div class="section-grid"> -->
    <div>
      <h2>Industry Track</h2>
    </div>
    <div class="section-body">
      <p>The Industry Track takes place on Wednesday, May 27 in The Presentation Studio (<a href="https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%2010900">ASB 10900</a>).</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.6615352895374!2d-122.91616408175057!3d49.27734440902078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679bf1767cc6b%3A0x16e37c430148082b!2sApplied%20Sciences%20Bldg%2C%20Burnaby%2C%20BC%20V5A%204Y7!5e1!3m2!1sen!2sca!4v1779200291096!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  <!-- </div> -->
</section>

<section class="section">
  <!-- <div class="section-grid"> -->
    <div>
      <h2>Program Overview</h2>
    </div>
    <div class="section-body">
      <div class="program-overview-list">
        <div class="program-overview-card is-plain">
          <div>
            <p class="program-overview-title">Registration</p>
            <p style="color: red;"> <a href="https://www.ai-crv.ca/venue-transportation/"> Halpern Center Lobby </a> </p>            
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 8:00am-17:30pm</p>
          </div>
        </div>          
        <div class="program-overview-card is-plain">
          <div>
            <p class="program-overview-title">Panel #1: Open Model and Open Access in AI</p>
            <p> Moderator: Newvick Lee (Software Engineer - Self-Hosted Models, GitLab) </p>
            <p> Panelists: 
              <ul> <li> Kris Krug (BC + AI Ecosystem) </li>
                   <li> Dr. Jekaterina Novikova (Principal AI Research Scientist, Vanguard) </li>
                   <li> Dr. Annie Ying (Engineering Manager - Self-hosted Models, GitLab) </li>
                   <li> Prof. Steve DiPaola (Professor, Simon Fraser University) </li>
              </ul> 
          </p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 14:00pm-15:00pm</p>
          </div>
        </div>
        <div class="program-overview-card">
          <div>
            <p class="program-overview-title">[Keynote] Research from Pixels to Proteins: Scaling Generative AI for Scientific Discovery</p>
            <p>Dr. Karsten Kreis, Principal Research Scientist, NVIDIA</p>
            <p>Abstract: Generative AI has advanced rapidly across diverse domains, from high-fidelity visual synthesis to the intricate modeling of biological systems. While early breakthroughs were often defined by the technical nuances of diffusion and flow-matching mechanics, the current frontier lies in scaling these underlying frameworks to solve fundamental scientific challenges. In this talk, I will provide a high-level overview of the architectural principles driving modern visual generation systems and demonstrate how these same concepts are being adapted to revolutionize protein design. Moving beyond purely computational frameworks, I will detail the end-to-end journey of model development, specifically highlighting the critical transition from algorithmic prediction to rigorous experimental validation in the laboratory. By bridging the gap between digital generation and physical reality, we illustrate how generative AI has evolved from a tool for media creation into a primary engine for biotechnology and the broader landscape of scientific discovery.</p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 15:00pm-15:30pm</p>
          </div>
        </div>
        <div class="program-overview-card is-plain">
          <div>
            <p class="program-overview-title">Coffee Break</p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 15:30pm-16:00pm</p>
          </div>
        </div>
        <div class="program-overview-card">
          <div>
            <p class="program-overview-title">Panel #2: Navigating AI Safety </p>
            <p> Moderator: Alka Tandan (Founder, Reframe & Refine) </p>
            <p> Panelists: <ul>  
              <li> Robert Barton (Distinguished AI Engineer, Cisco Systems)</li>
              <li> Dr. Eric Brochu (Member of Technical Staff - Superintelligence Team, Microsoft)</li>
              <li> Mitu Mann (AVP - Data/ML Governance, Interact)</li>
              <li> Dr. Annika Rosanowski (Senior Advisor, Mitacs)</li>
            </ul></p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 16:00pm-17:00pm</p>
          </div>
        </div>
        <div class="program-overview-card">
          <div>
            <p class="program-overview-title">[Keynote] Confident & Wrong: Why Responsible AI Demands More Than a Checklist</p>
            <p>Dr. Eric Oosenbrug, Data & Design Researcher, Government of British Columbia </p>
            <p> Abstract: AI tools are arriving in government faster than the capacity to evaluate them. This talk argues that responsible AI use isn't fundamentally an attitude problem or a compliance problem — it's a competency problem. Drawing on examples from my team's practice, I show what it actually took to catch the things AI got wrong: not a checklist, but an independent evaluative standard built before the AI touched anything. That capacity is what current government guidance leaves unbuilt — and what this talk makes the case for. </p>
          </div>
          <div class="program-overview-meta">
            <p><strong>Time:</strong> 17:00pm-17:30pm</p>
          </div>
        </div>        
      </div>
    </div>
  <!-- </div> -->
</section>

<section class="section">
  <!-- <div class="section-grid"> -->
    <div>
      <h2>Speakers</h2>
    </div>
    <div class="section-body">
      <div class="organizer-grid">
        {% for s in site.data.speakers.workshop_industry_track_speakers %}
        <div class="organizer-card">
          <div class="organizer-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
          <h3>{% if s.url and s.url != "" %}<a href="{{ s.url }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
          <p>{{ s.affiliation }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  <!-- </div> -->
</section>

<!-- {% include partials/workshop_acknowledgements.html %} -->
