import React from 'react';

const Footer = props => 
  <footer role="contentinfo">
    <section id="player_stats">
      <p>{
        `${props.user.name}: level 
        ${props.user.level} - 
        ${props.user.xp.current}/
        ${props.user.xp.goal} XP - 
        ${Math.floor(props.user.timesCorrect / props.user.timesTested * 100)}%`
      }</p>
    </section>
  </footer>

export default Footer;



