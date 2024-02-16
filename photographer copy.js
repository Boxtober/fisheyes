//Mettre le code JavaScript lié à la page photographer.html

// factory factory/photographer.factory.js
function Photographer(data) {
    const { id, name, city, tagline, portrait, price } = data;

    function getUserCardDOM() {
        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${id}`);
        link.setAttribute('id', `user-${id}`);

        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", `/assets/Photographers-ID-Photos/${portrait}`);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const userCity = document.createElement('h3');
        userCity.textContent = city;

        const userTagline = document.createElement('p');
        userTagline.textContent = tagline;

        const userPrice = document.createElement('span');
        userPrice.textContent = price + `€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(userCity);
        article.appendChild(userTagline);
        article.appendChild(userPrice);

        link.appendChild(article);
        return link;
    }

    return { id, name, city, tagline, portrait, price, getUserCardDOM };
}

// a mettre  dans la factory sans oublier de la return
async function displayData(photographers) {
    const photographersSection = document.querySelector(".media-item");

    if (!photographersSection) {
        console.error('Photographers section not found in the document');
        return;
    }

    photographers.forEach((photographer) => {
        const userCardDOM = photographer.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}


/*
let toto = factoryPhotograher();
toto.getUserCardDom();
*/


//service services/photographer.services.js
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



// elle est dans le fichier qui est appelé dans le fichier photographer.html (page/photographer.js)
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);

    console.log('Photographers Data:', photographers);
}

init();

// récupérer id page
let url = new URL(window.location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);



/*
async function getPhotographerData(id) {
    try {
        const response = await fetch('/data/photographers.json');

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des photographes');
        }

        const data = await response.json();

        const photographer = data.photographers.find(
            (photographer) => photographer.id == id
        );

        if (!photographer) {
            throw new Error(`nooooop`);
        }

        const dataByUser = {
            photographer,
            media: data.media.filter((media) => media.photographerId == id),
        }; console.log(dataByUser)

        return dataByUser;
    } catch (error) {

    }


} */