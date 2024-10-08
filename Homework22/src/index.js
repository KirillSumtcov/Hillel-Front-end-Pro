//------------------------------------------------------- №1

import './css/main.sass'
import img1 from "./img/01d.png"
import img2 from "./img/01n.png"
import img3 from "./img/02d.png"
import img4 from "./img/02n.png"
import img5 from "./img/03d.png"
import img6 from "./img/03n.png"
import img7 from "./img/04d.png"
import img8 from "./img/04n.png"
import img9 from "./img/09d.png"
import img10 from "./img/10d.png"
import img11 from "./img/10n.png"
import img12 from "./img/11d.png"
import img13 from "./img/11n.png"
import img14 from "./img/13d.png"
import img15 from "./img/13n.png"
import img16 from "./img/50n.png"



let wetherWidget = document.querySelector(".weather-widget");
let btnName = document.querySelector(".js-btn-setname");
let buttonUpDate = document.querySelector(".js-button-up-date");
let dropMenu = document.querySelector(".js-menu");
let weatherContent = document.querySelector(".weather-widget__content");



function renderWeatherInfo(city) {
    weatherContent.innerHTML = `
        <div class="weather-widget__city">
            <h2>${city.name}</h2>
        </div>
        <div class="weather-widget__date">
            <h3>Time: ${new Date(city.dt * 1000).getHours()}:${new Date(city.dt * 1000).getMinutes()}</h3>
        </div>
        <div class="weather-widget__flex">
            <div class="weather-widget__item">
                <div class="weather-widget__temperature">
                    <p><b>Temperature: ${Math.floor(city.main.temp - 273.15)}&deg;C</b></p>
                    <p>Feel like: ${Math.floor(city.main.feels_like - 273.15)}&deg;C</p>
                </div>
            </div>
            <div class="weather-widget__item">
                <div class="weather-widget__image">
                    <img src="./images/${city.weather[0].icon}.png" alt="">
                    <span> ${city.weather[0].main} - ${city.clouds.all}%</span>
                </div>
            </div>
        </div>
        <div class="weather-widget__wind">
            <p>Wind speed: ${city.wind.speed} m/s</p>
        </div>
    `;
}

async function openWeatherKyiv() {
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=50.433&lon=30.517&appid=2f099fe8f0448acce14b142d13b26602");
        let data = await response.json();
        renderWeatherInfo(data);
    } catch (error) {
        console.log(`Weather not found`);
    }
}
async function openWeatherDnipro() {
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=48.450&lon=34.983&appid=2f099fe8f0448acce14b142d13b26602");
        let data = await response.json();
        renderWeatherInfo(data);
    } catch (error) {
        console.log(`Weather not found`);
    }
}
async function openWeatherLviv() {
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.838&lon=24.023&appid=2f099fe8f0448acce14b142d13b26602");
        let data = await response.json();
        renderWeatherInfo(data);
    } catch (error) {
        console.log(`Weather not found`);
    }
}
async function openWeatherOdesa() {
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=46.477&lon=30.733&appid=2f099fe8f0448acce14b142d13b26602");
        let data = await response.json();
        renderWeatherInfo(data);
    } catch (error) {
        console.log(`Weather not found`);
    }
}

function thisCity(elem) {
    if (elem.classList.contains("js-button-up-date")) {
        if (btnName.textContent === "Kyiv") {
            openWeatherKyiv();
        } else if (btnName.textContent === "Dnipro") {
            openWeatherDnipro();
        } else if (btnName.textContent === "Lviv") {
            openWeatherLviv();
        } else if (btnName.textContent === "Odesa") {
            openWeatherOdesa();
        } else {
            btnName.textContent === "City";
        }
    }
}

wetherWidget.addEventListener("click", (e) => {
    let target = e.target;
    e.preventDefault();
    if (e.target.classList.contains("dropdown-item")) {
        btnName.textContent = e.target.textContent;
    }
    thisCity(target);
});
