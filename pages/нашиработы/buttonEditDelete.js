const editButton = document.querySelector(".editButton")
const deleteButton = document.querySelector(".deleteButton")
const title = document.querySelector(".p")
const text = document.querySelector(".p-text")
console.log(editButton, deleteButton);

editButton.addEventListener('click', editText)


function editText() {
    let newTitle = prompt("введите загловок")
    let newText = prompt("введите описание")
    title.innerHTML = newTitle;
    text.innerHTML = newText
}


