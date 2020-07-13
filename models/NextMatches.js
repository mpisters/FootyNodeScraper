const getDb = require('../database').getDb;

class NextMatches {
  constructor(nextMatches) {
    this.nextMatches = nextMatches;
  }

  save() {
    const db = getDb();
    return db.collection('nextMatches')
        .insertOne(this)
        .then((result) => console.log('added next matches to database'));
  }
}

module.exports = NextMatches;
