export {};

const letters = ["a", "n", "c", "e", "z", "f"];
 let sortedLetters = letters.sort((a:string, b:string) =>
 a.localeCompare(b)
);

console.log(sortedLetters); // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]
