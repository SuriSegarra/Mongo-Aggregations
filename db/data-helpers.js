require('dotenv').config();

const connect = require('../lib/utils/connect')
const seed = require('../db/seed');
const mongoose = require('mongoose');
const fs = require('fs');

beforeAll(() => {
  connect();
});
  
beforeEach(() => {
  return mongoose.connection.dropDatabase();
});
  
beforeEach(() => {
  return seed();
});
  
afterAll(() => {
  return mongoose.connection.close();
});

const prepare = model => JSON.parse(JSON.stringify(model));
const prepareAll = models => models.map(prepare);

//reading our models directory
const files = fs.readdirSync('../lib/')