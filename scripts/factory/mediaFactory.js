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


        img.addEventListener('click', function () {
            displaylightBox(media, medias[indexPrev].id, medias[indexNext].id);
        }); //<-- donner id du media d'avant

        console.log(media)
        console.log(medias)

        return img;
    }

    const lightBoxOverlay = document.createElement("div");
    lightBoxOverlay.classList.add("lightBox-overlay");
    const lightBox = document.querySelector('.lightbox');
    const close = document.querySelector('.close-lightbox');

    function displaylightBox(media, idPrev, idNext) {
        const lightBoxImage = document.createElement('img');
        lightBoxImage.setAttribute('src', `assets/${media.photographerId}/${media.image}`);
        lightBoxImage.setAttribute('alt', media.title);

        const lightBox = document.querySelector('.lightbox');
        lightBox.innerHTML = '';
        lightBox.style.display = "block";
        lightBox.appendChild(lightBoxImage);
        /* 
               lightBox.style.display = "block";
               lightBoxOverlay.appendChild(lightBox);
               document.body.appendChild(lightBoxOverlay);
       */
        /*
          console.log('ici', media)
          console.log('apres', idPrev)
          console.log('avant', idNext)
  */        console.log('ici', media)
        console.log('apres', idPrev)
        console.log('avant', idNext)
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