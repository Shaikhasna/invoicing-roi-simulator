import React, { useState } from 'react';
import axios from 'axios';
import './FormInput.css'; // We'll create this

function FormInput({ fetchScenarios }) {
  const [form, setForm] = useState({
    scenario_name: '',
    monthly_invoice_volume: 0,
    num_ap_staff: 0,
    avg_hours_per_invoice: 0,
    hourly_wage: 0,
    error_rate_manual: 0,
    error_cost: 0,
    time_horizon_months: 12,
    one_time_implementation_cost: 0
  });

  const [result, setResult] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const simulateROI = async () => {
    try {
      const res = await axios.post('http://localhost:5000/simulate', form);
      setResult(res.data);
      await axios.post('http://localhost:5000/scenarios', form);
      fetchScenarios();
    } catch (err) {
      console.error(err);
      alert("Error simulating ROI");
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Scenario Details</h2>
      <div className="form-grid">
        {Object.keys(form).map(key => (
          <div key={key} className="form-group">
            <label>{key.replace(/_/g,' ')}</label>
            <input
              type={key.includes('rate') || key.includes('hours') || key.includes('cost') || key.includes('wage') ? 'number' : 'text'}
              name={key}
              value={form[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <button className="simulate-btn" onClick={simulateROI}>Simulate ROI</button>

      {result && (
        <div className="result-container">
          <h2>Simulation Results</h2>
          <div className="result-grid">
            {Object.keys(result).map(k => (
              <div key={k} className="result-item">
                <span className="result-label">{k.replace(/_/g,' ')}:</span> <span className="result-value">{result[k]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FormInput;
