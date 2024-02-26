async function initPhotographerPage() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    const { photographers } = await getPhotographers();

    const photographer = photographers.find(photographer => photographer.id === parseInt(id, 10));

    if (!photographer) {
        console.error('Photographer not found');
        return null;
    }
    //photographers.forEach((photographer) => {

    const photographersSectionId = document.querySelector(".photographer-details-section");
    const phographerFactories = photographerFactory(photographer);
    const detailUserCardDOM = phographerFactories.getIdUserCardDOM(photographer);

    photographersSectionId.appendChild(detailUserCardDOM);
    //});
    console.log('PHOTOGRAPHE DATA ----> ', photographer)

    // const { photographers } = await getPhotographers();
    // const { displayDataById } = idPhotographerTemplate(photographers, id);
    // displayDataById(photographers)
    //
    //
    /*  if (displayDataById) {
          displayDataById.getdisplayDataByIdDOM();
      }
      */
    /*
   if (displayDataById) {
       displayDataById.displayDataDetail();
   }*/

    /* -- Krystof
        const media = mediaFactory().createMedia(photographer);
        article.appendChild(media);
    
    
        // Récupère les datas des photographes
        const { medias } = await getMediasByPhotographerId($id);
        // boucle
        medias.forEach((media) => {
            const mediasSection = document.querySelector(".medias_section");
            const mediaFactories = mediaFactory(media);
            const mediaCard = mediaFactories.getMediaCardDOM();
    
            mediasSection.appendChild(mediaCard);
        });
    */

    console.log('HELLOOOOO:')
}

initPhotographerPage();

