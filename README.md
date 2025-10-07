# invoicing-roi-simulator

Assignment Round 03 – Complyance <> CIT

A lightweight ROI calculator that helps users visualize cost savings and payback when switching from manual to automated invoicing.


## Overview

This web application simulates **ROI (Return on Investment)** for businesses adopting automated invoicing.
It allows users to input business metrics, calculate potential savings, manage scenarios, and download a gated report.

---

## Architecture

**Frontend:**

* React.js single-page web app.
* Interactive form + live results.
* Communicates with backend via REST APIs.

**Backend:**

* Node.js + Express.js REST API.
* Handles simulation logic, CRUD operations, and PDF report generation.

**Database:**

* MongoDB (or SQLite / JSON file fallback).
* Stores saved scenarios for retrieval.

**Deployment:**

* Hosted on Vercel / Render (for demo) or run locally via `npm start`.


 **Folder Structure**


invoicing-roi-simulator/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FormInput.jsx
│   │   │   ├── ResultDisplay.jsx
│   │   │   └── ScenarioList.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── routes/
│   │   ├── simulate.js
│   │   ├── scenarios.js
│   │   └── report.js
│   ├── models/
│   │   └── Scenario.js
│   ├── server.js
│   ├── config.js
│   ├── package.json
│   └── README.md
│
├── .gitignore
├── README.md        ← (this file)
└── LICENSE



## Simulation Logic

### Calculations

```js
labor_cost_manual = num_ap_staff * hourly_wage * avg_hours_per_invoice * monthly_invoice_volume
auto_cost = monthly_invoice_volume * automated_cost_per_invoice
error_savings = (error_rate_manual - error_rate_auto) * monthly_invoice_volume * error_cost
monthly_savings = (labor_cost_manual + error_savings) - auto_cost
monthly_savings *= min_roi_boost_factor
cumulative_savings = monthly_savings * time_horizon_months
net_savings = cumulative_savings - one_time_implementation_cost
payback_months = one_time_implementation_cost / monthly_savings
roi_percentage = (net_savings / one_time_implementation_cost) * 100
```

### Internal Constants (Server-Side Only)

| Constant                   | Value  |
| -------------------------- | ------ |
| automated_cost_per_invoice | 0.20   |
| error_rate_auto            | 0.001  |
| time_saved_per_invoice     | 8 mins |
| min_roi_boost_factor       | 1.1    |

---

## API Endpoints

| Method | Endpoint           | Description                                |
| ------ | ------------------ | ------------------------------------------ |
| POST   | `/simulate`        | Run ROI simulation and return JSON results |
| POST   | `/scenarios`       | Save a new scenario                        |
| GET    | `/scenarios`       | Fetch all saved scenarios                  |
| GET    | `/scenarios/:id`   | Fetch a single scenario                    |
| POST   | `/report/generate` | Generate PDF/HTML report (requires email)  |

---

## Setup & Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/[your-username]/invoicing-roi-simulator.git
cd invoicing-roi-simulator
```

### 2️. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3️. Start backend

```bash
cd backend
npm run dev
```

### 4️. Start frontend

```bash
cd frontend
npm start
```

The app will be live at **[http://localhost:3000](http://localhost:3000)**

---



## 👨‍💻 **Author**

**Name:** Shaik Hasna
**Email:**  hasnashaik.aids2022@citchennai.net
**College:** Chennai Institute of Technology

---



---

Would you like me to create the **actual folder structure (with placeholder files)** and give you all the file contents (like `server.js`, `simulate.js`, etc.) next — so you can just paste and start coding immediately?
