const mongoose = require('mongoose');
const kamasutraPositions = require('kamasutra-positions');
const User = mongoose.model('User');
const ActivityDetails = mongoose.model('ActivityDetails');
const Achievement = mongoose.model('Achievement');

const userJSON = require('../models/testUserFill.json');
const activitiesJSON = require('../models/activitiesFill.json');
const achievementsJSON = require('../models/achievementsFill.json');

const testFill = (req, res) => {
    User
        .insertMany(userJSON, function(error) {
            if (error) {
                return res.status(500).json(error);
            }
            else {
                return res.status(201).json('Fill done');
            }
        });
};

const activitiesFill = (req, res) => {
    ActivityDetails
        .insertMany(activitiesJSON, function(error){
            if (error){
                return res.status(500).json(error);
            }
            else {
                return res.status(201).json('Fill done');
            }
        });
}

const achievementsFill = (req, res) => {
    Achievement
        .insertMany(achievementsJSON, function(error){
            if (error){
                return res.status(500).json(error);
            }
            else {
                return res.status(201).json('Fill done');
            }
        });
}

module.exports = {
    testFill,
    activitiesFill,
    achievementsFill
};
