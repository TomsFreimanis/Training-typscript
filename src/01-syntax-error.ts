export {};

// describe("arrayToString function", () => {
//     test("should convert array to string", () => {
//       expect(arrayToString(["Cat"])).toEqual("Cat");
//       expect(arrayToString(["Cat", "rabbit", "mouse"])).toEqual("Cat, rabbit, mouse");
//       expect(arrayToString(["Meow", "meow!"])).toEqual("Meow, meow!");
//     });
//   });  

// * Write a function that converts the given array of words into a sentence.
// * All words in the sentence should be seperated by a comma and a space.
// * Return the result.
// * 
// * Example
// * 
// * Input: ["Banana", "apple"]
// * Output: "Banana, apple"
// */

function arrayToString(input: string[]) { 
    return input.split('')
}
const result = arrayToString["Banana", "apple"]
console.log(result)