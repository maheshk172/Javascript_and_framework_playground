"use strict";
describe("Functional Programming concepts - Arrow functions", function () {
    it("Arrow functions should work similiar to regular functions", function () {
        let add = (x, y) => x + y;
        let square = x => x * x;

        let addWithParanthesis = (x, y) => {
            var temp = x + y;
            return temp;
        };

        expect(add(4, 5)).toBe(9);
        expect(square(4)).toBe(16);
        expect(addWithParanthesis(4, 5)).toBe(9);
    });

    it("Arrow functions can be used with array methods", function () {
        var numbers = [1, 2, 3, 4];

        let result = 0;
        numbers.forEach(num => result += num);
        expect(result).toBe(10);

        var doubled = numbers.map(num => num * 2);
        expect(doubled).toEqual([2, 4, 6, 8]);

    });

    it("lexically binds to `this`", function (done) {
        this.name = "Scott";

        // In normal function call, the reference of this is not retained, Arrow function retains the reference
        /*setTimeout(function () {
            expect(this.name).toBe("Scott");
            done();
        }, 100);*/

        setTimeout(() => {
            expect(this.name).toBe("Scott");
            done();
        }, 100);
    });


});
