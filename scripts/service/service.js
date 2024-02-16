//service services/photographer.services.js
async function getPhotographers() {
    try {
        const response = await fetch('/data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des photographes');
        }

        const data = await response.json();
        console.log('Data from JSON:', data);

        if (!data || !data.photographers) {
            console.error('Invalid data from JSON:', data);
            return {
                photographers: []
            };
        }

        return {
            photographers: data.photographers,
        };

    } catch (error) {
        console.error(error);

        return {
            photographers: []
        };
    }
}



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

let url = new URL(window.location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);
*/

/*
async function getPhotographers() {
    try {
        const response = await fetch('/data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des photographes');
        }

        const data = await response.json();
        const photographers = data.photographers.map(photographerData => Photographer(photographerData));

        return {
            photographers,
            media: data.media
        };

    } catch (error) {
        console.error(error);

        return {
            photographers: []
        };
    }
}

// récupérer id page
let url = new URL(window.location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);
*/

/*
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}*/