// Business Logic

var userInputVal = $("input#userInput").val();
var arrayAnswer = [];
for (var i = 0; i <= userInputVal; i++) {
  if (i===1) {
    i==="Beep!"
    arrayAnswer.push(i);
  }
  if (i===2) {
    i==="Boop!"
    arrayAnswer.push(i);
  }
  if (i===3) {
    i==="I'm sorry, Dave. I'm afraid I can't do that."
  }
  arrayAnswer.push(i);
  console.log(arrayAnswer);
}

// User Interface

$(document).ready(function() {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    arrayAnswer.forEach(function() {
      append(i);
    });

    // $('#output').text(arrayAnswer);
    // $("#answer").show();
  });
});
