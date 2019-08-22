// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function with parameter "value"
    //  tests whether value > base
    return function (value) {
        return value > base;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function with parameter "value"
    //  tests whether value < base 
    return function (value) {
        return value < base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return a function with param "string"
    // code block returns true if string[0] === startsWith
    // code block returns false else
    
    return function (string) {
        if (string[0] === startsWith.toLowerCase()) {
                return true;
            } else if (string[0] === startsWith.toUpperCase()) {
                return true;
            } else {
                return false;
            }
    }
    
        

    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return a function
     // function param is "string"
      // tests if string.length - 1 === endsWith.toLowerCase()
       // returns true
      // tests if string.length - 1 === endsWith.toUpperCase()
       // returns true
      // else
       // return false
    return function(string) {
        if (string[string.length - 1] === endsWith.toLowerCase()) {
            return true;
        } else if (string[string.length - 1] === endsWith.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create binding array
    // create loop starting at index 0, running as long as index is less than or
    // equal to array length minus one, incrementing one at a time.
     // make a code body
      // pass each string output by the loop to the modify Function with () and 
      // push onto your binding array
    // return the binding array
    var collectionArray = [];
    for (var i = 0; i <= strings.length - 1; i++) {
        collectionArray.push(modify(strings[i]));
    }
    return collectionArray;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // create a binding 
    // create loop 
     // starting condition is = 0, run until strings.length - 1, increment by one.
      // create if statement
       // if test(string[i]) == false, modify the binding with ++
    // if binding has same value as when it was declared, return true.
     // else return false, because for loop modified the bindind indicating that
     // a string was evaluated to false by the test function.
    var binding = 0
    for (var i = 0; i <= strings.length - 1; i++) {
        if (test(strings[i]) == false) {
            binding++;
        } 
    }
    if (binding == 0) {
        return true;
    } else {
        return false;
    }    
        
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}