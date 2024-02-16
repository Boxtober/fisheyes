async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // boucle

    photographers.forEach((photographer) => {
        const photographersSection = document.querySelector(".photographer_section");
        const phographerFactory = photographerTemplate(photographer);
        const photographerCard = phographerFactory.getUserCardDOM();

        photographersSection.appendChild(photographerCard);
    });
    /*
        const { displayData } = photographerTemplate(photographers);
        displayData(photographers);
    
        console.log('Photographers Data:', photographers);*/
}

init();
