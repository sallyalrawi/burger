var orm = require("../config/orm.js"); 

var burger = {
  selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res); 
        })
    },
    updateOne: function(id,cb) {
            orm.updateOne("burgers", id, cb);

        }, 
        insertOne: function(name,cb){
            orm.insertOne("burgers", name,cb);
        }
    }


      
module.exports = burger; 