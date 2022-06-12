"use strict";
let s = "abcabcbb";

const maxLengthSubString = function (string) {
  let lengthArr = [];
  let tempStr = "";
  for (let char of string) {
    if (!tempStr.includes(char)) {
      tempStr += char;
    } else {
      lengthArr.push(tempStr.length);
      tempStr = "" + char;
    }
  }
  lengthArr.push(tempStr.length);

  return Math.max(...lengthArr);
};

console.log(maxLengthSubString(s));
