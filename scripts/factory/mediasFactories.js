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
    let dropdownOptions = document.getElementById("dropdown-options");
    let dropdownContent = document.querySelectorAll(".dropdown-content");

    const likes = document.querySelector(".filterByLikes");

    const displayGalery = () => {
        const mediasSection = document.querySelector(".medias_section");
        mediasSection.innerHTML = '';
        const mediaFactoryHello = mediaFactory(mediasFiltered);
        //const mediaFactory = mediaFactory(mediasFiltered);

        //  mediaFactories.getCtaDom();

        mediasFiltered.forEach((media, index) => {
            const mediaCard = mediaFactoryHello.getMediaCardDOM(media);

            //  mediaCard.setAttribute('tabindex', index + 1);
            mediaCard.setAttribute('aria-label', `Media ${index + 1}: ${media.title}`);
            mediasSection.appendChild(mediaCard);

        });

    }

    function filterByLikes() {

        dropdownOptions.addEventListener("click", function () {
            dropdownContent.forEach((element) => {
                element.classList.toggle("active");
                console.log(element)
            })
            console.log('clic')
        });

        dropdownOptions.addEventListener("keydown", function (event) {

            if (event.key === 'Enter') {
                dropdownContent.forEach((element) => {
                    element.classList.toggle("active");
                })
            } else if (event.key === 'Escape') {
                dropdownContent.forEach((element) => {
                    element.classList.remove("active");
                });
            }
            dropdownOptions.focus();
        });

        likes.addEventListener("keydown", function (event) {
            if (event.key === 'Enter') {
                dropdownContent.forEach((element) => {
                    element.classList.toggle("active");
                })
                mediasFiltered.sort((a, b) => b.likes - a.likes);
                displayGalery();
            } else if (event.key === 'Escape') {
                dropdownContent.forEach((element) => {
                    element.classList.remove("active");
                });
            }
        });

        likes.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => b.likes - a.likes);
            displayGalery();
            console.log('FILTRE BY LIKES:', mediasFiltered);
        })
    }


    function filterByDate() {
        const dates = document.querySelector(".filterByDate")

        dates.addEventListener("keydown", function (event) {
            if (event.key === 'Enter') {
                mediasFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
                displayGalery();
            } else if (event.key === 'Escape') {
                dropdownContent.forEach((element) => {
                    element.classList.remove("active");
                });
            }
        });

        dates.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
            displayGalery();
            console.log('FILTRE BY Date:', mediasFiltered);
        })
    }

    function filterByTitle() {
        const title = document.querySelector(".filterByTitle")


        title.addEventListener("keydown", function (event) {
            if (event.key === 'Enter') {
                mediasFiltered.sort((a, b) => a.title.localeCompare(b.title));
                displayGalery();
            } else if (event.key === 'Escape') {
                dropdownContent.forEach((element) => {
                    element.classList.remove("active");
                    console.log('echap')
                });
            }
        });

        title.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => a.title.localeCompare(b.title));
            displayGalery();
            console.log('FILTRE BY TITLE:', mediasFiltered);
        })
    }

    return { medias, displayMedias, filterByFilter, displayGalery, filterByLikes, filterByDate, filterByTitle };

}