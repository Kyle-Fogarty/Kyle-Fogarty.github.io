---
layout: page
title: 3D Model Viewer 
permalink: "/hidden/"
usemathjax: true
---
<!-- Import the component -->
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"></script>
<p>Spot Model (Local Kernel) : Init</p>
<!-- Use it like any other HTML element -->
<model-viewer alt="" src="prior2train.glb" shadow-intensity="1" orientation="90deg 0 0" camera-controls touch-action="pan-z" style="width:100%;height:500px"></model-viewer>
<p>Spot Model (Local Kernel) : 100 epochs (regression)</p>
<model-viewer alt="" src="post2train.glb" shadow-intensity="1" orientation="90deg 0 0" camera-controls touch-action="pan-z" style="width:100%;height:500px"></model-viewer>