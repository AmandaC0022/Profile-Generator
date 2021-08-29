const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="card-body">
            <div class="card-title custom-card-title">
                <h2>${manager.getName()}</h2>
                <i class="fas fa-users"></i>
                <h4>Manager</h4> 
            </div>
            <ul class="list-group custom-card-body">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li> 
            </ul>
        </div>
        `;
    };
    const generateEngineer = (engineer) => {
        return `
        <div class="card-body">
            <div class="card-title custom-card-title">
                <h2>${engineer.getName()}</h2>
                <i class="fas fa-cogs"></i>
                <h4>Engineer</h4> 
            </div>
            <ul class="list-group custom-card-body">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank"/>${engineer.getGithub()}</li> 
            </ul>
        </div>
        `;
    }; 
    const generateIntern = (intern) => {
        return `
        <div class="card-body">
            <div class="card-title custom-card-title">
                <h2>${intern.getName()}</h2>
                <i class="fas fa-user-graduate"></i>
                <h4>Intern</h4> 
            </div>
            <ul class="list-group custom-card-body">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}></li> 
            </ul>
        </div>
        `;
    }; 
    
    const htmlArr = []

    htmlArr.push(
        // this grabs just those with the role of manager 
        team
            .filter((employee) => employee.getRole() === 'Manager') 
            //this goes over each index in the array and runs generateManager on each ith element or manager
            .map((manager) => generateManager(manager)) 
            .join("")
    ); 

    htmlArr.push(
        // this grabs just those with the role of engineer 
        team
            .filter((employee) => employee.getRole() === 'Engineer') 
            .map((engineer) => generateEngineer(engineer)) 
            .join("")
    ); 
    
    htmlArr.push(
        // this grabs just those with the role of manager 
        team
            .filter((employee) => employee.getRole() === 'Intern') 
            //this goes over each index in the array and runs generateManager on each ith element or manager
            .map((intern) => generateIntern(intern)) 
            .join("")
    ); 

    //this joins the arrays into a string so it shows up on the command line 
    return htmlArr.join("");  
 
}; 

module.exports = (team) => {
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Amazing Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>`;
} 
