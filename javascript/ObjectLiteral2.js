// EMPLOYEE CONSTRUCTOR
function Employee (firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime()
//     const ageDate = new Date(diff)
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
//   }
}

// CALCULATE AGE - PROTOTYPE (moved out of constructor as same for all EMPLOYEES)
Employee.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// GETFULLNAME - PROTOTYPE 
Employee.prototype.getFullName =  function () {
     return `${this.firstName} ${this.lastName}`;
}

// GETSMARRIED - PROTOTYPE - created to update last names.
Employee.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}


const person = {
  firstname: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    return 1987
  }
}

let val

val = person
console.log(val)
val = person.firstname + ' ' + person.lastName
console.log(val)
val = person['lastName']
console.log(val)
val = person.age
console.log(val)
val = person.hobbies[1]
console.log(val)

val = person.getBirthYear()
console.log(val)

console.log('===========')
console.log('===========')
console.log('===========')

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'David', age: 32 }
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name, people[1].age)
}

console.log('=================')
console.log('=================')
console.log('=================')

const jack = new Employee('Jack', 'Doe', '8-12-90')
const mary = new Employee('Mary', 'Johnson', 'March 20 1978')
const brad = new Employee('Brad', 'Brad', '10-18-1982')

console.log(mary.firstName, mary.lastName, mary.calculateAge());

console.log(jack.getFullName());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());
