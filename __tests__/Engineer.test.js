const Engineer = require('../lib/Engineer.js');

describe("Engineer class", () => {
    it("Creates a new Engineer object with the correct properties", () => {
        let example = new Engineer("Aunt Marie", 31, "Marie@gmail.com", "Marie123");
        
        expect(example.getId()).toBe(31);
        expect(example.getName()).toBe("Aunt Marie");
        expect(example.getEmail()).toBe("Marie@gmail.com");
        expect(example.getGithub()).toBe("Marie123");
        expect(example.getRole()).toBe("Engineer");
    });
});