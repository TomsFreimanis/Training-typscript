export {};

// function addNumbers(a:number, b:number, c:number){
//    return a + b + c;
// }
// const result = addNumbers(1, 3, 4);
// console.log(result); // Expected output: 8
// function stringToArray(input: string) {
  
//    return input.split()
// }
// console.log(stringToArray)
// function stringToArray(input: string) {
//  input.split(" ",4);
   
//    return console.log(stringToArray);
//  }\

const factorial = function fac(n: number) :number{
    return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(5))

