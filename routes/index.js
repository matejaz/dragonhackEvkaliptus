var express = require('express');
var router = express.Router();

const test = require('../controllers/test');
const ctrlUser = require('../controllers/users');

//User endpoints
router.route('/users')
  .get(ctrlUser.userGet)
  .post(ctrlUser.userRegister);
router.route('/user/:id')
  .get(ctrlUser.userGetById)
  .put(ctrlUser.userPutById);

//Initial database fill
router.route('/fill')
  .get(test.testFill);

module.exports = router;
