// №1
let btn1 = document.querySelector('.js-btn1');
let btn2 = document.querySelector('.js-btn2');
let userLink = '';

btn1.addEventListener('click', getLink);

function getLink() {
    let link = prompt('Введіть будь-яке посилання', "https://www.pryklad.com")
    if (link === null || link === '') {
        alert('Не має поссилання');
    } else {
        userLink = link;
    }
}

btn2.addEventListener('click', () => {
    if (userLink === '') {
        alert('Натисніть першу кнопку, та введіть ваше посилання');
    } else {
        window.location.href = userLink;
    }

});


// №2
let contentButton = document.querySelector('.key-combination__buttons');

contentButton.addEventListener('click', showNumberButton);

function showNumberButton(e) {
    if (e.target.classList.contains('key-combination__btn')) {
        alert(`Кликнуто на кнопку: ${e.target.value}`);
    }
}


// №3

let toDoListEl = document.querySelector('.todo-list');
let inputEl = document.querySelector('.todo-list__input');
let btnEl = document.querySelector('.todo-list__btn');

btnEl.addEventListener('click', validForm);


function validForm() {
    let inputValue = inputEl.value;

    if (inputValue.length > 0) {
        let liEl = document.createElement('li');
        let deleteBtn = document.createElement('button');

        liEl.classList.add('todo-list__lists');
        deleteBtn.classList.add('todo-list__delete-lists');

        deleteBtn.textContent = 'Видалити';
        liEl.textContent = `${inputValue}`;

        liEl.appendChild(deleteBtn)
        toDoListEl.appendChild(liEl)
    }
    inputEl.value = ''
}

toDoListEl.addEventListener('click', deleteList);

function deleteList(e) {
    let target = e.target;
    if (target.classList.contains('todo-list__delete-lists')) {
        target.closest('li').remove();

    }
}


