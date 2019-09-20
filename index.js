const read = require('./utils/read');

read('./data/test.csv', data => {
  console.log(data);
});