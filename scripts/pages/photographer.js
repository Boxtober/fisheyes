async function initPhotographerPage() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    if (!id) {
        console.error('Photographer ID not found in the URL');
        return;
    }

    const { photographers } = await getPhotographers();
    const { photographerDetails } = createPhotographerDetailsFactory(photographers, id);
    photographerDetails(photographers)
    /*  if (photographerDetails) {
          photographerDetails.getPhotographerDetailsDOM();
      }
      */
    if (photographerDetails) {
        photographerDetails.displayDataDetail();
    }
    console.log('HELLOOOOO:')
}

initPhotographerPage();





// Appeler la fonction d'initialisation de la page du photographe



//Mettre le code JavaScript lié à la page photographer.html


// elle est dans le fichier qui est appelé dans le fichier photographer.html (page/photographer.js)

/*
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);

    console.log('Photographers Data:', photographers);
}

init();*/

// photographer.js