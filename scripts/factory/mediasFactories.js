function mediasFactories(medias) {

    this.mediasFiltered = medias;

    const displayMedias = () => {
        filterByFilter();
        displayGalery();
    }

    const filterByFilter = () => {
        filterByLikes();
        filterByDate();
        filterByTitle();
    }

    const displayGalery = () => {
        const mediasSection = document.querySelector(".medias_section");
        mediasSection.innerHTML = '';

        mediasFiltered.forEach((media) => {
            const mediaFactories = mediaFactory(mediasFiltered);
            const mediaCard = mediaFactories.getMediaCardDOM(media);
            mediasSection.appendChild(mediaCard);
        });
    }

    function filterByLikes() {

        let dropdownOptions = document.getElementById("dropdown-options");
        let dropdownContent = document.querySelectorAll(".dropdown-content");
        const likes = document.querySelector(".filterByLikes");

        dropdownOptions.addEventListener("click", function () {
            dropdownContent.forEach((element) => {
                element.classList.toggle("active");
                console.log(element)
            })
            console.log('clic')
        });

        likes.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => b.likes - a.likes);
            displayGalery();
            console.log('FILTRE BY LIKES:', mediasFiltered);
        })

    }

    function filterByDate() {
        const dates = document.querySelector(".filterByDate")

        dates.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
            displayGalery();
            console.log('FILTRE BY Date:', mediasFiltered);
        })
    }

    function filterByTitle() {
        const title = document.querySelector(".filterByTitle")

        title.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => a.title.localeCompare(b.title));
            displayGalery();
            console.log('FILTRE BY TITLE:', mediasFiltered);
        })
    }

    return { medias, displayMedias, filterByFilter, displayGalery, filterByLikes, filterByDate, filterByTitle };

}