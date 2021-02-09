// Labeling information using an OBJECT

// Key Pair properites
const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCaloriesBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

steps = fitBitData.totalSteps;
console.log(steps);

miles = fitBitData.totalMiles;
console.log(miles);
console.log();


// New object
const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}

console.log();
console.log(product);
// Key pair can be to return pair using ["key"]
console.log(product["name"]);
// Or dot notation object.key
console.log(product.flavors);

let name1 = product.name;
console.log(name1);
console.log();

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}


const fullAddress = (restaurant['address'] +  ', ' + restaurant['city'] + ', ' + restaurant['state'] + ' ' + restaurant['zipcode']);

console.log(fullAddress);

// UPDATING AN OBJECT - using key to update value;
const midterms = {danielle: 96, thomas: 78};
midterms.thomas = 79;
console.log(midterms);
// Create a new property
midterms.ezra
midterms.ezra = 'B-';
console.log(midterms);
console.log(midterms["ezra"]);