// Business Logic
var splitInput = userInputVal.split('');
// var userInputVal = $("input#userInput").val();
function minusOne(numbers){
  var arrayAnswer = [" "];
  numbers.forEach(function(number) {
    var minOne = number - 1
    arrayAnswer.push(newNum)
  })
  return arrayAnswer
};

// UI
$(document).ready(function () {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    if (splitInput.includes("3")===true) {
      $("#sorry").show();
    } else if(splitInput.includes("2")===true) {
      $("#boop").show();
    } else if(splitInput.includes("1")===true) {
      $("#beep").show();
    } else {
      // $("#answer").text(arrayAnswer);
      $('#output').text(arrayAnswer);
    }
    $("#answer").show();
  });
});
