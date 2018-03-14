// const routes = require('./server/routes/route');

// const express = require('express');
// const logger = require('morgan');
// const bodyParser = require('body-parser');

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes/route';


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of awesome things.',
}));

module.exports = app;