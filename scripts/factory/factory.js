function photographerTemplate(photographer) { // photographerFactory
    const { id, name, city, tagline, country, portrait, price } = photographer;

    function getUserCardDOM() {
        // const { id, name, city, tagline, portrait, price } = photographer;
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


    return { id, name, city, tagline, country, portrait, price, getUserCardDOM }; // ajouter les fonctions reprises
}

function idPhotographerTemplate(data, photographerId) {
    const photographer = data.find(item => item.id === parseInt(photographerId, 10));

    if (!photographer) {
        console.error('Photographer not found');
        return null;
    }

    const { id, name, city, country, portrait, price, tagline } = photographer;
    //const { id, photographerId, title, image, likes, date, price} = media;
    const picture = `/assets/Photographers-ID-Photos/${portrait}`;

    function getIdUserCardDOM() {
        const displayDataByIdSection = document.querySelector(".photograph-header");

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

        displayDataByIdSection.appendChild(article);
    }

    function displayDataById(photographers) {
        const photographersSectionId = document.querySelector(".photographer-details-section");

        photographers.forEach((photographer) => {
            const detailUserCardDOM = getIdUserCardDOM(photographer);
            photographersSectionId.appendChild(detailUserCardDOM);
        });

    } console.log('PHOTOGRAPHE DATA ----> ', photographer)

    return { displayDataById, getIdUserCardDOM };
}



function mediaFactory(mediaData) {
    function createMedia(media) {
        if (media.image) {
            return createImage(media);
        } else if (media.video) {
            return createVideo(media);
        } else {
            console.error('Unknown media type:', media);
            return null;
        }
    }

    function createImage(imageData) {
        const img = document.createElement('img');
        img.setAttribute('src', `/assets/${imageData.image}`);
        img.setAttribute('alt', imageData.title);
        return img;
    }

    function createVideo(videoData) {
        const video = document.createElement('video');
        video.setAttribute('src', `/assets/${videoData.video}`);
        video.setAttribute('controls', true);
        video.setAttribute('alt', videoData.title);
        return video;
    }

    const media = mediaFactory().createMedia(photographer);
    article.appendChild(media);
    console.log('MEDIA -----> ', media)

    //return { createMedia };
}