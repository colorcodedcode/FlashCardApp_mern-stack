// Declarations
const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.listen(myport, function() { console.log(`Now listening on port ${myport}`); });

// Database Setup
const mongoose = require('mongoose')
const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/flashcardapp', {useMongoClient: true});
mongoose.Promise = global.Promise
db.on('error', console.error.bind(console), 'MDB Connect Err')

// Question Model
const Schema = mongoose.Schema;
const QuestionsSchema = Schema({
    category: String,
    question: String,
    answer_a: String,
    answer_b: String,
    right_answer: String
})
const Questions = mongoose.model('Questions', QuestionsSchema);

function newQuestion(category, question, answer_a, answer_b, right_answer) {
    let props = {
        category: category,
        question: question,
        answer_a: answer_a,
        answer_b: answer_b,
        right_answer: right_answer
    }
    let record = new Questions(props);
    record.save(function(err) {
        err ? err : console.log('inserted')
    })
}

// User Model
const UserSchema = Schema({
    name: String,
    password: String,
    email: String,
    xp: {
        current: { type: Number, default: 10 },
        goal: {type: Number, default: 100 }
    },
    level: { type: Number, default: 3 },
    rate: { type: Number, default: 1 }
})
const Users = mongoose.model('Users', UserSchema);

function newUser(name, password, email) {
    let props = {
        name: name,
        password: password,
        email: email
    }
}
// Retrieve Model Records
// Questions.find().then(console.log)

// Dummy Entries - Do Not Rerun
// newQuestion(`Weather`, `Today, is it snowing or raining?`, `It's snowing`, `It's raining`, 'A')
// newQuestion(`Weather`, `Is snow white or black?`, `Definitely black`, `Most certainly white`, 'B')
// newQuestion(`Weather`, `Is the sun out or not?`, `I can see it with my bare eyes (for now)`, `It may be out there somewhere`, 'A')

// Drop Database - Do Not Rerun
// mongoose.connection.dropDatabase();

// Routes
// app.get('/', (req, res) => {
//     res.redirect('index.html');
// });

const testQuestions = [{
    id: 1,
    category: 'Weather',
    question: `Today, is it snowing or raining?`,
    answer_a: `It's snowing`,
    answer_b: `It's raining`,
    right_answer: 'A'
  }, {
    id: 2,
    category: 'Weather',
    question: `Is snow white or black?`,
    answer_a: `Definitely black`,
    answer_b: `Most certainly white`,
    right_answer: 'B'
  }, {
    id: 3,
    category: 'Weather',
    question: `Is the sun out or not?`,
    answer_a: `I can see it with my bare eyes (for now)`,
    answer_b: `It may be out there somewhere`,
    right_answer: 'A'
  }]

app.get('/cards', (req, res) => {
    Questions.find().then(result => {
        console.log(result)
        res.json(result);
    })
});
