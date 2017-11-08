let numbers = [1, 2, 3, 4];
let sum = 0;

//let iterator = numbers.values();
//let next = iterator.next();
/*while (!next.data) {
    sum += next.value;
    next = iterator.next();
}*/

for(let num of numbers) {
    sum += num;
}

console.log(sum);