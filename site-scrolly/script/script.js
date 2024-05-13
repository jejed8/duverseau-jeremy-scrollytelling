let speed = 100;
let speed2 = 200;
let speed3 = 300;
let speed4 = 400;
let speed5 = 500;

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
      start: "10% 75%",
      end: "80% 10%",
    },
    x: "-100%",
  });

  gsap.to(".algues-premier-plan", {
    scrollTrigger: {
      markers: false,
      trigger: ".algues-premier-plan",
      scrub: 5,
      start: "10% 75%",
      end: "80% 10%",
    },
    x: "-115%",
  });
// section 2
  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
        start: "top top",
        end: "bottom top",
        trigger: ".chapitre2",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
      defaults: {
        duration: 14,
        ease: "none",
      },
    })
    .to("#ch2s3", { x: -3 * speed })
    .to(".epave", { x: -6 * speed }, 0)
    .to(".pieuvre-chap2", { x: -6 * speed}, 0)
    .to("#ch2s2", { x: -8 * speed }, 0)
    .to("#ch2s1", { x: -9 * speed }, 0)
    .to("pieuvre-chap2", { y: '-800'}, 7)
    .to("#ch2s3", { y: 5 * speed }, 10)
    .to(".epave", { y: 11 * speed }, 10)
    .to(".pieuvre-chap2", { y: 7 * speed}, 10)
    .to("#ch2s2", { y: 7 * speed }, 11)
    .to("#ch2s1", { y: 7 * speed }, 11);

  // section 3
  gsap
   .timeline({
    scrollTrigger: {
      markers: true,
      scrub: true,
      pin: true,
      pinSpacing: false,
      start: "top top",
      end: "bottom top",
      trigger: ".chapitre3",
    },
    defaults: {
      //duration: 14,
      ease: "none",
    },
   })
   .to("#ch3s1", { x: -4 * speed3, duration: 15}, 0.5)
   .to("#ch3s2", { x: -4 * speed3, duration: 12}, 0.5)
   .to("#ch3s3", { x: -7 * speed3, duration: 10}, 0.5)
   .to(".coraux-2-chap3", { x: -11 * speed5, duration: 10}, 0.5)
   .to(".coraux-1-chap3", {x: -12 * speed4, duration: 20}, 0.5);
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
