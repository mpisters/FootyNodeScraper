const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./database').mongoConnect;

const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/', routes);

mongoConnect(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
