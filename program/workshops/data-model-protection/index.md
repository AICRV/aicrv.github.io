---
layout: subpage
title: Data and Model Protection in Generative AI
hero_title: Canadian Conference on AI, Robots & Vision (AI/CRV) 2026
hero_subtitle: Workshops
hero_image: /assets/img/P9_1_101291.jpg
hero_alt: Workshop participants collaborating
tabs_include: partials/workshop_tabs.html
active_tab: data-protection
---

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Data and Model Protection in Generative AI</h2>
    </div>
    <div class="section-body">
      <p>A full-day workshop co-located with the Canadian Conference on AI, Robots & Vision.</p>
      <p>
        <a class="btn btn-dark btn-sm" href="https://openreview.net/group?id=AI-CRV.ca/2026/Workshop/DMP">Submit a Paper</a>
        <a class="btn btn-dark btn-sm" href="https://dmpworkshop.github.io/">Visit DMP Workshop Website</a>
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>About the Workshop</h2>
    </div>
    <div class="section-body">
      <p>Generative Artificial Intelligence (GenAI) systems are increasingly deployed in high-impact domains, raising critical concerns about the protection of training data, deployed models, and generated outputs. These systems face a growing range of security and privacy risks, including data leakage, membership and attribute inference, model extraction, prompt injection, poisoning attacks, and misuse of generated content.</p>
      <p>Addressing these challenges requires not only robust technical defenses, but also thoughtful alignment with emerging governance, regulatory, and policy frameworks.</p>
      <p>The <strong>Data and Model Protection in Generative AI (DMP)</strong> workshop at AI/CRV 2026 brings together researchers, practitioners, and policymakers to examine the evolving threat landscape affecting GenAI systems and to discuss effective mitigation strategies.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Call for Papers</h2>
    </div>
    <div class="section-body">
      <p>We invite submissions to the Data and Model Protection in Generative AI workshop at AI/CRV 2026. This workshop aims to bring together researchers, practitioners, and policymakers to examine the evolving threat landscape affecting GenAI systems and to discuss effective mitigation strategies.</p>

      <h3>Topics of Interest</h3>
      <p>Topics include, but are not limited to, the following:</p>
      <ul>
        <li>Data poisoning, backdoor attacks, and defenses in machine learning</li>
        <li>Privacy risks and training data leakage in generative models</li>
        <li>Dataset provenance, attribution, and governance</li>
        <li>Model extraction, model stealing, and intellectual property protection</li>
        <li>Model watermarking, fingerprinting, and ownership verification</li>
        <li>Security risks in generative AI (e.g., prompt injection, jailbreak attacks)</li>
        <li>Robust and secure machine learning pipelines</li>
        <li>Governance, auditing, and responsible deployment of AI systems</li>
      </ul>

      <h3>Submission Guidelines</h3>
      <p>Submissions may report new research results, empirical analyses, system implementations, benchmarks, negative results, or visionary perspectives (e.g., positions).</p>
      <ul>
        <li><strong>Long track:</strong> Up to 9 pages (excluding references)</li>
        <li><strong>Short track:</strong> Up to 4 pages (excluding references)</li>
        <li><strong>Formatting:</strong> Use the official <a href="https://www.caiac.ca/en/conferences/canadianai-2026/call-papers">Canadian AI 2026 style files</a> and submit a single PDF (which should be anonymized, like Canadian AI submissions).</li>
        <li><strong>Appendix:</strong> Include any supplementary material in the same PDF — no page limit for the appendix.</li>
      </ul>

      <h3>Review Process</h3>
      <p>Submissions will be reviewed by the workshop program chairs. Accepted papers will be presented as talks or posters. The workshop is non-archival, and authors are free to submit extended versions of their work to archival venues.</p>
      <p><a class="btn btn-dark btn-sm" href="https://openreview.net/group?id=AI-CRV.ca/2026/Workshop/DMP">Submit on OpenReview →</a></p>
    </div>
  </div>
</section>

<div class="calls-dates" style="margin-bottom: 4rem;">
  <h3>Important Dates</h3>
  <div class="date-grid">
    <div class="date-card">
      <strong>Submission Deadline</strong>
      <span>April 21, 2026 (AoE)</span>
    </div>
    <div class="date-card">
      <strong>Notification of Decisions</strong>
      <span>April 23, 2026 (AoE)</span>
    </div>
    <div class="date-card">
      <strong>Workshop Date</strong>
      <span>May 25, 2026</span>
    </div>
  </div>
</div>

<section class="section">
  <div class="section-grid">
    <div>
      <h2>Confirmed Speakers</h2>
    </div>
    <div class="section-body">
      <div class="organizer-grid">
        {% for s in site.data.speakers.workshop_dmp_speakers %}
        <div class="organizer-card">
          <div class="organizer-photo"{% if s.photo %} style="background-image: url('{{ s.photo }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"{% endif %} aria-hidden="true"></div>
          <h3>{% if s.url %}<a href="{{ s.url }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
          <p>{{ s.affiliation }}</p>
        </div>
        {% endfor %}
      </div>
      <p>Additional speakers to be announced.</p>
    </div>
  </div>
</section>

<!-- {% include partials/workshop_acknowledgements.html %} -->
