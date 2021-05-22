const mongoose = require('mongoose');
const Activity = mongoose.model('Activity');
const ActivityDetails = mongoose.model('ActivityDetails');

//get
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/activity 
const activityGet = (req, res) => {
  Activity.find().exec((error, activity) => {
    if(!activity || activity.length == 0){
      return res.status(404).json({"message": "No activitys found"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(activity);
  });
};

//create
/*curl -X POST \
       -d "users=2&start=2021-05-22&stop=2021-05-23&activityId=60a92530b34980414b5663db&userId=60a9065d7a0f160015ee9178" \
       -H "Content-Type: application/x-www-form-urlencoded" \
       http://localhost:3000/api/activities*/
const activityAdd = async (req, res) => {
  if (!req.body.users && !req.body.start && !req.body.stop && !req.body.activityId && !req.body.userId){
    return res.status(400).json({"message": "Insufficient data"});
  }
  Activity.create({
    users: req.body.users,
    start: req.body.start,
    stop: req.body.stop,
    activity: await ActivityDetails.findById(req.body.activityId),
    }, (error, activity) => {
    if (error) {
      res.status(400).json(error);
    }
    else {
      res.status(201).json(activity);
    }
  });
};

//get by id
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/activityi/5deba763da917023625a71e0
const activityGetById = (req, res) => {
  Activity.findById(req.params.id).exec((error, activity) => {
    if(!activity){
      return res.status(404).json({"message": "No activity with id"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(activity);
  });
};


module.exports = {
    activityGet,
    activityGetById,
    activityAdd
};