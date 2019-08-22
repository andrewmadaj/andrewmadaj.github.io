// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // create if statement 
    // create conditional statement input value into Array.isArray() function
    // return true
    // create else statement
    // return false
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // create if statement that evalutes if array, returns false
    // create else if statement that evalutes if null, returns false
    // create else if statement that evalutes if Date, returns false
    // create else if statement that evalutes if object, returns true
    // else return false, because value is not ANY type of object. 
    if (Array.isArray(value)) {
        return false;
    } else if (value === null) {
        return false;
    } else if (value instanceof Date) {
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // create if statement that evalutes if array, returns true
    // create else if statement that evalutes if null, returns false
    // create else if statement that evalutes if Date, returns false
    // create else if statement that evalutes if object, returns true
    // else return false, because value is not ANY type of object. 
    if (Array.isArray(value)) {
        return true;
    } else if (value === null) {
        return false;
    } else if (value instanceof Date) {
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // create if statement that evalutes if array, returns "array"
    // create else if statement that evalutes if null, returns "null"
    // create else if statement that evalutes if Date, returns "date"
    // create else if statement that evalutes if object, returns "object"
    // else perform typeof function on value. function will return a string of
    // value's type
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date) {
        return "date";
    } else if (typeof value === 'object') {
        return "object";
    } else {
        return typeof value;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
