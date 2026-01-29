console.log("Cursor circle script loaded.");

const fixed_cursor_dot = document.getElementById("cursor-dot-fixed");

// dots = [];
// for (let i = 0; i < 10; i++) {
//   var elem = document.createElement("div");
//   elem.className = "cursor-dot";
//   document.getElementById("cursor-layer").appendChild(elem);

//   dots.push(elem);

//   //   setTimeout(() => {
//   //     elem.remove();
//   //     dots.shift();
//   //   }, 1000);
// }

// let stopTimers = [];
// document.addEventListener("mousemove", (e) => {
//   dots.forEach((dot, index) => {
//     clearTimeout(stopTimers[index]);
//     dot.classList.remove("zero-size");
//     dot.style.width = "30px";
//     dot.style.height = "30px";

//     dot.classList.add("zero-size");
//     // dot.style.left = `${e.clientX - index * 5}px`;
//     // dot.style.top = `${e.clientY - index * 5}px`;
//     dot.style.left = `100px`;
//     dot.style.top = `100px`;

//     stopTimers[index] = setTimeout(() => {
//     dots.forEach((dot, index) => {
//       dot.classList.add("zero-size");
//     }, 2000);
//   });
//   });
// });

document.addEventListener("mousemove", (e) => {
  // Move fixed cursor dot
  fixed_cursor_dot.style.left = `${e.clientX}px`;
  fixed_cursor_dot.style.top = `${e.clientY}px`;
});
