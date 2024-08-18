//------------------------------------------------------- №1
import "../node_modules/@popperjs/core/dist/esm/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

let formInputEl = document.querySelector('.form__input');
const formBtnEl = document.querySelector('.js-btn-add');
let toDoList = document.querySelector('.list-group');

const myModal = new bootstrap.Modal(document.getElementById('myModal'));

formBtnEl.addEventListener('click', function (e) {
    e.preventDefault();
    if (formInputEl.value.length > 0) {
        createToDoLists(formInputEl.value, false);
        formInputEl.value = '';
    }

});

toDoList.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('todo-item__delete')) {
        deleteList(target);
    } else if (target.type === 'checkbox') {
        checkList(target);
    }
});

function createToDoLists(value, isChecked) {

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: value, completed: isChecked })
    })
        .then(response => response.json())
        .then(todo => addToDOM(todo._id, value, isChecked));
}

function deleteList(target) {

    let li = target.closest('li');
    let id = li.dataset.id;

    if (!li.classList.contains('todo-item--checked')) {
        fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' })
            .then(() => li.remove());
    } else {
        alert('Не можна видаляти вже завершену задачу');
    }
}

function checkList(target) {

    let li = target.closest('li');
    let id = li.dataset.id;
    let isChecked = target.checked;

    fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: isChecked })
    })
        .then(() => {
            li.classList.toggle('todo-item--checked');
        });
}

function addToDOM(id, value, isChecked) {
    const liEl = document.createElement('li');
    liEl.className = 'list-group-item list-group-item-action d-flex align-items-center mb-3 todo-item';
    liEl.dataset.id = id;

    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox';
    inputCheckBox.checked = isChecked;
    inputCheckBox.className = 'form-check-input';

    const listText = document.createElement('p');
    listText.className = 'todo-item__description';
    listText.textContent = value;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger todo-item__delete';
    deleteBtn.textContent = 'Видалити';

    if (isChecked) {
        liEl.classList.add('todo-item--checked');
    }

    liEl.appendChild(inputCheckBox);
    liEl.appendChild(listText);
    liEl.appendChild(deleteBtn);
    toDoList.appendChild(liEl);

    listText.addEventListener('click', function () {
        const modalBody = document.querySelector('.modal-body p');
        modalBody.textContent = value;
        myModal.show();
    });
}

function loadToDoLists() {
    fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => addToDOM(todo._id, todo.text, todo.completed));
        });
}

loadToDoLists();

