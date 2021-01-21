let random = Math.floor(Math.random() * 10) * 1
let rating = random

console.log(random)
console.log('Before Conditional')

// IF statement
function greaterOrEqualTo5 () {
  // Console.log if "random" is greater or equal to 5
  if (random >= 5) {
    console.log(`${random} is equal to or greater than 5!`)
  }
}
console.log(greaterOrEqualTo5())

// If - ELSE statement
function isEven (random) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
  if (random % 2 === 0) {
    console.log(`${random} is a even number.`)
  }
  //AND THIS LINE ↑↑↑↑↑
  else {
    console.log(`${random} is a odd number.`)
  }
}
console.log(isEven(random))

// If - ELSE IF - ELSE  statement
function ratingScrore (rating) {
  if (rating === 3) {
    console.log('Rating is equal to 3.')
  } else if (rating === 2) {
    console.log('Rating is eqaul to 2.')
  } else {
    console.log('Rating is not equal to 2 or 3.')
  }
}
console.log(ratingScrore(random))

// IF - ELSE IF - ELSE IF
const dayOfWeek = prompt("What is today?").toLowerCase();

function whatIsToday (dayOfWeek) {
  if (dayOfWeek === 'monday') {
    console.log('UGHH I HATE MONDAYS!')
  } else if (dayOfWeek === 'saturday') {
    console.log('YAY I LOVE SATURDAYS!')
  } else if (dayOfWeek === 'friday') {
    console.log("YAY, FRIDAY I'AM IN LOVE!!!")
  } else {
    console.log('...meh... I can wait for Friday.')
  }
}
console.log(whatIsToday(dayOfWeek));


const age = prompt("Enter your age: ")
function costOfRide () {
  if (age <= 18) {
    console.log('You are not an adult and may enter.')
  } else if (age <= 31) {
    console.log('You are an adult and do not need to be here.')
  } else if (age <= 41) {
    console.log("Don't even try to enter.")
  }  else {
    // This will catch all over 41
    console.log('You better check for a pulse.')
  }
}
console.log(costOfRide(age))






function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if(phrase === 'stop') {
       console.log('red')
   } else if (phrase === 'slow'){
       console.log('yellow')
   } else if (phrase === 'go') {
       console.log('green')
   } else {
       console.log('purple')
   }
   
    //AND THIS LINE ↑↑↑↑↑
}
console.log(getColor('go'));


//Run after all conditaoinal written above
console.log('After conditional')