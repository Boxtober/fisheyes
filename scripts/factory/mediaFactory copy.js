function mediaFactory(mediasFiltered) {

    const medias = mediasFiltered;
    let currentIndex = 0;

    function getMediaCardDOM(media) {

        const { id, photographerId, title, image, video, likes } = media;
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');

        h2.textContent = title;
        h3.textContent = likes + " ❤";
        article.appendChild(h2);
        article.appendChild(h3);

        if (image) {
            const img = createImage(media);
            article.appendChild(img);
        }
        if (video) {
            const vid = createVideo(media);
            article.appendChild(vid);
        }

        return article;
    }

    function createImage(media) {

        const img = document.createElement('img');
        img.setAttribute('src', `assets/${media.photographerId}/${media.image}`);
        img.setAttribute('alt', media.title);

        img.addEventListener('click', () => {
            currentIndex = medias.findIndex(element => element.id === media.id);
            displaylightBox(media);
        });

        return img;
    }


    function displaylightBox(media) {

        const lightBoxOverlay = document.createElement("div");
        lightBoxOverlay.classList.add("lightBox-overlay");

        const prev = document.createElement("button");
        prev.classList.add("prev-btn");
        const prevImage = document.createElement("img");
        prevImage.setAttribute('src', '/assets/icons/previous.svg');
        prevImage.setAttribute('alt', 'Previous');
        prev.appendChild(prevImage);


        const next = document.createElement("button");
        next.classList.add("next-btn");
        const nextImage = document.createElement("img");
        nextImage.setAttribute('src', '/assets/icons/next.svg');
        nextImage.setAttribute('alt', 'next');
        next.appendChild(nextImage);

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-btn");
        const closeIcon = document.createElement("img");
        closeIcon.setAttribute('src', '/assets/icons/close-lightbox.svg');
        closeIcon.setAttribute('alt', 'next');
        closeButton.appendChild(closeIcon);
        // condition si image.media existe -> 72/73 sinon cree element video
        const lightBoxImage = document.createElement('img');
        lightBoxImage.setAttribute('src', `assets/${media.photographerId}/${media.image}`);
        lightBoxImage.setAttribute('alt', media.title);

        const lightBox = document.querySelector('.lightbox');
        lightBox.innerHTML = '';
        lightBox.style.display = "flex";

        lightBox.appendChild(prev);
        lightBox.appendChild(lightBoxImage);
        lightBox.appendChild(next);
        lightBox.appendChild(closeButton);
        //creer function 'prevMedia' contenant 86 87 88 / + 'nextMedia' 
        //rappeler ses function dans event key
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

        closeButton.addEventListener('click', () => {
            lightBox.style.display = "none";
        });

    }

    function createVideo(videoData) {
        const video = document.createElement('video');

        video.setAttribute('src', `assets/${videoData.photographerId}/${videoData.video}`);
        video.setAttribute('alt', videoData.title);


        video.addEventListener('click', () => {
            currentIndex = medias.findIndex(element => element.id === videoData.id);
            displaylightBox(videoData);
        });

        return video;

    }


    /*
        function createVideo(videoData) {
            const video = document.createElement('video');
    
            video.setAttribute('src', `assets/${videoData.photographerId}/${videoData.video}`);
            video.setAttribute('alt', videoData.title);
            return video;
        }
    */



    return { getMediaCardDOM, createImage, createVideo, medias };
}



/*

function mediaFactory(mediasFiltered) {

    const medias = mediasFiltered;
    function getMediaCardDOM(media) {

        const { id, photographerId, title, image, video, likes } = media;
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');

        h2.textContent = title;
        h3.textContent = likes + " ❤";
        article.appendChild(h2);
        article.appendChild(h3);

        if (image) {
            const img = createImage(media);
            article.appendChild(img);
        }
        if (video) {
            const vid = createVideo(media);
            article.appendChild(vid);
        }

        return article;
    }

    function createImage(media) {
        const img = document.createElement('img');
        img.setAttribute('src', `assets/${media.photographerId}/${media.image}`);
        img.setAttribute('alt', media.title);
        //addeventlist 
        const index = medias.findIndex((element) => {
            return element.id === media.id;
        })
        const indexPrev = (index - 1) < 0 ? medias.length - 1 : index - 1;
        const indexNext = (index + 1) >= medias.length ? 0 : index + 1;
        console.log(indexPrev)
        console.log(index)
        console.log(indexNext)

        console.log(medias[index - 1]) // 
        img.onclick = displaylightBox(media, medias[indexPrev].id, medias[indexNext].id); //<-- donner id du media d'avant
        console.log(media)
        console.log(medias)

        return img;

    }

    function createVideo(videoData) {
        const video = document.createElement('video');
        //video.setAttribute('src', `/assets/${videoData.video}`);
        video.setAttribute('src', `assets/${videoData.photographerId}/${videoData.video}`);
        // video.setAttribute('controls', false);
        video.setAttribute('alt', videoData.title);
        return video;
    }


    return { getMediaCardDOM, createImage, createVideo, medias };
}
*/