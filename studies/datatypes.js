/**
 * DATA TYPES:
 * 
 * JavaScript has a total of ten data types, each classified as either simple 
 * or complex.
 * 
 * // Simple datatypes are stores as values and are immutable (we cannot change
 * them, we can only create new values.). They are copied by value. Examples 
 * include:Strings, numbers, booleans, NaN, undefined, and Null.
 * 
 * // Complex datatypes are collections of values of unlimited size that are 
 * copied by reference.  Examples include: Objects, Arrays, and Functions.
 * 
 * // An important difference between simple and complex datatypes exists in
 * the way in which they either "contain" or "point" to values in memory.  
 * Primitive datatypes such as numbers, booleans, or strings are contained by a
 * variable.  Complex values exist in a space within the memory, but the space 
 * is merely pointed at by a variable.
 * 
 * Simple and complex datatypes must either be contained or pointed at because: 
 * simple datatypes are from one to eight bits of memory (booleans: one. 
 * numbers: up to eight.).  Therefore variable containers have a limit of eight
 * bytes.  Complex datatypes may take up more than eight bytes of memory, 
 * therefore variables merely point at them.
 * 
 * 
 */
 
// 1. Number //
/** Numeral values such as 2, 256, 9102
  * 
  * They are primitive datatypes.
  * 
  * Can be used in all arithmetic operations.
  */
  
// 2. String //
/** Collections of characters such as "tree" or "soup1.[.}"
  * 
  * The are primitive datatypes.
  */
  
// 3. Boolean //
/** True or false.  
  * 
  * Below are two examples of booleans in use:
  */
  
  var placeHolderForTrue = true;
  if (placeHolderForTrue) { console.log("It's true!"); } // prints "It's true!"
  
  Boolean(0); // resolves to false.
  
// 4. Array //
/** Arrays are complex datatypes that form a collection of zero-indexed data. 
 * Any datatype can be places within an array.
 * 
 * Access with bracket notation only.
 * 
 * Arrays are actually objects manipulated to behave specifically as arrays. This
 * is similiar to the way in which a square is a type of rectangle with specific
 * features, but a rectangler is not a square.
 * 
 * Arrays accept many properties and methods. The following are some:
 */
 
 .push() // a method that adds a value to the final index of an array.
 .pop() // a method that pulls the final value of an array.
 .unshift() // a method that adds a value to the intial index of an array.
 .shift() // a method that pulls the initial value from an array.
 .length // a property that return the length of an array
 
// 5. Object //
/** Objects are complex datatypes that form a collection of associations or 
 * "key-value pairs" in no particular order (not zero-indexed).
 * 
 * Key are strings by default.
 * 
 * Values may be any datatype.
 * 
 * Access with bracket OR dot notation.
 */
 
  var myObject = {firstName: "Andrew", lastName: "Madaj", age: "30"}
 console.log(myObject["firstName"]) // logs "Andrew"
 myObject.firstName = "Shawn" // changes key "firstName" to "Shawn" using dot.
 
 /** Custom types of things:
 * Arrays are custom types of things, but they are built in to JavaScript. What 
 * if we need to built our own custom types of things? For example, in Amazon
 * code, there must exist code to create specific "products". These products are
 * a custom type of thing.
 * 
 * We can list features of a custom thing as seperate variables, but that's not
 * very useful... 
 */ 
 
 var name: "iphone",
 var weight: "4 oz",
 var cost: "$500",
 
 
 /** We need to make those features into a cohesive whole; a "custom type of thing"
  * 
  * We can create an object to contain all of this data:
 */
 
 var iphone = {
  var name: "iphone",
  var weight: "4 oz",
  var cost: "$500",
 }
 
 /** But still, the above example only shows one "instance" of the "iphone" 
  * product.  Surely we dont want to create a WHOLE new instance every time 
  * we have a new product. How can we address this issue? 
  * 
  * Instead of individual instances, we need to create a "blueprint" that can 
  * build all possible instances of our product or "custom type of thing".
  * 
  * We can create a blueprint that will build a product or "custom type of thing" 
  * using a:
  * 
  * Factory Function!!!
  */
  
 function makeProduct(name, weight, cost) { 
  return = {
   var name: "iphone",
   var weight: "4 oz",
   var cost: "$500",
  }
 }
 
 /** It's helpful to begin to seperate "data" from "logic" in our custom type of 
  * thing.  In other words, what is information is static? and what will need to 
  * be changed often?
  * 
  * Note: We can take this idea even further by inserting behaviors into our 
  * factory functions.  For example: a behaivor thats used when we want to apply
  * a discount to the price of our iphone example.
 
 
 // 6. Function //
/** Functions contain reusable codeblocks full of logic data.  Whereas strings
 * contain character data and numbers contain numeric data, functions encapsulate 
 * a thought process or logic.
 * 
 * See: Functions "Studies" section for more detail.
 * 
 * Here's an example of the general syntax for a named function:
 */
 
 function name(param1, param2) {
       code body;
   }
 
// 7. NaN //
/** Stands for "not a number".
 */
 
// 8. undefined //
/** Indicates a lack of intialization.
 */
 
 var dummy;
 console.log(dummy) // => prints "undefined"
 
// 9. Null //
/** Communicates a lack of value.
 * 
 * is also object
 * 
 * Loosely but not strictly equal to undefined
 */
 
 var testing = null;
 console.log(Boolean(testing)); // logs false
 
// 10. Infinity and -Infinity //
/** Infinity is global property greater than any number in JavaScript.
 * 
 * -Infinity represents the negative version of Infinity.
 * 
 * Infinity operates within JavaScript as it does within Mathematics.
 */
 
// 11. Types //
/** In order for us to work with variables, it is important to know their
 * datatype.  The typeof function is sufficient for identifying simple datatypes
 * like string, number, and boolean.  Performing typeof on these variables will
 * output the datatype as a string. For example: 'string' if string. 'number'
 * if number.
 * 
 * However, although typeof will identity objects, we must remember: Arrays are
 * also objects!!! According to Javascript, so are null and Date!
 * 
 * Therefore, we must perform special test to eliminate the possiblity that a 
 * variable is any of these given datatypes.  See: function isObject(value)
 * 
 */
 
// 13. Copy by value vs Copy by reference //
/** Copy by value: 
 * 
 * With variables containing simple datatypes, the value can be passed
 * to a new variable, but if that new variable is manipulated, nothing will change 
 * about the value of the old varialbe.
 * 
 * Copy by reference: 
 * 
 * In contrast, variables containing complex datatypes will see a change in the 
 * complex datatype value if that value is transfered to a new variable.
 * 
 * The simplest explanation is this: Variables can contain simple datatypes, but 
 * they merely "point at" complex datatypes. So, we can have multiple variables 
 * pointing at the same complex datatype, so any changes to the complex datatypes 
 * will affect the multiple variables.
 * 
 *Ex.
 */
 
 var x = 5;
 var y = x;
 x++;
 console.log(y); // logs 5

 var Array1 = [];
 var Array2 = Array2;
 firstArray.unshift(200);
 console.log(Array2); // [200]
 
 
 
 
 
  
  
 
 