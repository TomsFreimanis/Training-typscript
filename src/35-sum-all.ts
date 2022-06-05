export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

// const sumAll = function sumAll(v1, v2) {
    
// }

 function sumAll(v1: number, v2:number):number {
 
   const  max = Math.max(v1, v2);
   const min = Math.min(v1, v2);
    return (max * (max + 1) / 2) - ((min - 1) * min / 2);
  }
  

console.log(sumAll(1, 4)); // Expected output: 10
