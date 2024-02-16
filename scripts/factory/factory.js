function photographerTemplate() {
    function getUserCardDOM(photographer) {
        const { id, name, city, tagline, portrait, price } = photographer;
        const picture = `/assets/Photographers-ID-Photos/${portrait}`;

        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${id}`);
        link.setAttribute('id', `user-${id}`);

        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", picture);

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

    function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const userCardDOM = getUserCardDOM(photographer);
            photographersSection.appendChild(userCardDOM);
        });
    }

    return { getUserCardDOM, displayData };


}

function createPhotographerDetailsFactory(data, photographerId) {
    const photographer = data.find(item => item.id === parseInt(photographerId, 10));

    if (!photographer) {
        console.error('Photographer not found');
        return null;
    }

    const { id, name, city, country, portrait, price, tagline } = photographer;
    const picture = `/assets/Photographers-ID-Photos/${portrait}`;

    function getPhotographerDetailsDOM() {
        const photographerDetailsSection = document.querySelector(".photographer-details-section");

        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", picture);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const userCityCountry = document.createElement('p');
        userCityCountry.textContent = `${city}, ${country}`;

        const userTagline = document.createElement('p');
        userTagline.textContent = tagline;

        const userPrice = document.createElement('span');
        userPrice.textContent = price + `€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(userCityCountry);
        article.appendChild(userTagline);
        article.appendChild(userPrice);

        photographerDetailsSection.appendChild(article);
    }

    function displayDataDetail(photographers) {
        const photographersSection = document.querySelector(".photographer-details-section");

        photographers((photographerId) => {
            const detailUserCardDOM = createPhotographerDetailsFactory(photographerId);
            photographersSection.appendChild(detailUserCardDOM);
        });

        console.log(photographerId)
    }

    return { getPhotographerDetailsDOM, displayDataDetail, createPhotographerDetailsFactory };
}


/*
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
*/

// a mettre  dans la factory sans oublier de la return
/*
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



function photographerTemplate(data) {
    const { id, name, city, tagline, portrait, price } = data;

    const picture = `/assets/Photographers-ID-Photos/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${id}`);
        link.setAttribute('id', `user-${id}`);

        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", picture)

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

    return { name, city, picture, tagline, price, getUserCardDOM }
}
*/

/*
function Media(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    function getMedia() {
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('media-item');

        if (image) {
            const img = document.createElement('img');
            img.setAttribute("src", `/assets/${image}`);
            img.setAttribute("alt", title);
            mediaContainer.appendChild(img);
        } else if (video) {
            const videoElement = document.createElement('video');
            videoElement.setAttribute("src", `/assets/${video}`);
            videoElement.setAttribute("controls", true);
            mediaContainer.appendChild(videoElement);
        }

        return mediaContainer;
    }

    return { id, photographerId, title, image, video, likes, date, price, getMedia };
}
*/


/*
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
}*/
