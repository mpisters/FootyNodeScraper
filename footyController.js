const NextMatches = require('./models/NextMatches');

const Scores = require('./models/Scores');

exports.addScores = (req, res, next) => {
  const scores = req.body;
  const newScores = new Scores(scores.data);
  console.log('NEW SCORES', newScores);
  newScores.save().then(() => {
    console.log('saved to DB');
    res.json({'message': 'Scores added to database'});
  });
};

exports.addNextMatches = (req, res, next) => {
  const nextMatches = req.body;
  const newNextMatches = new NextMatches(nextMatches.data);
  newNextMatches.save().then(() => {
    res.json({'message': 'Next matches added to database'});
  });
};
