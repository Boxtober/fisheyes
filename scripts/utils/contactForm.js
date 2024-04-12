const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");
const modal = document.getElementById("contact_modal");
const form = document.querySelector('form');
const openModalBtn = document.querySelector('.contact_button');
const closeButton = modal.querySelector('.close-btn');

const body = document.querySelector('body');
const mainWrapper = document.getElementById("main-wrapper");

function displayModal() {
    modal.style.display = "block";
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    mainWrapper.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');

    const closeButton = modal.querySelector('.close-btn');
    closeButton.focus();
}

function closeModal() {
    mainWrapper.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    modal.style.display = "none";

    document.body.appendChild(modal);
    modalOverlay.remove();
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    const modalAriaHidden = modal.getAttribute('aria-hidden');

    if (modalAriaHidden === 'false' && key === 'Escape') {
        closeModal();
    }
});

modal.addEventListener('keydown', function (e) {
    const tabKey = 'Tab';
    const shiftKey = e.shiftKey;
    const enterKey = 'Enter';
    const spaceKey = ' ';

    if (e.key === tabKey) {
        const focusElements = modal.querySelectorAll('button, [href], input, select, textarea, img');
        const firstElement = focusElements[0];
        const lastElement = focusElements[focusElements.length - 1];


        if (shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();

        } else if (!shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        } else if (e.key === enterKey || e.key === spaceKey) {
            closeModal.focus();
        }
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let firstNameValid = checkFirstname();
    let nameValid = checkUserName();
    let emailValid = checkEmail();
    let messageValid = checkMessage();

    if (firstNameValid && nameValid && emailValid && messageValid) {
        closeModal();
        console.log("Prenom : ", firstName);
        console.log("Nom : ", name);
        console.log("Email : ", email);
        console.log("Message : ", message);
        form.reset();
    }

});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let firstNameValid = checkFirstname();
    let nameValid = checkUserName();
    let emailValid = checkEmail();
    let messageValid = checkMessage();

    if (firstNameValid && nameValid && emailValid && messageValid) {
        closeModal();
        console.log("Prenom : ", firstName);
        console.log("Nom : ", name);
        console.log("Email : ", email);
        console.log("Message : ", message);
        form.reset();
    }

});

function createErrorMessage(parentElement, errorMessageSelector) {
    let errorMessageElement = parentElement.querySelector(errorMessageSelector);
    if (!errorMessageElement) {
        errorMessageElement = document.createElement('div');
        errorMessageElement.classList.add('error-message');
        parentElement.appendChild(errorMessageElement);
    }
    return errorMessageElement;
}

function checkFirstname() {
    const firstName = document.getElementById("firstName");
    const firstNameValue = firstName.value.trim();
    let parentElement = firstName.parentNode;

    const validCharacters = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-]+$/;

    const errorMessageElement = createErrorMessage(parentElement, '.error-message');

    if (firstNameValue.length === 0) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else if (firstNameValue.length < 2) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Veuillez entrer au minimum 2 caractères';
        return false;
    } else if (!validCharacters.test(firstNameValue)) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Aucun chiffre autorisé';
        return false;
    } else {
        parentElement.setAttribute('data-error-visible', 'false');
        errorMessageElement.textContent = '';
        return true;
    }
}

function checkUserName() {
    const userName = document.getElementById("name");
    const userNameValue = userName.value.trim();
    let parentElement = userName.parentNode;

    const validCharacters = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-]+$/;

    const errorMessageElement = createErrorMessage(parentElement, '.error-message');

    if (userNameValue.length === 0) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else if (userNameValue.length < 2) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Veuillez entrer au minimum 2 caractères';
        return false;
    } else if (!validCharacters.test(userNameValue)) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Aucun chiffre autorisé';
        return false;
    } else {
        parentElement.setAttribute('data-error-visible', 'false');
        errorMessageElement.textContent = '';
        return true;
    }
}

function checkEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    let parentElement = emailInput.parentNode;

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errorMessageElement = createErrorMessage(parentElement, '.error-message');

    if (emailValue.length === 0) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else if (!emailRegex.test(emailValue)) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Adresse mail invalide';
        return false;
    } else {
        parentElement.setAttribute('data-error-visible', 'false');
        errorMessageElement.textContent = '';
        return true;
    }
}


function checkMessage() {
    const messageInput = document.getElementById("message");
    const messageValue = messageInput.value.trim();
    let parentElement = messageInput.parentNode;

    const errorMessageElement = createErrorMessage(parentElement, '.error-message');

    if (messageValue.length === 0) {
        parentElement.setAttribute('data-error-visible', 'true');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else {
        parentElement.setAttribute('data-error-visible', 'false');
        errorMessageElement.textContent = '';
        return true;
    }
}

openModalBtn.addEventListener('click', displayModal);
closeButton.addEventListener('click', closeModal);