const request = require('request');


const forcast = (latitude,longitude,callback)=>{
    const url = "https://api.darksky.net/forecast/8d660b59c8a2423ac235e1ab537cc754/"+latitude+","+longitude;
    request({url,json:true},(error,response)=>{
            if(error){
                    callback("Unable to connect to the location");
            }else if(response.body.error){
                    callback("Error occurred");
            }else{
                    callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
            }
    })
}

module.exports = forcast;