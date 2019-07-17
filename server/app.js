const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();

app.set('port', process.env.PORT || 3009);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('client/dist'));


app.get('/gallery/:listingid', (req, res) => {
  db.find({ listing_id: req.params.listingid }, (err, data) => {
    if (err) {
      res.status(400).end();
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = app;
