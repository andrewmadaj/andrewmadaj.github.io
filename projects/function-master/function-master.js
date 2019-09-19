//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// takes input object
// return values as an array
// create variable that's equal to empty array
let emptyArray = [];
// create a for in loop to loop through input object
// code body extracts values
for (var key in object) {
    // object[key]
    emptyArray.push(object[key]);
}
return emptyArray;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// takes object input
// return all object's keys
// returns object's keys in a string seperated by " "
// create variable that's equal to empty array
let emptyArray = [];
// create a for in loop to loop through input object
// code body extracts keys
for (var key in object) {
    emptyArray.push(key);
}
// use join method to turn array into string with elements seperated by " "
// return
return emptyArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
// takes object input
// returns object's values in a string seperated by " "
// create variable that's equal to empty array
let emptyArray = [];
// create a for in loop to loop through input object
// code body extracts object's values
for (var key in object) {
    // create if statement with conditional statement to check if value is string
    if (typeof object[key] === "string") {
        emptyArray.push(object[key])
    }
}
console.log(emptyArray)
// use join method to turn array into string with elements seperated by " "
// return
return emptyArray.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
// takes one argument
// return array if it is an array
// return object if object
// create if statement with conditional
// checks if collection is array
// return "array"
if (Array.isArray(collection)) {
    return "array";
}
// checks if collection is object
// return "object"
else if (collection instanceof Object) {
    return "object";
}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
// takes a string of one word
// capitalize first letter of input word string
let word = string.charAt(0).toUpperCase() + string.slice(1);
// return word
console.log(word);
return word;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
// takes a string of words
// returns string with all the words capitalized
// create variable named array that holds string after split string at the " "
let array = string.split(" ");

// create a for loop
    // use capitalizeWord on each element of the array by using array[i] as argument
for (var i = 0; i <= array.length - 1; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
}
// use .join method to rejoin elements of array into string with " " between
console.log(array);
let newString = array.join(" ");
console.log(newString);
// return array
return newString;

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//take object with name property
//object.name
console.log(object);
//make sure the first character is capital
let name = object.name;
name = name.charAt(0).toUpperCase() + name.slice(1);
console.log(name);
//return string `Welcome (name)!`
return `Welcome ${name}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//take an object with name property
//with a species property
//uppercase for name and species
let name = object.name;
name = name.charAt(0).toUpperCase() + name.slice(1);
let species = object.species;
species = species.charAt(0).toUpperCase() + species.slice(1);

//return string '${Name} is {Species}'
return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//takes an object
//if this object has a noises array
if (object.hasOwnProperty('noises') && object.noises.length > 0 && Array.isArray(object.noises)) {
  //return noises as a string separated by a space
  return object.noises.join(' ');
} else {
    //if there are no noises
    //return 'there are no noises'
    return 'there are no noises';
 }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//take string of words
//and a word 
//return true IF the word is in the string of words
//use search
if (string.search(word) > -1) {
    return true;
    //if no value is found .search() returns -1
} else if (string.search(word) === -1)
    return false;
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// takes name 'string' and an object

//adds name to object's friends array
object.friends.push(name);
//returns the object
return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//takes name and object
//return true IF name is a friend of object
//create a for loop to find a name match to friends array
if (object.hasOwnProperty('friends')) {
 let flag = 0;
 for (var i = 0; i <= object.friends.length - 1; i++) {
    //if friends[i] === name
  if (name === object.friends[i]) {
      flag++;
  }
  
 } 
   if (flag > 0) {
       return true;
   } else {
       return false;
   }
  
 } else {
  return false
 }
//return false otherwise
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//should take name
//list of people (array)
//return list of all names(in the array input) that name(input) is not friends with
//loop array first
let nonFren = [];
for (var i = 0; i < array.length; i++) {
    //conditional name = any key value inside any object
    if (array[i].name !== name) {
        for (var j = 0; j < array[j].friends.length; j++) {
        //return list of all names in the array input that name 
         if (array[i].friends[j] !== name) {
            nonFren.push(array[i].name);
         }
    }
  }
 }
 return nonFren;
}

//p.64, p.68, p.69
//methods for looping
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //should take an object
    //take a key 
    //take a value 
//just update key and value pair 
 object[key] = value;
 return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    console.log(object);
//should take an object and array of strings
//should remove any properties on object that are also listed in array
for (var i = 0; i < array.length; i++) {
    for (var key in object) {
        if (key === array[i]) {
          delete object[key]; 
        }
    }
  }
  console.log(object);
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//should take an array
//return array with all duplicates removed
//search array
var newArray = [];
for (var i = 0; i < array.length; i++) {
  if (newArray.includes(array[i])) {
  } else {
      newArray.push(array[i]);
  }
 }
 return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}