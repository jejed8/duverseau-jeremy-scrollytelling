let speed = 100;
let speed2 = 200;
let speed3 = 300;
let speed4 = 400;
let speed5 = 500;

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    ScrollTrigger,
    MotionPathPlugin,
    MorphSVGPlugin,
    DrawSVGPlugin
  );
  // gsap code here!
  // ---------- header ----------
  gsap.to("#CTA", {
    y: 100,
    duration: 2.5,
    repeat: "-1",
  });
  const animPathPres = gsap.to(".sousmarin-pres", {
    transformOrigin: "50% 50%",
    motionPath: {
      align: "#path-pres",
      path: "#path-pres",
      autoRotate: true,
      start: -1,
      end: 1,
      ease: "power1.inOut",
    },
    duration: 100000,
    paused: true,
  });
  ScrollTrigger.create({
    trigger: ".animation-pres",
    start: "top top",
    end: "bottom top",
    animation: animPathPres,
    scrub: true,
    markers: false,
    duration: 30,
  });

  // ---------- section 1 ----------
  gsap.to(".poissons1-chap1", {
    repeat: "-1",
    ease: "none",
    duration: 7.5,
    x: "120vw",
    trigger: ".chapitre1",
  });

  gsap.to(".poissons2-chap1", {
    repeat: "-1",
    ease: "none",
    duration: 12,
    x: "100vw",
    start: 4,
    trigger: ".chapitre1",
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

  gsap.to(".sol-chap1", {
    scrollTrigger: {
      markers: false,
      trigger: ".algues-chap1",
      scrub: 5,
      start: "80% 75%",
      end: "80% 10%",
    },
    x: "-100%",
  });

  gsap.to(".sousmarin-ch1", {
    scrollTrigger: {
      markers: false,
      trigger: ".sousmarin-ch1",
      scrub: 1,
      start: "80% 75%",
      end: "80% 10%",
    },
    x: 22 * speed,
  });

  // ---------- section 2 ----------
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
    .to(".sousmarin-ch2", { x: 10 * speed, duration: 10 }, 0)
    .to("#ch2s3", { x: -3 * speed }, 4)
    .to(".epave", { x: -6 * speed }, 4)
    .to(".pieuvre-chap2", { x: -6 * speed }, 4)
    .to("#ch2s2", { x: -8 * speed }, 4)
    .to("#ch2s1", { x: -9 * speed }, 4)
    .to("pieuvre-chap2", { y: "-800" }, 11)
    .to("#ch2s3", { y: 5 * speed }, 14)
    .to(".epave", { y: 11 * speed }, 14)
    .to(".pieuvre-chap2", { y: 7 * speed }, 14)
    .to("#ch2s2", { y: 7 * speed }, 15)
    .to("#ch2s1", { y: 7 * speed }, 15)
    .to(".sousmarin-ch2", { y: 7 * speed }, 17);

  // ---------- section 3 ----------
  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
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
    .to(".sousmarin-ch3", { x: 22 * speed, duration: 17 })
    .to("#ch3s1", { x: -4 * speed3, duration: 15 }, 0.5)
    .to("#ch3s2", { x: -4 * speed3, duration: 12 }, 0.5)
    .to("#ch3s3", { x: -5 * speed3, duration: 10 }, 0.5)
    .to(".coraux-2-chap3", { x: -11 * speed5, duration: 10 }, 0.5)
    .to(".coraux-1-chap3", { x: -12 * speed4, duration: 20 }, 0.5);
  //---------- section 4 ----------
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".chapitre4",
        markers: false,
        scrub: 1,
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "bottom top",
      },
    })
    .to(".sousmarin-ch4", { x: 20 * speed2, duration: 15 });
  //---------- section 5 ----------
  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
        scrub: true,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "bottom top",
        trigger: ".chapitre5",
      },
      defaults: {
        ease: "power1.inOut",
      },
    })
    .to(".sousmarin-chap5", { y: 5 * speed2, duration: 150 }, 0)

    // draw svg
    .fromTo(
      "#drawSVG",
      { drawSVG: "0% 0%" },
      { drawSVG: "0% 100%", duration: 150, ease: "power1.inOut" }
    )

    .to("#mur1gauche", { y: -50 * speed5, duration: 140 }, 1)
    .to("#mur1droit", { y: -50 * speed5, duration: 140 }, 1)
    .to("#mur2gauche", { y: -40 * speed5, duration: 165 }, 1)
    .to("#mur2droit", { y: -40 * speed5, duration: 165 }, 1);

  //---------- section 6 ----------
  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
        scrub: true,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "bottom top",
        trigger: ".chapitre6",
      },
    })
    .to(".sousmarin-ch6", { y: "75vw", duration: 25 })
    .to(".sousmarin-ch6", { rotation: -90, duration: 10 }, 15)
    .to(".sousmarin-ch6", { x: 1 * speed, duration: 7 }, 15)

    //morph svg
    .to("#trou", { MorphSVG: "#monstre", duration: 15 }, 45)

    .to(".bg-chap6", { opacity: 0, duration: 150, ease: "power1.inOut" }, 300)
    .to(
      ".sousmarin-ch6",
      { opacity: 0, duration: 150, ease: "power1.inOut" },
      300
    )
    .to("bg-4-chap6", { opacity: 0, duration: 150, ease: "power1.inOut" }, 300)
    .to("#texteFin", { opacity: 1, duration: 150, ease: "power1.inOut" }, 500);
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
