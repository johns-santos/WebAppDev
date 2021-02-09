
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