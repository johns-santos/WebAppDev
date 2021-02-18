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
