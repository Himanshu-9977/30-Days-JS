const addTwoNum = (a, b) => a + b;
const objHuman = {
  name: "Himanshu",
  age: 24,
  sub: (a, b) => a - b,
};
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

// named export
export { addTwoNum, objHuman, multiply };

// default export
export default divide;
