import React from 'react';
import TestQuestion from './TestQuestion';
import TestAnswer from './TestAnswer';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      questionIndex: 0,
      questionCurrent: { category: '', identifier: '', question: '', answer_a: '', answer_b: '', right_answer: ''},
      showAnswer: false,
      cardCount: 0
    };
  }

  componentWillMount() {
    fetch('/cards')
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          questions: data,
          questionIndex: 0,
          questionCurrent: data[0]
        })
      })
  }
  
  toggleResult() {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  validateAnswer(answer, id) {
    if (answer.target.value === this.state.questionCurrent.right_answer ) {
      this.props.changeScore(10, this.state.questionCurrent.identifier);
    } else {
      this.props.changeScore(0, this.state.questionCurrent.identifier);
    }
    this.toggleResult();
  }
  
  nextQuestion() {
    if(this.state.questionIndex === this.state.questions.length -1 ) {
      this.setState({ 
        questionIndex: 0,
        questionCurrent: this.state.questions[0] 
      })
    } else {
      this.setState({ 
        questionIndex: this.state.questionIndex + 1,
        questionCurrent: this.state.questions[this.state.questionIndex + 1],
        cardCount: this.state.cardCount + 1
      })
    }
    this.toggleResult()
  }

  render() {
    let correctAnswer = ''
    if (this.state.questionCurrent.right_answer === 'A') {
      correctAnswer = this.state.questionCurrent.answer_a;
    } else {
      correctAnswer = this.state.questionCurrent.answer_b;
    }

    return (
      <main role="main">
        <section id="test_container">

          <section id="test_header">
            <div id="question_header">
              {this.state.questionCurrent.category}:
            </div>
            <div id="question_body">{this.state.questionCurrent.question}</div>
          </section>

          {
            this.state.showAnswer
            ? <TestAnswer answer={correctAnswer} nextQuestion={this.nextQuestion.bind(this)}/>
            : <TestQuestion question={this.state.questionCurrent} validateAnswer={this.validateAnswer.bind(this)}/>
          }

        </section>
      </main>

    )
  };
}

export default Test;
