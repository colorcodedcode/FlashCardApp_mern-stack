// Declarations
const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.listen(myport, () => console.log(`Now listening on port ${myport}`));

// Database Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flashcardapp', {useMongoClient: true});
mongoose.connection.on('error', console.error.bind(console), 'MDB Connect Err')
mongoose.Promise = global.Promise

const Question = require('./models/question');
const User = require('./models/user');

// Model Population
const Populate = require('./models/populate');
// Populate.setupUsers();
// Populate.setupQuestions();
// mongoose.connection.dropDatabase();

const userStats = [{
    questionId: 'id',
    timesTested: 100,
    timesCorrect: 70,
    rate: 0.7
}]

// tier1 - 100-051
// tier2 - 050-001
// tier3 - 000

app.get('/cards', (req, res) => {
    Question.find().then(result => {
        res.json(result);
    })
});

app.get('/stats', (req, res) => {
    User.findOne({ name: 'Robert' }, 'name xp level rate').then(result => {
        res.json(result);
    })
});

