const today = moment(); // display the current time.
const currentHour = moment().hour(); // Displaying the current hour.
console.log(currentHour);
const textBox = $(".description");
console.log(textBox);
const saveButton = $(".saveBtn");
const timeBox = textBox;
console.log(timeBox);
$("#currentDay").text(today.format("dddd, MMMM Do YYYY!")); // Displayng the date.


for (let i = 0; i < textBox.length ; i++) {
  console.log(textBox[i].dataset.hour);

  if (textBox[i].dataset.hour < currentHour){
    textBox[i].classList.add('past');
    console.log("past Hour");
  } else if (textBox[i].dataset.hour == currentHour) {
    textBox[i].classList.add('present');
    console.log("Current Hour");
  } else {
    textBox[i].classList.add('future');
    console.log("Future Hour");
  }

};


// function saveDisplay(){
//   const key = "hour-" + i;
//   const data ='';

//   const template = `<div id="hour-" class="row time-block">
//   <div class="col-md-1 hour">${key}</div>
//   <textarea class="col-md-10 description past present future">${data}</textarea>
//   <button type="button" class="saveBtn">${key}</button>
//  </div>`

// }
