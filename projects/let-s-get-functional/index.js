// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-andrewmadaj');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./andrewmadaj.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// set variable equal to output of filter, which is an array
// measure length of that variable
    var result = _.filter(array, function(person) {
    // callback function in filter tests/returns boolean
    // filter function checks if array item's gender === 'male'
    return person.gender === 'male';
    }); 
    // return result.length
    return result.length;
};

// reduce  
var femaleCount = function(array) {
    var result = customers.reduce(function(total, person) { 
    return (person.gender === 'female' ? total+1 : total)}, 0);
    return result;
}
    
/**
 * finds oldest customer's name
 * i: array
 * o: string
 * c:
 */
var oldestCustomer = function(array) {
    // set binding of oldest to 0 to keep track of oldest age
    let oldest = customers[0].age;
    // set binding of oldestName to hold onto name of oldest person
    let oldestName = "";
    // loop through array
    for (var i = 0; i < customers.length; i++) {
        // if oldest is less than given person's age, change oldest to given person's age
        // and change oldestName to the name of the given person
        var age = customers[i].age;
        var name = customers[i].name;
        // create variable for customer name
        if (oldest < age) {
            oldest = age;
            oldestName = name;
        }
    }
    // return oldestName
    return oldestName;
}


var youngestCustomer = function(array) {
    // set variable youngest to person's age at index 0
    let youngest = customers[0].age;
    // set variable youngestName to person's name at index 0
    let youngestName = customers[0].name;
    // for loop
    for (var i = 1; i < array.length; i++) {
        // if youngest is greater than given person's age, 
        if (youngest > customers[i].age) {
        // change youngest to given person's age
            youngest = customers[i].age;
        // and change youngestName to given person's name
            youngestName = customers[i].name;
        }
    }
    // return youngestName
    return youngestName;
}


// declare variable sum
// sum will be equal to collections.reduce
// declare totalCustomers (customers.length)
var averageBalance = function(array) {
  var parsedInts = [];
  var totalCustomers = customers.length;
  for (let i = 0; i < array.length; i++) {
    parsedInts.push(parseFloat((array[i].balance).replace("$", "").replace(",","")));
  } var sum = parsedInts.reduce(function(a, b) {
    return a + b;
  }); 
  return sum / totalCustomers;
}


var firstLetterCount = function(array, letter) {
    // create counter variable
    let counter = 0;
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // for each iteration, conditional: if first letter of given name is equal to letter argument,
        // add one to total
        if (letter.toUpperCase() === array[i].name[0].toUpperCase()) {
            counter++;
        }
    }
    // return counter variable
    return counter;
};


var friendFirstLetterCount = function(array, customer, letter) {
    // loop through whole customers array
    for (var i = 0; i < array.length; i++) {
        // if array[i].name === customer, then return firstLetterCount on array[i].friends and letter
        if (array[i].name === customer) {
            return firstLetterCount(array[i].friends, letter);
        }
    }
};


var friendsCount = function(array, name) {
// takes an array and a name
// create variable result = [];
// loop through outer array
    // if (array[i].friends.some(function(element) {element.name === name}))
        // result.push(array[i].name)
// return result
var result = [];
for (var i = 0; i < array.length; i++) {
    if (array[i].friends.some(function(element) {return element.name === name})) {
        result.push(array[i].name);
    }
}
return result;
}


var topThreeTags = function(array) {
// create a holder object
// create first = 0
// create second = 0
// create third = 0
// create result = []
var holder = {};
var first = 0;
var firstName = null;
var second = 0;
var secondName = null;
var third = 0;
var thirdName = null;
var result = [];
// loop through customers
    // loop through each array[i].tags with iterable j
        // if !holder.array[i].tags[j] create key tags[i][j] in holder equal to value 1 (holder.tags[i][j] = 1)
        // else, if it does exist in holder already, add 1 to value of that key in holder (holder.tags[i][j] += 1)
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].tags.length; j++)
  if (!holder[array[i].tags[j]]) {
    holder[array[i].tags[j]] = 1;
  } else {
    holder[array[i].tags[j]] += 1;
  }
} 
// loop through holder object 
    //determine maximum tag value by comparing tags
    // reset first each time
// remove first from holder array

for (var key in holder) {
  if (holder[key] > first) {
    first = holder[key];
    firstName = key;
  }
}
// remove first from holder array
delete holder[firstName]
// loop through holder object 
    //determine maximum tag value by comparing tags
    // reset second each time
for (var key in holder) {
  if (holder[key] > second) {
    second = holder[key];
    secondName = key;
  }
}
// remove second from holder array
delete holder[secondName]
// loop through holder object 
    //determine maximum tag value by comparing tags
    // reset third each time
for (var key in holder) {
  if (holder[key] > third) {
    third = holder[key];
    thirdName = key;
  }
}
// remove third from holder array
delete holder[thirdName]
// push first, second, third to result array
result.push(firstName, secondName, thirdName);
// return result
return result

}


var genderCount = function(array) {
// takes an array
// returns an object
// use reduce on array
    // array.reduce(function(resultObj, customer) 
    // if (resultObj[customer.gender]) 
        // increase the count of resultObj[customer.gender] += 1
    // else create resultObj[customer.gender] = 0
    // return resultObj
// return the result of the above reduce execution
return array.reduce(function(total, customer) {
    if (total[customer.gender] >= 0) {
        total[customer.gender] += 1;
        return total;
    }
    if (!total[customer.gender]) {
        total[customer.gender] = 1;
        return total;
    }
}, {});

}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
