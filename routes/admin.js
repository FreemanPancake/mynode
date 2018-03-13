var express = require('express');
var router = express.Router();

/* GET admin listing. */
// router.get('/', function(req, res, next) {
//   res.send('this is admin page');
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: "this is a admin page" });
});

/* GET admin home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: title });
//   });


module.exports = router;
