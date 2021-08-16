const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

describe("Manager class", () => {

    let example = new Manager("Dimitri", 987, "Dimitri@gmail.com", 426);

    it("Creates a new Engineer object", () => {
        expect(typeof example).toBe("object");
        expect(example instanceof Manager).toBe(true);
        expect(example instanceof Employee).toBe(true);
    });

    it("Manager has the correct id", () => {
        expect(example.getId()).toBe(987);
    });

    it("Manager has the correct name", () => {
        expect(example.getName()).toBe("Dimitri");
    });

    it("Manager has the correct email", () => {
        expect(example.getEmail()).toBe("Dimitri@gmail.com");
    });

    it("Manager has the correct school name", () => {
        expect(example.getOfficeNumber()).toBe(426);
    });

    it("Manager has the correct role", () => {
        expect(example.getRole()).toBe("Manager");
    });

    
});