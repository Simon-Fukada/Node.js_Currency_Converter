const input = require('./currencyConverterGit');

const query = process.argv.slice(2)
let from = query[0]
let to = query[1]

if(from && to)
{
  from.toUpperCase();
  to.toUpperCase();
  input.get(from,to);
}
else {
  console.log("two inputs are required");
}
