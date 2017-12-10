import React from 'react';

let level = 5
let xp = {
  current: 50,
  nextIn: 500
}
let rate = '90%'

class Footer extends React.Component {
  render() {
    return (
    <footer role="contentinfo">
      <section id="player_stats">
        <p>{`level ${level} : ${xp.current}/${xp.nextIn} : ${rate}`}</p>
      </section>
    </footer>
    )
  };
}

export default Footer;



