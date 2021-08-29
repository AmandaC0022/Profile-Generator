// this brings in the HTML template from the other page  
const render = require('./src/page-template'); 
const fs = require("fs"); 
const path = require("path"); 
const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const { getMaxListeners } = require('process');

//this creates a path to the dist folder / __dirname is a node method 
const OUTPUT_DIR = path.resolve(__dirname, "dist"); 
//this takes the path to the dist folder and then jois index.html to it 
const outputPath = path.join(OUTPUT_DIR, "index.html"); 

//We are hard coding this right now. This will be generated later from the command line prompts with inquirer
const team = [ 
    new Manager("Amanda", 1, "AmandaC0022@gmail.com"), 
    new Engineer("Ben", 2, "Ben02@gmail.com"),
    new Intern ("Hannah", 3, "Hannah@school.com"), 
    new Engineer("Chris", 4, "Chrisipoo@yahoo.com") 
]

//this writes the code from render(team) to the index.html file 
fs.writeFileSync(outputPath, render(team), 'utf-8'); 

