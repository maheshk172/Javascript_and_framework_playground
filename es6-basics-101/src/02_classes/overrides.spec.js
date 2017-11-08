"use strict";
describe("Tesing Override flows with classes here", function () {
    it("Should be able to create overideen methods", function () {

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

            doWork() {
                return "FREE";

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
                return "PAID";
            }
        }

        let p1 = new Person();
        p1.name = "scott";
        expect(p1.name).toBe('scott');
        expect(p1.doWork()).toBe("FREE");

        let e1 = new Employee();
        e1.name = "Alex";
        expect(e1.name).toBe('Alex');
        expect(e1.doWork()).toBe("PAID");

        let e2 = new Employee("Tex", "Accounts Manager");
        expect(e2.name).toBe('Tex');
        expect(e2.doWork()).toBe("PAID");
        expect(e2.title).toBe('Accounts Manager');


        var makeEveryoneWork = function (...persons) {
            var results = [];

           /* persons.forEach(person => {

                //if(person.doWork) {
                if (person instanceof Employee) {
                    results.push(person.doWork());
                }
            });*/

           for(var i=0; i <persons.length; i++) {
               if (persons[i] instanceof Person) {
                   results.push(persons[i].doWork());
               }
           }

            return results;
        };

        expect(makeEveryoneWork(p1, e1, e2)).toEqual(["FREE", "PAID", "PAID"]);

    });

});
