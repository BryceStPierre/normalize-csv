const fs = require('fs');

const read = (path, callback) => {
  fs.readFile(path, (err, contents) => {
    const l = contents.toString().split('\r\n');

    let data = {
      headers: [],
      rows: []
    };

    l[0].split(',').forEach(h => data.headers.push(h));

    for (let i = 1; i < l.length; i++) {
      let o = {};
      l[i].split(',').forEach((v, i) => {
        o[data.headers[i]] = v;
      });
      data.rows.push(o);
    }

    return callback(data);
  });
};

module.exports = read;