// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // takes a value
    // returns the datatype of value
    // create an if statement to test the six values that are acurately represented by typeof
    if (typeof value === "string") {
        return "string";
    } 
    if (typeof value === "number") {
        return "number"
    }
    if (typeof value === "undefined") {
        return "undefined";
    }
    if (typeof value === "boolean") {
        return "boolean";
    }
    if (typeof value === "function") {
        return "function";
    }
    // for all other types (which must be objects), test to see if they are typof
    // === objects, then subtest for null and array. If they're neither of those, they must be object objects
    if (typeof value === "object") {
        if (Array.isArray(value)) {
            return "array"
        } 
        if (value === null) {
            return "null";
        }
        if (typeof value === "object"){
            return "object";
        }
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
// takes an array and a number
// if (!Array.isArray(array) || number < 0) return [];
// if (number > array.length) return array
// if (!number) return array[0]
// create variable result equal to empty array
// loop through array
    // array should execute until i === number - 1
    // push each element of array to result until loop ends
// return result

if (!Array.isArray(array) || number < 0) {
    return [];
} else if (number > array.length) {
    return array;
} else if (!number) {
    return array[0];
}
var result = [];
for (var i = 0; i < number; i++) {
    result.push(array[i]);
}
return result;


}    



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// takes an array
// takes a number
// if array is not an array, return []
// if number is not a number, return last element in the array
// if none of these criteria is met, return the last <number> of elements in the array


_.last = function(array, number) {
    if (!Array.isArray(array) || number < 0) {
        
        return [];
    } 
    if (number === undefined || isNaN(number) === "NaN") {
        return array[array.length - 1];
    } 
    if (Array.isArray(array) || number !== undefined || isNaN(number) !== "NaN") {
        return array.slice(-number);
    }
}      

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
// takes an array
// takes a value
// loop through the array and return the INDEX of the first instance where that
// value is the same as "value" param
// return -1 if you looped through the array and never found an instance of "value"
// do not use indexOf function
_.indexOf = function(array, number) {
   
    var index = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            index = i;
            i = array.length;
        }
    }
    if (index === null) {
        return -1;
    } else {
        return index;
    }
    
}  

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function(array, value) {
    // takes two param: an array and a value
    // return true if the array contains value
    // return false if it's not found
    
    // condition ? value if true : value if false

    return array.includes(value) ? true : false;
        
}  



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
   // takes two args: a collection and a function
// if Array.isArray(collection) 
// { for loop that calls a function for each element with given list of arguments }
// if collection is an object
// { for loop that calls a function for each key with list of arguments
    console.log(collection);
    console.log(func);
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    }
    
    if (typeof collection === "object") {
        if (Array.isArray(collection)) {
            return;
        } 
        if (collection === null) {
            return
        }
        if (typeof collection === "object"){
            for (var key in collection) {
            func(collection[key], key, collection);
            }
        }
    }
        
       
    
}
    

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
// takes an array
// return a new array of elements from the given array with duplicates removed
// use the indexOf function above

// make an empty array variable
// array.indexOf(i)
var newArray = [];
for (var i = 0; i < array.length; i++) {
    if (_.indexOf(newArray, array[i]) === -1) {
        newArray.push(array[i]);
    }
}
return newArray;
}



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func) {
// takes two arguments: an array and a function
// call function for each element inside array passing the arguments (the current element, current index, parameter array)
// return a new array of elements for which calling function returned true

// create newArray
// for loop
    // each iteration call the function with the parameters (the current element, current index, parameter array)
    // make if statement inside look, use the above line as a condition, true = newArray.push(array[i])
// return newArray

var newArray = [];
for (var i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
        newArray.push(array[i]);
    }
}
return newArray;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func) {
// takes an array
// takes a function
// return result of running filter on array with the following callback function
    // function(element) { if (!func(element, index, array)) {return element}}
return array.filter(function(element, i, array) {if (!func(element, i, array)) {return element}} )

}
    
    





/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    // takes an array
    // takes a function
    // create an array for true values
    // create an array for false values
    // loop through the array
        // if we call the function on current element in array with parameters: current element, index, array
        // and returns true, pass that element to a true array
        // else pass that element to a false array
    
        
    // push true and false arrays into third array
    // return third array
    
    var trueArray = [];
    var falseArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            trueArray.push(array[i]);
        } else {
            falseArray.push(array[i]);
            
        }
    }
    var thirdArray = [];
    
    thirdArray.push(trueArray);
    thirdArray.push(falseArray);
    
    return thirdArray;
    
    
    
    
    
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
    


// takes a collection and a function
// make new var newArray

// if array 
        // loop through 
        // run func with: the current element, current index, collection
        // save the value of each function call in a new array
// else object
    // loop through
    // run func with: the value of current key, the key , collection
    // save the value of each function call in a new array
// close loop
// return newArray
var newArray = []
if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
        newArray.push(func(collection[i], i, collection));
    }
} else {
    for (var key in collection) {
        newArray.push(func(collection[key], key, collection))
    }
}
return newArray;
}





/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
// takes an array of objects
// returns a property
// return an array continaing the value of proeprty for every element in array
// must use map
// perfrom map on array
// pass map the function(element) return element[prop]

return array.map(element => element[prop]);


}




/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
// takes two param: collection and a function
    
    // make flag
    let flag = null
    
    // if func is undefined
        // loop through collection
         // if any element is !true, flag
    
    // if collection is an array
        // loop
        // use params current element, index, collection
        // if resolve !true, flag 
    // if collection is an object
        // loop
        // use current value, current key, collection
        // if resolves !true: flag
    // if no function provided, loop through collection and if each element's value is truthy, return true.  else return             

    // if func is undefined
        // loop through collection
    
    // evaluate flag
    
            
    if (func === undefined) {
        if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (!collection[i]) {
                flag = false;
            } 
        }
    } else {
        for (var key in collection) {
            if (!collection[key]) {
                flag = false;
            }
        }
    }
    } else {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (!func(collection[i], i, collection)) {
                flag = false;
            }
        }
    } else {
        for (var key in collection) {
            if (!func(collection[key], key, collection)) {
                flag = false;
            }
        }
    }
    }
    if (flag === null) {
        return true;
    } else {
        return false;
    }
}




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
// call a function for every element of the collection with params: 
    // this is simply logical inversive of every function.
    // adjust .every accordingly to flag if false for all elements or not
    var flag = null;
    if (func === undefined) {
        if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i]) {
                flag = true;
            } 
        }
    } else {
        for (var key in collection) {
            if (collection[key]) {
                flag = true;
            }
        }
    }
    } else {
    if (Array.isArray(collection)) {
        if (_.reject(collection, func).length === collection.length) {
            return false;
        } else {
            return true;
        }
    } else {
        for (var key in collection) {
            if (collection[key]) {
                flag = true;
            }
        }
    }
    }
    if (flag === true) {
        return true;
    } else {
        return false;
    }
}




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
// takes an array
// takes a function
// takes a seed
// create a branch for if (seed)
    // set total = seed
    // loop through array
        // total = func(seed, array[i])
    // return total
if (seed || seed === 0) {
    for (var i = 0; i < array.length; i++) {
        seed = func(seed, array[i], i);
    }
    return seed;
}
// create a branch for if (!seed)
    // set total = null
    // loop through array
        // total = func(array[i], array[i + 1])
    // return total
if (!seed) {
    let seed = array[0];
    for (var i = 1; i < array.length; i++) {
        seed = func(seed, array[i], i)
    }
    return seed;
}
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/



_.extend = function(object1, ...args){
// takes an object
// takes unlimited subsequent objects
// loop through args
    // create new properties on object1 of each key in args
// return object1


for (var i = 0; i < args.length; i++) { // args is an array. we must loop through like an array
    for (var key in args[i]) { // this args is full of objects. So we must loop through current element with object loop
        object1[key] = args[i][key]; // understand
    }
}
return object1;


}  


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}


