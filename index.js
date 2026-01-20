function displaymenu() {
  document.getElementsByClassName('azure-links')[0].classList.toggle("show");
}

document.getElementById("bars").addEventListener("click", displaymenu);


const slides = document.querySelector(".sliding");
let current = 0;

setInterval(() => {
  current++;
  if (current >= slider.children.length) {
    current = 0;
  }
  slider.style.transform = `translateX(-${current * 100}%)`;
}, 3000);




let indexing =  0;
const slider = document.querySelector(".sliders");
images = slider.children.length;

setInterval(() => {
  indexing = (indexing + 1) % images;
  slider.style.transform = `translateX(-${indexing * 300}px)`;
}, 7000);
