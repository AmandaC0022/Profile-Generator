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

//stores all of the used ID numbers 
const idArray = []; 

//this writes the code from render(team) to the index.html file 
function writeFile(team) {
    fs.writeFileSync(outputPath, render(team), 'utf-8'); 
}

function init() {
    //inquirer code for Manager 
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
        idArray.push(answers.managerId); 
        createTeam(); 
    })
}

function createTeam() {
    // this gives the user a choice to add a new Intern or Engineer or exit the program 
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
                    writeFile(team);
            }
        })
}

//inquirer code for Engineer 
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
                    if (idArray.includes(answer)) {
                        return "This ID is already taken. Please enter another."
                    } else {
                        return true; 
                    }
                } 
                return "Please enter at least one positive number."; 
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
            validate: answer => {
                if (answer !== "") {
                    return true; 
                } 
                return "Please enter at least one character."
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub); 
        team.push (engineer);  
        idArray.push(answers.engineerId); 
        createTeam();
    }); 
}; 
//inquirer code for Intern 
function addIntern() {
    inquirer.prompt ([
        {
            type: "input", 
            name: "internName",
            message: "What is the name of your Intern?", 
            validate: answer => {
                if (answer !== "") {
                    return true; 
                } 
                return "Please enter at least one character."
            }
        },
        {
            type: "input", 
            name: "internId",
            message: "What is the ID of your Intern?", 
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    if (idArray.includes(answer)) {
                        return "This ID is already taken. Please enter another."
                    } else {
                        return true; 
                    }
                } 
                return "Please enter at least one positive number."; 
            }
        },
        {
            type: "input", 
            name: "internEmail",
            message: "What is the email address of your Intern?", 
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
            name: "internSchool",
            message: "What school is your Intern from?", 
            validate: answer => {
                if (answer !== "") {
                    return true; 
                } 
                return "Please enter at least one character."
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool); 
        team.push (intern); 
        writeFile(team); 
        idArray.push(answers.internId); 
        createTeam();
    }); 
}; 

init()
