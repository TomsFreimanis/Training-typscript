export {};

function add(a:number, b:number):number {
    return a + b;
}

function subtract(a:number, b:number) :number{
    return a - b;
}

// function sum(nums:number[]) :number{
//     let sum = 0
//     for (let i = 0; i < nums.length[i]; i++){
//         const num = nums [i];
//         sum += sum + num [i];
//     }
// return sum
//  }
 function sum(input) {
        
    if (toString.call(input) !== "[object Array]")
       return false;
         
             let total =  0;
               for(let i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }




// function multiply(a, b, c) {
//    return  a * b * c;

// function power(a, b) {
//     return a ** b;
// }

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
// console.log(multiply([1, 2, 3])); // Expected output: 6
// console.log(power(2, 3)); // Expected output: 8
