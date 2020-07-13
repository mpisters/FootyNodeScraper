const express = require('express');
const router = express.Router();
const axios = require('axios');
const footyController = require('../footyController');
router.get('/scrape/', async (req, res) => {
  const url = 'https://www.footy.eu/schemas-standen/dinsdag-dames-5v5/';

  const htmlPage = await axios.get(url)
      .then(response => {
        let htmlPage = response.data;
        let htmlPageWithoutScripts = htmlPage.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        return htmlPageWithoutScripts;
      })
      .catch(console.error);
  res.json({'htmlPage': htmlPage});
});

router.post('/scores/', footyController.addScores);
router.get('/scores/', footyController.getScores);
router.post('/next-matches/', footyController.addNextMatches)


module.exports = router;
