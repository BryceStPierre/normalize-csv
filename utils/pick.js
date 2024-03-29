const _ = require('underscore');

const pick = (data, header) => {
  var values = _.uniq(data.rows.map(r => r[data.headers.indexOf(header)]));

  return {
    headers: values,
    rows: values.map((v, i) => [i + 1, v]),
    colId: 0,
    colValue: 1
  };
}
module.exports = pick;