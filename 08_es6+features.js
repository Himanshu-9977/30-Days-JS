/* Template literals */
// const name = 'Himanshu'
// const age = 16

// console.log(`Name = ${name} and Age = ${age}`);

// const multiLineString = `This is a cap.
// It is red.
// I love this cap.
// No cap.`;

// console.log(multiLineString);

/* Destructuring */

// let arr = [1, 2, 3, 4, 5, 6];
// let [a, b] = arr;

// console.log(a, b);

// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
// };

// const { title, author } = book;
// console.log(title, author);

/* Spread and rest operators */
// const arr = [1,2,3,4,5]
// const newArr = [...arr, 6,7,8]

// console.log(arr, newArr);

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total+num)
// }

// console.log(sum(1,2,3,4,5))
// console.log(sum(1,2,3,4,5,6,7,100));
// console.log(sum(1,2,12,465,24));

/* Default parameter */
// function product(a,b=1){
//     return a*b
// }

// console.log(product(234));
// console.log(product(23,9));

/* Object literals */

// const name = "John Doe";
// const age = 30;
// const address = "123 Main Street";

// const person = {
//   name,
//   age,
//   address,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
//   incrementAge: function () {
//     this.age += 1;
//     console.log(`New age = ${this.age}`);
//   },
//
// };

// console.log(person);
// person.greet();
// person.incrementAge();

// const propertyName = 'dynamicKey'
// const dynamicValue = 'This is a dynamic value.'
// const obj = {
//     [propertyName] : dynamicValue
// }
// console.log(obj);

// const propertyNames = ["key1", "key2", "key3"];
// let obj = {};

// propertyNames.forEach((name, idx) => (obj[name] = `Value ${idx + 1}`));
// console.log(obj);
