var num1 = Number(100.01);
var num2 = 100;
//console.log(num1 === num2);
var str1 = 'Test String';
var str2 = String('Test String');
//console.log(str1, str2);
//console.log(str1 == str2);
var COLOR;
(function (COLOR) {
    COLOR[COLOR["RED"] = 1] = "RED";
    COLOR[COLOR["GREEN"] = 2] = "GREEN";
    COLOR[COLOR["BLUE"] = 3] = "BLUE";
})(COLOR || (COLOR = {}));
var c = 3;
//console.log(c);
var someValue = "this is a string";
var strLength1 = someValue.length;
console.log(strLength1);
var strLength2 = someValue.length;
console.log(strLength2);
//# sourceMappingURL=types.js.map