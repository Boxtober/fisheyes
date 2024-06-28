// eslint-disable-next-line 
function mediaFactory(mediasFiltered) {
    console.log('mediasFiltered', mediasFiltered)
    console.log('mediasFiltered', mediasFiltered)
    let totalLikes = mediasFiltered.reduce((total, { likes }) => total + likes, 0);
    const medias = mediasFiltered;
    let currentIndex = 0;

    function updateLikesCounter(likes) {
        const ctaLikes = document.querySelector(".cta-likes");
        if (ctaLikes) {
            ctaLikes.textContent = likes;
        }
    }

    function likeIconClick(isLiked) {

        if (isLiked === 1) {
            totalLikes--;
        } else {
            totalLikes++;
        }
        updateLikesCounter(totalLikes);
    }

    function getMediaCardDOM(media) {
        let { title, image, video, likes, isLiked } = media;

        const article = document.createElement('article');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add("row");

        const gapDiv = document.createElement('div');
        gapDiv.classList.add("gap");

        const likeIcon = document.createElement("img");
        likeIcon.setAttribute('src', 'assets/icons/like.svg');
        likeIcon.setAttribute('alt', 'like');
        likeIcon.classList.add("cta-icon");
        likeIcon.setAttribute('tabindex', '0');

        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');

        h2.textContent = title;
        h3.textContent = likes;
        updateLikedClass(h3, isLiked); // Mettre à jour la classe 'liked' une seule fois

        likeIcon.addEventListener('click', () => {
            toggleLike();
        });

        likeIcon.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                toggleLike();
            }
        });

        function toggleLike() {
            if (isLiked === 1) {
                likes--;
                isLiked--;
                totalLikes--;
            } else {
                likes++;
                isLiked++;
                totalLikes++;
            }

            media.likes = likes;
            media.isLiked = isLiked;
            h3.textContent = likes;
            updateLikedClass(h3, isLiked); // Mettre à jour la classe 'liked'
            updateLikesCounter(totalLikes);
        }

        if (image) {
            const img = createImage(media);
            article.appendChild(img);
        }
        if (video) {
            const vid = createVideo(media);
            article.appendChild(vid);
        }

        rowDiv.appendChild(h2);
        gapDiv.appendChild(h3);
        gapDiv.appendChild(likeIcon);
        rowDiv.appendChild(gapDiv);
        article.appendChild(rowDiv);

        return article;
    }

    // Fonction pour mettre à jour la classe 'liked'
    function updateLikedClass(element, isLiked) {
        if (isLiked === 1) {
            element.classList.add('liked');
        } else {
            element.classList.remove('liked');
        }
    }


    function createImage(media) {

        const img = document.createElement('img');
        img.setAttribute('src', `assets/${media.photographerId}/${media.image}`);
        img.setAttribute('alt', media.title);
        img.setAttribute('tabindex', '7');

        img.addEventListener('click', () => {
            currentIndex = medias.findIndex(element => element.id === media.id);
            displaylightBox(media);
        });

        img.addEventListener('keydown', (e) => {
            e.stopImmediatePropagation();
            if (e.key === 'Enter') {
                currentIndex = medias.findIndex(element => element.id === media.id);
                displaylightBox(media);
            }
        });

        return img;
    }


    function createVideo(media) {
        const video = document.createElement('video');
        video.setAttribute('src', `assets/${media.photographerId}/${media.video}`);
        video.setAttribute('alt', media.title);
        video.setAttribute('tabindex', '7');

        video.addEventListener('click', () => {
            currentIndex = medias.findIndex(element => element.id === media.id);
            displaylightBox(media);
        });

        video.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                currentIndex = medias.findIndex(element => element.id === media.id);
                displaylightBox(media);
            }
        });

        return video;
    }


    function displaylightBox(media) {

        const mainPage = document.querySelector('body');
        mainPage.setAttribute('tabindex', '0');
        const allTabIndexElements = document.querySelectorAll('[tabindex]');


        const prev = document.createElement("button");
        prev.classList.add("prev-btn");
        const prevImage = document.createElement("img");
        prevImage.setAttribute('src', 'assets/icons/previous.svg');
        prevImage.setAttribute('alt', 'Previous');
        prevImage.setAttribute('aria-label', 'Image précedante');
        prev.appendChild(prevImage);


        const next = document.createElement("button");
        next.classList.add("next-btn");
        next.setAttribute('aria-label', 'Image suivante');
        const nextImage = document.createElement("img");
        nextImage.setAttribute('src', 'assets/icons/next.svg');
        nextImage.setAttribute('alt', 'next');

        next.appendChild(nextImage);

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-btn");
        closeButton.setAttribute('aria-label', 'Fermer la galerie');
        const closeIcon = document.createElement("img");
        closeIcon.setAttribute('src', 'assets/icons/close-lightbox.svg');
        closeIcon.setAttribute('alt', 'close');
        closeButton.appendChild(closeIcon);

        closeButton.focus();
        allTabIndexElements.forEach(element => {
            element.setAttribute('tabindex', '-1');
        });

        closeButton.addEventListener('click', () => {
            mainPage.setAttribute('tabindex', '0');

            allTabIndexElements.forEach(element => {
                element.setAttribute('tabindex', '0');
            });
        });

        const lightBoxImage = document.createElement('img');
        const lightBoxTitle = document.createElement('p');
        lightBoxTitle.textContent = media.title;
        const lightBoxVideo = document.createElement('video');

        if (media.image) {
            lightBoxImage.setAttribute('src', `assets/${media.photographerId}/${media.image}`);
            lightBoxImage.setAttribute('alt', media.title);
        } else if (media.video) {
            lightBoxVideo.setAttribute('src', `assets/${media.photographerId}/${media.video}`);
            lightBoxVideo.setAttribute('alt', media.title);
            lightBoxVideo.setAttribute('controls', '');
        }

        const lightBox = document.querySelector('#lightBox-modal');
        const mediaContainer = document.createElement('div');

        lightBox.innerHTML = '';
        lightBox.style.display = "flex";
        lightBox.focus();
        lightBox.appendChild(prev);

        if (media.image || media.video) {
            lightBox.appendChild(mediaContainer);
            mediaContainer.appendChild(media.image ? lightBoxImage : lightBoxVideo);
            mediaContainer.appendChild(lightBoxTitle);
        }

        lightBox.appendChild(next);
        lightBox.appendChild(closeButton);

        prev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + medias.length) % medias.length;
            const prevMedia = medias[currentIndex];
            displaylightBox(prevMedia);

        });

        next.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % medias.length;
            const nextMedia = medias[currentIndex];
            displaylightBox(nextMedia);
        });


        document.addEventListener("keyup", (e) => {
            e.stopImmediatePropagation();
            if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % medias.length;
                const nextMedia = medias[currentIndex];
                console.log('next :', nextMedia)
                displaylightBox(nextMedia);
            }

            else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + medias.length) % medias.length;
                const prevMedia = medias[currentIndex];
                displaylightBox(prevMedia);
            }

        });

        closeButton.addEventListener('click', () => {
            lightBox.style.display = "none";
        });

    }

    const ctaContainer = getCtaDom(totalLikes);
    return { getMediaCardDOM, createImage, createVideo, medias, likeIconClick, ctaContainer };
}

function getCtaDom(likes) {
    const ctaContainer = document.querySelector(".cta-container");
    let ctaIconElement = document.querySelector('.cta-icon');
    let ctaLikesElement = document.querySelector('.cta-likes');

    if (ctaIconElement && ctaLikesElement) {
        ctaIconElement.remove();
        ctaLikesElement.remove();
    }

    const ctaIcon = document.createElement("img");
    ctaIcon.setAttribute('src', 'assets/icons/like.svg');
    ctaIcon.setAttribute('alt', 'Like icon');
    ctaIcon.classList.add("cta-icon");

    const ctaLikes = document.createElement('p');
    ctaLikes.classList.add("cta-likes");
    ctaLikes.textContent = likes;
    ctaContainer.appendChild(ctaIcon);
    ctaContainer.appendChild(ctaLikes);
    return ctaContainer;
}