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
  let input = strng.split("\n");
  let r = "";
  for (let j = input.length - 1; j >= 0; j--) {
    r += input[j];
    // ChatGPT gave me this if statment. 
    if (j > 0) {
      r += "\n"; // Add newline character if not last line
    }
  }
  return r;
}
// console.log(horMirror("abcd\nefgh\nijkl\nmnop"));

function oper(fct, s) {
    console.log("fct:", fct)
    console.log("s:", s)
  if (fct === vertMirror) {
    return vertMirror(s);
  } else {
    return horMirror(s);
  }
}

// console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))
