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

<link rel="stylesheet" href="/misc/pch-carousel.css">
<div class="pcf-carousel items-2">
	<!-- Hidden radio control inputs -->
	<input type="radio" id="carousel-play" 	  name="pcf-carousel-3" checked>
	<input type="radio" id="carousel-start-1" name="pcf-carousel-3">
	<input type="radio" id="carousel-start-2" name="pcf-carousel-3">
	<!-- Slide jump dots -->
	<div class="pcf-carousel-dots">
		<label for="carousel-start-1"></label>
		<label for="carousel-start-2"></label>
	</div>
	<div class="pcf-carousel-anime-dots">
		<div></div>
		<div></div>
	</div>
	<!-- Slides, repeat 1st and last slide -->
	<div class="moving-strip">
		<div class="pcf-carousel-item" style="background-image:url('/images/what-we-do/fun-sentosa/cable-car.jpg');"></div>
		<div class="pcf-carousel-item" style="background-image:url('/images/what-we-do/fun-sentosa/linkway.jpg');"></div>
		<div class="pcf-carousel-item" style="background-image:url('/images/what-we-do/fun-sentosa/skyline-luge.jpg');"></div>
	</div>
</div>						