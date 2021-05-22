const mongoose = require('mongoose');
const Achievement = mongoose.model('Achievement');

//get
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/achievements 
const achievementsGet = (req, res) => {
  Achievement.find().exec((error, achievements) => {
    if(!achievements || achievements.length == 0){
      return res.status(404).json({"message": "No achievements found"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(achievements);
  });
};

//get by id
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/achievement/5deba763da917023625a71e0
const achievementsGetById = (req, res) => {
  Achievement.findById(req.params.id).exec((error, achievements) => {
    if(!achievements){
      return res.status(404).json({"message": "No achievements with id"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(achievements);
  });
};

module.exports = {
    achievementsGet,
    achievementsGetById,
};