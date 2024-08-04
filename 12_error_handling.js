// function iThrowErr() {
//     return i.map(() => {
//         console.log('hello');
//     })
// }

// try {
//     iThrowErr()
// } catch (error) {
//     console.log('An error occured : ', error.message);
// }

// function divider(a,b) {
//     if( b === 0 ) throw new Error('Cannot divide by zero ( 0 ).')
//     else return a/b
// }
// try {
//     console.log(divider(2,2));
//     console.log(divider(2,0));
// } catch (error) {
//     console.log('Error occured: ', error.message);
// }

// function divideNumbers(a, b) {
//     try { // checks for the exceptional case
//         if (b === 0) throw new Error('Cannot divide by zero')
//         let result = a / b;
//         console.log(`Result: ${result}`);
//     } catch (error) {
//         console.error(`\nAn error occurred: ${error.message}`); // handles exceptional case
//     } finally {
//         console.log('Division operation completed'); // runs everytime
//     }
// }

// divideNumbers(10, 2);
// divideNumbers(10, 0);

// for user input
// const readline = require('readline');

// function askQuestion(query) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     return new Promise(resolve => rl.question(query, ans => {
//         rl.close();
//         resolve(ans);
//     }))
// }

// async function getUserInput() {
//     try {
//         const name = await askQuestion("What's your name? ");
//         if (name === '') throw new Error('Cannot be empty string...')
//         console.log(`Hello, ${name}!`);
//     } catch (err) {
//         console.error("An error occurred:", err.message);
//     }
// }

// getUserInput();

// function randomPromise() {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     console.log(random);
//     if (random > 0.5) {
//       resolve("Congratulations on you success.");
//     } else {
//       reject("Opps, something gone wrong");
//     }
//   });
// }

// randomPromise()
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// async function responseStatus() {
//   try {
//     const response = await randomPromise();
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// responseStatus();

// fetch('himanshu.com.npm')
// .then((res) => res.json())
// .catch((err) => console.log(err.message))

// async function fetchData() {
//   try {
//     const response = await fetch("himanshu.com.npm");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// fetchData();
