// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // create an empty array named emptyArray
    // create an if statement for if start is less than end
     // create a for loop 
      // create a start condition of start
      // create a running condition "start <= end"
      // create an incrementor that adds one to AND reassigns the "start" variable
       // within the code body, .push "start" onto the emptyArray
    // create an else statement
     // create a for loop 
      // create a start condition of start
      // create a running condition "start >= end"
      // create an incrementor that subtracts one from AND reassigns the "start" variable
       // within the code body, .push "start" onto the emptyArray
    // return emptyArray
      
     
    var emptyArray = [];
    if (start < end) {
    for (start; start <= end; start++) {
        emptyArray.push(start);
    }
    } else {
    for (start; start >= end; start--) {
        emptyArray.push(start);
    }
    }

    return emptyArray;
    
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}