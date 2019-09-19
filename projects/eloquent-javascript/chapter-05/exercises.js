// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function flatten(arr) {
    // takes an array of arrays
    // uses concat method
    // uses reduce method
    // returns array
    // format the concat method to the parameters of the reduce method in order 
    // to perform reduce(concat) on the input array.
    return arr.reduce((accumulator, currentValue) => { return accumulator.concat(currentValue)});
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
// takes four parameters: a value, a test function, an update function, and a body
// function
// has an internal for loop
// each time THE FOR LOOP (not the function, cause the function is NOT recursive)
// iterates (*not necessarily in order):
  // First of all, the for loop starts at value. book doesnt make that clear.
  // 1) runs the test function on current value, and IF returns false, find a way to 
  // stop the function
  // 2) calls the body function with current value
  // 3) calls the update function with current value
// that's all. it doesnt say to return anything specific. So, just "return;" the
// function.
 
  for (let i = value; i !== false; i) {
    var stop = null
    body(i);
    i = update(i)
    if (!test(i)) {
      stop = 1;
    }
    if (stop === 1) {
      i = false
    }
  }
  return;

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// takes an array and a test function
// some vs every
// some evaluates an array. flags if there are ANY true elements in array. evaluates flag. if flag changes, return true.
// every evaluates an array. flags if there are ANY false elements in array. evaluates flag. if flag changes, return false.


// function every
// takes an two params: array, func
// create a flag. flag equals 0
// loop through array
  // if (func(current element)) {
  //  do nothing 
  // } else {
  //  change the flag
  // }
// evaluate flag. if (flag === null) {
  // return true   
  // else return false
// close function
function every(array, func) {

  var flag = 0
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      console.log(i);
    } else {
      flag = 1;
    }
  }
  if (flag === 0) {
    return true;
  } else {
    return false;
  }
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}


function countBy(items, groupName) {
  let counts = [];
  for (let i of items) { 
    let name = groupName(i); 
    let known = counts.findIndex(c => c.name == name); 
    if (known == -1) {
      counts.push({name, count: 1}); 
    } else {
      counts[known].count++; 
    } 
  }
  return counts; 
}

function dominantDirection(text) {
// use countBy to iterate through each character of the text and count ltr, rtl, or ttb characters
// iterate over i and store object in script variable or return false if no object containing input
// return script direction. will be output by countBy

let counted = countBy(text, function(x) { 
  let script = characterScript(x.codePointAt(0)); 
    return  script ? script.direction : "none";
    })

// use filter function to remove all objects with a name property not equal to none.
.filter(function({name}) {return name != "none"}); 
  
// test for false or null outputs from character count
if (counted.length == 0) { 
  return "ltr"; 
}

// return the name of the array in counted which contains the highest count property
return counted.reduce((a, b) => a.count > b.count ? a : b).name; 
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
