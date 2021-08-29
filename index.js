// this brings in the HTML template from the other page  
const render = require('./src/page-template'); 
const fs = require("fs"); 
const path = require("path"); 

//this creates a path to the dist folder / __dirname is a node method 
const OUTPUT_DIR = path.resolve(__dirname, "dist"); 
//this takes the path to the dist folder and then jois index.html to it 
const outputPath = path.join(OUTPUT_DIR, "index.html"); 

//We are hard coding this right now. This will be generated later from the command line prompts with inquirer
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
//this writes the code from render(team) to the index.html file 
fs.writeFileSync(outputPath, render(team), 'utf-8'); 

