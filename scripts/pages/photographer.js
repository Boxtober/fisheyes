async function initPhotographerPage() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    const { photographers } = await getPhotographers();

    const photographer = photographers.find(photographer => photographer.id === parseInt(id, 10));

    if (!photographer) {
        console.error('Photographer not found');
        return null;
    }

    const photographersSectionId = document.querySelector(".photographer-details-section");
    const phographerFactories = photographerFactory(photographer);
    const detailUserCardDOM = phographerFactories.getIdUserCardDOM(photographer);

    photographersSectionId.appendChild(detailUserCardDOM);


    const { medias } = await getMediasByPhotographerId(photographer.id);

    const mediasFacto = mediasFactories(medias);
    mediasFacto.displayMedias()



    /*
        const filterByLikes = document.querySelector(".filterByLikes")
    
        filterByLikes.addEventListener("click", function () {
            const mediaCopy = [...medias];
            mediaCopy.sort((a, b) => b.likes - a.likes);
    
            console.log('FILTRE BY LIKES:', mediaCopy);
    
    
            mediaCopy.forEach((media) => {
    
                const mediaFactories = mediaFactory(media);
    
                const mediasSection = document.querySelector(".medias_section");
                const mediaCard = mediaFactories.getMediaCardDOM(media);
                mediasSection.appendChild(mediaCard);
            });
    
        });
    
    
        console.log('Medias:', medias);
    */
}

initPhotographerPage();
