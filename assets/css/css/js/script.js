// define vars
var saveBtn = $(".saveBtn");

// current day display at top of page
$("#currentDay").text(moment().format('LLLL'));

//click event for save button and saving input
saveBtn.on("click", function(){
    var plan = $(this).siblings(".plan").val();
    var time = $(this).siblings(".hour").text();
    

    localStorage.setItem(time, plan);
});

// $("#hour9 .plan").val(localStorage.getItem("hour9"));
// $("#hour10 .plan").val(localStorage.getItem("hour10"));
// $("#hour11 .plan").val(localStorage.getItem("hour11"));
// $("#hour12 .plan").val(localStorage.getItem("hour12"));
// $("#hour13 .plan").val(localStorage.getItem("hour13"));
// $("#hour14 .plan").val(localStorage.getItem("hour14"));
// $("#hour15 .plan").val(localStorage.getItem("hour15"));
// $("#hour16 .plan").val(localStorage.getItem("hour16"));
// $("#hour17 .plan").val(localStorage.getItem("hour17"));

// blocks color-coded to indicate if past present or future
function blockColor(){
    var currentHour = moment().hour();

    $(".timeBlock").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        //console.log(this);

        if (blockHour < currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (blockHour === currentHour){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}



function planner(){
    $(".hour").each(function(){
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if (currentPlan !== null){
            $(this).siblings(".plan").val(currentPlan);
        }
    });
    
}

blockColor();
planner();
