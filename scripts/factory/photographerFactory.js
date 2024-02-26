function photographerFactory(photographer) { // photographerFactory
    const { id, name, city, tagline, country, portrait, price } = photographer;
    //const photographerId = data.find(item => item.id === parseInt(photographerId, 10));
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

    function getIdUserCardDOM() {

        if (!photographer) {
            console.error('Photographer not found');
            return null;
        }
        const picture = `/assets/Photographers-ID-Photos/${portrait}`;


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

        return displayDataByIdSection;

    }


    return { id, name, city, tagline, country, portrait, price, getUserCardDOM, getIdUserCardDOM };
}
