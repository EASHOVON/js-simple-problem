var first = 7;
var second = 9;
console.log(first, second);

var temp = first;
first = second;
second = temp;

console.log(first, second);


[first, second] = [second, first]
console.log(first, second);