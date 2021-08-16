const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, school) {

        // Pass up properties to superclass constructor
        super(name, id, email)

        // Initialize subclass school property
        this.school = school;
    }

    // Getters for all subclass-specific properties
    getSchool() { return this.school; }

    // Overrides Employee getRole() method
    getRole() { return "Intern"; }
}

module.exports = Intern;