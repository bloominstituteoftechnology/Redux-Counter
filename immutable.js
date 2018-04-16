// In this file you're going to work with some objects and arrays.
// Instead of mutating the data from within an object/array itself,
//   you're going to use immutable techniques.
// Be sure to **TEST** out your code in an editor/browser REPL of your choice;
//   Things like REPL.it, JSBin, and Quokka can all be used to test your code,
//   or just simply run `node immutable.js` in your terminal.

// Problem 1
//  Create an object called `person`.
//  It should have a name property, age and hometown.
//  Create a `newPerson` object from `person` using Object.assign.
//  Lets say that `newPerson` has the same hometown, but different name and age.
//  Be sure to console.log() both references to ensure that they are pointing to different objects.
//

console.log(person);
console.log(newPerson);

// Problem 2
//  Create an Array of 'superHeroes`.
//  Create a separate array of `superVillains`
//  Concatenate the two of them together using `.concat()`
//  Now, concatenate the two of them using the `...` spread operator

console.log(superHeroes);
console.log(superVillains);
console.log(combinedSupers);

// Problem 3
//  Create an object `studentScores` with a 'name', 'age' and 'scores'
//  Where 'name' is a string, 'age' is a number and 'scores' is an array of numbers
//  The numbers for scores should be between 1 - 50.
//  Create a new object `studentAverage` using Object.assign() from the given original object.
//  The new object should filter out any scores that are less than 34.
//  Array.filter should be used here.

console.log(studentScores);
console.log(studentAverage);
