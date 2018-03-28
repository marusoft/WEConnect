

import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import routes from './server/routes/route';


const app = express();
const swaggerDocument = YAML.load(`${process.cwd()}/swagger.yaml`);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', routes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of awesome things.',
}));

export default app;
