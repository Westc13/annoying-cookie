//TODO: setTimeout

//? a practice of how to use setTimeout(function(){}, delay in ms)
// console.log("what is the capital of Peru?");

// setTimeout(function () {
//   console.log("Lima!");
// }, 3000);

// setTimeout(function () {
//   console.log("Ready for next question?");
// }, 6000);

// setTimeout(function(){
//     console.log('Modal Opened!')
// }, 1500)

//TODO: element.style - targeting an element's style with JS
//Example - changing the answer display from "none" to "block"

// const revealBtn = document.getElementById("reveal-btn");
// const answer = document.getElementById("answer");
// revealBtn.addEventListener("click", function () {
//   answer.style.display = "block";
// });

//Challenge - animal trivia bunny whiskers
//1. when the button is clicked and the answer revealed, change the background color to #68e1fd and text color to #1434A4 just in the "question" div.
//⚠️ You will run into a problem with the background color.

// const question = document.getElementsById("question");
// revealBtn.addEventListener("click", function () {
//   question.style.backgroundColor = "#68e1fd";
//   question.style.color = "#1434A4";
//   revealBtn.style.display = "none";
// });

//TODO: Challenge
// 1. Take control of the 'modal' div with JS.
// 2. Swap out console.log for a line of code which will change the CSS 'display' property of our modal to 'inline'
const modal = document.getElementById("modal");
setTimeout(function () {
  modal.style.display = "inline";
}, 1500);
