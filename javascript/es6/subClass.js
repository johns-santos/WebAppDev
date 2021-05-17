class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// create a subclass of PERSON with extends
class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}





const john = new Customer('John', 'Santos', '210-441-2020', 'Standard');

console.log(john);
console.log(john.greeting());

console.log(Customer.getMembershipCost());