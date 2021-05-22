const mongoose = require('mongoose');
const ActivityDetails = mongoose.model('ActivityDetails');

//get
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/actD 
const activityDetailsGet = (req, res) => {
  ActivityDetails.find().exec((error, activityDetails) => {
    if(!activityDetails || activityDetails.length == 0){
      return res.status(404).json({"message": "No activityDetails' found"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(activityDetails);
  });
};

//get by id
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/actD/5deba763da917023625a71e0
const activityDetailsGetById = (req, res) => {
  ActivityDetails.findById(req.params.id).exec((error, activityDetails) => {
    if(!activityDetails){
      return res.status(404).json({"message": "No activityDetails with id"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(activityDetails);
  });
};

module.exports = {
    activityDetailsGet,
    activityDetailsGetById,
};