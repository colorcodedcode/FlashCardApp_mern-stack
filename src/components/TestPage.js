import React from 'react';

import Test from './Test';
import Footer from './Footer';

class TestPage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { 
        name: '', xp: { current: '', goal: ''}, timesTested: '', timesCorrect: '', level: ''
      }
    }
  }

  componentDidMount() {
    const headers = new Headers()
    headers.append('auth', localStorage.getItem('chip'))

    fetch('/stats', { headers: headers })
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data })
      })
  }

  updatePlayerStats(id, pass) {
    fetch('/stats', { 
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: id, passed: pass})
    })
    .then(res => res.json())
  }

  changeScore(score, id) {
    this.updatePlayerStats(id, score > 0)
    let levelUp = false
    if (this.state.user.xp.current === 250-score) {
      levelUp = true;
    }
    this.setState(prevState => ({
      user: {
        name: prevState.user.name,
        xp: {
          current: levelUp ? 0 : prevState.user.xp.current + score,
          goal: prevState.user.xp.goal
        },
        timesTested: prevState.user.timesTested + 1,
        timesCorrect: score > 0 ? prevState.user.timesCorrect + 1: prevState.user.timesCorrect,
        level: levelUp ? prevState.user.level + 1 : prevState.user.level
      }
    }))
  }

  render() {
    return (
      <div>
        <Test changeScore={this.changeScore.bind(this)}/>
        <Footer user={this.state.user}/>
      </div>
    )
  };
}

export default TestPage;
