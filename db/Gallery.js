const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const gallerySchema = new mongoose.Schema({
  listing_id: Number,
  photos: [{
    position: Number,
    imageUrl: String,
    description: String,
  },
  ],
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
