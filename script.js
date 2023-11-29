// // Initial animation
// gsap.from("#h3", {
//   duration: 1.5,
//   opacity: 0,
//   x: -50,
//   ease: "power2.out",
// });

// // Animation with infinite loop
// gsap.to("#h3", {
//   duration: 1.5,
//   delay: 1,
//   opacity: 0,
//   x: 50,
//   ease: "power2.in",
//   repeat: -1, // Set repeat to -1 for infinite loop
// });

// function runAnimation() {
//   gsap.to("#h3", {
//     repeat: -1, // Infinite loop
//     duration: 1.5,
//     opacity: 0,
//     scale: 0.5,
//     ease: "elastic.out(1, 0.3)",
//     onComplete: function () {
//       gsap.from("#h3", {
//         duration: 1.5,
//         opacity: 0,
//         y: 100,
//         scale: 2,
//         ease: "power2.in",
//         onComplete: function () {
//           // This function runs after the second animation is complete
//           document.getElementById("p").textContent = "EchoVita Hospital";
//           gsap.from("#h3", {
//             duration: 1.5,
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             ease: "power2.out",
//           });
//         },
//       });
//     },
//   });
// }

// // Call the animation function
// runAnimation1();

function runAnimation() {
  gsap.from("#p", {
    loop: Infinity, // Infinite loop
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    ease: "elastic.out(1, 0.3)",
    onComplete: function () {
      gsap.to("#p", {
        duration: 1.5,
        opacity: 0,
        y: 100,
        scale: 2,
        ease: "power2.in",
        onComplete: function () {
          // This function runs after the second animation is complete
          document.getElementById("p").textContent = "EchoVita Hospital🏥";
          gsap.to("#p", {
            duration: 1.5,
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
          });
        },
      });
    },
  });
}

// Call the animation function
runAnimation();
