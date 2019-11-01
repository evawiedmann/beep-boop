

// function Computron

// UI

$(document).ready(function () {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    var userInputVal = $("input#userInput").val();
    var splitInput = (userInputVal).split('');
    console.log(splitInput);

if (splitInput.includes("2")===true) {

  console.log("yes");
} else {

  console.log("no");
// if (includesTwo(splitInput)===true) {
//   console.log("helolo");
// } else {
//   console.log("hi");

}
    // console.log(userInputVal);

    // $('#stringInput').text(stringInput);
    $("#output").text(userInputVal);
    $("#answer").show();
    $("#bbForm").hide();

  });

});
