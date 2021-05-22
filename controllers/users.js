const mongoose = require('mongoose');
const User = mongoose.model('User');
const Achievement = mongoose.model('Achievement');
const Activity = mongoose.model('Activity');

//get
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/user 
const userGet = (req, res) => {
  User.find().exec((error, user) => {
    if(!user || user.length == 0){
      return res.status(404).json({"message": "No users found"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(user);
  });
};

//create
/*curl -X POST \
       -d "name=smth&score=6666&sex=female" \
       -H "Content-Type: application/x-www-form-urlencoded" \
       http://localhost:3000/api/users*/
const userRegister = (req, res) => {
  if (!req.body.sex){
    return res.status(400).json({"message": "Insufficient data"});
  }
  User.create({
    sex: req.body.sex,
    }, (error, user) => {
    if (error) {
      res.status(400).json(error);
    }
    else {
      res.status(201).json(user);
    }
  });
};

//get by id
//curl -X GET\  -H "Content-Type: application/x-www-form-urlencoded"        http://localhost:8080/api/user/60a9065d7a0f160015ee9178
const userGetById = (req, res) => {
  User.findById(req.params.id).exec((error, user) => {
    if(!user){
      return res.status(404).json({"message": "No user with id"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    res.status(200).json(user);
  });
};

//update user
/*curl -X PUT \
       -d "name=smth&score=6666&sex=male" \
       -H "Content-Type: application/x-www-form-urlencoded" \
       http://localhost:3000/api/user/60a9065d7a0f160015ee9178*/
const userPutById = (req, res) => {
  if (!req.params.id) {
    return res.status(404).json({
      "message": "No id supplied."
    });
  }
  User
    .findById(req.params.id)
    .select('-activities -achievements ')
    .exec((error, user) => {
      if (!user) {
        return res.status(404).json({"message": "User not found."});
      } else if (error) {
        return res.status(500).json(error);
      }
      if (req.body.name){
        user.name = req.body.name;
      }
      if (req.body.sex){
        user.sex = req.body.sex;
      }
      if (req.body.score){
        user.score = req.body.score;
      }
      user.save((error, user) => {
        if (error) {
          res.status(404).json(error);
        } else {
          res.status(200).json(user);
        }
      });
    });
};

//add an achievement
/*curl -X POST \
       -d "achievementId=60a9577f3de4a5e0a5fd9c81" \
       -H "Content-Type: application/x-www-form-urlencoded" \
       http://localhost:3000/api/user/60a9065d7a0f160015ee9178*/
const userAddAchievement = async (req, res) => {
  User.findById(req.params.id).exec(async (error, user) => {
    if(!user || !req.body.achievementId){
      return res.status(404).json({"message": "No user with id"});
    }
    else if(error){
      return res.status(500).json(error);
    }
    try{
      let achievement=await Achievement.findById(req.body.achievementId);
      let newScore=user.score+achievement.score_value;
      user = await User.findOneAndUpdate({_id: user._id}, {score: newScore, $push: {achievements: achievement}}, {new: true});
      res.status(200).json(user);
    }
    catch (error){
      return res.status(404).json({"message": "No achievement with achievementId"});
    }
  });
};


module.exports = {
    userGet,
    userRegister,
    userGetById,
    userPutById,
    userAddAchievement
};