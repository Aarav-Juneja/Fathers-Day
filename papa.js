var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[0])
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.onkeydown = checkKey;
function checkKey(e) {
    var event = window.event ? window.event : e;
    if (event.keyCode === 37) {
      plusSlides(-1)
    }
    if (event.keyCode === 39) {
      plusSlides(1)
    }
}
