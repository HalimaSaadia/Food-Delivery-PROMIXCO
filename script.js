const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

console.log(counter)
console.log(counter < slides.length-1)
const nextSlide = () => {
  if (counter < slides.length-1) {
    counter++;
    slideReview();
    console.log(counter)
console.log(counter < slides.length)
  }
};

const previousSlide = () => {
    if(counter>0){
        counter--;
        slideReview();
    }
  
};

const slideReview = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
