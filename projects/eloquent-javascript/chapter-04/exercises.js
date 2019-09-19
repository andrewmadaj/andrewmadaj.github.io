////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes a start number, an end number, and an incrementor that is default set to 1
// create a holder array
// if start is equal to end, return the empty array
// else if step is negative, return the empty array. will not count down
// else, all else is correct: create a loop that adds each iteration value to the
  // holder array, incrementing by "step"
// return the array
function range(start, end, step = 1) {
  var arr = []
  if (start === end) {
    return arr;
  } else if (step <= 0) {
    return arr;
  } else {
    for (var start; start <= end; start += step) {
      arr.push(start);
  }
  }
  return arr
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes an array, returns a sumation of all elements
// create sum holder variable
// if array is empty, return 0
// else loop through the array pushing a value to the sum holder variable that is
  // equal to sum plus current element 
// return sum
function sum(array) {
  var sum = 0;
  if (array.length === 0) {
    return 0;
  } else { 
    for (var i = 0; i <= array.length - 1; i++) {
      sum = sum + array[i];
    }
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a function named reverseArray
// create one parameter called "array"
// create a variable and assign the value of empty array called newArray
// create for loop that runs through the array argument
  // create code body
    // within code body newArray.unshift(array[i]);
// return newArray
function reverseArray(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes an array
// uses reverse function to reverse array in place
// return array
function reverseArrayInPlace(array) {
  array = array.reverse();
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a function named arrayToList that takes one param "array"
// create a variable to hold our object as we create it
// create a for loop to run through the array input
  // create a starting condition of the last index in "array"
  // create a stopping condition of the first index
  // decrement
    // redefine list as an object containing the following key value pairs
    // value = the index of array that we are currently iterating
    // rest = list 
  // return list after for loop run. it now contains the nested objects

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list; 
}




////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
// create a param named array equal to an empty array
  
  
  console.log("List: ", list, "Array: ", array)
  // push each value of "value" onto array param
  // when key "list" is found equal to "null", recursion
    array.push(list.value);
    if (list.rest === null) { // <=============== this is a base case
      return array;           // return array when base case is met
    }
      return listToArray(list.rest, array); // <================= this is a recursive case
  //// listToArray(list.rest, array)
}



////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a function named prepend 
  // takes two params
  // create parameter "element"
  // create parameter "list"

// create variable newList and assign the value of an empty object

// add element to newList (newList.value = element)
// add key "rest" to newList and set equal to list like so:
// newList.rest = list

// return newList
function prepend(element, list) {
var newList = {};
newList.value = element;
newList.rest = list;
return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
// takes two parameters: list, number
// returns the element at the given position (number is a zero index)
// or returns undefined if no such element exists
// create if statement to see if value of "value" key minus one (because number is zero indexed) in current object equals number
 // return element from that position. So, list.value
if (list.value - 1 === number) {
  return list.value; // returns element at given position
// if the recursive function cycles through the entire list and doesnt match a value - 1 to number, return undefined. marker is "null"
// create else if "base case"
} else if (list.rest === null) {
  return undefined;
}
// recursive case. don't forget return
return nth(list.rest, number); 

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
// takes two values
// create if statement to test if either value is an object and is NOT null
  // create code body: test properties and values of objects a and b 
  if ((typeof a === "object" && a !== null) 
  && (typeof b === "object" && b !== null)) {
// turn each into a string and compare strings
    var aString = JSON.stringify(a);
    var bString = JSON.stringify(b);
    if (aString === bString) {
      return true;
      } else {
        return false;
        }// true

  } 
// create else statement to address all cases that are not objects
  // return true or false by using the comparison operator on non-object values  
  else {
    return a === b;
  }
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};


