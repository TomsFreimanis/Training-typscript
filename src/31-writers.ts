export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */



const writers = [
  
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  
}
];


writers.forEach(writers => {
  if (writers.alive) {
    console.log(`Hi, my name is ${writers.firstName} ${writers.lastName}. I am ${writers.age} years old, and work as a ${writers.occupation}`)
  }
}
)












// for(let i = 0; i < writers.length; i++) {
//   if (writers.alive === true )
//   console.log(writers[i]);
  
// }


// const getTheTitles = (writers: library[]):string [] => {                  // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//   return writers.map(library => library.firstName)
//   console.log(getTheTitles)
// }


// for (let i= 0; i < writers.length; i++){
// console.log(writers[i]);
// }


