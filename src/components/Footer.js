import React from 'react';

class Footer extends React.Component {

  render() {
    return (
    <footer role="contentinfo">
      <section id="player_stats">
        <p>{
          `${this.props.user.name}: level 
          ${this.props.user.level} - 
          ${this.props.user.xp.current}/
          ${this.props.user.xp.goal} XP - 
          ${(this.props.user.rate*100)}%`
        }</p>
      </section>
    </footer>
    )
  };
}

export default Footer;



