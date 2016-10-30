import React from 'react';
import ChatBox from './chatBox';

const BoardSection = React.createClass ({
  render: function() {
    return (
      <div className="boardSection">
        <div className="missionBoard">
        </div>
        <ChatBox />
      </div>
    )
  }
})

export default BoardSection;
