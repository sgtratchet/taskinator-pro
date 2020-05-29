//check local storage

//fill in with local storage info

//moment.js for current time
var currentTime = moment().format('MM/DD/YYYY');
console.log(currentTime);
//color applied to input field based on current time

//local storage on button click
$('saveBtn').click(function(){
    localStorage.setItem("task", "task");
    console.log(localStorage)
})

//local storage to be linked to appropriate time slot
