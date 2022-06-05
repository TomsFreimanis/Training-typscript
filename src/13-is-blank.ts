export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
function isBlank (str: boolean | string) { 
    switch (str) {
        case "":
        case null:
        case " ":
          return true;
        default:
          return false;
      }
    }


// const isBlank = (str: string | null): boolean =>  {
//     if (str && str.trim()) return  false 
// return true
// }

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false




















