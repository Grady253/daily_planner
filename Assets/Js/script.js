//setting a const declaring to the date.
const today = moment(); //This is displaying the current day.

const hour = moment().hour(); //Determines the hour 

$("#currentDay").text(today.format("dddd, MMMM Do YYYY!"));

function timecycle(){
  for (let i = 9; i <= 17; i++) {

    const info = "";

    const key = "hour-"+i;

    const template = ` <div id="hour-" class="row time-block">
    <div class="col-md-1 hour">${i}</div>
    <textarea class="col-md-10 description past present future">${info}</textarea>
    <button type="button" class="saveBtn">${i}</button>
    </div>`;

    // if (i < hour){
    //   $('row time-block').addClass('past');
    // } else if (i == hour){
    //   $('row time-block').addClass('present');
    // } else{
    //   $('row time-block').addClass('future');
    //   console.log("it works");
    // };
  }

};

// function colorChange(){
// if (i < hour){
//   $('row time-block').addClass('past');
// } else if (i === hour){
//   $('row time-block').addClass('present');
// } else{
//   $('row time-block').addClass('future');
//   console.log("it works");
// };
// };
