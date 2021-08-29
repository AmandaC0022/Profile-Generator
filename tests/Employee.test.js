const Employee = require('../lib/Employee'); 

describe("Employee", () => {
    test("Can instatiate Employee instance", () => {
        const e = new Employee(); 
        expect(typeof e).toBe("object"); 
    }); 
    test("Can set name via constructor arguments", () => {
        const name = "Amanda"; 
        const e = new Employee(name); 
        expect(e.name).toBe(name); 
    }); 
    test("Can get name via getName()", () => {
        const testValue = "Amanda"; 
        const e = new Employee(testValue); 
        expect(e.getName()).toBe(testValue); 
    }); 
}); 