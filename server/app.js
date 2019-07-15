const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const Gallery = require('../db/Gallery.js');

const app = express();

app.set('port', process.env.PORT || 3009);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get('/gallery:listingid', (req, res) => {
//   db.find({ listing_id: 16 }, (err, data) => {
//     if (err) {
//       res.status(400).end();
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

app.get('/gallery/:listingid', (req, res) => {
  // const list = req.params.listing_id;
  console.log(0, req.params);
  // You have a typo here
  // console.log('1', req.params.listing_id);
  console.log(req.params.listingid);

  // db.find( {listing_id: req.params.listing_id}, (err, data) => {
    db.find( {listing_id: req.params.listingid}, (err, data) => {
    if (err) {
      res.status(400).end();
    } else {
      res.status(200).send(data);
    }
  });

});

module.exports = app;
