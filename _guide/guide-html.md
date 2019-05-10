---
layout: leftnav-page-content
title: Guide - HTML
permalink: /guide/html/
breadcrumb: Guide-HTML
collection_name: guide
---

# Markdown with HTML
You can use Markdown along with HTML.

<p>However, it is not possible to use **Markdown** *within* HTML tags</p>
<p>You need to <em>use</em> <strong>HTML tags</strong> instead</p>

# Headers
<h1>H1 Header</h1> <small>This is equivalent to a # in Markdown (see Headers)</small>
<h2>H2 Header</h2>
<h3>H3 Header</h3>
<h4>H4 Header</h4>
<h5>H5 Header</h5>
<h6>H6 Header</h6>

<hr/>

You can make **dividers** with the &lt;hr/&gt; similar to the `---` in Markdown.

<style>
body {
  background-color:#222;
}

.carousel {
  position:relative;
  width:400px;
  border:10px solid white;
  margin:20px auto;
  box-shadow:0px 0px 40px #000;
}
.carousel > img {
  display:none;
  width:100%;
}
.carousel > input {
  position:absolute;
  left:-9999px;
}
.carousel > input:checked + label + img {
  display:block;
}

.carousel > label,
.carousel > input:checked ~ label ~ label ~ label ~ label {
  display:none;
}
.carousel > input:checked + label {
  display:block;
  left:0;
}
.carousel > input:checked ~ label ~ label ~ label {
  display:block;
  right:0;
}

.carousel > label {
  position:absolute;
  top:0;
  width:25%;
  height:100%;
  visibility:hidden;
}
.carousel > label:before {
  content:'';
  display:block;
  position:absolute;
  width:100%;
  height:100%;
  visibility:visible;
}
.carousel > label:after {
  display:block;
  position:absolute;
  top:50%;
  width:25px;
  height:25px;
  line-height:22px;
  margin:-15px 10px 0 10px;
  background-color:black;
  color:white;
  font-family:'Arial';
  font-weight:bold;
  font-size:18px;
  text-align:center;
  visibility:hidden;
  border:2px solid white;
  border-radius:20px;
  box-shadow:0 3px 4px black;
}
.carousel > label:hover:after {
  visibility:visible;
}

.carousel > input:checked + label:after {
  left:0;
  content:'\00AB';
}
.carousel > input:checked ~ label ~ label ~ label:after {
  right:0;
  content:'\00BB';
}

</style>
Carousel Experiment
<div class="carousel">
  <input id="image1" type="radio" name="image-selector" checked="checked" />
  <label for="image4">View image 4</label>
  <img src="/images/sentosa-banner.jpg" />

  <input id="image2" type="radio" name="image-selector" />
  <label for="image1">View image 1</label>
  <img src="/images/sentosa.png" />

  <input id="image3" type="radio" name="image-selector" />
  <label for="image2">View image 2</label>
  <img src="/images/sentosa-banner.jpg" />

  <input id="image4" type="radio" name="image-selector" />
  <label for="image3">View image 3</label>
  <img src="/images/sentosa.png" />
  
  <label for="image4">View image 4</label>
  <label for="image1">View image 1</label>
</div>
