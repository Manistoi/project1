var counter = 0;

$(document).on("click", ".plus", function() {
  var counter = $(this).siblings(".count").text();
  counter++;
  $(this).siblings(".count").text(counter);
});
$(document).on("click",".minus", function() {
  counter--;
  var counter = $(this).siblings(".count").text();
  counter--;
  $(this).siblings(".count").text(counter);
});

