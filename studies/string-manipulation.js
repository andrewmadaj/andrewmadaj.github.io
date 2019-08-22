/**
* STRING MANIPULATION:
*
* 0. Strings are immutible.  This means that their orginal value cannot be changed.
* String manipulation, therefore, does not affect the original vales, but instead 
* can only create a new string.
* 
* 1. Strings are manipulated using methods and properties.
*/

// 1. Addition Operator //
/** Strings can be concatenated with the addition operator.
 * 
 * Ex.
 */
 
var color = 'red', thingy = 'door';
console.log(color + ' ' + thingy); // 'red door'
  
// 2. Array indices //
/** We can access different characters in a string using array syntax.
 * 
 * Use a position inside the string like [0] or [2]
 * 
 * or a relative length [string.length - 1];
 * 
 * Ex.
 */
 
 console.log(string[0]) // logs first character in a string
 
 console.log(string[string.length - 1]) // logs last character in a string

// 3. .slice() //
/** Slice uses two given indices to return an array containing all values between
 * the two given indices (inclusive of the first index, exclusive of the second)
 * index.
 */
 
 var str = "Hawaii";
 var gimmeSomeResult = str.slice(2, 5); // => returns "wai"
 
// 4. .toUpperCase and .toLowerCase //
/** These two functions either change all characters in the input string to 
 * uppercase or lowercase.
 */
 
 var str = "hawaii";
 var allUpper = str.toLowerCase(); // => returns "HAWAII";
 
// 5. .concat() //
/** concat method may be used instead of the addition operator.  This is relatively
 * straightforward. See: "addition operator" in operators, or in section above
 * for an example of its effect.
 */
 
// 6. .startsWish() //
/** This method evaluates whether a string begins with a given string.
 * The given string may be as short as one single character.
 * 
 * Returns true or false, and is case sensitive. 
 */
 
 var str = "sunny";
 var x = str.startsWith("s"); // => evaluates to true

// 7. .join() and .split() //
/** The .join method returns an array as a string with elements seperated by either:
 * a) a default ","
 * b) or whatever you specify between the parentheses
 * 
 * Note: the method will NOT change the original array.
 */
 
 var array1 = [sunny, 45, block];
 var x = array1.join(); // => returns "sunny,45,block"
 
/** The .split method is the opposite of .join, turning an array into a string
 * with the same basic caveats.
 */
 
// 8. .repeat() //
/** Takes a string and returns a new string containing the original string 
 * repeated as many times as specified in the param.
 */
 
 var str = "love";
 return str.repeat(3) // => returns "lovelovelove".
 
// 9. .replace() //
/** This method replaces a specified value (first param) and returns a new string
 * with the specified values replaced (by the second param).
 */
 
 str = "Hello, and goodbye.";
 console.log(str.replace("Hello", "Hi")) //=> logs "Hi, and goodbye."


