const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./src/questions.js');

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
    await inquirer.prompt(questions)
        .then(data => {
            results = data;
        })
        .catch((error) => {console.error(error)})

    console.log(results);
}


init();