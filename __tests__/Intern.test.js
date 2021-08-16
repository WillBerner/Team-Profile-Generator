const Intern = require('../lib/Intern.js');

describe("Intern class", () => {
    it("Creates a new Intern object with the correct properties", () => {
        let example = new Intern("Nicole", 456565, "Nicole45@gmail.com", "UNC-CH");
        
        expect(example.getId()).toBe(456565);
        expect(example.getName()).toBe("Nicole");
        expect(example.getEmail()).toBe("Nicole45@gmail.com");
        expect(example.getSchool()).toBe("UNC-CH");
        expect(example.getRole()).toBe("Intern");
    });
});