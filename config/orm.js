// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for SQL syntax.

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
       
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
      
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

  // Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // insertOne('burgers', ['burger_name'], ['Veggie'], cb)
  insertOne: function(table, cols, vals, cb) {
    console.log("**orm js Create test**");
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString(); // INSERT INTO burgers (burger_name, devoured) 
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {burger_name: baconburger, devoured: true}
  updateOne: function(table, objColVals, condition, cb) {
    console.log("**orm js Update test**");
    console.log(table);
    console.log(objColVals);
    console.log(condition);
    console.log(cb);
    
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition; // 'id = 1'

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object .
module.exports = orm;