/*
* LOOPS:
*
* 0. Loops are pre-existing features of JavaScript that allow us to execute a 
* code block as many times as we would like.  Typically, we use loops to access
* values within a collection.
* 
* 1. We'll look at three types of loops:
*   a) For loops
*   b) For-in loops
*   c) While loops
* 
*/

// 1. For Loops //
/* For loops are generally used for looping over arrays.
* 
* They consist of three statements: starting condition, stopping condition, and
* incremetor.
* 
* The format is as follows:
* for (starting condition; stopping condition; incrementor) {
*      code body
*  }
* 
* Ex.
*/
 
for (var i = 0; i <= 10; i++) {
     console.log(i); // prints to console: 0 thru 10
}
 
/* You'll need to loop both forwards and backwards over arrays often. So, 
* become familiar with the basic structure for both. See: Day Two Scratchpad
*/
  
// 2. For-in Loops //
/* For-in loops are generally used for looping over objects.
* 
* For-in loops will output each key, and by outputing each key, we may also 
* access each key's value.
* 
* We must use Array-syntax for objects i.e. brackets []
* 
* Ex.
*/
var object1 = {type:"Toyota", model:"Camry", color:"white"};
 
for (var key in object1) {
     console.log(key); // outputs all keys in object
}
 
for (var key in object1) {
     console.log(object1[key]); // outputs all values in object (via keys)
}


// 3. While Loops
/* While loops are essentially composed of the same elements as a for loop.  
* However, they are ordered differently.
* 
* First comes a starting condition outside the loop, then "while" followed by
* parentheses containgin a stopping condition followed by a code body.  Inside
* the code body is an action such as return or console.log, and finally there is
* an incremetor
* 
* Ex.
*/
 
var count = 0
while (count <= 10) {
     console.log(count);
     count++
} // this program console logs all values from 0 to 10 one at a time.
 
 
// 4. Statements vs Expressions //
/** Statements are pieces of code that perform an action. Single lines followed 
* by a semicolon are easy to identify as statements.
*/
  
var rock = "quartz";
console.log(5);
   
/* However more complex actions that don't necessarily need to be followed by a 
* semicolon and may also CONTAIN expressions, are considered statements because
* they perform an action.  Examples:
* Expressions resolve to a value.
*/
  
rock; // "quartz"
5 + 6; // 11
"string"; // "string"
// subtract(10, 6); // 4
0 === 0; // true
  
/* calling a function is different than declaring one.  Calling a function with
* arguments will be considered an expression, because it will resolve to a value.
* 
* calling a variable will is also different than declaring or assigning one.
* using the varialbe later in the code will produce its value.
* 
* Expressions can also STAND IN where values are expected.
*/ 
