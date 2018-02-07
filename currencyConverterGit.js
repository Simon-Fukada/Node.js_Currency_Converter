//Simple currency converter application

//Get required module and api key
const https = require('https');
const api = require('./apiGit.json');
//function to print result to console
function printMessage(result){
  console.log(`The Currency exchange from ${result['Realtime Currency Exchange Rate']['2. From_Currency Name']}`+
  ` to ${result['Realtime Currency Exchange Rate']['4. To_Currency Name']}`+
  ` is ${result['Realtime Currency Exchange Rate']['5. Exchange Rate']}`);
}

//function to get
function get(from,to){
  try{
const request = https.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${api.key}`,
function(response){
    if(response.statusCode === 200){

    let body = "";
    response.on('data', data=>{body += data.toString();});
    response.on('end',()=>{
    const result = JSON.parse(body);
    printMessage(result);
    });
    }
    else {
      //error with http response
      console.log('response.statusCode' + 'problem with response');
    }

  });
  //catch url error problems
  request.on('error', error=>{console.error('problem with api url')});
}
catch(error){
//incorrect protocol
console.log('there is a problem with the http(s) protocol');
}
}

module.exports.get = get;
