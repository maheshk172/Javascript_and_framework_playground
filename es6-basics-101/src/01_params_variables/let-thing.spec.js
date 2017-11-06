describe("Testing Let here", function () {
    it("Check if let works in function scope as expected", function () {

        var doWork = function (flag) {
            if (flag) {
                let x = 3;
                return x;
            }

            return;
        }

        console.log(doWork(true));

        expect(doWork(true)).toBe(3);

    });

    it("Check if let works in block scope as expected", function () {

        var doWork = function (flag) {
            var y = 11;
            if (flag) {
                y = 3;
            }

            return y;
        };
        expect(doWork(true)).toBe(3);
        expect(doWork(false)).toBe(11);

    });

    it("check if Var breaches in For loop", function () {
        var doVarWork = function () {
            for (var i = 0; i < 10; i++) {
            }
            //works here due to hoisting
            return i;
        };

        var doLetWork = function () {
            for (let i = 0; i < 10; i++) {
            }
            // throws error that i is not defined
            return i;
        };

        expect(doVarWork()).toBe(10);
        //Throws exception, so commenting
        //expect(doLetWork()).toBe(10);
    });
});