//----- GSAP -----
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
  gsap.to("#CTA", {
    y: 100,
    duration: 2.5,
    repeat: "-1",
  });
});


//----- Sprite Sheet -----
let scrollTimer;

function removeScrollingClass() {
    document.body.classList.remove('is-scrolling');
}

window.addEventListener("scroll", function () {
  document.body.classList.add("is-scrolling");
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(removeScrollingClass, 100);
});
