const mongoClient = require('mongodb').MongoClient;
module.exports = class Database {

  constructor ({config}) {
    this.config = config;
  }

  async save (logger, data) {
    const dbClient = await mongoClient.connect(this.config.mongo.url, {useNewUrlParser: true});
    logger.info(`Inserting ${data.length} data`);
    await dbClient.db('databaseName').collection('data').insertMany(data);
    dbClient.close();
  }

  async get (logger) {
    const dbClient = await mongoClient.connect(this.config.mongo.url, {useNewUrlParser: true});
    logger.info('Getting all data');
    const data = await dbClient.db('databaseName').collection('data').find().toArray();
    dbClient.close();
    return data;
  }

};
