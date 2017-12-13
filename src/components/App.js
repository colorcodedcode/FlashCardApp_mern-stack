import React from 'react';
import Header from './Header';
import Test from './Test';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { 
        name: '', xp: { current: '', goal: ''}, timestTested: '', timesCorrect: '', level: ''
      }
    }
  }

  componentWillMount() {
    fetch('/stats',)
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data })
      })
  }

  updatePlayerStats(newStats) {
    fetch('/stats', { 
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({bla: 'somebullshit'})
    })
    .then(res => res.json())
    .then(console.log)
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
    this.updatePlayerStats()
    return (
      <div>
        <Header />      
        <Test changeScore={this.changeScore.bind(this)}/>
        <Footer user={this.state.user}/>
      </div>
    )
  };
}

export default App;
