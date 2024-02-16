async function initPhotographerPage() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    if (!id) {
        console.error('Photographer ID not found in the URL');
        return;
    }

    const { photographers } = await getPhotographers();
    const { displayDataById } = idPhotographerTemplate(photographers, id);
    displayDataById(photographers)
    /*  if (displayDataById) {
          displayDataById.getdisplayDataByIdDOM();
      }
      */
    /*
   if (displayDataById) {
       displayDataById.displayDataDetail();
   }*/
    console.log('HELLOOOOO:')
}

initPhotographerPage();

