var express = require('express');
var router = express.Router();

/* GET admin listing. */
// router.get('/', function(req, res, next) {
//   res.send('this is admin page');
// });
var text = "this is a admin page";

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render('admin', { text: text });
});



module.exports = router;
