function mediasFactories(medias) {

    this.mediasFiltered = medias;

    function displayMedias() {

        filterByLikes()
        filterByDate()
        filterByTitle()

        const mediasSection = document.querySelector(".medias_section");

        mediasSection.innerHTML = '';

        mediasFiltered.forEach((media) => {

            const mediaFactories = mediaFactory(media);
            const mediaCard = mediaFactories.getMediaCardDOM(media);
            mediasSection.appendChild(mediaCard);

        });

    }

    function filterByLikes() {
        const likes = document.querySelector(".filterByLikes")
        likes.addEventListener("click", function () {

            mediasFiltered.sort((a, b) => b.likes - a.likes);
            displayMedias();
            console.log('FILTRE BY LIKES:', mediasFiltered);
        })
    }

    function filterByDate() {
        const dates = document.querySelector(".filterByDate")
        dates.addEventListener("click", function () {

            mediasFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
            displayMedias();

            console.log('FILTRE BY Date:', mediasFiltered);
        })
    }

    function filterByTitle() {
        const title = document.querySelector(".filterByTitle")
        title.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => a.title.localeCompare(b.title));
            displayMedias();
            console.log('FILTRE BY TITLE:', mediasFiltered);
        })

    }


    // displayMedias();

    return { medias, displayMedias, filterByLikes, filterByDate, filterByTitle };
}
