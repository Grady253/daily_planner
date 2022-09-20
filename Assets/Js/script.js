const today = moment(); // display the current time.
const currentHour = moment().hour(); // Displaying the current hour.
console.log(currentHour);
const textBox = $(".description");
const saveButton = $(".saveBtn");
let containEl = $(".container");
$("#currentDay").text(today.format("dddd, MMMM Do YYYY!")); // Displayng the date.

//This function will color out the time blocks once that hour is passed.
function colorHours(){
  // Calling each time block and running it through a function.
  $(".time-block").each(function(){
    const timeEl = parseInt($(this).attr("id"))
    //This if statement is running if the time current hour has passed the hour listed the color block will change.
    if (currentHour < timeEl){
      $(this).addClass("future");
    }else if (currentHour == timeEl){
      $(this).addClass("present");
    }else{
      $(this).addClass("past");
    }
  })
}

// This function is creating the rows and applying it to the html page.
function createRows(){
  //This for loop is creating a time block for everyone hour from 9am - 5pm.
  for (let i = 9; i <= 17; i++) {
    const element = $("<div>");
    element.addClass("row time-block").attr("id", i);
    //Adding time to each block.
    const hourEl = $("<div>").addClass("col-md-1 hour").text(i+":00");
    //Adding a text box for each time.
    const textArea = $("<textarea>").addClass("col-md-10 description");
    // creating a save button for each time.
    const saveBtn = $("<button>").addClass("saveBtn col-md-1").html("save");
    element.append(hourEl).append(textArea).append(saveBtn);
    element.appendTo(containEl);
  }
}

//This function is retreving the data from the local storage.
function getData(){
  const storageData =  JSON.parse(window.localStorage.getItem("data"));
  console.log(storageData);
  $(".description").each(function(){
    const time = $(this).parent().attr("id");
    for (let i = 0; i < storageData.length; i++) {
      const storageEl= storageData[i];
      if(time == storageEl.time){
        $(this).text(storageEl.value)
      }
    }
  })
}

//The code below is calling each of the function 
createRows();

colorHours();

getData();

$(".saveBtn").on("click",function(event) {
  // saveDisplay();
  event.preventDefault();
  const time = $(this).parent().attr("id");
  const value = $(this).siblings(".description").val();
  let toDo = JSON.parse(window.localStorage.getItem("data")) || [];
  toDo.push({time, value});
  window.localStorage.setItem("data", JSON.stringify(toDo))
});
