// Business Logic



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
    var splitInput = (userInputVal).split('');
    console.log(splitInput);

    // console.log(userInputVal);

    // $('#stringInput').text(stringInput);
    $("#output").text(userInputVal);
    $("#answer").show();
    $("#bbForm").hide();

  });

});
