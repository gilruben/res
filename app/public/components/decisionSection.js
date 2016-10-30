import React from 'react';

const DecisionSection = React.createClass ({
  render: function(){
    return (
      <div className="decisionSection">
        <div className="playersDecision">
          <button>Approve mission</button>
          <button>Reject mission</button>
        </div>
        <div className="missionDecision">
          <div className="passMission">Pass</div>
          <div className="failMission">Fail</div>
        </div>
      </div>
    )
  }
})

export default DecisionSection;
