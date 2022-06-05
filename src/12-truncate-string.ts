export {};

function truncateString (str: string, num: number): string {
return str.substring(0,num);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
console.log(truncateString("CODELEX", 6)); // Expected output: CODE
console.log(truncateString("CODELEX", 12)); // Expected output: CODE
