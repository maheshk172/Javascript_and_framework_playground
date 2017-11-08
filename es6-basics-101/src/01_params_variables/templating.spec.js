"use strict";
describe("Tesing templatesfunctions", function () {

    it("Simple template string `` should work", function() {
        var a = 1;
        var b = 2;

        var string = `${a} + ${b} = ${a+b}`;

        expect(string).toEqual('1 + 2 = 3');
    });

    it("Advanced use of template string `` should work", function() {

        let upper = function(strings, ...values) {
            console.log(strings);
            console.log(values);

            let result = "";
            for(var i=0; i<strings.length; i++) {
                result += strings[i];
                if(i < values.length) {
                    result += values[i];
                }
            }

            return result.toUpperCase();
        };

        var a = 1;
        var b = 2;

        var string = upper `${a} + ${b} is ${a+b}`;

        expect(string).toEqual('1 + 2 IS 3');
    });


});