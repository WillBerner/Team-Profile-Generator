const Employee = require('../lib/Employee.js');

describe("Employee class", () => {
    it("Creates a new Employee object with the correct properties", () => {
        let example = new Employee("John Doe", 21, "JohnDoe@gmail.com");
        
        expect(example.getId()).toBe(21);
        expect(example.getName()).toBe("John Doe");
        expect(example.getEmail()).toBe("JohnDoe@gmail.com");
        expect(example.getRole()).toBe("Employee");
    });
})