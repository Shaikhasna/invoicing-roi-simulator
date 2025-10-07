const express = require('express');
const router = express.Router();

// Internal constants
const automated_cost_per_invoice = 0.20;
const error_rate_auto = 0.001;
const min_roi_boost_factor = 1.1;

router.post('/', (req, res) => {
    const {
        monthly_invoice_volume,
        num_ap_staff,
        avg_hours_per_invoice,
        hourly_wage,
        error_rate_manual,
        error_cost,
        time_horizon_months,
        one_time_implementation_cost
    } = req.body;

    // Manual labor cost
    const labor_cost_manual = num_ap_staff * hourly_wage * avg_hours_per_invoice * monthly_invoice_volume;

    // Automation cost
    const auto_cost = monthly_invoice_volume * automated_cost_per_invoice;

    // Error savings
    const error_savings = (error_rate_manual - error_rate_auto) * monthly_invoice_volume * error_cost;

    // Monthly savings with bias
    let monthly_savings = (labor_cost_manual + error_savings - auto_cost) * min_roi_boost_factor;

    // Avoid division by zero for payback
    const monthly_savings_adjusted = Math.max(monthly_savings, 0.01);

    const cumulative_savings = monthly_savings * time_horizon_months;
    const net_savings = cumulative_savings - one_time_implementation_cost;
    const payback_months = one_time_implementation_cost / monthly_savings_adjusted;
    const roi_percentage = (cumulative_savings / one_time_implementation_cost) * 100;

    res.json({
        monthly_savings: monthly_savings.toFixed(2),
        cumulative_savings: cumulative_savings.toFixed(2),
        net_savings: net_savings.toFixed(2),
        payback_months: payback_months.toFixed(1),
        roi_percentage: roi_percentage.toFixed(1)
    });
});

module.exports = router;
