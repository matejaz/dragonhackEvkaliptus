var express = require('express');
var router = express.Router();

const test = require('../controllers/fill');
const ctrlUser = require('../controllers/users');
const ctrlActivityDetails = require('../controllers/activityDetails');
const ctrlActivities = require('../controllers/activities');
const ctrlAchievements = require('../controllers/achievemnts');

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

//Achievements details endpoints
router.route('/achievements')
  .get(ctrlAchievements.achievementsGet);
router.route('/achievement/:id')
  .get(ctrlAchievements.achievementsGetById);

//Initial database fill
router.route('/fill/testuser')
  .get(test.testFill);
router.route('/fill/activities')
  .get(test.activitiesFill);
router.route('/fill/achievements')
  .get(test.achievementsFill);

module.exports = router;
