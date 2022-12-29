---
layout: page
title: Publications
permalink: "/publications/"
usemathjax: true
---

<h4>Publications</h4>
<section class="column">
{% assign i = 0 %}  
  {% for post in site.posts %}
      {% if post.featured == true %}
        {% if i < 3  %}
            <div class="col-md-4 mb-5">
            {% include postbox.html %}
            </div>
            {% assign i = i | plus:1 %}
        {% endif %}
      {% endif %}
  {% endfor %}
</section>