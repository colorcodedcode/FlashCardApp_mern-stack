const Question = require('../models/question');
const User = require('../models/user');
const defaultAmount = 100

// Random Stat Generator
const generateStats = array => {
    for (let i = 0; i < defaultAmount; i++) {
        array.push({
            identifier: `wtr${i+1}`,
            timesTested: 100,
            timesCorrect: Math.floor((Math.random() * 100) + 1),
        });
    }
    return array
}

// Populate Default Users
exports.setupUsers = () => {
    User.new(`Robert`, `admin`, `robertjschaap@gmail.com`, generateStats([]));
}

// Populate Default Questions
exports.setupQuestions = () => {
    for (let i = 0; i < defaultAmount; i++) {
        Question.new(`Weather`, `wtr${i+1}`, `Question${i+1}`, `Answer A${i+1}`, `Answer B${i+1}`, 'A');
    }
}

