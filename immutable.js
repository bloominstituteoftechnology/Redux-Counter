/*
  In this file you're going to be working with some objects and arrays.
  Instead of mutating the data from within an object/array itself,
    you're going to be using immutable techniques
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
const person = {
  name: 'Sumayyah',
  age: 24,
  hometown: 'Lombard',
}
const newPerson = Object.assign({}, {
  hometown: person.hometown
})
const newDude = { ...person,
  name: 'Frank',
  age: 21
}

console.log(person);
console.log(newPerson);
console.log(newDude);

/* Problem 2
  Create an Array of 'superHeroes`.
  Create a separate array of `superVillains`
  Concatenate the two of them together using `.concat()`
*/

const superHeroes = ["Sumi", "Robert", "Kev", "Jessica", "Harrison", "Aquila", "Abe"];
const superVillains = ["Frank"];
const combinedSupers = superHeroes.concat(superVillains)
const superCombined = [...superHeroes, ...superVillains]

console.log(superHeroes);
console.log(superVillains);
console.log(combinedSupers);
console.log(superCombined);
/* Problem 3
  Create an object `studentScores` with a 'name', 'age' and 'scores'
  Where 'name' is a string, 'age' is a number and 'scores' is an array of numbers
  The numbers for scores should be between 1 - 50. 
  Create a new object `studentAverage` using Object.assign() from the given original object.
  The new object should filter out any scores that are < 34 Array.filter should be used here.
*/
const studentScores = {
  name: 'Frank',
  age: 100,
  scores: [10, 30, 50, 50, 50]
}

const studentHighScores = Object.assign({}, {
  scores: studentScores.scores.filter(score => score > 34)
})
const studentAverage = Object.assign({}, {
  scores: studentScores.scores.reduce((x, y) => x + y) / studentScores.scores.length
})
console.log(studentScores);
console.log(studentHighScores)
console.log(studentAverage);