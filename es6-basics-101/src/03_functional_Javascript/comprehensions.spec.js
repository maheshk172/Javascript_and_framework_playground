"use strict";
describe("comprehensions", function () {

    /*it("Building Arrays with Comprehensions", function () {
        var numbers = [for (n of [1, 2, 3]) n * n];
        expect(numbers).toEqual([1, 4, 9]);

        //This is similiar to following block
        var numbers = [];
        for (let n of [1, 2, 3]) {
            numbers.push(n * n);
        }
    });*/

    it("Building generators with Comprehensions", function () {
        var numbers = (for (n of [1, 2, 3]) n * n);
        expect(Array.from(numbers)).toEqual([1, 4, 9]);

    });

});