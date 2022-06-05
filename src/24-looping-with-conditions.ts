export {};

function onlyTheAces(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (element[0] === 'A') {
            return arr[i]
        }
    }
}
console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']


