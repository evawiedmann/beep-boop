

// function Computron

// UI

$(document).ready(function () {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    var userInputVal = $("input#userInput").val();
    var splitInput = (userInputVal).split('');

    if (splitInput.includes("3")===true) {

      $("#sorry").show();

    } else if(splitInput.includes("2")===true) {

      $("#boop").show();

    } else if(splitInput.includes("1")===true) {

      $("#beep").show();
    } else {

      console.log("else");

    }
    $("#output").text(userInputVal);
    $("#answer").show();
    $("#bbForm").hide();

  });

});
