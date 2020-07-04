const Scores = require('./models/Scores');

exports.addScores = (req, res, next) => {
  const scores = req.body;
  const newScores = new Scores(scores.data);
  console.log("NEW SCORES", newScores)
  newScores.save().then(() => {
    console.log('saved to DB');
    res.json({'message': 'Scores added to database'});
  });
};
