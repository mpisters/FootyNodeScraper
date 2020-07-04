const mongodb = require('mongodb');


const url = 'mongodb://localhost:27017';
const MongoClient = mongodb.MongoClient;
const dbName = 'Footy';
let _db;

const mongoConnect = callback => {
  MongoClient.connect(url, {useUnifiedTopology: true})
      .then(client => {
        console.log('Connected!');
        _db = client.db(dbName);
        callback();
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
};

const getDb = () => {
  console.log("is this reached?")
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
