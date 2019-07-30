const request = require('request');
 
const url = "https://api.darksky.net/forecast/8d660b59c8a2423ac235e1ab537cc754/37.8267,-122.4233";

request({url:url},(error,response)=>{
        const data = JSON.parse(response.body);
        console.log(data.currently.time);
})