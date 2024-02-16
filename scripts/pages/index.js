// index.js



async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();

    const { displayData } = photographerTemplate(photographers);
    displayData(photographers);

    console.log('Photographers Data:', photographers);
}

init();

/*

async function getPhotographers() {
    try {

        const response = await fetch('/data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des photographes');
        }

        const data = await response.json();

        return {
            photographers: data.photographers,
        };

    } catch (error) {
        console.error(error);

        return ({
            photographers: [...photographers]
        })
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);

    console.log('Photographers Data:', photographers);
}

init();

*/