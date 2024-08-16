// import required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// create an Express app
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev')); // Logging middleware
app.use(bodyParser.json()); // JSON parsing middleware