---
layout: page
title: Publications
permalink: "/publications/"
usemathjax: true
---
<h2 style="text-align: center;" >🚧 Site Currently Under Construction 🚧 <br> ... Please visit again soon ...</h2>

<!-- <section #class="row"> -->
{% assign i = 0 %}  
  {% for post in site.posts %}
      {% if post.featured == true %}
           
            {% include pub_menu.html %}
            
            {% assign i = i | plus:1 %}
      {% endif %}
  {% endfor %}
<!-- </section> -->
 <!-- <div class="col-md-4 mb-5"> -->
 <!-- </div> -->