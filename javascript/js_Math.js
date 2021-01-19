// Math.method();

// Math.floor(34.9999) - rnds down or removes num after dec.
console.log(Math.floor(34.9999));

// Math.ceil(34.9999) - rnds up and removes num after dec.
console.log(Math.ceil(34.9999));

// Math.random() - generates a random number (decimal)
console.log(Math.random());

// Math.random() * 5) - returns random num between 0 and 10 with dec
console.log(Math.floor(Math.random() * 10));
// Return random number between 1 and 100
console.log((Math.floor(Math.random() * 20) + 1));


// Generate a random number between 20 and 23
console.log((Math.floor(Math.random() * 3) + 20));



// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = `You rolled a ${die1} and ${die2}. They sum to ${die1 + die2}.`;

console.log(roll);
