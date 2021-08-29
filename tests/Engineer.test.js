 
const Engineer = require('../lib/Engineer'); 

describe("Engineer", () => {
    test("Can instatiate Engineer instance", () => {
        const e = new Engineer(); 
        expect(typeof e).toBe("object"); 
    }); 
    test("Can set name via constructor arguments", () => {
        const name = "Amanda"; 
        const e = new Engineer(name); 
        expect(e.name).toBe(name); 
    }); 
    test("Can get name via getName()", () => {
        const testValue = "Amanda"; 
        const e = new Engineer(testValue); 
        expect(e.getName()).toBe(testValue); 
    }); 
}); 