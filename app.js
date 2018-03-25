

import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes/route';


const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
routes(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of awesome things.',
}));

module.exports = app;
