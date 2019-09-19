////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes two numbers
// use conditional if else to determine if first or second number is lower, return
// the lower number
function min(num1, num2) {
if (num1 < num2) {
    return num1;
  } else {
    return num2;
  } 

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// write a recursive function named isEven
// create one parameter called "number"
// create if statement
  // create a condition statement that says if number is less than 0
  // create code bode
  // write "return false"
// create else if statement
  // create conditional statement that says if number is strictly equal to 0
  // create code body
  // return true
// create else if statement 
  // create conditional statement that says if number is strictly equal to 1
  // create code body
  // return false
// call isEven but make the parameter (number -= 2)
function isEven(number) {

if (number < 0) {
  return false;
} else if (number === 0) {
  return true;
} else if (number === 1) {
  return false;
}

return isEven(number -= 2);



}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes a string and a character
// create count holder variable
// loop through string and for each index, evaluate whether current character 
// matches input character. If a match is found, add 1 to count
// return count
function countChars(str, char) {
  count = 0;
for (var i = 0; i <= str.length - 1; i++) {
  if (str[i] === char) {
    count++;
}
}
return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes a string
// create count holder variable
// loop through string and for each index, evaluate whether current character 
// matches a capital B character. If a match is found, add 1 to count
// return count
var count;
function countBs(str) {
  count = 0;
for (var i = 0; i <= str.length - 1; i++) {
  if (str[i] === "B") {
    count++;
}
}
return count;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
