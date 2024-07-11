// №1
const contentEl = document.querySelector('.slider__content');
const productsEl = document.querySelectorAll('.slider__product');
const prevEl = document.querySelector('.slider__arrow-prev');
const nextEl = document.querySelector('.slider__arrow-next');
const paginationEl = document.querySelector('.slider__pagination');

let value = 0;

productsEl.forEach((prod, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider__pagination-circle');

    if (index === 0) {
        dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
        value = index;
        updateSlider()
    })
    paginationEl.appendChild(dot);
})

const paginationCirclesEl = document.querySelectorAll('.slider__pagination-circle');


function updateSlider() {
    contentEl.style.transform = `translateX(-${value * 100}%)`;
    paginationCirclesEl.forEach(circle => circle.classList.remove('active'));
    paginationCirclesEl[value].classList.add('active');
    updateButtons();
}

function updateButtons() {
    if (value === 0) {
        prevEl.style.display = 'none'
    } else {
        prevEl.style.display = 'block'
    }

    if (value === productsEl.length - 1) {
        nextEl.style.display = 'none'
    } else {
        nextEl.style.display = 'block'
    }
}

nextEl.addEventListener('click', () => {
    if (value < productsEl.length - 1) {
        value++;
        updateSlider();
    }
});

prevEl.addEventListener('click', () => {
    if (value > 0) {
        value--;
        updateSlider();
    }
});

updateSlider();



