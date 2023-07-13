const yargs = require('yargs');
const dataLogic = require('./dataLogic')

yargs.command({
    command : 'add' ,
    describe : 'to add an item',

    builder: {
        fname: {
            describe :'add first name',
            demandOption: true , 
            type: 'string'
        },
        lname: {
            describe :'add last name',
            demandOption: true , 
            type: 'string'
        },
        age: {
            describe :'add the age',
            demandOption: true , 
            type: 'string'
        },
        city: {
            describe :'add the city',
            demandOption: true , 
            type: 'string'
        },
        id: {
            describe :'add the id',
            demandOption: true , 
            type: 'string'
        },
    },  

    handler: (x) => {
         dataLogic.addPerson(x.fname , x.lname ,x.age , x.city , x.id) 
        
    }
})

// delete
yargs.command({
    command : 'delete' ,
    describe : 'to delete an item',

    handler: () => {
         dataLogic.deletePerson() 
        
    }
})

// liste 

yargs.command({
    command :'list',
    describe :'view list of info of people' , 

    handler: () => {
        dataLogic.listForAll();
    }
})

// to read data of 5th person 

yargs.command({
    command :'read',
    describe :'read info of person' , 
    builder: {
        id : {
            describe:'id of person', 
            demandOption: true , 
            type: 'string'
        }
    } , 
    handler: (x) => {
        dataLogic.readInfoPerson(x.id);
    }
})




yargs.parse(); 