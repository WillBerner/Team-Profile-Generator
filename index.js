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
    console.log(team);
}


init();