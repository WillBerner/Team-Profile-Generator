const Employee = require('../lib/Employee.js');

describe("Employee class", () => {

    let example = new Employee("John Doe", 21, "JohnDoe@gmail.com");

    it("Creates a new Employee object", () => {
        expect(typeof example).toBe("object");
        expect(example instanceof Employee).toBe(true);
    });

    it("Employee has the correct id", () => {
        expect(example.getId()).toBe(21);
    });

    it("Employee has the correct name", () => {
        expect(example.getName()).toBe("John Doe");
    });

    it("Employee has the correct email", () => {
        expect(example.getEmail()).toBe("JohnDoe@gmail.com");
    });

    it("Employee has the correct role", () => {
        expect(example.getRole()).toBe("Employee");
    });

})