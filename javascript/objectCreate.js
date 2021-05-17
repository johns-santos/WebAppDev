const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;


console.log(mary);
console.log(mary.greeting());

mary.getsMarried('Thompson');
console.log(mary.greeting());

const john = Object.create(personPrototypes, {
    firstName: {value: 'John'},
    lastName: {value: 'Santos'},
    age: {value: 40}
});

console.log(john);
console.log(john.greeting());