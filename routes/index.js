var express = require('express');
var router = express.Router();

const test = require('../controllers/fill');
const ctrlUser = require('../controllers/users');
const ctrlActivityDetails = require('../controllers/activityDetails');
const ctrlActivities = require('../controllers/activities');

//User endpoints
router.route('/users')
  .get(ctrlUser.userGet)
  .post(ctrlUser.userRegister);
router.route('/user/:id')
  .get(ctrlUser.userGetById)
  .put(ctrlUser.userPutById);

//Activity details endpoints
router.route('/actD')
  .get(ctrlActivityDetails.activityDetailsGet);
router.route('/actD/:id')
  .get(ctrlActivityDetails.activityDetailsGetById);

//Activities
router.route('/activities')
  .get(ctrlActivities.activityGet)
  .post(ctrlActivities.activityAdd);
router.route('/activity/:id')
  .get(ctrlActivities.activityGetById);

//Initial database fill
router.route('/fill/testuser')
  .get(test.testFill);
router.route('/fill/activities')
  .get(test.activitiesFill);

module.exports = router;
