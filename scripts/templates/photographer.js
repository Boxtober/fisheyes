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
