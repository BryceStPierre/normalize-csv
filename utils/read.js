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
      let a = [];
      l[i].split(',').forEach(v => a.push(v));
      data.rows.push(isNaN(a) ? a : Number(a));
    }

    return callback(data);
  });
};

module.exports = read;