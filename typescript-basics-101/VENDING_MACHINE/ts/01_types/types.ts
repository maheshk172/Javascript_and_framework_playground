let num1: Number = Number(100.01);
let num2: number = 100;

//console.log(num1 === num2);

let str1: string = 'Test String';
let str2: String = String('Test String');

//console.log(str1, str2);
//console.log(str1 == str2);

enum COLOR {RED=1, GREEN=2, BLUE=3}
let c: COLOR = 3;

//console.log(c);

let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
console.log(strLength1);
let strLength2: number = (someValue as String).length;
console.log(strLength2);
