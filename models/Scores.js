const getDb = require('../database').getDb;

class Scores {
  constructor(scores) {
    this.scores = scores;
  }

  save() {
    const db = getDb();
    console.log(this)
    return db.collection('scores')
        .insertOne(this)
        .then((result) => console.log("added to database"))
        .catch((error) => {
      console.log(error);
    });
  }
}

module.exports = Scores;
