import React from 'react';

export default function ResultDisplay({ result }) {
    return (
        <div>
            <h3>Simulation Results</h3>
            <p>Monthly Savings: ${result.monthly_savings}</p>
            <p>Cumulative Savings: ${result.cumulative_savings}</p>
            <p>Net Savings: ${result.net_savings}</p>
            <p>Payback Months: {result.payback_months}</p>
            <p>ROI Percentage: {result.roi_percentage}%</p>
        </div>
    );
}
