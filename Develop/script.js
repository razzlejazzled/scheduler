

setInterval(function () {
    $("#currentDay").text(moment().format("dddd, MMMM do YYYY, h:mm:ss a"));
}, 1000);

let schedule = localStorage.getItem("schedule");
if (schedule) {
    schedule = JSON.parse(schedule);
} else {schedule = {};
}


for(id in schedule){
    console.log(schedule, id)
    $("#"+id).children("textarea").val(schedule[id]);
}

$(".saveBtn").on("click", function(e){
    const val = $(this).siblings("textarea")[0].value.trim();
    const id = $(this).parent().attr("id");

    schedule[id] = val;

    localStorage.setItem("schedule", JSON.stringify(schedule));
})

const currentHour = parseInt(moment().format("H"));
$(".time-block").each(function(){
    const hour = parseInt($(this).attr("id").replace("hour-", ""));
    console.log(hour)
    if (hour < currentHour){
        $(this).addClass("present");
    } else if(currentHour === hour){
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
})


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist