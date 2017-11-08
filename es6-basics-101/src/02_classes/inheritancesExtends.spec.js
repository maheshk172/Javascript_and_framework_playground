"use strict";
describe("Tesing inheritance with classes here", function () {
    it("Should be able to extend", function () {

        class Person {
            constructor(name) {
                this._name = name;
            }


            get name() {
                return this._name;
            }

            set name(name) {
                this._name = name;
            }
        }

        class Employee extends Person {
            doWork() {
                return `${this.name} is working!`;
            }
        }

        let p1 = new Person();
        p1.name = "scott";
        expect(p1.name).toBe('scott');

        let e1 = new Employee();
        e1.name = "Alex";
        expect(e1.name).toBe('Alex');
        expect(e1.doWork()).toBe("Alex is working!");


    });

});
