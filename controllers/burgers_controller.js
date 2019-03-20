var express = require ("express"); 
var router = express.Router(); 
var burger = require("../models/burger.js"); 

router.get("/", function(req,res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data}); 
    })
})

router.put("/burgers/update", function(req,res){
    burger.updateOne(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/create", function(req,res){
    burger.insertOne(req.body.burger_name,function(result){
        res.redirect("/");
    });
});

router.delete("/api/burgers/delete", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
module.exports = router; 