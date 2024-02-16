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