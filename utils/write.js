const fs = require('fs');

const write = (path, data) => {
  var lines = '';

  data.headers.forEach((h, i, a) => {
    if (i === a.length - 1)
      lines += h + '\r\n';
    else 
      lines += h + ',';
  });

  data.rows.forEach((r, i, a) => {
    r.forEach((v, j, b) => {
      if (j === b.length - 1) {
        lines += v;
        if (i !== a.length - 1)  
          lines += '\r\n';
      }
      else 
        lines += v + ',';
    });
  });

  fs.writeFile(path, lines, (err) => {
    if (err) throw err;
    console.log(`\nWrote file: ${path}.`);
  });
};

module.exports = write;