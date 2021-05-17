// Person constructor
//========================================
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


//========================================
// GREETING
//========================================
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

//========================================
// Customer constructor
//========================================
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the PERSON prototype methods
//========================================
Customer.prototype = Object.create(Person.prototype);


// Make customer.prototype return Customer()
//========================================
Customer.prototype.constructor = Customer;


// CREATE Customer
//========================================
const customer1 = new Customer('Jack', 'Black', '210-444-6677', 'Standard');

console.log(customer1);

// OVERRIDE the INHERITED prototype by CREATING Customer greeting
//========================================
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our compnay`;
}

console.log(customer1.greeting());
