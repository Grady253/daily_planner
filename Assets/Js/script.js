//These are the variables I'll be calling in my code below.

var past = $("#past");
var present =$("#present");
var future = $("#future");
var today = moment();//This is displaying the current day.

$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//This for loop is to count the time
for(var i =9; i <=18; i++){
    if (i > today){
        document.getElementById(".col-md-10") = past;
    };
    
    if (i === today){
        document.getElementById(".col-md-10") = present;
    };

    if(i < today){
        document.getElementById(".col-md-10") = future;
    };



}