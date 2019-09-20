const read = require('./utils/read');
const write = require('./utils/write');

read('./data/test.csv', data => {
  console.log(data);

  write('./output/out.csv', data);
});