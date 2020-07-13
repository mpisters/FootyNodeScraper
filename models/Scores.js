const getDb = require('../database').getDb;

class Scores {
  constructor(scores) {
    this.scores = scores;
  }

  save() {
    const db = getDb();
    return db.collection('scores')
        .insertOne(this)
        .then((result) => console.log("added to database"))
        .catch((error) => {
      console.log(error);
    });
  }
}

module.exports = Scores;
