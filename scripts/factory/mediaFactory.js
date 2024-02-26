
function mediaFactory(media) {
    const { id, photographerId, title, image, likes, date, price } = media;

    function getMediaCardDOM() {
        if (media.image) {
            return createImage(media);
        } else if (media.video) {
            return createVideo(media);
        } else {
            console.error('Unknown media type:', media);
            return null;
        }
    }

    function createImage(imageData) {
        const img = document.createElement('img');
        img.setAttribute('src', `/assets/${imageData.image}`);
        img.setAttribute('alt', imageData.title);
        return img;
    }

    function createVideo(videoData) {
        const video = document.createElement('video');
        video.setAttribute('src', `/assets/${videoData.video}`);
        video.setAttribute('controls', true);
        video.setAttribute('alt', videoData.title);
        return video;
    }


    console.log('MEDIA -----> ', media)
    return { img, video, getMediaCardDOM, photographerId };
}