$(document).ready(function() {
  $(".devourBtn").on("submit", function(event) {
    event.preventDefault();
    // console.log($(this).children('.burger_id').val());
    var id = $(this)
      .children(".burger_id")
      .val();
    var newBurger = $(this).data("newburger");
    console.log(newBurger);

    var newBurgerState = {
      id: id,
      devoured: 1
    };
    $.ajax({
      method: "PUT",
      data: newBurgerState,
      url: "/burgers/update"
    }).then(function(data) {
      alert("devoured");
      // reload page to display devoured burger in proper column
      location.reload();
    })  
  });
});
