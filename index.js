const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('./src/database');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(helmet());
app.use(routes);
// app.use('/api', routes);

mongoose.connect();
app.listen(3333, console.log(' ** API is running  **'));