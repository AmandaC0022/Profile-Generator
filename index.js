// this brings in the HTML template from the other page  
const render = require('./src/page-template'); 

//We are hard coding this right now. This will be generated later from the command line prompts 
const team = [ 
    {
        name: 'Amanda', 
        id: 1, 
        email: 'AmandaC0022@gmail.com', 
        role: 'manager',
    }, 
    {
        name: 'Ben', 
        id: 2, 
        email: 'Ben02@gmail.com', 
        role: 'engineer',
    }, 
    {
        name: 'Hannah', 
        id: 3, 
        email: 'Hannah@gmail.com', 
        role: 'intern',
    }
]

console.log(render(team)); 

