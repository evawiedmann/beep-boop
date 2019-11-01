// Business Logic
// var parsedUserInput = parseInt("#userInput")
// console.log(parsedUserInput);
// var stringInput = parsedUserInput.toString();
// var splitInput = (stringInput).split('');

// function Computron
// if (splitInput.includes("2")) {

// console.log("yes");
// } else {
//
// console.log("no");
// }

// UI

$(document).ready(function () {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    var userInputVal = $("input#userInput").val();

    console.log(userInputVal);

    // $('#stringInput').text(stringInput);
    $("#output").text(userInputVal);
    $("#answer").show();
    $("#bbForm").hide();

  });

});
