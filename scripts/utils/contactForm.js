function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
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

    closeModal()
});
