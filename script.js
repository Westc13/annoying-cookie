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

//TODO: Challenge
// 1. Take control of the close button.
// 2. Use an event listener to set the display property of the modal to 'none' when the close button is clicked.

const modalCloseBtn = document.getElementById("modal-close-btn");
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

//TODO: Challenge
// 1. Take control of the form element.
// 2. Add an eventListener to the form to listen for a 'submit' event.
// 3. When a user clicks 'accept', prevent the default behavior that triggers the refresh.
// 4. Log out 'form submitted'.

const consentForm = document.getElementById("consent-form");
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
});

//TODO: Challenge
// 1. Take control of the 'modal-text' element.
// 2. Make it so that when a user clicks on the accept button, the HTML string below is inserted into the modal - text div.
{
  /* <div class="modal-inner-loading">
  <img src="images/loading.svg" class="loading" alt="loading pink dots" />
  <p id="uploadText">Uploading your data to the dark web...</p>
</div>; */
}

const modalText = document.getElementById("modal-text");

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modalText.innerHTML = ` <div class="modal-inner-loading">
          <img
            src="assets/loading.svg"
            class="loading"
            alt="loading pink dots"
          />
          <p id="upload-text">Uploading your data to the dark web...</p>
        </div>
        `;
  setTimeout(() => {
    // modalText.innerText = `Making the sale...`; // my solution
    document.getElementById("upload-text").innerText = `Making the sale...`; // Scrimba solution
  }, 1500);
});

//TODO: Challenge
// 1. Use a setTimeout to make the phrase "Uploading your data to the dark web" change to "Making the sale..." after 1.5 seconds.
// ⚠️ Do not change the loading svg!
// In the event listener of consentForm add the setTimeout function - see above
