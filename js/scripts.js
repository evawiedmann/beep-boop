// Business Logic
var parsedUserInput = parseInt("#userInput")

// expected output: true

// function Computron
if (splitInput.includes(2)) {

console.log("yes");
} else {

console.log("no");
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
