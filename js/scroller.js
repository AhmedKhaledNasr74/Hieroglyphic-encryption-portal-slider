let scroller = document.querySelector(".photoSlider");
let encrypt = document.querySelector(".photoSliderEncrypted");

scroller.animate([{ transform: `translateX(${window.innerWidth * 4}px` }], {
    duration: 28000,
    iterations: Infinity,
});

encrypt.animate([{ transform: `translateX(${window.innerWidth * 4}px` }], {
    duration: 28000,
    iterations: Infinity,
});
