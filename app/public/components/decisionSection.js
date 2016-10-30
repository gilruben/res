import React from 'react';

const DecisionSection = React.createClass ({
  render: function(){
    return (
      <div className="decisionSection">
        <div className="playersDecision">
          <div className="approveMission">Approve mission</div>
          <div className="rejectMission">Reject mission</div>
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
