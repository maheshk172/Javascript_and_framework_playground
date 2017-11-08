"use strict";
describe("Tesing Default parameters in functions", function () {

    it("basic default parameters should be set", () => {
        var dowork = function(name="scott") {
            return name;
        }

        expect(dowork()).toBe("scott");
    });

    it("Default Parameters should work with destructuring", () => {
        var dowork = function(a=2, b=3, c=4) {
            return [a, b, c];
        };

        let [a, b, c] = dowork(5, undefined);
        expect(a).toBe(5);
        expect(b).toBe(3);
        expect(c).toBe(4);

        let [x, y, z] = dowork();
        expect(x).toBe(2);
        expect(y).toBe(3);
        expect(z).toBe(4);
    });
});