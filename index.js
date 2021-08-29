// this brings in the HTML template from the other page  
const render = require('./src/page-template'); 
const fs = require("fs"); 
const path = require("path"); 
const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const inquirer = require('inquirer');


//this creates a path to the dist folder / __dirname is a node method 
const OUTPUT_DIR = path.resolve(__dirname, "dist"); 
//this takes the path to the dist folder and then jois index.html to it 
const outputPath = path.join(OUTPUT_DIR, "index.html"); 

//empty team members array that will polluate with the inquirer prompts 
const team = []; 

//this writes the code from render(team) to the index.html file 
function writeFile(team) {
    fs.writeFileSync(outputPath, render(team), 'utf-8'); 
}

function init() {
    //inquirer code 
    inquirer.prompt ([
        {
            type: "input", 
            name: "managerName", 
            message: "What is the team manager's name?", 
            validate: answer => {
                if (answer !== "") {
                    return true; 
                } 
                return "Please enter at least one character."
            }
        },
        {
            type: "input", 
            name: "managerId", 
            message: "What is the team manager's ID?", 
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    return true; 
                } 
                return "Please enter at least one positive number."
            }
        },
        {
            type: "input", 
            name: "managerEmail", 
            message: "What is the team manager's email?", 
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/ 
                )
                if (pass) {
                    return true; 
                } 
                return "Please enter a valid email address."
            }
        },
        {
            type: "input", 
            name: "managerOfficeNumber", 
            message: "What is the team manager's office number?", 
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    return true; 
                } 
                return "Please enter at least one positive number."
            }
        }
    ]).then (answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber); 
        team.push (manager); 
        writeFile(team); 
        // idArray.push(answers.managerId); 
        createTeam(); 
    })
}

function createTeam() {
    inquirer.prompt ([
        {
            type: "list", 
            name: "memberChoice",
            message: "What type of team member would you like to add?", 
            choices: ["Engineer", "Intern", "I don't want to add any more members."]
        }
    ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer": 
                    addEngineer(); 
                    break; 
                case "Intern":
                    addIntern(); 
                    break; 
                default: 
                    buildTeam(); 
            }
        })
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input", 
            name: "engineerName",
            message: "What is the name of your Engineer?", 
            validate: answer => {
                if (answer !== "") {
                    return true; 
                } 
                return "Please enter at least one character."
            }
        },
        {
            type: "input", 
            name: "engineerId",
            message: "What is the ID of your Engineer?", 
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    return true; 
                } 
                return "Please enter at least one positive number."
            }
            
        },
        {
            type: "input", 
            name: "engineerEmail",
            message: "What is the email address of your Engineer?", 
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/ 
                )
                if (pass) {
                    return true; 
                } 
                return "Please enter a valid email address."
            }
        },
        {
            type: "input", 
            name: "engineerGithub",
            message: "What is the Github username of your Engineer?", 
        },
}

function addIntern() {
    inquirer.prompt ([
        {
            type: "list", 
            name: "memberChoice",
            message: "What type of team member would you like to add?", 
            choices: ["Engineer", "Intern", "I don't want to add any more members."]
        }
}

init()

// switch statement: 
// .then(userChoice => {
//     switch(userChoice.memberChoice) {
//         case "Engineer": 
//             addEngineer(); 
//             break; 
//         case "Intern":
//             addIntern(); 
//             break; 
//         default: 
//             buildTeam(); 
//     }
// })