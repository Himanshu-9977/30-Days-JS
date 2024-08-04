
const borderDiv = document.querySelector(".someClass");
borderDiv.addEventListener("mousemove", () => {
  borderDiv.style.border = "4px solid red";
});
borderDiv.addEventListener("mouseout", () => {
  borderDiv.style.border = "4px solid black";
});

document.addEventListener('keypress', (e) => {
  console.log(e.key);
})

const inputField = document.getElementById('inputField');
const displayText = document.getElementById('displayText');

inputField.addEventListener('keyup', () => {
    displayText.textContent = inputField.value;
});

const submitHandler = (e) => {
  e.preventDefault();
  console.log(e.target);
}

const dropdown = document.getElementById('dropdown');
    const selectedValue = document.getElementById('selectedValue');

    dropdown.addEventListener('change', (event) => {
        selectedValue.textContent = `Selected value: ${dropdown.value}`;
    });


document.querySelector('#itemList')
  .addEventListener('click', (event) => {
    document.querySelector('#temporary').textContent = event.target.textContent;
  })