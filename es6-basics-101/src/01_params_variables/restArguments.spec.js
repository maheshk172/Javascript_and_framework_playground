"use strict";
describe("Tesing Rest parameters in functions", function () {

    it("basic Rest parameters should collect all provided params as an Array", () => {
        var dowork = function (name = "scott", ...numbers) {
            let result = 0;

            numbers.forEach(number => result += number);

            return result;
        };
        let sum = dowork("sum", 1, 2, 3);
        expect(sum).toBe(6);
    });

    it("Whwn I send No params to Rest parameters, it should populate empty array", () => {
        var dowork = function (name = "scott", ...numbers) {
            let result = 0;

            numbers.forEach(number => result += number);

            return result;
        };
        let sum = dowork("sum");
        expect(sum).toBe(0);
    });

    it("When we use ... outside function definition, it works as Spread", () => {
        var dowork = function (x, y, z) {
            return x + y + z;
        };

        let sum = dowork(...[1, 2, 3]);
        expect(sum).toBe(6);
    });

    it("can build arrays", () => {
        var a = [4, 5, 6];
        var b = [7, 8, 9];
        var c = [1, 2, 3, ...a, ...b];
        expect(c).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });


});