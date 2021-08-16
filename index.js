// Importing Inquirer for user input and fs to write the html file.
const inquirer = require('inquirer');
const fs = require('fs');

// Importing question arrays to use with inquirer
const managerQuestions = require('./src/managerQuestions.js');
const engineerQuestions = require('./src/engineerQuestions.js');
const internQuestions = require('./src/internQuestions.js');

// Importing necessary classes to represent team members
let Manager = require('./lib/Manager.js');
let Intern = require('./lib/Intern.js')
let Engineer = require('./lib/Engineer.js')

// Generates html for a card to represent a specific team member
function generateTeamMemberCard(teammember) {

    // Will hold unique info html of team member (github/school/officeNumber)
    let uniqueInfo = '';

    // Will hold html name and icon of team member
    let role = '';

    // Fill vars based on team member's role
    switch (teammember.getRole()){
        case "Engineer":
            uniqueInfo = `GitHub: <a href="https://github.com/${teammember.getGithub()}">${teammember.getGithub()}</a>`;
            role = `<span class="material-icons">engineering</span> &nbsp ${teammember.getName()}`;
            break;
        case "Intern":
            uniqueInfo = `School: ${teammember.getSchool()}`;
            role = `<span class="material-icons">menu_book</span> &nbsp ${teammember.getName()}`;
            break;
        case "Manager":
            uniqueInfo = `Office Number: ${teammember.getOfficeNumber()}`;
            role = `<span class="material-icons">coffee</span> &nbsp ${teammember.getName()}`;
            break;
        default:
            throw new Error("Sorry, team member role is not supported!")
    }

    // Return an html snippet of a card with values based on the team member
    return `

    <div class="col s12 m6 l4">
        <div class="card blue darken-1">
            <div class="card-content white-text">
                <span class="card-title">${role}</span>
                <h6>${teammember.getRole()}</h6>

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

// Generates general html structure for the resulting page
function generateHTML(team) {

    // Will be filled by all of the generated html cards for the team
    var teamHTML = '';

    // Generate html for each team member and append them together to be inserted into the page
    team.forEach(teammember => teamHTML += generateTeamMemberCard(teammember));

    // Return the generated html for the page with team member cards spliced in the middle
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
            
        <!-- Material Icon Library -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

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

// Writes the generated html to a new file: ./dist/index.html
function writeHTML(data) {

    // Get generated html from helper function using the user input data from inquirer
    let html = generateHTML(data);

    // Write the file to distribution folder ./dist/index.html and log a success/failure
    fs.writeFile("./dist/index.html", html, (error) => {
        (error) ? log.error(error) : console.log("Success");
    });
}

// Function to initialze the application and use inquirer to gather data.
async function init() {

    // Will hold results for a set of inquirer questions
    let results = null;

    // Will hold the team member objects created
    let team = [];

    // First, ask for the manager's information and add them to the team array
    await inquirer.prompt(managerQuestions)

        .then(data => results = data)

        .catch((error) => console.error(error));

    team.push(new Manager(results.managerName, results.managerID, results.managerEmail, results.managerOfficeNumber));

    // If the manager does not want to add any teammates, write the html file and return
    if (!results.addTeammate) {
        writeHTML(team);
        return;
    }

    // While the manager wants to continue to add teammates, ask more questions
    while (results.addTeammate) {

        // Determine whether to add an Engineer or an Intern and return that data
        let whoToAdd = await inquirer.prompt([{
            name: "result",
            type: "list",
            message: "Would you like to add an engineer or an intern?",
            choices: ["Engineer", "Intern"]
        }]).then(data => data).catch((error) => console.error(error));

        // If the manager wanted to add an engineer, prompt engineer questions and save the responses in the 'results' variable
        if (whoToAdd.result == "Engineer") {

            await inquirer.prompt(engineerQuestions)

                .then(data => results = data)

                .catch((error) => console.error(error));

            // Add the new engineer to the team array
            team.push(new Engineer(results.engineerName, results.engineerID, results.engineerEmail, results.gitHub));

        // If not adding an engineer, prompt intern questions and save the responses in the 'results' variable
        } else {

            await inquirer.prompt(internQuestions)

                .then(data => results = data)

                .catch((error) => console.error(error));

            // Add the new Intern to the team array
            team.push(new Intern(results.internName, results.internID, results.internEmail, results.school));

        }

    }

    // After the team creation is finished, generate and write an html file based on that team.
    writeHTML(team);

}

// Start her up!
init();