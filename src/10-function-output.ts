export {};

// function s(w1, w2) {
//   return w1.concat(' ').concat(w2);
// }

// const result = s('hello', 'world'); // concatenate two strings - 'hello', 'world', using the function above
// console.log(result); // Expected output: "hello world"

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

function tests (w1:string, w2:string, ): string  {
  return w1.concat( " " ,w2 ," ",) ;
}
const result = tests('hello','world', );
console.log(result);