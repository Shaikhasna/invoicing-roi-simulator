import React, { useState, useEffect } from 'react';
import FormInput from './components/FormInput';
import ScenarioList from './components/ScenarioList';
import axios from 'axios';

function App() {
  const [scenarios, setScenarios] = useState([]);

  // Fetch saved scenarios from backend
  const fetchScenarios = async () => {
    try {
      const res = await axios.get('http://localhost:5000/scenarios');
      setScenarios(res.data);
    } catch (err) {
      console.error("Error fetching scenarios:", err);
    }
  };

  useEffect(() => {
    fetchScenarios();
  }, []);

  return (
    <div className="app-container">
      <h1>Invoicing ROI Simulator</h1>
      <FormInput fetchScenarios={fetchScenarios} />
      <ScenarioList scenarios={scenarios} />
    </div>
  );
}

export default App;
