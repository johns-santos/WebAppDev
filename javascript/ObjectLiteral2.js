

const person = {
    firstname : 'Steve',
    lastName : 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address : {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 1987;
    }
}

let val;

val = person;
console.log(val);
val = person.firstname + ' ' + person.lastName;
console.log(val);
val = person['lastName'];
console.log(val);
val = person.age;
console.log(val);
val = person.hobbies[1];
console.log(val);

val = person.getBirthYear();
console.log(val);


console.log('===========');
console.log('===========');
console.log('===========');


const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'David', age: 32}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}

