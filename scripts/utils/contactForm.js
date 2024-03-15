const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");

const form = document.querySelector('form');

const modal = document.getElementById("contact_modal");
function displayModal() {
    modal.style.display = "block";

    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
}

function closeModal() {
    modal.style.display = "none";

    document.body.appendChild(modal);
    modalOverlay.remove();
}

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
