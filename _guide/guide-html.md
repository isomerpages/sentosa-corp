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

<!--
<style>
.carousel {
  position:relative;
  width:100%;
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
-->

Carousel v2
<style>
.carousel {
    margin-left: 15%;
    margin-right: 15%;
}

ul.slides {
    display: block;
    position: relative;
    height: 600px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

ul.slides input {
    display: none; 
}


.slide-container { 
    display: block; 
}

.slide-image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    transition: all .7s ease-in-out;
}   

.slide-image img {
    width: auto;
    min-width: 100%;
    height: 100%;
}

.carousel-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    font-size: 100px;
    line-height: 600px;
    color: #fff;
}

.carousel-controls label {
    display: none;
    position: absolute;
    padding: 0 20px;
    opacity: 0;
    transition: opacity .2s;
    cursor: pointer;
}

.slide-image:hover + .carousel-controls label{
    opacity: 0.5;
}

.carousel-controls label:hover {
    opacity: 1;
}

.carousel-controls .prev-slide {
    width: 49%;
    text-align: left;
    left: 0;
}

.carousel-controls .next-slide {
    width: 49%;
    text-align: right;
    right: 0;
}

.carousel-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 999;
    text-align: center;
}

.carousel-dots .carousel-dot {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    margin: 10px;
}

input:checked + .slide-container .slide-image {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .carousel-controls label {
     display: block; 
}

input#img-1:checked ~ .carousel-dots label#img-dot-1,
input#img-2:checked ~ .carousel-dots label#img-dot-2,
input#img-3:checked ~ .carousel-dots label#img-dot-3,
input#img-4:checked ~ .carousel-dots label#img-dot-4,
input#img-5:checked ~ .carousel-dots label#img-dot-5,
input#img-6:checked ~ .carousel-dots label#img-dot-6 {
	opacity: 1;
}


input:checked + .slide-container .nav label { display: block; }

</style>

<div>
    <div class="carousel">
        <ul class="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li class="slide-container">
                <div class="slide-image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg">
                </div>
                <div class="carousel-controls">
                    <label for="img-3" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-2" class="next-slide">
                      <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li class="slide-container">
                <div class="slide-image">
                    <img src="http://www.timisoaranight.gruzphoto.eu/IMG_8554.jpg">
                </div>
                <div class="carousel-controls">
                    <label for="img-1" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-3" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li class="slide-container">
                <div class="slide-image">
                    <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg">
                </div>
                <div class="carousel-controls">
                    <label for="img-2" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-1" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <div class="carousel-dots">
                <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
            </div>
        </ul>
    </div>
</div>
