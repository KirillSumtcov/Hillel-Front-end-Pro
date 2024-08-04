//------------------------------------------------------- №1
import "../node_modules/@popperjs/core/dist/esm/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import '../node_modules/jquery/dist/jquery.js'

const containerEL = $('.container-xxl');
const formEl = $('.form');
let formInputEl = $('.form__input');
const formBtnEl = $('.js-btn-add');
let toDoList = $('.list-group');

const myModal = new bootstrap.Modal(document.getElementById('myModal'));

formBtnEl.on('click', function (e) {
    e.preventDefault();
    if (formInputEl.val().length > 0) {
        createToDoLists(formInputEl.val(), false);
    }
    formInputEl.val('');
    saveToLocalStorage();
})

toDoList.on('click', function (e) {
    let target = $(e.target);
    if (target.hasClass('todo-item__delete')) {
        deleteList(target);
    } else if (target.is('[type="checkbox"]')) {
        checkList(target);
    }
});


function createToDoLists(value, isChecked) {
    let liEl = $('<li></li>').addClass('list-group-item list-group-item-action d-flex align-items-center mb-3 todo-item');
    let inputCheckBox = $('<input>', { type: 'checkbox', checked: isChecked }).addClass('form-check-input');
    let listText = $('<p></p>').addClass('todo-item__description').text(value);
    let deleteBtn = $('<button></button>').addClass('btn btn-danger todo-item__delete').text('Видалити');

    if (isChecked) {
        liEl.addClass('todo-item--checked');
    }

    liEl.append(inputCheckBox, listText, deleteBtn);
    toDoList.append(liEl);

    listText.on('click', function () {
        let modalBody = $('.modal-body p')
        modalBody.text(value)
        myModal.show()
    })
}


function deleteList(target) {
    let li = target.closest('li');
    if (target.hasClass('todo-item__delete')) {
        if (li.hasClass('todo-item--checked')) {
            alert('Не можна видаляти вже завершену задачу');
        } else {
            li.remove();
            saveToLocalStorage();
        }
    }
}

function checkList(target) {
    if (target.is('[type="checkbox"]')) {
        target.closest('li').toggleClass('todo-item--checked');
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    const toDoItems = [];

    $('.todo-item').each(function () {
        toDoItems.push({
            value: $(this).find('.todo-item__description').text(),
            isChecked: $(this).hasClass('todo-item--checked')
        });
    });
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
}

function loadToDoLists() {
    const toDoItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
    toDoItems.forEach(item => createToDoLists(item.value, item.isChecked));
}

loadToDoLists();

