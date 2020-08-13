const save = document.querySelector(".save")
const input = document.querySelector(".input")

setInterval(function () {
    $("#currentDay").text(moment().format("dddd, MMMM do YYYY, h:mm:ss a"));
}, 1000);

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist