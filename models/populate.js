const Question = require('../models/question');
const User = require('../models/user');

// Populate Default Users
exports.setupUsers = () => {
    User.new(`Robert`, `admin`, `robertjschaap@gmail.com`);
}

// Populate Default Questions
exports.setupQuestions = () => {
    Question.new(`Weather`, `Today, is it snowing or raining?`, `It's snowing`, `It's raining`, 'A');
    Question.new(`Weather`, `Is the sun out or not?`, `I can see it with my bare eyes (for now)`, `It may be out there somewhere`, 'A');
    Question.new(`Weather`, `Is snow white or black?`, `Definitely black`, `Most certainly white`, 'B');
}
