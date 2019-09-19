/*
* OPERATORS:
* 
* Roughly speaking, operators "act" on data.
* 
* Some familiar examples include: 
* Assignment. 
*/
   
var nameFirst = "Andrew"

/* Comparison: 
*/
  
var obj1 = {nameFirst: "Andrew"};
var obj2 = {nameFirst: "Andrew"};
console.log(obj1.nameFirst == obj2.nameFirst); // true
 
/* Arithmetic: 
*/
  
console.log(5 + 5) // => logs 10
  
// Comparison Operators //
/* Comparison operators compare to operands and evaulate to boolean true or 
* false.
*/
 
console.log(1 > 2); // false
console.log(obj2 == obj1); // false
console.log(obj1 <= obj2); // true
console.log(1 + 2 / 5 < 3); // true
 
// Strict Comparison //
/* A strict comparison is a comparison which
* takes into account both VALUE and TYPE.  
*  
* equal to: ==
* strictly equal to: ===
* strictly not equal to: !==
*/

var x = 5;
var y = 5;
var z = "5"

console.log(Boolean(x == y)); // logs true
console.log(Boolean(x === z)); // logs false. Strictly equal compares datatype.
console.log(Boolean(x !== z)); // logs true. Values are loosely equal, not strictly.


/* 
* // Unary Operators //
* Unary operators take only ONE operand and perform an operation on them.
* 
* Logical not (!) // is the logical inverse of whatever follows
* Increment (++) // increases a value by one.
* Decrement (--) // decreases a value by one.
* typeof // evaluates the datatype of value that follows.
*/

var k = 4;
var j = 6;
var i = 8;
console.log(j !== k); // logs true. The values are indeed NOT equal.
k++;
i--;
console.log(k); // logs new value for k, because k has been incremented.
console.log(i); // logs new value for i, because i has been decremented.
console.log(typeof k); // logs "number", i.e. datatype of value k
 
/* // Logical Operators //
* Logical operators are representative of logical conjunctions used in plain
* English such as AND, OR, and NOT.
* 
* (&&) AND Operator: both conditions must resolve to true.
* (||) OR Operator: at least one of a set of conditions must resolve to true.
* (!) NOT Operator: Flips the truithiness of a value.
* 
* (!!) Double Bang. This is essentially two ! signs cancelling eachother out.
*/

if (2 + 4 === 6 && 7 + 5 === 12) {
    console.log(true); // logs true because the expressions on either side are true
}
if (2 * 4 === 56 && 0 + 5 === 12 || 2 + 2 === 4) {
    console.log(true); // still logs true because, although the expressions on 
    // either side of && operator are untrue, the expression on ONE side of the
    // OR operator is true. 
}
if (!!true) {
    console.log("This is not not true, so it's true.") // <== string explains
}

/* // Arithmetic Operators //
* Relatively self-explainatory.  These operators perform arithmetic functions
* such as addition, subtraction, division, etc.
* 
* Simple examples include:
* Add (+)
* Subtract (-)
* Multiply (*)
* Divide (/)
*
* These operators are quite self explanitory and familar to anyone who has done 
* the most basic mathematics. So, I will given a very brief example of all 
* combined:
*/

console.log((((1 + 2) * 10) / 2) - 1) 

/* Above, executes each operator in sequence according to parentheses, resolving to a 
* single value: 14.
*
* A couple useful arithmetic operators that exist in JavaScript but not in 
* regular Mathematics include:
* Increment (++) :adds 1 to the attached value
* Decrement (--) :subtracts 1 from the attached value
* Modulus (%) :otherwise known as "division remainder". Outputs remainder.
*/

console.log(Boolean(5 % 2 === 0)); 

/* The above example resolves to false because the remainder of 5 / 2 is not 0. 
* Modulus is useful for efficiently evaluating whether a value is even or odd.
*/

/* // String Operators //
* Some unique ways in which strings react to certain operands:
* 
* The addition operator (+) can "concatenate" two strings like so:
*/ 
var word1 = "total";
var word2 = " meltdown";

var word3 = word1 + word2;
console.log(word3);

/* 
* And with the additon reassignment operator (+=):
*/ 
var ingredient2 = "blue";
var ingredient = "bird";
ingredient += ingredient2 // => ingredient = ingredient + ingredient2
console.log(ingredient); // logs a new value for ingredient: "bluebird"