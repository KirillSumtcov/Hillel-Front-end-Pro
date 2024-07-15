// №1

const containerEL = document.querySelector('.container');
const formEl = document.querySelector('.form');
const formBtnEl = document.querySelector('.form__btn');
let formInputEl = document.querySelector('.form__input');
let toDoList = document.querySelector('.js--todos-wrapper');


formBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (formInputEl.value.length > 0) {
        createToDoLists(formInputEl.value, false);
    }
    formInputEl.value = '';
    saveToLocalStorage();
})

function createToDoLists(value, isChecked) {
    let liEl = document.createElement('li');
    let inputCheckBox = document.createElement('input');
    let listText = document.createElement('span');
    let deleteBtn = document.createElement('button');

    liEl.classList.add('todo-item');
    if (isChecked) {
        liEl.classList.add('todo-item--checked');
    }
    listText.classList.add('todo-item__description');
    deleteBtn.classList.add('todo-item__delete');

    listText.textContent = value;
    deleteBtn.textContent = 'Видалити';

    toDoList.appendChild(liEl);
    liEl.appendChild(inputCheckBox);
    liEl.appendChild(listText);
    liEl.appendChild(deleteBtn);

    inputCheckBox.setAttribute('type', 'checkbox');
    inputCheckBox.checked = isChecked;

}

toDoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-item__delete')) {
        deleteList(e);
    } else if (e.target.hasAttribute("type")) {
        checkList(e);
    }
});


function deleteList(e) {
    let target = e.target;
    if (target.classList.contains('todo-item__delete') && target.parentElement.getAttribute('class') === 'todo-item') {
        target.closest('li').remove();
        saveToLocalStorage();
    } else if (target.classList.contains('todo-item__delete')) {
        alert('Не можна видаляти вже завершену задачу')
    }
}

function checkList(e) {
    if (e.target.hasAttribute("type")) {
        e.target.parentElement.classList.toggle('todo-item--checked');
        saveToLocalStorage();
    }
}


function saveToLocalStorage() {
    const toDoItems = [];

    document.querySelectorAll('.todo-item').forEach(item => {
        toDoItems.push({
            value: item.querySelector('.todo-item__description').textContent,
            isChecked: item.classList.contains('todo-item--checked')
        });
    });
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
}

function loadToDoLists() {
    const toDoItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
    toDoItems.forEach(item => createToDoLists(item.value, item.isChecked));
}

loadToDoLists();

