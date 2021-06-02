const fs = require('fs');

function getFile(name) {
  let data;
  try {
    data = fs.readFileSync(`storage/${name}`, {
      encoding: 'utf-8',
    });
  } catch (err) {
    throw new Error('no file');
  }
  return data;
}

exports.getFile = getFile;
