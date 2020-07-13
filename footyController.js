const NextMatches = require('./models/NextMatches');

const Scores = require('./models/Scores');

exports.addScores = (req, res, next) => {
  const scores = req.body;
  const newScores = new Scores(scores.data);
  newScores.save().then(() => {
    res.json({'message': 'Scores added to database'});
  });
};

exports.getScores = (req, res, next) => {
  console.log(Scores);
  Scores.fetchAll().then((scores) => {
    res.json(scores);
  });
};

exports.addNextMatches = (req, res, next) => {
  const nextMatches = req.body;
  const newNextMatches = new NextMatches(nextMatches.data);
  newNextMatches.save().then(() => {
    res.json({'message': 'Next matches added to database'});
  });
};
