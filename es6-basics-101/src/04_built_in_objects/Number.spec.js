//octals not allowed in strict mode
/*"use strict";*/
describe("Revisiting Numbers", function () {

    it("can create hexDecimals and octals", function () {

        var a = 10;
        var hexd = 0X10;
        // 071 Octal = 57 Decimal
        var octal = 071;

        expect(octal).toBe(57);
        expect(octal).toBe(071);
        //using ParseInt also dont convert Octal to decimal
        expect(parseInt(octal)).toBe(57);
    });

    it("hex Literals are now supported", function () {

        //prefix with 0o -> octal
        // 071 Octal = 57 Decimal
        var octal = 0o71;

        expect(octal).toBe(57);
        expect(octal).toBe(071);
        //using ParseInt also dont convert Octal to decimal
        expect(parseInt(octal)).toBe(57);
    });

    it("Binary are now supported", function () {
        //prefix with 0b -> binary
        var binary = 0b1101;
        expect(binary).toBe(13);
    });

    it("parse Octals and binary with Number function", function () {
        //prefix with 0b -> binary
        var binary = Number("0b1101");
        expect(binary).toBe(13);

        var octal = Number("0o71");
        expect(octal).toBe(57);
    });

    it("Should expose parseInt and parseFloat", function () {
        expect(Number.parseInt("3")).toBe(3);
        expect(Number.parseFloat("3.51112233")).toBe(3.51112233);
    });

    it("should not convert strings when calling Number.isFinite vs global", function () {
        "use strict";
        //Global isFinite converts it to Number, number.isFinite does not  convert

        expect(isFinite("1")).toBe(true);
        expect(Number.isFinite("1")).toBe(false);
    });

    it("shold not convert strings when calling Number.isNaN vs Global", function () {
        "use strict";
        expect(isNaN("NaN")).toBe(true);
        expect(Number.isNaN("NaN")).toBe(false);
    });

    it("should detect integers", function () {
        "use strict";
        expect(Number.isInteger(1)).toBe(true);
        expect(Number.isInteger(1.0)).toBe(true);
        expect(Number.isInteger(1.4)).toBe(false);
    });

    it("should expose max and min safe integer constants", function () {
        "use strict";

        var poweredNumQue = Math.pow(2, 53);
        var poweredNumAns = Math.pow(2, 53) + 1;
        //console.log(poweredNumQue);
        //console.log(poweredNumAns);

        //unexpected but tests still pass
        expect(Math.pow(2, 53)).toBe(Math.pow(2, 53) + 1);
        expect(Math.pow(2, 53) + 3).toBe(Math.pow(2, 53) + 5);

        //console.log(Number.MAX_SAFE_INTEGER);
        //console.log(Number.MIN_SAFE_INTEGER);

        expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2, 53) - 1);
        expect(Number.MIN_SAFE_INTEGER).toBe(Math.pow(2, 53) * -1 + 1);

    });

    it("should indicate safe integers wuth isSafeInteger", function () {
        "use strict";

        //safe integer max value - 9007199254740991
        expect(Number.isSafeInteger(9007199254740991)).toBe(true);
        expect(Number.isSafeInteger(9007199254740992)).toBe(false);
    });


});