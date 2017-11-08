"use strict";
describe("Tesing getter and setters in Classes here", function () {
    it("Can have getters and setters", function() {

        class Employee {

            constructor(name){
                this._name = name;
            }


            get name() {
                return this._name;
            }

            set name(name) {
                this._name = name;
            }
        }

        let employee1 = new Employee();
        employee1.name = "scott";

        expect(employee1.name).toBe('scott');

        let employee2 = new Employee("Alex");
        expect(employee2.name).toBe('Alex');

        // Need strict Encapsulations
        expect(employee2._name).toBe('Alex');
    });

});
