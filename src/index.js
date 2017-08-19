import express from 'express';
import bodyParser from 'body-parser';
import objection, { Model } from 'objection';
const Knex from 'knex';

import Builds from './controllers/Builds';
import Users from './controllers/Users';

import { development } from '../knexfile';

const knex = Knex(development);
Model.knex(knex);

const app = express();
app.use(bodyParser.json());

app.get('/users', Users.INDEX);
app.post('/users', Users.CREATE);
app.get('/users/:id', Users.SHOW);
app.delete('/users/:id', Users.DELETE);

app.get('/builds', Builds.INDEX);
app.post('/builds', Builds.CREATE);
app.get('/builds/:id', Builds.SHOW);
app.delete('/builds/:id', Builds.DELETE);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
