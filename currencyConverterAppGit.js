const input = require('./currencyConverter');

const query = process.argv.slice(2)
let from = query[0];
let to = query[1];

input.get(from,to);
