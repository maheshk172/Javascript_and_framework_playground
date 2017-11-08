"use strict";
describe("Tesing Super keyword with classes here", function () {
    it("Should be able to use Super", function () {

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
            constructor(name, newTitle) {
                super(name);
                this._title = newTitle;
            }

            get title() {
                return this._title;
            }

            set title(value) {
                this._title = value;
            }

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

        let e2 = new Employee("Tex", "Accounts Manager");
        expect(e2.name).toBe('Tex');
        expect(e2.doWork()).toBe("Tex is working!");
        expect(e2.title).toBe('Accounts Manager');

    });

});
