import React from 'react';
import TestQuestion from './TestQuestion';
import TestAnswer from './TestAnswer';

class Test extends React.Component {
  constructor() {
    super();

    // this needs to default to something or conditions in the render statement break, figure that out
    this.state = {
      questions: [{
        category: '', question: '', answer_a: '', answer_b: '', right_answer: ''
      }],
      questionNumber: 0,
      showResult: false,
    };
  }

  componentWillMount() {
    fetch('/cards')
      .then(res => res.json())
      .then(data => this.setState({ questions: data }))
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
      <main role="main">
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
      </main>

    )
  };
}

export default Test;
