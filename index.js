'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// @Route Handlers:
app.use('/system-info', require('./routes/systemInfo'));

const PORT = process.env.PORT || 5555;
app.listen(PORT);