# Team-Profile-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Team Profile Generator is a Node.js application built with Inquirer and fs libraries for generating an html webpage containing information about members of a development team for quick access such as email addresses, github profile links, IDs, etc. Tested using Jest and styled with Materialize.

## Table of Contents
   
* [Installation Instructions](#installation-instructions)
* [Usage Instructions](#usage-instructions)
* [Testing Instructions](#testing-instructions)
* [Demo](#demo)

## Installation Instructions

This application requires node.js, so install node from their website if you do not have it. Next, from the root directory, install the npm dependencies Inquirer and Jest with the command: 
      
    'npm i'

## Usage Instructions

Still in the root directory, run: 
      
    'node index.js' 
      
You will be given prompts regarding your team and information about them that you must fill out, starting with your team's manager. You then have the option to add either Engineers or Interns, as many as you have, until you have given information on everybody in your team. 

After this, an HTML webpage will be generated in the local ./dist/ folder containing quick and accessilbe information about your team.

## Testing Instructions

To test this software, run: 

    'npm run test' 

from the root directory (after making sure you've installed Jest!).

## Demo
[![Demo](https://img.youtube.com/vi/KrnTw_LhYRM/0.jpg)](https://www.youtube.com/watch?v=KrnTw_LhYRM)

&copy; 2021 [Will](https://github.com/WillBerner)
