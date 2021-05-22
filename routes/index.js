var express = require('express');
var router = express.Router();

const test = require('../controllers/test');

//Initial database fill
router.route('/fill')
  .get(test.testFill);

module.exports = router;
