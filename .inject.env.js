const fs = require('fs');
const path = require('path');

module.exports = file => {
  const fileName = path.join(file);
  const data = fs.readFileSync(fileName, { encoding: 'utf8' });
  const arr = [];
  data
    .replace(/\n/g, ',')
    .replace(/\r/g, '')
    .split(',')
    .forEach((item) => (item && !item.startsWith('#')) && arr.push(item.split('=')));
  return arr;
};
