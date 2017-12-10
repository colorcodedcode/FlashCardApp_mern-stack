import React from 'react';


let question = 'Considering the following code, which is true?';
let answer_a =
  'This is the first answer to the question above. When the whole block is clicked it should light up or something.';
let answer_b = 
  'This is the first answer to the question above. When the whole block is clicked it should light up or something.';

class Test extends React.Component {

  render() {
    return (
        <section id="test_container">
          <section id="test_header">
            <div id="question_header">
            Question:
            </div>
            <div id="question_body">{question}</div>
          </section>
            
        <section id="test_body">
          <div id="answer_a">
            <p>{answer_a}</p>
            <button id="answer_a_button">A</button>
          </div>
          <div id="answer_b">
            <p>{answer_b}</p>
            <button id="answer_b_button">B</button>
          </div>
        </section>
      </section>
    )
  };
}

export default Test;
