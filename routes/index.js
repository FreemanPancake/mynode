var express = require('express');
// var app = require('../app');
var router = express.Router();



var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test_database'
});

connection.connect();

var title = connection.query('SELECT username from user', function (err, rows, fields) {
  if (err) throw err;
  return fields;
});

connection.end();

// var string = app.dbconnect.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

module.exports = router;
