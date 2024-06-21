async function init() {
    // Récupère les datas des photographes
    //eslint-disable-next-line 
    const { photographers } = await getPhotographers();
    console.log('photographers', photographers)
    // boucle
    photographers.forEach((photographerObject) => {
        const photographersSection = document.querySelector(".photographer_section");
        // eslint-disable-next-line 
        const photographerFactories = photographerFactory(photographerObject);
        const photographerCard = photographerFactories.getUserCardDOM();
        photographersSection.appendChild(photographerCard);

    });
}

init();
