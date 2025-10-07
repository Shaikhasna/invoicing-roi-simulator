const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const simulateRoutes = require('./routes/simulate');
const scenarioRoutes = require('./routes/scenarios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/simulate', simulateRoutes);
app.use('/scenarios', scenarioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
