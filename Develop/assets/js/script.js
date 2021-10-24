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

saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan");

    localStorage.setItem(time, plan);
})

blockColor();