$(document).ready(function(){
  $(".devourBtn").on("submit", function(event) {
    event.preventDefault();
    // console.log($(this).children('.burger_id').val());
    var id = $(this).children('.burger_id').val();
  //   var newBurger = $(this).data("newburger");

  //   var newBurgerState = {
  //       burger: newBurger
  // };
  $.ajax({
    method: "PUT",
    url: "/burgers/update/" + id 
  }).then(function(data) {
    // reload page to display devoured burger in proper column
    location.reload();
  });
      });
});
   