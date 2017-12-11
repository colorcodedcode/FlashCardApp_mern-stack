import React from 'react';

class TestQuestion extends React.Component {

  render() {
    return (
      <section id="test_body">
        <div id="answer_a">
          <p>{this.state.questions[this.state.questionNumber].answer_a}</p>
          <input id="answer_a_button" type="button" onClick={this.validateAnswer.bind(this)} value='A'/>
        </div>
        <div id="answer_b">
          <p>{this.state.questions[this.state.questionNumber].answer_b}</p>
          <input id="answer_a_button" type="button" onClick={this.validateAnswer.bind(this)} value='B'/>
        </div>
      </section>
    )
  };
}

export default TestQuestion;
