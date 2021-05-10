// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// IS EQUAL TO
if(id === 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT')
}

console.log('====')
//======================



// IS NOT EQUAL TO
if(id !== 101){
  console.log('CORRECT');
} else {
  console.log("INCORRECT")
}


console.log('==type==')
//======================

if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}
  `);
} else {
  console.log('No ID');
}


console.log('====')
// ==================================
let greenMan = 'no',
    carsLeft = 0,
    carsRight = 0;


if (greenMan === 'yes') {
  console.log(' You are safe to cross the road.')
} else if (carsLeft === 0 && carsRight === 0) {
  console.log('All clear! Cross the road.')
} else {
  console.log(' Stay where you are! ')
}
