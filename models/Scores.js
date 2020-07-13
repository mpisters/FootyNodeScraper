const getDb = require('../database').getDb;

class Scores {
  constructor(scores) {
    this.scores = scores;
  }

  save() {
    const db = getDb();
    return db.collection('scores')
        .insertOne(this)
        .then((result) => console.log('added to database'))
        .catch((error) => {
          console.log(error);
        });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('scores')
        .find({scores: {$ne: null}})
        .toArray()
        .then((scores) => {
          const scoresWithTimeStamp = scores.map((score) => {
            score['timeStamp'] = score._id.getTimestamp();
            return score;
          });
          return scoresWithTimeStamp;
        });
  }
}

module.exports = Scores;
