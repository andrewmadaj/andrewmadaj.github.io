
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes number "height" representing the number of lines to print
// create for loop 
  // stops when it has iterated same number of times as "height"
    // console log a value each iteration that has one extra "#" each successive iteration
function triangles(height) {
  var count = ""
for (var i = 0; i < height; i++) {
  console.log(count += "#");
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes a start and end number
// loop through the range and log fizzbuzz for all numbers divisible by 5 & 3, or 
  // fizz for all divisible by 3 but not 5, and buzz for all divisible by 5 but not
  // 3. 
    // log number for all other cases
function fizzBuzz(start, end) { [];
  for (var start; start <= end; start++) {
        if (start % 3 == 0 && start % 5 == 0) {
            console.log("fizzbuzz");
        } else if (start % 3 == 0) {
            console.log("fizz");
        } else if (start % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(start);
        }
    }
  
}
    // YOUR CODE GOES ABOVE HERE //

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes a number that represents both a height and width dimension for a chessboard
// create holder variable to represent board
// loop to create each line
  // within each line print "#" or " " depending on a conditional with is even/odd 
  // based and dependent on both the inner and outer for loop
    // terminate each outer loop with a newline character
// console log the board variable
function drawChessboard(size) {
var board = "";

for (var height = 0; height < size; height++) {   
  for (var width = 0; width < size; width++) {
    if ((width + height) % 2 === 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
