/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// 4. Var, Let, and Const //
/**
 * ES6 introduced two other ways to "hold things in memory": let and const.
 * 
 * The differences between var, let, and const are defined by five properties:
 * 1) reassignment
 * 2) hoisted
 * 3) scoped to functions
 * 4) scoped to if blocks
 * 5) scoped to loop blocks
 * 
 * 
 * // Reassignment //
 * Const cannot be reassigned. Var and let can be reassigned.
 * 
 * 
 * // Hoisting //
 * Before a program is executed, var is "hoisted" to the top of the program. Var
 * will not throw a reference Error if referenced before it is declared. Instead
 * it will return "undefined", meaning the declaration but not the intialization
 * has been "hosited." Const and let do not have this feature.
 * 
 * Variable declarations and FUNCTION declarations are hoisted.
 * 
 * // Scope //
 * Scope refers to the space inside code in which a variable can be used after
 * it is declared.
 * 
 * Var:
 * scoped inside: functions. 
 * 
 * Const and let:
 * scoped inside: any code block, be it functions, loops, and if blocks.
 * 
 * 
 * // Const quirks //
 * Const must be initialized immediately. Also, some formatting conventions call
 * for const names to be all UPPERCASE.
 * 
 */
 
 // 5. Things to keep in mind //
 /**
  * // Reserved keyword //
  * Javascript has some built-key words that cannot be used as names of 
  * variables.
  * 
  * Ex. Function, location, window, alert, inNaN
  * 
  * Don't try to name your variables with these.
  * 
  * 
  * // Naming with intention //
  * Variables are great for referencing. In order to make referencing work as 
  * well as possible for both you and other programmers, always choose a name 
  * for your variable that reflects its value. This will save confusion and 
  * make your code easier to understand.
  * 
  * Ex.
  * var a = 96  => dont do this.
  * var highTemp = 96  => do this.
  * 
  */
  
  