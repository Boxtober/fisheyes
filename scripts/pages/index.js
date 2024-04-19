async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // boucle
    photographers.forEach((photographer) => {
        const photographersSection = document.querySelector(".photographer_section");

        // const cta = document.getElementById("cta")

        const phographerFactories = photographerFactory(photographer);


        const photographerCard = phographerFactories.getUserCardDOM();

        // const photographerCta = mediaFactory.getCtaDom();

        photographersSection.appendChild(photographerCard);
        //cta.appendChild(photographerCta);

    });

}

init();
