// Business Logic

function beepBoop(x) {
  var arrayAnswer = [];
  for (var i = 0; i <= x ; i++) {
    if (i.toString().includes(3)) {
      arrayAnswer.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes(2)) {
      arrayAnswer.push("Boop!");
    } else if (i.toString().includes(1)){
      arrayAnswer.push("Beep!");
    } else {
      arrayAnswer.push(i);
    }
  }
  return arrayAnswer
}

// User Interface

$(document).ready(function() {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();

    var userInputVal = parseInt($("input#userInput").val());

    var results = beepBoop(userInputVal);
    $("#output").empty();
    results.forEach(function(result){
      $("#output").append(result + "<br>");
    })
    $("#answer").show();
  });
});
