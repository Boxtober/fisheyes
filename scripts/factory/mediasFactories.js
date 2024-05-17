function mediasFactories(medias) {

    let mediasFiltered = medias;
    // this.mediasFiltered = medias;

    let mediasObject = [];
    mediasFiltered.forEach((media, index) => {
        let mediaObj = {
            date: media.date,
            id: media.id,
            image: media.image,
            video: media.video,
            likes: media.likes,
            isLiked: 0,
            photographerId: media.photographerId,
            title: media.title,
            price: media.price
        };

        // Ajouter l'élément au tableau mediasObject
        mediasObject.push(mediaObj);
    });

    console.log('mediasObject', mediasObject);

    console.log('mediasFiltered', mediasFiltered)

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
        const mediaFactoryFiltered = mediaFactory(mediasObject);

        mediasObject.forEach((media, index) => {
            const mediaCard = mediaFactoryFiltered.getMediaCardDOM(media);

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
                mediasObject.sort((a, b) => b.likes - a.likes);
                displayGalery();
            } else if (event.key === 'Escape') {
                dropdownContent.forEach((element) => {
                    element.classList.remove("active");
                });
            }
        });

        likes.addEventListener("click", function () {
            mediasObject.sort((a, b) => b.likes - a.likes);
            displayGalery();
            console.log('FILTRE BY LIKES:', mediasObject);
        })
    }


    function filterByDate() {
        const dates = document.querySelector(".filterByDate")

        dates.addEventListener("keydown", function (event) {
            if (event.key === 'Enter') {
                mediasObject.sort((a, b) => new Date(b.date) - new Date(a.date));
                displayGalery();
            } else if (event.key === 'Escape') {
                dropdownContent.forEach((element) => {
                    element.classList.remove("active");
                });
            }
        });

        dates.addEventListener("click", function () {
            mediasObject.sort((a, b) => new Date(b.date) - new Date(a.date));
            displayGalery();
            console.log('FILTRE BY Date:', mediasObject);
        })
    }

    function filterByTitle() {
        const title = document.querySelector(".filterByTitle")


        title.addEventListener("keydown", function (event) {
            if (event.key === 'Enter') {
                mediasObject.sort((a, b) => a.title.localeCompare(b.title));
                displayGalery();
            } else if (event.key === 'Escape') {
                dropdownContent.forEach((element) => {
                    element.classList.remove("active");
                    console.log('echap')
                });
            }
        });

        title.addEventListener("click", function () {
            mediasObject.sort((a, b) => a.title.localeCompare(b.title));
            displayGalery();
            console.log('FILTRE BY TITLE:', mediasObject);
        })
    }

    return { medias, displayMedias, filterByFilter, displayGalery, filterByLikes, filterByDate, filterByTitle };

}