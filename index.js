const inquirer = require('inquirer');
const fs = require('fs');
const managerQuestions = require('./src/managerQuestions.js');
const engineerQuestions = require('./src/engineerQuestions.js');
const internQuestions = require('./src/internQuestions.js');

let Manager = require('./lib/Manager.js');
let Intern = require('./lib/Intern.js')
let Engineer = require('./lib/Engineer.js')

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

function generateTeamMemberCard(teammember) {

    let uniqueInfo = '';

    switch (teammember.getRole()){
        case "Engineer":
            uniqueInfo = `GitHub: <a href="https://github.com/${teammember.getGithub()}">${teammember.getGithub()}</a>`;
            break;
        case "Intern":
            uniqueInfo = `School: ${teammember.getSchool()}`;
            break;
        case "Manager":
            uniqueInfo = `Office Number: ${teammember.getOfficeNumber()}`;
            break;
        default:
            throw new Error("Sorry, team member role is not supported!")
    }

    return `

    <div class="col s12 m6 l4">
        <div class="card blue darken-1">
            <div class="card-content white-text">
                <span class="card-title">${teammember.getName()}</span>
                <p>${teammember.getRole()}</p>

                <ul class="collection black-text">
                    <li class="collection-item">Team ID: ${teammember.getId()}</li>
                    <li class="collection-item">Email: <a href="mailto: ${teammember.getEmail()}">${teammember.getEmail()}</a></li>
                    <li class="collection-item">${uniqueInfo}</li>
                </ul>
            </div>
        </div>
    </div>

    `;
}
function generateHTML(team) {

    var teamHTML = '';

    team.forEach(teammember => teamHTML += generateTeamMemberCard(teammember));

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <title>My Team</title>

        <!-- Materialize CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

        <!-- Materialize JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
        
        <!-- Custom CSS -->
        <link rel="stylesheet" href="./style.css">

    </head>
    <body>

        <nav>
            <div class="nav-wrapper">
            <a class="brand-logo center">My Team</a>
            </div>
        </nav>

        <main class="container">
            <div class="row">

                ${teamHTML}

            </div>
        </main>

    </body>
    </html>
    `;
}


function writeHTML(data) {

    let html = generateHTML(data);

    fs.writeFile("./dist/result.html", html, (error) => {
        (error) ? log.error(error) : console.log("Success");
    })
}

async function init() {

    let results = null;
    let team = [];

    await inquirer.prompt(managerQuestions)

        .then(data => results = data)

        .catch((error) => console.error(error));

    team.push(new Manager(results.managerName, results.managerID, results.managerEmail, results.managerOfficeNumber));

    if (!results.addTeammate) {
        return;
    }

    while (results.addTeammate) {

        let whoToAdd = await inquirer.prompt([{
            name: "result",
            type: "list",
            message: "Would you like to add an engineer or an intern?",
            choices: ["Engineer", "Intern"]
        }]).then(data => data).catch((error) => console.error(error));

        if (whoToAdd.result == "Engineer") {

            await inquirer.prompt(engineerQuestions)

                .then(data => results = data)

                .catch((error) => console.error(error));

            team.push(new Engineer(results.engineerName, results.engineerID, results.engineerEmail, results.gitHub));

        } else {

            await inquirer.prompt(internQuestions)

                .then(data => results = data)

                .catch((error) => console.error(error));

            team.push(new Intern(results.internName, results.internID, results.internEmail, results.school));

        }

    }

    writeHTML(team);

}

init();