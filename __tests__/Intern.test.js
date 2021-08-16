const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

describe("Intern class", () => {

    let example = new Intern("Nicole", 456565, "Nicole45@gmail.com", "UNC-CH");

    it("Creates a new Engineer object", () => {
        expect(typeof example).toBe("object");
        expect(example instanceof Intern).toBe(true);
        expect(example instanceof Employee).toBe(true);
    });

    it("Intern has the correct id", () => {
        expect(example.getId()).toBe(456565);
    });

    it("Intern has the correct name", () => {
        expect(example.getName()).toBe("Nicole");
    });

    it("Intern has the correct email", () => {
        expect(example.getEmail()).toBe("Nicole45@gmail.com");
    });

    it("Intern has the correct school name", () => {
        expect(example.getSchool()).toBe("UNC-CH");
    });

    it("Intern has the correct role", () => {
        expect(example.getRole()).toBe("Intern");
    });

});