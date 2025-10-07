const express = require('express');
const router = express.Router();
const db = require('../models/scenarioModel');

// Save scenario
router.post('/', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO scenarios
        (scenario_name, monthly_invoice_volume, num_ap_staff, avg_hours_per_invoice, hourly_wage, error_rate_manual, error_cost, time_horizon_months, one_time_implementation_cost)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        data.scenario_name, data.monthly_invoice_volume, data.num_ap_staff, data.avg_hours_per_invoice,
        data.hourly_wage, data.error_rate_manual, data.error_cost, data.time_horizon_months, data.one_time_implementation_cost
    ];

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Scenario saved', id: result.insertId });
    });
});

// Get all scenarios
router.get('/', (req, res) => {
    db.query('SELECT * FROM scenarios', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

module.exports = router;
