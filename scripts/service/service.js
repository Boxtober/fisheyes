async function getPhotographers() {
    try {
        const response = await fetch('/data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des photographes');
        }

        const data = await response.json();
        console.log('Data from JSON:', data);

        if (!data || !data.photographers) {
            console.error('Invalid data from JSON:', data);
            return {
                photographers: []
            };
        }

        return {
            photographers: data.photographers,
        };

    } catch (error) {
        console.error(error);

        return {
            photographers: []
        };
    }
}

async function getMediasByPhotographerId() {

    const media = mediaFactory().createMedia(photographer);
    article.appendChild(media);

    const { medias } = await getMediasByPhotographerId($id);

    medias.forEach((media) => {
        const mediasSection = document.querySelector(".medias_section");
        const mediaFactories = mediaFactory(media);
        const mediaCard = mediaFactories.getMediaCardDOM();

        mediasSection.appendChild(mediaCard);
    });
}