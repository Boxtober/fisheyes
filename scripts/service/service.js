async function getPhotographers() {
    try {
        const response = await fetch('/data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des photographes');
        }

        const data = await response.json();

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

async function getMediasByPhotographerId(photographerId) {
    try {
        const response = await fetch('/data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des médias');
        }

        const data = await response.json();
        console.log('All Data from JSON:', data);

        if (!data || !data.media) {
            console.error('Invalid data from JSON:', data);
            return {
                medias: []
            };
        }

        const medias = data.media.filter(media => media.photographerId === photographerId);
        return {
            medias
        };
    } catch (error) {
        console.error(error);
        return {
            medias: []
        };
    }
}
