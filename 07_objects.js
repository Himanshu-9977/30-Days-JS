/* OBJECT CREATION AND XS */
// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,

//   /* OBJ METHODS */
//   objLog: function () {
//     console.log(`Title = ${book.title} and Author = ${book.author}`);
//   },
//   updateYear: function (year) {
//     year = 2081;
//     console.log(year);
//   },
// };

// console.log(book);
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);

// book.objLog();
// book.updateYear(this.year)

/* NESTED OBJS */

// const library = {
//   name: "My library",
//   books: [
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//   ],
// };

// console.log('Library name = ' + library.name);
// library.books.forEach((obj, idx) => console.log(`Title ${idx + 1} = ${obj.title}`));

/* 'THIS' KEYWORD */
// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
//   objLog: function () {
//     return `Title = ${this.title} and Year = ${this.year}`;
//   },
// }

// console.log(book.objLog())

/* OBJ ITERATION */
// const obj = {
//   name: "Himanshu Bhatta",
//   age: 16,
//   isStudent: true,
//   class: 10,
// };

// for( let key in obj ){
//   console.log(key + ' = ' + obj[key])
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
