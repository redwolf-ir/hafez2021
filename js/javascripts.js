gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.to(
  "#balon",
  {
    duration: 6,
    x: 40,
    y: 40,
    repeat: -1,
    yoyo: true,
    ease: "none",
    rotation: "20_cw",
  },
  0
)
  .fromTo(
    "#abr_x5F_2",
    { opacity: 0.5, x: 200 },
    { duration: 2.5, opacity: 1, x: -300, ease: "none", repeat: -1 },
    0
  )
  .fromTo(
    "#bird_x5F_1",
    { opacity: 0, x: 0, duration: 4 },
    { duration: 6, opacity: 1, x: 440, ease: "none", repeat: -1 },
    0
  )
  .fromTo(
    "#abr_kenar_balon",
    { opacity: 0, x: 0, duration: 6 },
    { duration: 5, opacity: 1, x: -550, ease: "none", repeat: -1 },
    0
  )
  .to(
    "#bird_x5F_4",
    {
      duration: 0.9,
      // y: -20,
      scale: 0.8,
      repeat: -1,
      yoyo: true,
    },
    0
  )
  .to(
    "#bird_x5F_3",
    {
      duration: 5,
      x: 40,
      scale: 0.8,
      repeat: -1,
      yoyo: true,
    },
    0
  )
  .to(
    "#bird_x5F_2",
    {
      duration: 0.6,
      scale: 0.7,
      repeat: -1,
      yoyo: true,
    },
    0
  )
  .fromTo(
    "#abr_x5F_1",
    { opacity: 0, x: 0, duration: 4 },
    { duration: 4, opacity: 1, x: -200, ease: "none", repeat: -1 },
    0
  )
  .to(
    "#boat",
    {
      duration: 15,
      opacity: 1,
      x: -100,
      ease: "none",
      repeat: -1,
      yoyo: true,
    },
    0
  )
  .to(
    "#boat_x5F_under",
    { duration: 15, opacity: 1, x: -100, ease: "none", repeat: -1, yoyo: true },
    0
  )
  .to("#lake_shadow", { duration: 0.5, x: 8, yoyo: true, repeat: -1 }, 0);

// gsap.to(".welcome-part", {
//   scrollTrigger: {
//     trigger: ".welcome-part",
//     start: "top top",
//     scrub: true,
//   },
//   borderRadius: "0",
//   duration: 1,
// });
// gsap.to("#balon", {

//   // repeatDelay: 0,
// });
// gsap.to("#abr_x5F_2", {
//   duration: 2,
//   opacity: 1,
//   x: 200,
//   ease: "none",
//   repeat: -1,
//   yoyo: true,
//   // repeatDelay: 0,
// });
// gsap.fromTo(
//   "#abr_x5F_2",
//   { opacity: 1, x: 200, duration: 4 },
//   {
//     duration: 4,
//     opacity: 0,
//     x: -100,
//     ease: "none",
//     repeat: -1,
//   }
// );

// gsap.fromTo(
//   "#bird_x5F_1",
//   { opacity: 1, x: 0, duration: 4 },
//   { duration: 4, opacity: 0, x: 200, ease: "none", repeat: -1 }
// );
