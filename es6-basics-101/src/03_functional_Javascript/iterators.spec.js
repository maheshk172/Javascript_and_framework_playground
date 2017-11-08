"use strict";
describe("Functional Programming concepts - Iterator", function () {
    it("can work with iterators at low level", function () {
        let sum = 0;
        let numbers = [1, 2, 3, 4];

        // Simple Plain old for loop
        sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }
        expect(sum).toBe(10);

        // for in loop - little Advanced
        sum = 0;
        for (let i in numbers) {
            sum += numbers[i];
        }
        expect(sum).toBe(10);

        //using iterators, does not work even with Node8.9.0
        sum = 0;

       // let iterator = numbers.values();
        /*let iterator = numbers[Symbol.iterator]();
        let next = iterator.next();
        while (!next.data) {
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);*/

       //USING FOR OF
        sum =0;
        for(let num of numbers) {
            sum += num;
        }
        expect(sum).toBe(10);




    });
});