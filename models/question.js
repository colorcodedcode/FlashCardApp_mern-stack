const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = Schema({
    category: String,
    question: String,
    answer_a: String,
    answer_b: String,
    right_answer: String
})

QuestionSchema.statics.new = (category, question, answer_a, answer_b, right_answer) => {
    let record = new Question({
        category: category,
        question: question,
        answer_a: answer_a,
        answer_b: answer_b,
        right_answer: right_answer
    });
    record.save(err => err ? err : console.log('inserted question'));
}

// Questions defined here as setting QuestionSchema > add method will fail
const Question = mongoose.model('Questions', QuestionSchema);
module.exports = Question;
