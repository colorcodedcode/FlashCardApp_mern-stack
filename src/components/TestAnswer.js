import React from 'react';

class TestAnswer extends React.Component {

  render() {
    return (
      <section id="test_body">
        <div id="result">
          <p></p>
          <input id="next_button" type="button" onClick={this.nextQuestion.bind(this)}value="Next Question" />
        </div>
      </section>
    )
  };
}

export default TestAnswer;
