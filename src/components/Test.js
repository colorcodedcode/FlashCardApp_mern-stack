import React from 'react';

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

function TestQuestion(props) {
  console.log(props)
  return (
    <section id="test_body">
      <div id="answer_a">
        <p>{props.question.answer_a}</p>
        <input id="answer_a_button" type="button" onClick={props.validateAnswer} value='A'/>
      </div>
      <div id="answer_b">
        <p>{props.question.answer_b}</p>
        <input id="answer_a_button" type="button" onClick={props.validateAnswer} value='B'/>
      </div>
    </section>
  )
}

function TestAnswer(props) {
  return (
    <section id="test_body">
      <div id="result">
        <p>{props.answer}</p>
        <input id="next_button" type="button" value="Next Question" onClick={props.nextQuestion}/>
      </div>
    </section>
  )
}

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: testQuestions,
      questionNumber: 0,
      showResult: false,
    };
  }
  
  toggleResult() {
    this.setState({
      showResult: !this.state.showResult
    })
  }

  validateAnswer(answer) {
    if (answer.target.value === this.state.questions[this.state.questionNumber].right_answer) {
      this.props.changeScore(10)
    }
    this.toggleResult()
  }
  
  nextQuestion() {
    if(this.state.questionNumber === this.state.questions.length -1 ) {
      this.setState({ questionNumber: 0 })
    } else {
      this.setState({ questionNumber: this.state.questionNumber + 1 })
    }
    this.toggleResult()
  }

  render() {
    let correctAnswer = ''
    if (this.state.questions[this.state.questionNumber].right_answer === 'A') {
      correctAnswer = this.state.questions[this.state.questionNumber].answer_a;
    } else {
      correctAnswer = this.state.questions[this.state.questionNumber].answer_b;
    }

    // the conditional render of the testanswer/question is not pretty, consider changing it later
    return (
      <section id="test_container">

        <section id="test_header">
          <div id="question_header">
            Question ({this.state.questions[this.state.questionNumber].category}):
          </div>
          <div id="question_body">{this.state.questions[this.state.questionNumber].question}</div>
        </section>
        <div>
          {
            this.state.showResult ? 
            <TestAnswer answer={correctAnswer} nextQuestion={this.nextQuestion.bind(this)}/>
            :
            <TestQuestion question={this.state.questions[this.state.questionNumber]} validateAnswer={this.validateAnswer.bind(this)}/>
          }
        </div>
      </section>

    )
  };
}

export default Test;
