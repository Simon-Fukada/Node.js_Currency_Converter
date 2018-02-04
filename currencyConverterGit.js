//Simple currency converter application

//Get required module and api key
const https = require('https');
const api = require('./api.json');
//function to print result to console
function printMessage(result){
  console.log(`The Currency exchange from ${result['Realtime Currency Exchange Rate']['2. From_Currency Name']}`+
  ` to ${result['Realtime Currency Exchange Rate']['4. To_Currency Name']}`+
  ` is ${result['Realtime Currency Exchange Rate']['5. Exchange Rate']}`);
}
//function to get
function get(from,to){
const request = https.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${api.key}`,
function(response){
    console.log(response.statusCode);

    let body = "";
    response.on('data', data=>{body += data.toString();});
    response.on('end',()=>{
    const result = JSON.parse(body);
    printMessage(result);
    });

  });
}
module.exports.get = get;
