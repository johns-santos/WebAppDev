
// Array can be declared with CONST
// This is possible as content changes but memory reference is always the same;
const nums = [1, 2, 3];
nums.push(4);
nums.push(5);
console.log(nums);


console.log();
// NESTED arrays - array within an array
const gameBoard = [
    ['x', 'o', 'x'],
    ['o', null, 'x'],
    ['o', 'o', 'x']
];
console.log(gameBoard[0]);
console.log(gameBoard[1]);
console.log(gameBoard[2]);

console.log();
// Return null from gameBoard
console.log(gameBoard[1][1]);


console.log();
// Update an VALUE in a NESTED array
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = "Hugo";
console.log(airplaneSeats);





const comments = [
    {
        username: 'Tammy',
        test: 'lolololo',
        votes: 9
        },
    {
        username: 'Fish Boi',
        text: 'glub glub',
        voets: 12387
    }
]

console.log(comments[1]);






//=======================================================
let array = ['list', 23, 'black', 'numbers', 56];

console.log(array[3]);
console.log(array);

// make array objects index of 1 to 3
console.log(array.splice(1,3));
console.log(array);

// make array last object and first object
console.log(array.reverse());
console.log(array);

// Add object to array
console.log(array.unshift(120));
console.log(array);

array.push(380, 'brown', 'red', 'yellow', 45, 98);
console.log(array);


array2 = [4, 6, 7, 8];
val = array.concat(array2);
console.log(val);

console.log("===========");

val = array.sort();
console.log(val);


// Sorting numbers
console.log("===========");
val = array2.sort(function(x ,y) {
    return x - y;
})
console.log(val);


// Sorting numbers - reverse
console.log("===========");
val = array2.sort(function(x ,y) {
    return y - x;
})
console.log(val);