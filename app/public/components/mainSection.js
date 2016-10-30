import React from 'react';

// components
import PlayerSection from './playerSection';
import BoardSection from './boardSection';
import DecisionSection from './decisionSection'


const MainSection = React.createClass({
  render: function(){
    return (
      <section>
        <PlayerSection />
        <BoardSection />
        <DecisionSection />
      </section>
    )
  }
})

export default MainSection;
