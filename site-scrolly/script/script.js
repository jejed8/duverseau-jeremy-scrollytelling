
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
  gsap.to('#CTA', {
    y: 100,
    duration: 2.5,
    repeat: '-1',
  });

});

