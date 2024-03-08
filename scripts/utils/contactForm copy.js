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

    if (firstNameValid && nameValid) {
        closeModal();
        console.log("prenom : ", firstName);
        console.log("Nom : ", name);
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
        parentElement.setAttribute('data-error', 'Le champ ne doit pas être vide');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else if (firstNameValue.length < 2) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Veuillez entrer au minimum 2 caractères');
        errorMessageElement.textContent = 'Veuillez entrer au minimum 2 caractères';
        return false;
    } else if (!validCharacters.test(firstNameValue)) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Aucun chiffre autorisé');
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
        parentElement.setAttribute('data-error', 'Le champ ne doit pas être vide');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else if (userNameValue.length < 2) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Veuillez entrer au minimum 2 caractères');
        errorMessageElement.textContent = 'Veuillez entrer au minimum 2 caractères';
        return false;
    } else if (!validCharacters.test(userNameValue)) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Aucun chiffre autorisé');
        errorMessageElement.textContent = 'Aucun chiffre autorisé';
        return false;
    } else {

        parentElement.setAttribute('data-error-visible', 'false');
        errorMessageElement.textContent = ''; // Efface le message d'erreur s'il n'y a pas d'erreur
        return true;
    }
}


/*

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

const firstName = document.getElementById("firstName").value;
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstNameValid = checkFirstname();
    let nameValid = checkUserName();

    if (firstNameValid && nameValid) {
        closeModal();
        console.log("prenom : ", firstName);
        console.log("Nom : ", name);
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
        parentElement.setAttribute('data-error', 'Le champ ne doit pas être vide');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else if (firstNameValue.length < 2) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Veuillez entrer au minimum 2 caractères');
        errorMessageElement.textContent = 'Veuillez entrer au minimum 2 caractères';
        return false;
    } else if (!validCharacters.test(firstNameValue)) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Aucun chiffre autorisé');
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
        parentElement.setAttribute('data-error', 'Le champ ne doit pas être vide');
        errorMessageElement.textContent = 'Le champ ne doit pas être vide';
        return false;
    } else if (userNameValue.length < 2) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Veuillez entrer au minimum 2 caractères');
        errorMessageElement.textContent = 'Veuillez entrer au minimum 2 caractères';
        return false;
    } else if (!validCharacters.test(userNameValue)) {
        parentElement.setAttribute('data-error-visible', 'true');
        parentElement.setAttribute('data-error', 'Aucun chiffre autorisé');
        errorMessageElement.textContent = 'Aucun chiffre autorisé';
        return false;
    } else {

        parentElement.setAttribute('data-error-visible', 'false');
        errorMessageElement.textContent = ''; // Efface le message d'erreur s'il n'y a pas d'erreur
        return true;
    }
}

*/

/*


const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");

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

const form = document.querySelector('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(firstName);
    console.log(name);
    console.log(email);
    console.log(message);

    let checkFirstname = () => {

        const firstName = document.getElementById("firstName");
        const firstNameValue = firstName.value.trim();
        let parentElement = firstName.parentNode;

        const validCharacters = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-]+$/;

        if (firstNameValue.length === 0 | firstNameValue.length < 2) {

            console.log('data-error', 'Veuillez entrer au minimum 2 caractères');
        } else if (!validCharacters.test(firstNameValue)) {

            console.log('data-error', 'Aucun chiffre autorisé');
        } else {
            closeModal();

        }
    }
    checkFirstname();

}); 


*/