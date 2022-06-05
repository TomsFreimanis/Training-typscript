export {};

function repeatString(str:any,num:number){
    return str.repeat(num);
 }

    //  let repeat = " ";
//  while (num > 0) {
//  repeat = repeat + text;
//  num = num - 1
//  }
//  return repeat


console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
console.log(repeatString("c", 11)); // Expected output: 'bbbbb'
