const read = require('./utils/read');
const write = require('./utils/write');

const extract = require('./extract');

read('./data/test2.csv', data => {
  //console.log(data);

  console.log(extract(data, 'Test1'));

  //write('./output/out.csv', data);
});