// 1. Given a string. Check whether the string is palindrome or not.

function isParodrome(str){
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i]
    }
    if(reverseStr == str){
        return true
    }else{
        return false
    }
}

//2. Given a string and symbols. Change first symbol by the second one in the string.

function replaceWithSymbol(str, replacedStr, replacingStr){
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] == replacedStr){
            newStr += replacingStr
        }else{
            newStr += str[i]
        }
    }
    return newStr
}

//3. Print the following number pattern (write a function)
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1
function numberTriangle(n) {
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
}

// 4. Print following pattern (write a function)
// *
//   *
//     *
//       *

function createLine(size, slope){
  let res = ""
  for(let i = 0; i < size; i++){
    for(let j = 0; j < i * slope; j++){
      res += " "
    }
    res += "*"
    res += "\n"
  }
  console.log(res);
}
// 5. Print following pattern (write a function)

//*        *
//  *    *
//     *
//  *    *
//*         *

function createXPattern(size) {
  if (size % 2 === 0 || size < 3) {
    console.error("Size must be an odd number greater than or equal to 3.");
    return;
  }

  for (let i = 0; i < size; i++) {
    let pattern = "";
    for (let j = 0; j < size; j++) {
      if (i === j || i === size - 1 - j) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    console.log(pattern);
  }
}

// 6. Print following pattern (write a function)
// * * * * *
// * * * * *
// * * * * *

function drawRectangle(wid, len){
  let res = ""
  for(let i = 0; i < len; i++){
    for(let j = 0; j < wid; j++){
      res += "*"
      res += " "
    }
    res += "\n"
  }
  console.log(res);
}