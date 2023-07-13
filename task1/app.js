const fs = require('fs')

//1 creat obj
var objPerson = {
    fname : 'ahmed' , 
    lname : 'hossam' , 
    age : '20', 
    city : 'alex'
}



//2 convert obj to json 
var JsonData = JSON.stringify(objPerson) ; 


//3 store in file 
fs.writeFileSync('data.json' , JsonData);

//4 read file json 
var readJsonDAta = fs.readFileSync('data.json').toString()



//5 convert to obj
var allData = JSON.parse(readJsonDAta);    

//6 update data
allData = {
    fname : 'sami' , 
    age : '40' , 
    city :'cairo'
}

//7 convert obj to json
var JsonData = JSON.stringify(allData) ; 

//8 store in file
fs.writeFileSync('data.json' , JsonData);










