var express = require('express');
var router = express.Router();

const createError = require('http-errors'); 
const food = require('../modules/food'); 
const url = require('url'); 

module.exports = router;


router.get('/all/:location', (request, response, next) => {   
    const location = request.params.location.toLowerCase();   
    console.log('got into contact/:location ' + location);   
    
    let get_params = url.parse(request.url, true).query;   

    if (Object.keys(get_params).length == 0) {     
      console.log('no params');     
      response.setHeader('content-type', 'application/json');     
      response.end(JSON.stringify(food.calculatePrice(location)));        
   }
         
}); 