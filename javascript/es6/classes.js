class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthDate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    //EXAMPLE of STATIC method - does not use class properties
    static addNumbers(x,y){
        return x + y;
    }
}

const lisa = new Person('Lisa', 'Santos', '11-18-77');
console.log(lisa.calculateAge());

lisa.getsMarried('Smith');

console.log(lisa.lastName)

//Using STATIC method
console.log(Person.addNumbers(4,1));