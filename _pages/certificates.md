---
layout: page
title: Certificates
permalink: /certificates/
description: A few of the Certificates I have earned over the years.
nav: true
nav_order: 2
display_categories: false
horizontal: false
---
<!-- pages/certificates.md -->
<div class="projects">

<!-- Display without categories -->
{% assign sorted_certificates = site.certificates | sort: "order" %}

<!-- Generate cards for each one -->
  <div class="row row-cols-1 row-cols-md-3">
    {% for certificate in sorted_certificates %}
      {% include certificates.liquid %}
    {% endfor %}
  </div>

</div>
