const fs = require('fs'); 

//1 add new person. 

const addPerson = (fname , lname , age , city , id) => {
    const allData = objectData() ; 

    allData.push({
        fname : fname , 
        lname : lname, 
        age: age , 
        city: city ,
        id : id ,
    })
    saveDataToFile(allData);
}
//1 load data. 
const objectData = () => {
    try{
        const jsonData = fs.readFileSync('data.json').toString();
        return JSON.parse(jsonData) ;
    }
    catch{
        return []
    }
}

const saveDataToFile = (x) => {
    const convertedJson = JSON.stringify(x);
    fs.writeFileSync('data.json' , convertedJson);
}

// delete Person. 
const deletePerson = () => {
    const allData = objectData(); 

    const restData = allData.filter((obj) => {
        return (obj.id !== '4' & obj.id !== '6')
    })
    saveDataToFile(restData);
}
// list for All

const listForAll = () => {
    const allData = objectData(); 
    
    allData.forEach((obj) => {
        console.log(obj.fname , obj.lname , obj.city) ;
    })
}

// to read data of 5th person 
const readInfoPerson = (id)=> {
    const allData = objectData(); 

    const foundPerson = allData.find((obj) => {
        return obj.id == id
    })
    console.log(foundPerson)
}

module.exports = {
    addPerson, 
    deletePerson,
    listForAll,
    readInfoPerson
}

