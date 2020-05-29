
//check local storage

//fill in with local storage info
var task = localStorage.getItem('task');

//moment.js for current time
var currentTime = moment().format('MM/DD/YYYY');
console.log(currentTime);
//color applied to input field based on current time

//local storage on button click
$('saveBtn').click(function(){
    $('#9am').html();
    localStorage.setItem("task", textArea);
    console.log(task)
})

//local storage to be linked to appropriate time slot
