"use strict";
describe("Tesing Constructors in Classes here", function () {
    it("Can create a class Object", function() {

        class Employee {

            constructor(name){
                this._name = name;
            }

            doWork() {
                return 'correct';
            }

            getName() {
                return this._name;
            }
        }

        let employee = new Employee("scott");

        expect(employee.doWork()).toBe('correct');
        expect(employee.getName()).toBe('scott');
    });

});
