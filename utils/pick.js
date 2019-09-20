const _ = require('underscore');

const pick = (data, header) => _.uniq(data.rows.map(r => r[data.headers.indexOf(header)]));

module.exports = pick;