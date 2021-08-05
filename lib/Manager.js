const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.OfficeNumber = officeNumber;
    }

    getRole() { return "Manager"; }
}


module.exports = Manager;