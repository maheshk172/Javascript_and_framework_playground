"use strict";

describe("Iterables", function () {
    it("can create your own iterable by implementing Symbol.iterator", function () {

        class Company {
            constructor() {
                this.employees = [];
            }

            addEmplooyee(...names) {
                this.employees = this.employees.concat(names);
            }

            [Symbol.iterator]() {
                return new ArrayIterator(this.employees);
            }

        }

        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index = 0;
            }

            next() {

                var result = {value: undefined, done: true};

                if (this.index < this.array.length) {
                    result.value = this.array[this.index];
                    result.done = false;
                    this.index += 1;
                } else {
                    result.done = true;
                    result.value = undefined;
                }

                return result;
            }
        }


        let company = new Company();
        company.addEmplooyee("Tim", "Tam", "Jim", "Jam");

        let count = 0;
        for (let employee of company) {
            count += 1;
        }

        expect(count).toBe(4);


    });
});