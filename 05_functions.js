// function oddOrEven (num) {
//     if (num % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// oddOrEven(10)
// oddOrEven(15479)

// function squareNume (num) {
//     return num * num
// }
// console.log(squareNume(5));
// console.log(squareNume(8));

// function greatestNum(a, b) {
//   if (a > b) {
//     console.log(`${a} is greater than ${b}`);
//   } else {
//     console.log(`${b} is greater than ${a}`);
//   }
// }

// greatestNum(5, 8);
// greatestNum(-183, -2345);

// const sum = (a, b) => a + b;

// console.log(sum(1,2))
// console.log(sum(1247,-122))

// const something = (str, substr) => str.includes(substr);
// console.log(something("This is my example string!", "muy"));

// function product(a, b = 7) {
//   return a * b;
// }

// console.log(product(1))
// console.log(product(5))
// console.log(product(0, 9))

// function greet(name, age = 9) {
//   console.log(`Hello ${name} ! You are ${age} years old`);
// }

// greet('Diwash')
// greet('Himanshu', 16)


// function higherFncs(func, num) {
//     for (let i = 1; i <= num; i++) {
//         func(i)
//     }
// }

// function sayHello(n) {
//     console.log('Hello world !!! ' + n)
// }

// higherFncs(sayHello, 9)


// function mainFun(func1, func2, num) {
//     func2(`The result is : ${func1(num)}`)
// }

// const func1 = num => num % 2 == 0 ? 'Even' : 'Odd'  
// const func2 = result => console.log(result);

// mainFun(func1, func2, 9)