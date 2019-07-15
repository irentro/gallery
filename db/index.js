const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/gallery';
const Gallery = require('./Gallery.js');

const db = mongoose.connect(mongoUri);

function findAll(callback) {
  Gallery.find(function(err,docs) {
    if(err){
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
}


function find(obj, callback) {
  Gallery.find(obj, function (err,docs) {
    if(err){
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });

}

module.exports = db;
module.exports.findAll = findAll;
module.exports.find = find;
