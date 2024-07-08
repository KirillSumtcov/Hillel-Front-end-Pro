// №1
const formEl = document.querySelector(".js-form");
const textInput = document.querySelector("#name");
const inputs = document.querySelectorAll(".js-form input, textarea");

const errorMessages = {
    name: "Required text field",
    text: "Message must be at least 5 characters long",
    tel: "Phone number must start with +380 and be followed by 9 digits",
    email: "Email must be valid and contain @ and a dot",
};

function isNameValid(input) {
    return typeof input.value === "string" && input.value.length >= 1;
}

function isTextValid(input) {
    return typeof input.value === "string" && input.value.length >= 5;
}

function isTelValid(input) {
    const phonePattern = /^\+380\d{9}$/;
    return phonePattern.test(input.value);
}

function isEmailValid(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input.value);
}

function showSuccess(input, msg) {
    const errorEl = input.nextElementSibling;
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    errorEl.textContent = msg;
}

function showError(input, msg) {
    const errorEl = input.nextElementSibling;
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    errorEl.textContent = msg;
}

function validateInput(input) {
    if (input.getAttribute("type") === "text") {
        if (isNameValid(input)) {
            showSuccess(input, "");
            console.log(`Name: ${input.value}`);
        } else {
            showError(input, errorMessages.name);
        }
    } else if (input.getAttribute("name") === "message") {
        if (isTextValid(input)) {
            showSuccess(input, "");
            console.log(`Message: ${input.value}`);
        } else {
            showError(input, errorMessages.text);
        }
    } else if (input.getAttribute("type") === "tel") {
        if (isTelValid(input)) {
            showSuccess(input, "");
            console.log(`Phone: ${input.value}`);
        } else {
            showError(input, errorMessages.tel);
        }
    } else if (input.getAttribute("type") === "email") {
        if (isEmailValid(input)) {
            showSuccess(input, "");
            console.log(`Email: ${input.value}`);
        } else {
            showError(input, errorMessages.email);
        }
    }
}

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    inputs.forEach((input) => {
        validateInput(input);
    });
});
