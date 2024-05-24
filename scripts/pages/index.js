async function init() {
    // Récupère les datas des photographes
    //eslint-disable-next-line 
    const { photographers } = await getPhotographers();
    // boucle
    photographers.forEach((photographer) => {
        // eslint-disable-next-line 
        const photographersSection = document.querySelector(".photographer_section");
        const phographerFactories = photographerFactory(photographer);
        const photographerCard = phographerFactories.getUserCardDOM();
        photographersSection.appendChild(photographerCard);

    });
}

init();
