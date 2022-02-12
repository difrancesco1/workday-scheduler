//Today's Date
var todaysDate = moment().format("DD MMM, YYYY hh:mm"); 

$("p#currentDay").text(todaysDate); //get element by id-p#currentDay Display the current date

//Current Time
var currentHour = moment().hour(); //Using the hour for each indivisual time block
$('.description') //getting the description class
  .each(function() {
    var val = parseInt($(this).prop('id'));
    if(val > currentHour) { //if the time block is > current time
      $(this).addClass('future');
    }else if(val < currentHour){ //if the time block is before the current time
      $(this).addClass('past');
    }else{ //if the time block is equal to the current time
      $(this).addClass('present');
    }
  }
  )

//Save Function
function saveData() {
}

$(".saveBtn").on("click", function(){
  var thisBtn = $(this); 
  var parentDiv = thisBtn.parent(); //returns the direct parent element of the selected element.
  var textarea = parentDiv.find("textarea");
  var value = textarea.val(); //returns or sets the value attribute of the selected elements
  var key = textarea.attr("id");
  localStorage.setItem(key, value);
})

for(var hour = 9; hour < 18; hour++) { //hours 9-5 
  $("#" + hour).val(localStorage.getItem(hour));
} 