"use strict";
describe("Tesing Basic Classes here", function () {

    it("Can create a class Object using prototype too", function() {

        var Employee  = function() {

        };

        Employee.prototype = {
            doWork() {
                return 'correct';
            },

            getName() {
                return 'scott';
            }

        };

        let employee = new Employee();

        expect(employee.doWork()).toBe('correct');
        expect(employee.getName()).toBe('scott');
    });

    it("Can create a class Object", function() {

        class Employee {
            doWork() {
                return 'correct';
            }

            getName() {
                return 'scott';
            }
        }

        let employee = new Employee();

        expect(employee.doWork()).toBe('correct');
        expect(employee.getName()).toBe('scott');

        //using .call keyword of prototype
        expect(Employee.prototype.doWork.call(employee)).toBe('correct');

    });

});
