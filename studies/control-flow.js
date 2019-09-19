/*
* CONTROL FLOW:
* 
* Control Flow is made possible by conditional statements.
* 
* Conditional statements are essentially decisions in our code that coerce a 
* value to a Boolean; true or false. The outcome of a conditional statement
* determines which code will run next.
* 
*/
 
// 1. If, Else-if, and Else Statements //
/*
* If, Else-if, and Else Statements are chained conditional statements. 
* 
* To start a conditional block of code, an "if" statement is used.
* 
* Else-if statments of an unlimited number may be chained to the first "if", 
* and an "else" statement will execute by default at the end of a chain.
* 
* Conditional statements include:
* a) (test-condition)
* b) followed by {} containing code to execute if true.
* 
* Example:
*/

var age = 25
if (age > 50) {
    console.log("Age is greater than fifty");
} else if (age == 50) {
    console.log("Age is fifty");
} else {
    console.log("Age is less than fifty");
}
// => Logs to the console "Age is less than fifty"
  
 
// 2. Switch Statements //
/*
* Sometimes if, else-if statements are unnecessarily bulky for the evaluations 
* a programmer wishes to perform on a given input.  In this case, a switch 
* statement may be more suitable.
* 
* Switch statments consist of an input expression that will be matched or not 
* matched to different "case clauses." A match will trigger the statement 
* associated with that case.
* 
* A "break" statement is usually necessary between each case clause in the switch 
* statement. Without one, the next code block will execute.
* 
* You may use multiple cases if you have multiple conditions that must be met.
* But, switch statements ONLY strictly compare values.  They cannot contain
* comparison operators.
* 
* Ex. 
* case:
* case:
*  return
* break
* 
* Example:
*/
  
var tree = "willow";
switch (tree) {
    case "oak":
        console.log("The tree is an oak");
        break;
    case "pine":
        console.log("The tree is a pine");
        break;
    default:
      console.log("Sorry, we dont know what you're talking about");
}
/* => In the above program, the input "willow" will evaluate to false against
* each of the case clauses and the switch statement will defualt to the 
* "default" clause.
*/
   
  
// 3. Truthy vs Falsey //
/* Values can also be defined as "truthy" or "falsey".  To determine if a 
* value is truthy or falsey, we may ask the question "Does this thing exist."  
* If the answer is no, as in the case of values like undefined, Null, 0, false
* , or an empty string, the conditional statement will resolve to false.  
* Otherwise, if the value exists, the condtional statement will resolve to 
* true.
* 
* Example:
*/

Boolean(0); // => false
Boolean("cedar") // => true
Boolean(NaN) // => false
 