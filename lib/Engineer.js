const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {

        // Pass up properties to superclass constructor
        super(name, id, email)

        // Initialize subclass github property
        this.github = github;
    }


    // Getters for all subclass-specific properties
    getGithub() { return this.github; }

    // Overrides Employee getRole() method
    getRole() { return "Engineer"; }
}

module.exports = Engineer;