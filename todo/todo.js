// This code runs when the page loads
$(function() {

  $(".remove-btn-item").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    console.log(elementThatWasClicked.parent());
    console.log(elementThatWasClicked.parent().parent());
    elementThatWasClicked.parent().parent().remove();
  });

})
