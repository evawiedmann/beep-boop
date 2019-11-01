$(document).ready(function () {
  $("form#bbForm").submit(function(event) {
    event.preventDefault();
    $("#answer").show();
    $("#bbForm").hide();


});
