function mediaFactory(media) {
    const { id, photographerId, title, image, video } = media;

    function getMediaCardDOM() {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');

        //const image = document.createElement('img');
        //    image.setAttribute("src", image);

        h2.textContent = title;

        article.appendChild(h2);
        // article.appendChild(image)


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
        img.setAttribute('src', `/assets/${media.photographerId}/${media.image}`);
        img.setAttribute('alt', media.title);

        return img;
    }

    function createVideo(videoData) {
        const video = document.createElement('video');
        video.setAttribute('src', `/assets/${videoData.video}`);
        video.setAttribute('controls', true);
        video.setAttribute('alt', videoData.title);
        return video;
    }


    return { getMediaCardDOM, createImage, createVideo };
}
