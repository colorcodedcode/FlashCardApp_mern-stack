import React from 'react';
import Header from './Header';
import Test from './Test';
import Footer from './Footer';

const userData = {
  id: 1,
  name: 'Robert',
  xp: {
    current: 50,
    goal: 100
  },
  level: 5,
  rate: 0.92
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userData
    }
  }

  changeScore(score) {
    let levelUp = false
    if (this.state.user.xp.current === 100-score) {
      levelUp = true;
    }
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        xp: {
          current: levelUp ? 0 : prevState.user.xp.current + score,
          goal: prevState.user.xp.goal
        },
        level: levelUp ? prevState.user.level + 1 : prevState.user.level
      }
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <Test changeScore={this.changeScore.bind(this)}/>
        </main>
        <Footer user={this.state.user}/>
      </div>
    );
  }
  }

  export default App;
