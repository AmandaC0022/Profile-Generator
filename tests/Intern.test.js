const Intern = require('../lib/Intern'); 

describe("Intern", () => {
    test("Can instatiate Intern instance", () => {
        const e = new Intern(); 
        expect(typeof e).toBe("object"); 
    }); 
    test("Can set name via constructor arguments", () => {
        const name = "Amanda"; 
        const e = new Intern(name); 
        expect(e.name).toBe(name); 
    }); 
    test("Can get name via getName()", () => {
        const testValue = "Amanda"; 
        const e = new Intern(testValue); 
        expect(e.getName()).toBe(testValue); 
    }); 
}); 