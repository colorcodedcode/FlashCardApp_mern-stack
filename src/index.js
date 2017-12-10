import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <header role="heading">
          <h1>Final Project</h1>
          <nav>
            <a href="/logout">Logout</a>
            <a href="/account">Account</a>
            <a href="/stats">Stats</a>
          </nav>
        </header>
    
        <main role="main">
          <section id="test_container">
            <section id="test_header">
              <div id="question_header">
                Question:
              </div>
              <div id="question_body">
                Considering the following code, which is true?
              </div>
            </section>
              
            <section id="test_body">
              <div id="answer_a">
                <p>This is the first answer to the question above. When the whole block is clicked it should light up or something.</p>
                <button id="answer_a_button">A</button>
              </div>
              <div id="answer_b">
                <p>This is the first answer to the question above. When the whole block is clicked it should light up or something.</p>
                <button id="answer_b_button">B</button>
              </div>
            </section>
          </section>
        </main>
    
        <footer role="contentinfo">
          <section id="player_stats">
            <p>level 5 : 50/500 : 90%</p>
          </section>
        </footer>
      </div>
    )
  }
}


ReactDOM.render(
  <App />, document.getElementById('app')
);
