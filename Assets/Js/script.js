const today = moment(); // display the current time.
const currentHour = moment().hour(); // Displaying the current hour.
console.log(currentHour);
const textBox = $(".description");
const saveButton = $(".saveBtn");
let containEl = $(".container");
$("#currentDay").text(today.format("dddd, MMMM Do YYYY!")); // Displayng the date.

const input = localStorage.getItem("data");

for (let i = 0; i < textBox.length; i++) {
  console.log(textBox[i].dataset.hour);

  if (textBox[i].dataset.hour < currentHour) {
    textBox[i].classList.add("past");
    console.log("past Hour");
  } else if (textBox[i].dataset.hour == currentHour) {
    textBox[i].classList.add("present");
    console.log("Current Hour");
  } else {
    textBox[i].classList.add("future");
    console.log("Future Hour");
  }
}

// function saveDisplay() {
//   let key = textBox;
//   let data = ""; 

//   const template = `<div id="hour-" class="row time-block">
//   <div class="col-md-1 hour"></div>
//   <textarea data-hour=${key}class="col-md-10 description">${data}</textarea>
//   <button data-hour=${key} class="saveBtn"></button>
//  </div>`;

//  localStorage.setItem(key,input);
 
// }

containEl.addEventListener("click",(event) => {
  
  saveDisplay();

});


for (let i = 9; i < 17; i++) {
  let key = "hour-" + i;
  let data = ""; 

  const template = `<div id="hour-" class="row time-block">
  <div class="col-md-1 hour"></div>
  <textarea data-hour=${i}class="col-md-10 description">${data}</textarea>
  <button data-hour=${i} class="saveBtn"></button>
 </div>`;

 localStorage.setItem(key,input);
}