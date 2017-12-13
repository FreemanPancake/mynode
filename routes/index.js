var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test_database'
});

connection.connect();

var title = "";
function getColour(callback) {
    connection.query('SELECT username FROM user', function (err, result) {
        if (err)
            callback(err, null);
        else
            callback(null, result[0].username);
    });
}
//call Fn for db query with callback
getColour(function (err, data) {
    if (err) {
        // error handling code goes here
        console.log("ERROR : ", err);
    } else {
        // code to execute on data retrieval
        title = data;
    }
});
connection.end();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

module.exports = router;
