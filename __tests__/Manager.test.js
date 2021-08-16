const Manager = require('../lib/Manager.js');

describe("Manager class", () => {
    it("Creates a new Manager object with the correct properties", () => {
        let example = new Manager("Dimitri", 987, "Dimitri@gmail.com", 426);
        
        expect(example.getId()).toBe(987);
        expect(example.getName()).toBe("Dimitri");
        expect(example.getEmail()).toBe("Dimitri@gmail.com");
        expect(example.getOfficeNumber()).toBe(426);
        expect(example.getRole()).toBe("Manager");
        
    });
});