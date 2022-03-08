export default function Lightbox() {

    const lightboxDOM = document.querySelector('.lightbox');
    lightboxDOM.style.display = "none";
    const links = Array.from(document.querySelectorAll('.article-media'));
    const gallery = links.map(link => link.getAttribute('src'));
    const mediaVideo = document.querySelector('.media__video');
    const mediaImg = document.querySelector('.media__img');

// Open Modal
    links.forEach(link => {link.addEventListener('click', e =>
        {
        e.preventDefault();
        if(link.tagName == 'VIDEO') {
            mediaVideo.setAttribute("src", e.target.getAttribute('src'));
            mediaImg.setAttribute("src", "");
            mediaImg.style.display = "none";
            mediaVideo.style.display = "block";
    }

        if(link.tagName =='IMG') {
            mediaImg.setAttribute("src", e.target.getAttribute('src'));
            mediaVideo.setAttribute("src", "");
            mediaVideo.style.display = "none";
            mediaImg.style.display = "block";
        }

        lightboxDOM.style.display = "block";
    })});

// Close Modal
    const closeModal = document.querySelector('.lightbox__close')
        closeModal.addEventListener('click', e => { 
            lightboxDOM.style.display = "none" 
        });

// Event listener next
    const nextModal = document.querySelector('.lightbox__next')
        nextModal.addEventListener('click', e => {
            const mediasUrl = document.querySelectorAll('.lightbox__media');
            const mediaUrl = Array.from(mediasUrl).find(el => el.style.display === "block");
            const url2 = mediaUrl.src.split('assets')[1];
            let url = "assets" + url2;
            url = decodeURI(url);
            let i = gallery.findIndex(image => image == url)
            if (i == gallery.length - 1) {
                i = -1;
            }
            if(gallery[i+1].search(/.mp4/) == '-1') {
                mediaImg.setAttribute("src", gallery[i + 1]);
                mediaVideo.style.display = "none";
                mediaImg.style.display = "block";
            }
            if(gallery[i+1].search(/.jpg/) == '-1') {
                mediaVideo.setAttribute("src", gallery[i + 1]);
                mediaImg.style.display = "none";
                mediaVideo.style.display = "block";
            }
            
        });

// Event listener previous
    const prevModal = document.querySelector('.lightbox__prev')
        prevModal.addEventListener('click', e => {
            const mediasUrl = document.querySelectorAll('.lightbox__media');
            const mediaUrl = Array.from(mediasUrl).find(el => el.style.display === "block");
            const url2 = mediaUrl.src.split('assets')[1];
            let url = "assets" + url2;
            url = decodeURI(url);
            let i = gallery.findIndex(image => image == url)
            if (i == 0) {
                i = gallery.length;
            }
            if(gallery[i-1].search(/.mp4/) == '-1') {
                mediaImg.setAttribute("src", gallery[i - 1]);
                mediaVideo.style.display = "none";
                mediaImg.style.display = "block";
            }
            if(gallery[i-1].search(/.jpg/) == '-1') {
                mediaVideo.setAttribute("src", gallery[i - 1]);
                mediaImg.style.display = "none";
                mediaVideo.style.display = "block";
            }
        });


}

