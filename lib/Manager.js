const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        // Pass up properties to superclass constructor
        super(name, id, email)

        // Initialize subclass officeNumber property
        this.OfficeNumber = officeNumber;
    }

    // Getters for all subclass-specific properties
    getOfficeNumber() { return this.OfficeNumber; }

    // Overrides Employee getRole() method
    getRole() { return "Manager"; }

}


module.exports = Manager;