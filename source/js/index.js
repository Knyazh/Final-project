const nextButton = document.querySelector("#right-button");
nextButton.addEventListener("click", function(event) {
  nextSlide();
  resetAutoSlide();
});

const previousButton = document.querySelector("#left-button");
previousButton.addEventListener("click", function(event) {
  previousSlide();
  resetAutoSlide();
});

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    nextSlide();
    resetAutoSlide();
  } else if (event.key === "ArrowLeft") {
    previousSlide();
    resetAutoSlide();
  }
});

var slideIndex = 0;
showSlide(slideIndex);
var intervalValue = startAutoSlide();

function showSlide(index) {
  var slides = document.getElementsByClassName("slides");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "flex";
}

function nextSlide() {
  slideIndex++;
  var slides = document.getElementsByClassName("slides");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex--;
  var slides = document.getElementsByClassName("slides");

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlide(slideIndex);
}

function startAutoSlide() {
  return setInterval(function() {
    nextSlide();
  }, 3000); 
}

function resetAutoSlide() {
  clearInterval(intervalValue);
  intervalValue = startAutoSlide();
}
