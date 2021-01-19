// TEMPLATE LITERIALS - use back-ticks `` 
// whatever is inbetween back-ticks will be evaluated.


console.log(`hello ${1 + 2 + 9}`);
//returns 'hello 12'

let product = 'Atichoke';
let price = 2.25;
let qty = 5;

console.log("You bought " + qty + " " + product + "s. Total is: " + "$"+price * qty +".");

// *********************************************
// Same as above with TEMPLATE LITERIALS
// *********************************************
console.log(`You bought ${qty} ${product}s. Total is: $${price* qty}.`)

