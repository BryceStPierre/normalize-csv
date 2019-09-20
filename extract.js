const _ = require('underscore');

const extract = (data, header) => _.uniq(data.rows.map(r => r[data.headers.indexOf(header)]));

module.exports = extract;