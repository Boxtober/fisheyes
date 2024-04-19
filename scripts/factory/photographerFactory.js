

function photographerFactory(photographer) {
    const { id, name, city, tagline, country, portrait, price, likes } = photographer;

    /*
    function getCtaDom() {
        //const { price, likes } = media;

        currentLikes = likes;

        //const ctaSection = document.getElementById("cta");

        const ctaContainer = document.createElement('div');
        ctaContainer.classList.add("cta-container");

        const ctaIcon = document.createElement("img");
        ctaIcon.setAttribute('src', '/assets/icons/like.svg');
        ctaIcon.setAttribute('alt', 'Like icon');
        ctaIcon.classList.add("cta-icon");

        const ctaLikes = document.createElement('p');
        ctaLikes.classList.add("cta-likes");
        //ctaLikes.textContent = currentLikes;

        const ctaPrice = document.createElement('p');
        ctaPrice.classList.add("cta-price");
        ctaPrice.textContent = price + `€/jour`;

        // ctaSection.appendChild(ctaContainer);
        ctaContainer.appendChild(ctaPrice);
        ctaContainer.appendChild(ctaIcon);
        //ctaContainer.appendChild(ctaLikes);

        return ctaContainer;
    }*/

    function getUserCardDOM() {

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

        /*********************************/



        /*************************************** */
        const article = document.createElement('article');
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute("src", picture);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const userCityCountry = document.createElement('p');
        userCityCountry.textContent = `${city}, ${country}`;

        const userTagline = document.createElement('p');
        userTagline.textContent = tagline;


        div.appendChild(img);
        article.appendChild(h2);
        article.appendChild(userCityCountry);
        article.appendChild(userTagline);

        displayDataByIdSection.appendChild(article);
        displayDataByIdSection.appendChild(div);

        const contactButton = document.querySelector(".contact_button");
        if (contactButton) {
            displayDataByIdSection.insertBefore(contactButton, div);
        }

        return displayDataByIdSection;

    }

    return { id, name, city, tagline, country, portrait, price, getUserCardDOM, getIdUserCardDOM };
}
