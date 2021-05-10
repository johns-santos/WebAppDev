let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();


birthday.setMonth(2);
birthday.setDate(12);
birthday.setHours(3);



console.log(today);
console.log(birthday);
console.log(val);









