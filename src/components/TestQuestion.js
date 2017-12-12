import React from 'react';

const TestQuestion = props =>
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

export default TestQuestion;
