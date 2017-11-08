"use strict";

describe("Generators -> generate Iterator", function () {
    it("Symbol.iterator Way", function () {
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

    it("Generator way - Simple Example", function () {
        // Simple example
        /*let numbers = function*() {
           yield 1;
           yield 2;
           yield 3;
           yield 4;
       };

         let sum = 0;
        let iterator = numbers();
        let next = iterator.next();

        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }

        expect(sum).toBe(10);
       */

        // Simple example
        let numbers = function* (start, end) {
            for (let i = start; i <= end; i++) {
                //console.log(i);
                yield i;
            }
        };

        let sum = 0;
        let iterator = numbers(1, 4);
        let next = iterator.next();

        while (!next.done) {
            sum += next.value;
            //console.log('next');
            next = iterator.next();
        }
        expect(sum).toBe(10);


    });

    it("generator with company code", function () {

        class Company {
            constructor() {
                this.employees = [];
            }

            addEmplooyee(...names) {
                this.employees = this.employees.concat(names);
            }

            * [Symbol.iterator]() {
                for (let e of this.employees) {
                    //console.log(e);
                    yield e;
                }
            }

        }

        let filter = function* (items, predicate) {
            for (let item of items) {
                //console.log("filer", item);
                if (predicate(item)) {
                    yield item;
                }
            }
        };

        let take = function* (items, number) {
            let count = 0;

            //done flag in iterator is set to true
            if (number < 1) return;

            for (let item of items) {
                //console.log("take", item);
                yield item;
                count += 1;

                if (count >= number) {
                    return;
                }
            }

        };


        let company = new Company();
        company.addEmplooyee("Tim", "Tam", "Jim", "Jam");

        let count = 0;
        // Simple Way
        /*for (let employee of company) {
            count += 1;
        }

        expect(count).toBe(4);*/

        //Using only one iterator 'filter' with predicates
        /*for (let employee of filter(company, e => e[0] == 'T')) {
            count += 1;
        }
        expect(count).toBe(2);
        */

        // wiring both Filter and Take iterators together
        for (let employee of take(filter(company, e => e[0] == 'T'), 1)) {
            count += 1;
        }

        expect(count).toBe(1);
    });

    it("using generator with Delta", function () {


        let range = function* (start, end) {
            let current = start;

            while (current <= end) {
                let delta = yield current;
                current += delta || 1;
            }

        };

        //This is the code which generator might produce
        let range2 = function (start, end) {
            let current = start;
            let first = true;

            return {
                //default value of delta set to 1
                next(delta = 1) {
                    let result = {
                        value: undefined,
                        done: true
                    };

                    if (!first) {
                        current += delta;
                    }

                    if (current <= end) {
                        result.value = current;
                        result.done = false;
                    }

                    first = false;
                    return result;
                }
            }
        };


        let result = [];
        let iterator = range2(1, 10);
        //let iterator = range(1, 10);
        let next = iterator.next();

        while (!next.done) {
            result.push(next.value);
            //next = iterator.next();
            //Passing delta of 2
            next = iterator.next(2);
        }

        expect(result).toEqual([1, 3, 5, 7, 9]);

    });
});