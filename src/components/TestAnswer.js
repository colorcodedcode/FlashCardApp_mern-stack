import React from 'react';

const TestAnswer = props =>
  <section id="test_body">
    <div id="result">
      <p>The correct answer was:<br />{props.answer}</p>
      <input id="next_button" type="button" value="Next Question" onClick={props.nextQuestion}/>
    </div>
  </section>

export default TestAnswer;
