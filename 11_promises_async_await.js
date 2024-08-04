// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello");
//     }, 2000);
// });

// promise
//     .then((value) => {
//         console.log(value);
//     })

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Rejected');
//     }, 2000)
// })

// promise
//     .catch((value) => {
//         console.log(value);
//     })

// function fetchdata(url, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Data from ${url}`);
//         }, delay);
//     });
// }

// fetchdata('https://example.com/api/data1', 1000)
//     .then((data) => {
//         console.log('Step 1: ' + data);
//         return fetchdata('https://example.com/api/data2', 1000);
//     })
//     .then((data) => {
//         console.log('Step 2: ' + data);
//         return fetchdata('https://example.com/api/data3', 1000);
//     })
//     .then((data) => {
//         console.log('Step 3: ' + data);
//         return fetchdata('https://example.com/api/data4', 1000);
//     })
//     .then((data) => {
//         console.log('Step 4: ' + data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function promise() {
//   return new Promise((resolve, reject) => {
//     const status = true;
//     if (status) {
//       setTimeout(() => {
//         resolve("Hello world !!!");
//       }, 2000);
//     } else {
//       reject("Error occured");
//     }
//   });
// }

// async function resolving() {
//     const response = await promise()
//     console.log(response);
// }

// resolving()

// async function rejecting() {
//   try {
//     const response = await promise();
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// rejecting()


// function fetchData() {
//     return new Promise((res, rej) => {
//         const data = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//         res(data)
//     })
// }

// fetchData()
// .then((res) => res.json())
// .then((data) => {
//     console.log(data.disclaimer, "\n", data.chartName, '\n', data.time.updated)
// })

// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
// .then((res) => res.json())
// .then((data) => console.log(data.time.updated))


// async function fetchData() {
//     const response = await fetch('https://official-joke-api.appspot.com/random_joke')
//     const data = await response.json()
//     console.log(data.type);
//     console.log(data.setup);
//     console.log(data.punchline);
//     console.log(data.id);
// }

// fetchData()


// const promise1 = new Promise((res, rej) => setTimeout(() => res('Hello world -- 1st'), 1000))
// const promise2 = new Promise((res, rej) => setTimeout(() => res('Hello world -- 2nd'), 1000))
// const promise3 = new Promise((res, rej) => setTimeout(() => res('Hello world -- 3rd'), 1000))

// Promise.all([promise1, promise2, promise3])
// .then((responses) => {
//     responses.forEach((item) => console.log(item))
// })
// .catch((err) => {
//     console.log('somethnig bad occured', err.message);
// })

// const promise1 = new Promise((res, rej) => setTimeout(() => res('Hello world -- 1'), 1000))
// const promise2 = new Promise((res, rej) => setTimeout(() => res('Hello world --- 2'), 500))

// Promise.race([promise1, promise2])
// .then(result => console.log('First to finish : ', result))
// .catch(error => console.log('An error occured : ', error))

