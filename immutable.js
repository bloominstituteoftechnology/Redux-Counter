/*
  In this file you're going to working with some objects and arrays.
  Instead of mutating the data from within an object/array itself,
    you're going to be using immutible techniques
  Be sure to **TEST** out your code in an editor/browser REPL of your choice
    Things like REPL.it, JSBin, and Quokka can all be used to test your code.
    Or just simply run node over your immutable.js file
*/

/* Problem 1
  Create an object called `person`. 
  It should have a name property, age and hometown.
  Create a `newPerson` object from `person` using Object.assign.
  Lets say that `newPerson` has the same hometown, but different name and age.
  Be sure to console.log() both references to ensure that they are pointing to different objects.
*/
person={name: "Bob Jones", age: 25, hometown: "Queens"};
newPerson= Object.assign({name: "Casey Jones", age: 29, hometown:"Queens" });
console.log(person);
console.log(newPerson);
/*Not sure how to have hometown from personObj transfer to newPersonObj
Partner had this
const person = {
 name: 'jason',
age: 18,
hometown: 'Washington'
};
const newPerson = Object.assign(person);
console.log(person);
console.log(newPerson);
But that just Jason stats twice and I thought it was supposed to be different*/



/* Problem 2
  Create an Array of 'superHeroes`.
  Create a separate array of `superVillains`
  Concatenate the two of them together using `.concat()`
*/
const superHeroes=["Batman", "Superman", "Incredible Hulk"];
const superVillains=["Joker", "Lex Luthor", "The Abdomination"];
combinedSupers=superHeroes.concat(superVillains);
console.log(superHeroes);
console.log(superVillains);
console.log(combinedSupers);



/* Problem 3
  Create an object `studentScores` with a 'name', 'age' and 'scores'
  Where 'name' is a string, 'age' is a number and 'scores' is an array of numbers
 should be between 1 - 50. 
  Create a new object `studentAverage` using Object.assign() from the given original object.
  The new object should filter out any scores that are < 34 Array.filter should be used here.
*/
const studentScores = {
name: 'Joe',
age: '32',
scores: [42,7,29,45,17,34]
};
const studentAverage = Object.assign(studentScores.scores.filter(word => word > 34));
console.log(studentScores);
console.log(studentAverage);
// "word" can be any name you assign it 