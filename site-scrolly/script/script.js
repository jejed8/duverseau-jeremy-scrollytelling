//----- GSAP -----
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
  gsap.to("#CTA", {
    y: 100,
    duration: 2.5,
    repeat: "-1",
  });

  gsap.to(".poissons1-chap1", {
    repeat: "-1",
    ease: "none",
    duration: 7.5,
    x: "120vw",
  });

  gsap.to(".poissons2-chap1", {
    repeat: "-1",
    ease: "none",
    duration: 12,
    x: "100vw",
    start: 4,
  });

  gsap.to(".algues-chap1", {
    scrollTrigger: {
      markers: false,
      trigger: ".algues-chap1",
      scrub: 5,
      start: '10% 75%',
      end: '80% 10%',
    },
    x: "-100%",
  });

  gsap.to(".algues-chap1-2", {
    scrollTrigger: {
      markers: true,
      trigger: ".algues-chap1-2",
      scrub: 5,
      start: '10% 75%',
      end: '80% 10%',s
    },
    x: "-100%",
  });
});

//----- Sprite Sheet -----
let scrollTimer;

function removeScrollingClass() {
  document.body.classList.remove("is-scrolling");
}

window.addEventListener("scroll", function () {
  document.body.classList.add("is-scrolling");
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(removeScrollingClass, 100);
});
