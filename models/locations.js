const mongoose = require('mongoose');

const activityDetailsSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  title: {type: String, required: true},
});

const activitySchema = new mongoose.Schema({
  users: {type: Number, required: true},
  start: {type: Date, required: true},
  stop: {type: Date, required: true},
  activity: {type: activityDetailsSchema, required: true}
});

const achievementSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  score_value: {type: Number, required: true},
});

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  score: {type: Number, "delault": 0, required: true},
  sex: {type: String},
  activities: [activitySchema],
  achievements: [achievementSchema]
});



mongoose.model("Activity", activitySchema, "Activities");
mongoose.model("Achievement", achievementSchema, "Achievements");
mongoose.model("User", userSchema, "Users");
