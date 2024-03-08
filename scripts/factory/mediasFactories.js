function mediasFactories(medias) {

    this.mediasFiltered = medias;

    function displayMedias() {

        //appel function display filter

        mediasFiltered.forEach((media) => {

            const mediaFactories = mediaFactory(media);

            const mediasSection = document.querySelector(".medias_section");
            const mediaCard = mediaFactories.getMediaCardDOM(media);

            //supprimer avant de filter (mediasection.remove...)
            mediasSection.appendChild(mediaCard);
        });

    }

    //cree function filter

    console.log('Medias:', medias);
    return { medias, displayMedias };
}

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
*/

/*

async function mediasFactories(medias) {
    const medias = media;

    const { medias } = await getMediasByPhotographerId(photographer.id);
    // const mediaFactories = mediaFactory(medias);

    // boucle

    //remplacer par un gestionnaire de media

    // function mediaFactoryS(mediaS) { <-- recois les medias dans un tableau + fonction de fltre
    medias.forEach((media) => {
        // Passer les données des médias à mediaFactory
        const mediaFactories = mediaFactory(media);
        const mediasSection = document.querySelector(".medias_section");
        const mediaCard = mediaFactories.getMediaCardDOM(media);
        mediasSection.appendChild(mediaCard);
    });

    console.log('Medias:', medias);

}


*/