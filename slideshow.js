var slideIndex = 0;
showSlides();

function showSlides() {
  console.log(slideIndex);
  var i;
  var slides = document.getElementsByClassName("monkeSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function plusSlides(n) {
    console.log(slideIndex);
    slideIndex+=n;

}