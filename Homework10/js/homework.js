// №1
function createPifagorTable() {

    const pifagorTable = document.querySelector('.pifagor');

    let tableRow = document.createElement('div');
    tableRow.className = 'pifagor__row';

    let tableCell = document.createElement('div');
    tableCell.className = 'pifagor__cell pifagor__header';
    tableCell.textContent = 'x';
    tableRow.append(tableCell);

    for (let i = 1; i <= 10; i++) {
        let tableCell = document.createElement('div');
        tableCell.className = 'pifagor__cell pifagor__header';
        tableCell.textContent = i;
        tableRow.append(tableCell);
    }

    pifagorTable.append(tableRow)

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement('div');
        row.className = 'pifagor__row';

        // Перший стовпчик рядка
        let firstCell = document.createElement('div');
        firstCell.className = 'pifagor__cell pifagor__header'
        firstCell.textContent = i;
        row.append(firstCell);

        for (let j = 1; j <= 10; j++) {
            let cell = document.createElement('div');
            cell.className = 'pifagor__cell'
            cell.textContent = i * j;
            row.append(cell);
        }

        pifagorTable.append(row);
    }
}

window.onload = createPifagorTable;


// №2
const textBlock = document.getElementById('textBlock');
const colorButton = document.getElementById('key-combination-btn');


colorButton.addEventListener('click', () => {
    textBlock.classList.toggle('key-combination__text--red')
})

// №3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let numberRandom = getRandomInt(0, 10);

let random = document.querySelector('#key-combination__random .key-combination__content img');
let randomPage = `./img/${numberRandom}.jpg`;
random.setAttribute('src', randomPage);