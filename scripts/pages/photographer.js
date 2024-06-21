async function initPhotographerPage() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    // eslint-disable-next-line 
    const { photographers } = await getPhotographers();

    const photographer = photographers.find(photographer => photographer.id === parseInt(id, 10));

    if (!photographer) {
        console.error('Photographer not found');
        return null;
    }

    const photographersSectionId = document.querySelector(".photographer-details-section");
    // eslint-disable-next-line 
    const photographerFactories = photographerFactory(photographer);

    const detailUserCardDOM = photographerFactories.getIdUserCardDOM(photographer);

    photographersSectionId.appendChild(detailUserCardDOM);
    // eslint-disable-next-line 
    const { medias } = await getMediasByPhotographerId(photographer.id);
    // eslint-disable-next-line 
    const mediasFacto = mediasFactories(medias);
    mediasFacto.displayMedias();

}

initPhotographerPage();
