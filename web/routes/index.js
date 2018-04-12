var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/master-form', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/redux-form', function(req, res, next) {
  res.render('redux_form', { title: 'Express' });
});

module.exports = router;
