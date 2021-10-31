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
