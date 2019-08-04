const request = require('request');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast'); 



   
//location
geocode('New York',(error,data)=>{
        console.log("Error : ",error);
        console.log("Data : ",data);
})
//Weather
forcast(-75.7088,44.1545,(error,data)=>{
        console.log("Error : ",error);
        console.log("Data : ",data);
})



