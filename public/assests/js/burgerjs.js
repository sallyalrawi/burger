
    $(".btn btn-default").on("submit", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");
  
        var newBurgerState = {
            burger: newBurger
      };
      $.ajax({
        method: "PUT",
        url: "/burgers/" + id + newBurgerState
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
          });