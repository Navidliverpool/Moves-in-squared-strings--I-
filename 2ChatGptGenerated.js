// ChatGPT generated function.
function vertMirror(strng) {
  let input = strng.split("\n");
  console.log(input[0]);
  let r = "";
  for (let s in input) {
    console.log("s:", typeof input[s]);
    for (let j = input[s].length - 1; j >= 0; j--) {
      r += input[s][j];
    }
    r += "\n";
  }
  console.log(r);
  return r;
}
function horMirror(strng) {
  const input = strng.split("\n").filter((s) => s !== "");
  let r = "";
  for (let i = input.length - 1; i >= 0; i--) {
    r += input[i] + "\n";
  }
  return r;
}

console.log(horMirror("abcd\nefgh\nijkl\nmnop"));