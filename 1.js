// function vertMirror(strng) {
//   let r = '';
// let rr = ''
// console.log("strng:",strng);

// for (let j = strng.length - 1; j >= 0; j--) {
//     r += strng[j]
//     console.log("r:",r);
// }
// rr = r
// console.log("rr:",rr);
// }
// vertMirror("abcd\nefgh\nijkl\nmnop")

// function horMirror(strng) {
//   // Your code
// }

// function oper(fct, s) {
//   // Your code
// }

let quote = "He said,~I learned from freeCodeCamp!";
let a = quote.split("~")
let t = a[0]
let tt = a[1]
console.log(t)

var input = 'john smith~123 Street~Apt 4~New York~NY~12345';

var fields = input.split('~');

var name = fields[0];
var street = fields[1];
console.log(name)
