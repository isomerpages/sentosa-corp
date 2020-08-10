var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://assets.dcube.cloud/scripts/wogaa.js';    

document.getElementsByTagName('head')[0].appendChild(script);

function myReadMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

