// define vars
var saveBtn = $(".saveBtn");

// current day display at top of page
$("#currentDay").text(moment().format('dddd, MMMM do YYYY'));

// blocks color-coded to indicate if past present or future
function blockColor(){
    var hour = moment().hours();

    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));

        console.log(this);

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour){
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

//click event for save button and saving input
saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
})

function planner(){
    $(".hour").each(function(){
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if (currentPlan !== null){
            $(this).siblings(".plan").val(currentPlan);
        }
    })
}

blockColor();
planner();
