const Manager = require('../lib/Engineer'); 

describe("Manager", () => {
    test("Can instatiate Manager instance", () => {
        const e = new Manager(); 
        expect(typeof e).toBe("object"); 
    }); 
    test("Can set name via constructor arguments", () => {
        const name = "Amanda"; 
        const e = new Manager(name); 
        expect(e.name).toBe(name); 
    }); 
    test("Can get name via getName()", () => {
        const testValue = "Amanda"; 
        const e = new Manager(testValue); 
        expect(e.getName()).toBe(testValue); 
    }); 
}); 