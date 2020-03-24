var express = require('express');
var router = express.Router();

const createError = require('http-errors'); 
const team = require('../modules/team'); 
const url = require('url'); 

module.exports = router;

router.get('/team', (request, response, next) => {   
    let get_params = url.parse(request.url, true).query;   
    console.log('got into contacts');   
    if (Object.keys(get_params).length == 0) {     
        console.log('no params');     
        response.setHeader('content-type', 'application/json');  
        const obj = team.list()[0];  // get first JSON in array 
        response.end(JSON.stringify(obj));  
     }
}); 