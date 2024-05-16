function mediaFactory(mediasFiltered) {
    const likesMap = new Map(mediasFiltered.map(media => [media.id, media.likes]));
    console.log(likesMap)
    console.log(mediasFiltered)
    //    let totalLikes = Array.from(likesMap.values()).reduce((total, likes) => total + likes, 0);
    let currentLike = 0;
    let totalLikes = mediasFiltered.reduce((total, { likes }) => total + likes, 0);
    console.log(totalLikes);
    const medias = mediasFiltered;
    let currentIndex = 0;

    function updateLikesCounter(likes) {
        const ctaLikes = document.querySelector(".cta-likes");
        if (ctaLikes) {
            ctaLikes.textContent = likes;
        }
    }

    function likeIconClick(mediaId) {
        // const currentLikes = likesMap.get(mediaId);

        const currentLikes = mediasFiltered.find(media => media.id === mediaId).likes;
        console.log(currentLikes)
        if (currentLike === 1) {
            let media = mediasFiltered.find(media => media.id === mediaId)
            console.log(media)
            media.likes--;
            currentLike--;
            //likesMap.set(mediaId, 0);
            totalLikes--;
        } else {

            let media = mediasFiltered.find(media => media.id === mediaId)
            console.log(media);

            media.likes++;
            currentLike++;

            //likesMap.set(mediaId, 1);
            totalLikes++;
        }

        console.log('totalLikes :', totalLikes);
        updateLikesCounter(totalLikes);
    }



    function getMediaCardDOM(media) {
        const { id, title, image, video, likes } = media;

        const article = document.createElement('article');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add("row");

        const gapDiv = document.createElement('div');
        gapDiv.classList.add("gap");

        const likeIcon = document.createElement("img");
        likeIcon.setAttribute('src', '/assets/icons/like.svg');
        likeIcon.setAttribute('alt', 'like');

        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');

        h2.textContent = title;
        h3.textContent = likes;

        let liked = media.liked || false;


        likeIcon.addEventListener('click', () => {
            if (currentLike === 1) {

                h3.textContent = media.likes;
                h3.classList.add('liked');

            } else {

                h3.textContent = media.likes;
                h3.classList.remove('liked');
            }
            likeIconClick(id)
        });

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


    function createImage(media) {

        const img = document.createElement('img');
        img.setAttribute('src', `assets/${media.photographerId}/${media.image}`);
        img.setAttribute('alt', media.title);
        img.setAttribute('tabindex', '7');

        img.addEventListener('click', () => {
            currentIndex = medias.findIndex(element => element.id === media.id);
            displaylightBox(media);
        });

        img.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
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

        video.addEventListener('click', () => {
            currentIndex = medias.findIndex(element => element.id === media.id);
            displaylightBox(media);
        });
        return video;
    }

    function displaylightBox(media) {
        lightBoxIsOpen = true;
        const mainPage = document.querySelector('body');
        mainPage.setAttribute('tabindex', '-1');
        const allTabIndexElements = document.querySelectorAll('[tabindex]');
        const lightBoxOverlay = document.createElement("div");
        lightBoxOverlay.classList.add("lightBox-overlay");

        const prev = document.createElement("button");
        prev.classList.add("prev-btn");
        const prevImage = document.createElement("img");
        prevImage.setAttribute('src', '/assets/icons/previous.svg');
        prevImage.setAttribute('alt', 'Previous');
        prevImage.setAttribute('aria-label', 'Previous image');
        prev.appendChild(prevImage);


        const next = document.createElement("button");
        next.classList.add("next-btn");
        const nextImage = document.createElement("img");
        nextImage.setAttribute('src', '/assets/icons/next.svg');
        nextImage.setAttribute('alt', 'next');
        nextImage.setAttribute('aria-label', 'Next image');
        next.appendChild(nextImage);

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-btn");
        closeButton.setAttribute('aria-label', 'Close dialog');
        const closeIcon = document.createElement("img");
        closeIcon.setAttribute('src', '/assets/icons/close-lightbox.svg');
        closeIcon.setAttribute('alt', 'close');
        closeButton.appendChild(closeIcon);



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
        }

        const lightBox = document.querySelector('#lightBox-modal');
        lightBox.setAttribute('aria-label', 'image closeup view');

        const mediaContainer = document.createElement('div');

        lightBox.innerHTML = '';
        lightBox.style.display = "flex";

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
            console.log(nextMedia)
            displaylightBox(nextMedia);
        });

        document.addEventListener("keydown", (e) => {
            if (lightBoxIsOpen) {
                if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % medias.length;
                    const nextMedia = medias[currentIndex];
                    displaylightBox(nextMedia);
                } else if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + medias.length) % medias.length;
                    const prevMedia = medias[currentIndex];
                    displaylightBox(prevMedia);
                }
            }
        });

        closeButton.addEventListener('click', () => {
            lightBox.style.display = "none";
            lightBoxIsOpen = false;
        });

    }

    const ctaContainer = getCtaDom(totalLikes);

    return { getMediaCardDOM, createImage, createVideo, medias, likeIconClick, ctaContainer };
}

function getCtaDom(likes) { // ajouter le paramètre likes
    const ctaContainer = document.querySelector(".cta-container");
    let ctaIconElement = document.querySelector('.cta-icon');
    let ctaLikesElement = document.querySelector('.cta-likes');

    if (ctaIconElement && ctaLikesElement) {
        ctaIconElement.remove();
        ctaLikesElement.remove();
    }

    const ctaIcon = document.createElement("img");
    ctaIcon.setAttribute('src', '/assets/icons/like.svg');
    ctaIcon.setAttribute('alt', 'Like icon');
    ctaIcon.classList.add("cta-icon");

    const ctaLikes = document.createElement('p');
    ctaLikes.classList.add("cta-likes");
    ctaLikes.textContent = likes; // utiliser le paramètre likes ici

    ctaContainer.appendChild(ctaIcon);
    ctaContainer.appendChild(ctaLikes);
    return ctaContainer;
}