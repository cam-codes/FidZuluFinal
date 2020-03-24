var express = require('express');
var router = express.Router();

const fs = require('fs'); 
let read_json_file = () => {     
    let file = './data/Team.json';     
    return fs.readFileSync(file); 
}   
exports.list = function() {       
    return JSON.parse(read_json_file());    
}; 
 
exports.query_by_arg = (arg, value) => {     
    let json_result = JSON.parse(read_json_file());     
    // all addresses are stored in a "result" object     
    let result = json_result.result;     
    console.log("query by arg: " + arg + " " + value);     
    for (let i = 0; i < result.length; i++) {         
        let contact = result[i];         
        if (contact[arg] === value) {             
            return contact;         
        }    
    }     
    return null; 
}; 

