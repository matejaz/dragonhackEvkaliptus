const mongoose = require('mongoose');
const User = mongoose.model('User');

const userJSON = require('../models/testFill.json');

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

module.exports = {
    testFill
};
