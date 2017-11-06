describe("Tesing Const here", function () {
    it("Testing Const which is readonly here", function () {

        const MAX_SIZE = 10;
        //Can not assign value to a constant
        //MAX_SIZE = 12;
        expect(MAX_SIZE).toBe(10);

    });

    it("can shadow outer scope", function () {

        var doWork = function () {
            var x = 12;
            var x = 10;

            return x;
        };
        expect(doWork()).toBe(10);


        /*var doworkWithConst = function () {
            const x = 12;

            //Uncaught SyntaxError: Identifier 'x' has already been declared, Not Allowed
            let x = 12;

            //Uncaught SyntaxError: Identifier 'x' has already been declared, Not Allowed
            var x = 10;

            return x;
        };*/

        const x = 12;
        var doWorkShadow = function () {
            var x = 10;

            return x;
        };

        expect(doWorkShadow()).toBe(10);
        expect(x).toBe(12);

    });
});