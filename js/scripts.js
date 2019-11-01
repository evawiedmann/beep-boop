// Business Logic
var parsedUserInput = $(parseInt("#userInput"))

if (true) {

} else {

}

// UI

$(document).ready(function () {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    var userInputVal = $("input#userInput").val();


    $("#answer").show();
    $("#bbForm").hide();

    console.log(userInputVal);

  });
});
