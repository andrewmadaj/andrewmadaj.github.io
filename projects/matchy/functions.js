/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    //takes an array animals
    
    //takes a string name
    //looks through animals 
    
    //bollean variable describing we found an animal
    let found = 0;
    for (let i = 0; i < animals.length; i++){
    
    //returns animals object, if an animal with that name exists in the array
        if (animals[i].name === name){
        found ++;
        // return object
        return animals[i];
        }
        
    }
    if(found === 0){
        return null;
        
    }
        
    //if no animal with that name, return null
 }




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    // takes animals, name, and replacement
    // run through the array animals
    // if name equals a name in object animals, replace it with replacement
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement;
        } 
    }
 }


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    // takes animals, name, and replacement
    // run through the array animals
    // if name equals a name in object animals, remove it
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i, 1); 
        } 
    }
 }


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
        //variable named passing
    var passing = true;
    //animal name length greater than 0
    if(animal.name.length ===  0 ){
        passing = false;
    } else if (animal.species.length === 0){
        passing =false;
    }  
    for (var i = 0; i<animals.length; i++){
        if (animals[i].name===animal.name){
        passing =false;        
        }
    }
    if (passing ===true){
        animals.push(animal);
    }
    
    //animal species length greater than 0
    //unique name/doesn't match other animal names
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
