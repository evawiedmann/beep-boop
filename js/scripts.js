// Business Logic
var parsedUserInput = parseInt("#userInput")

if (true) {

} else {

}
var stringInput = parsedUserInput.toString();
var splitInput = (stringInput).split('');


// UI

$(document).ready(function () {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    var userInputVal = $("input#userInput").val();

    $('#stringInput').text(stringInput);
    $("#answer").show();
    // $("#bbForm").hide();

  });

});
