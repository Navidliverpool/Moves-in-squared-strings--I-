function vertMirror(strng) {
  let input = strng.split("\n");
  console.log(input[0]);
  let rr = [];
  let rrr = "";
  for (let s in input) {
    let r = "";
    for (let j = input[s].length - 1; j >= 0; j--) {
      r += input[s][j];
    }
    rr.push(r);
  }
  rrr = rr[0];
  for (let i = 1; i < rr.length; i++) {
    rrr += "\n" + rr[i];
  }
  return rrr;
}
// console.log(vertMirror("abcd\nefgh\nijkl\nmnop"));

function horMirror(strng) {
  // Your code
}
console.log()
function oper(fct, s) {
  // Your code
}
