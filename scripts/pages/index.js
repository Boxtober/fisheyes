async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // boucle
    photographers.forEach((photographer) => {
        const photographersSection = document.querySelector(".photographer_section");
        const phographerFactories = photographerFactory(photographer);
        const photographerCard = phographerFactories.getUserCardDOM();
        photographersSection.appendChild(photographerCard);

    });

}

init();
