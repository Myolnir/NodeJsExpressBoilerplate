const logger = require('../util/logger');
const httpStatusCodes = require('http-status-codes');
module.exports = class Controller {

  constructor ({service}) {
    this.service = service;
  }

  async postData (req, res) {
    logger.info('Post method');
    try {
      await this.service.postData(logger, req.payload.data);
      res.status(httpStatusCodes.NO_CONTENT);
      res.send().end();
    } catch (err) {
      logger.error('Error', {err: err.message});
      res.status(httpStatusCodes.SERVICE_UNAVAILABLE);
      res.send({
        error: err.message,
      }).end();
    }
  }


  async getData (req, res) {
    logger.info('Get method');
    try {
      const data = await this.service.getData(logger);
      res.status(httpStatusCodes.OK);
      res.send({
        data,
      }).end();
    } catch (err) {
      console.log(err);
      logger.error('Error', {err: err.message});
      res.status(httpStatusCodes.SERVICE_UNAVAILABLE);
      res.send({
        error: err.message,
      }).end();
    }
  }
};
