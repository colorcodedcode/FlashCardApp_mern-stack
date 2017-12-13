import React from 'react';
import Header from './Header';
import Test from './Test';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { name: '', xp: { current: '', goal: ''}, level: '', rate: ''}
    }
  }

  componentWillMount() {
    console.log('starting fetch stats')
    fetch('/stats',)
      .then(res => res.json())
      .then(data => this.setState({ user: data }))
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
        <Test changeScore={this.changeScore.bind(this)}/>
        <Footer user={this.state.user}/>
      </div>
    );
  }
}

export default App;
