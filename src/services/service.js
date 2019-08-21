module.exports = class Service {
  constructor ({config, database}) {
    this.config = config;
    this.database = database;
  }

  /**
     * Gets all user activities from its own database instead of from the provider.
     * @param {*} logger
     */
  async retrieveAllActivities (logger) {
    logger.info('Retrieving all activities from db');
    const data = await this.database.get(logger);
    return data;
  }

  async postData (logger, data) {
    logger.info('Post data');
    await this.database.save(logger, data);
  }
};
