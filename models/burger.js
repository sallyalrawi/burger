var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  updateOne: function(id, data, cb) {
    orm.updateOne("burgers", data, `id = ${id}`, cb);
  },
  insertOne: function(cols, data, cb) {
    orm.insertOne("burgers", cols, data, cb);
  }
};

module.exports = burger;
