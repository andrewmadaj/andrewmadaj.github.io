// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return a contact object containing key value pairs for id, nameFirst, nameList
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 

function makeContactList() {
    var contacts = [];
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // create key named "addContact"
         // assign it a value of a function with one parameter "contact"
          // create a code body
           // Initialize a binding to hold the contact object being put in "contacts"
            // Add key value pairs for id, nameFirst, and nameLast to the binding
             // Add your binding to "contacts" creating key value pair for fullName and your binding
        addContact: function(contact) {
            contacts.push(contact);
        },
        // create key "findContact"
         // assign it a value of a function with one parameter "fullName"
         // create an if statement
          // create a conditional statement that evaluates if (contacts.nameFirst + " "
          // + contacts.nameLast) 
           // create code body
            // return key fullName to contacts 
         // create an else statement
          // create code body
           // return undefined
        findContact: function(fullName) {
            for (var i = 0; i <= contacts.length - 1; i++)
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                    return contacts[i];
                } else {
                    return undefined;
                }
        },
        // create key removeContact
         // assign it a value of a function with one parameter "contact"
          // create code body
           // delete contact from contacts object
        removeContact: function(contact) {
            for (var j = 0; j <= contacts.length - 1; j++)
                if (contacts[j].nameFirst == contact.nameFirst && contacts[j].nameLast == contact.nameLast && contacts[j].id == contact.id) {
                    delete contacts[j];
                }
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
