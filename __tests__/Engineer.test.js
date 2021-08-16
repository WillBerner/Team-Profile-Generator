const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

describe("Engineer class", () => {

    let example = new Engineer("Aunt Marie", 31, "Marie@gmail.com", "Marie123");

    it("Creates a new Engineer object", () => {
        expect(typeof example).toBe("object");
        expect(example instanceof Engineer).toBe(true);
        expect(example instanceof Employee).toBe(true);
    });

    it("Engineer has the correct id", () => {
        expect(example.getId()).toBe(31);
    });

    it("Engineer has the correct name", () => {
        expect(example.getName()).toBe("Aunt Marie");
    });

    it("Engineer has the correct email", () => {
        expect(example.getEmail()).toBe("Marie@gmail.com");
    });

    it("Engineer has the correct GitHub username", () => {
        expect(example.getGithub()).toBe("Marie123");
    });

    it("Engineer has the correct role", () => {
        expect(example.getRole()).toBe("Engineer");
    });

});