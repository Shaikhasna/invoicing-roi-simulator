import React from 'react';

function ScenarioList({ scenarios }) {
  return (
    <div className="scenario-list">
      <h3>Saved Scenarios</h3>
      <ul>
        {scenarios.map(s => (
          <li key={s.id}>{s.scenario_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScenarioList;
