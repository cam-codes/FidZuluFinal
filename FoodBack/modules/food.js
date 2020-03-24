const fs = require('fs'); 
let read_json_file = () => {     
    let file = './data/location.json';     
    return fs.readFileSync(file); 
}   

let read_json_file_food = () => {     
    let file = './data/Foodjson.json';     
    return fs.readFileSync(file); 
}    

exports.getTax = function(location) {     
    let json = JSON.parse(read_json_file());   
    let tax;                             
    for (let i = 0; i < json.length; i++) {         
        if(json[i].name===location)
        {
            tax=json[i].salesTax;
        }
    } 
    console.log(location)
    console.log(tax)
    return tax
}; 

exports.calculatePrice = function(location) {     
    let json = JSON.parse(read_json_file_food());   
    //let price;  
    let tax = exports.getTax(location);  
    //let priceList = [];                      
    for (let i = 0; i < json.length; i++) { 
        //price = json[i].price;   
        json[i].price = (json[i].price * (1+tax)).toFixed(2);
        //priceList.push(price);
    } 
    return json;
}; 