const read = require('./utils/read');
const write = require('./utils/write');

const pick = require('./utils/pick');

read('./data/test2.csv', data => {
  console.log(pick(data, 'Test1'));
});