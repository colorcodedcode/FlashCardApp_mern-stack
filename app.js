// Declarations
const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

//Routes
app.get('/cards', (req, res) => {
    Question.find().then(result => {
        res.json(result);
    })
});

app.get('/stats', (req, res) => {
    User.findOne({ name: 'Robert' }).select('-password -email').then(result => {
        res.json(result);
    })
});

app.post('/stats', (req, res) => {
    console.log(req.body);
    res.json('someshite')
});
