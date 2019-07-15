const db  = require('./index.js');
const Gallery = require('./Gallery.js');
var faker = require('faker');

const sampleData = [];
for (let i = 0; i < 100; i++) {
  const photo = {};
  photo['listing_id'] = i + 1;
  const photoArr = [];
  for (let j = 0; j < faker.random.number({ min: 5, max: 15 }); j++) {
    photoArr.push({ position: j + 1, imageUrl: 'https://irentro.s3-us-west-1.amazonaws.com/rooms/bd'+ faker.random.number({min:1, max:100}) +'.jpeg', description: faker.lorem.words() });
  }
  photo['photos'] = photoArr;
  sampleData.push(photo);
}

const insertSampleData = function() {
  Gallery.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleData();
