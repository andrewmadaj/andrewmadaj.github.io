/**
* FUNCTIONS:
*
* 0. Functions contain reusable codeblocks full of logic data.  Whereas strings
* contain character data and numbers contain numeric data, functions encapsulate 
* a thought process or logic.
* 
* 1. There are two phases of function usage: definition and calling. 
* 
*/

// 1. Function definition //
/** First, we must define a function.  This is the process filling in the code 
 * block with code to be executed.
 * 
 * This is the general syntax:
 */
 
 function name2(param1, param2) {
     return "code block";
 } 
 
// 2. Inputs and Outputs //
 /** Inputs in functions are called parameters.  We input "arguments" where the
  * parameters are, as the parameters are simply placeholders.
  * 
  * Functions will return "undefined" by default.
  * 
  * Functions will return an actual value provided we use the "return" keyword.
  * 
  * See an example of each of these two scenarios below:
  */
  
  console.log(function(param1, param2) {} )// => prints undefined. no "return"
  
  function add(a, b) {
      return a + b;  // => will return an actual value.
  }
  
  /** One last thing to note about inputs: Always name your parameters with 
   * intention. Using appropriate names that describe the nature of the data
   * being input into the function like num1 for a number-based parameter will 
   * help you and other programmers understand your functions.
   */
  
// 3. Named, Anonymous, and Function Expressions //
  /** Functions come in many forms.  
   * 
   * 1) Named functions follow this syntax:
   * 
   */
   
   function name1(a, b) {
       return "code body";
   }
   
   /** Named functions are hoisted to the top of the global scope or whatever
    * scope they are being executed within.
    * 
    * The syntax includes: the function keyword, a name (named intentionally),
    * parameters (named intentionally), and a code body.
    *
    * 2) Anonymous functions follow this syntax:
    * 
    */
    
    function(param) { return something; } // is not named, but still works.
    
    /** Anonymous functions are especially useful for passing functions INTO
     * other functions.
     */
     
     function printArrayLength(array, arrayLength) {
         console.log(arrayLength(array));
     }
     printArrayLength([1, 2, 4, 76, 23], function(arrayInPrintFunc) {
         return arrayInPrintFunc.length; }); /** => prints length of array in
         printArrayLength function.**/
    
    /** In the above example, the anonymous function gets plugged into the 
     * named function.
     * 
     * 3) Function Expressions follow this syntax:
     * 
     */
     
     const subtract = function(num1, num2) {
         return num1 - num2;
     }
     
     /** A function expression is created when a variable is defined as an 
      * anonymous function.  
      * 
      * Unlike named functions, function expressions are NOT hoisted, and any
      * attempt to use them in code before they have been defined will not
      * work.
      */
      
// 4. Calling a function //
/** Calling a function will run the code block contained within that function.
 * 
 * We pass "arguments" into functions via the "parameters" which are merely 
 * placeholders.
 * 
 * Functions are expressions because they produce a value.
 */
 
 function add(a, b) {
     return a + b;
 }
 console.log(add(2,5)); // => prints 7 to the console.
 
 
    
    
    
 

  

