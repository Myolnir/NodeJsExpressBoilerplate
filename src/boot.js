require('dotenv').config();
const {createContainer, asClass, asValue} = require('awilix');

// Controllers
const controller = require('./controllers/controller');

// Repository
const database = require('./repository/database');

// services
const service = require('./services/service');

const config = require('./config');

const container = createContainer();

module.exports = container.register({
  controller: asClass(controller).singleton(),
  database: asClass(database).singleton(),
  service: asClass(service).singleton(),
  config: asValue(config),
});
