
export default function Lightbox(arrayGallery) {

    const lightboxDOM = document.querySelector('.lightbox');
    lightboxDOM.style.display = "none";
    const links = Array.from(document.querySelectorAll('.article-media'));
    const mediaVideo = document.querySelector('.media__video');
    const mediaImg = document.querySelector('.media__img');
    const mediaName = document.querySelector('.lightbox__media__name');

// Open Modal
    links.forEach(link => {link.addEventListener('click', e =>
        {
        e.preventDefault();
        if(link.tagName == 'VIDEO') {
            mediaVideo.setAttribute("src", e.target.getAttribute('src'));
            mediaVideo.id = link.id;
            let i = arrayGallery.findIndex(element => element.id == mediaVideo.id);
            mediaName.textContent = arrayGallery[i].title;
            mediaImg.id = "";
            mediaImg.setAttribute("src", "");
            mediaImg.style.display = "none";
            mediaVideo.style.display = "block";
    }

        if(link.tagName =='IMG') {
            mediaImg.setAttribute("src", e.target.getAttribute('src'));
            mediaImg.id = link.id;
            let i = arrayGallery.findIndex(element => element.id == mediaImg.id);
            mediaName.textContent = arrayGallery[i].title;
            mediaVideo.id = "";
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

            let imgID = mediaImg.id;
            let videoID = mediaVideo.id;
            mediaName.textContent = "";

            if (imgID =="") {
                let i = 0;
                i = arrayGallery.findIndex(element => element.id == videoID);
                if (i == arrayGallery.length - 1) {
                    i = -1;
                }
                if (arrayGallery[i+1].hasOwnProperty("video")) {
                    mediaVideo.setAttribute("src", arrayGallery[i+1].url);
                    mediaVideo.id = arrayGallery[i+1].id;
                    mediaName.textContent = arrayGallery[i+1].title;
                    mediaImg.style.display = "none";
                    mediaVideo.style.display = "block";
                }
                if (arrayGallery[i+1].hasOwnProperty("image")) {
                    mediaVideo.id = "";
                    mediaVideo.setAttribute("src", "");
                    mediaImg.setAttribute("src", arrayGallery[i+1].url);
                    mediaImg.id = arrayGallery[i+1].id;
                    mediaName.textContent = arrayGallery[i+1].title;
                    mediaVideo.style.display = "none";
                    mediaImg.style.display = "block";
                } 
            }

            if (videoID =="") {
                let j = 0;
                j = arrayGallery.findIndex(element => element.id == imgID);
                if (j == arrayGallery.length - 1) {
                    j = -1;
                }
                if (arrayGallery[j+1].hasOwnProperty("video")) {
                    mediaImg.id = "";
                    mediaImg.setAttribute("src", "");
                    mediaVideo.setAttribute("src", arrayGallery[j+1].url);
                    mediaVideo.id = arrayGallery[j+1].id;
                    mediaName.textContent = arrayGallery[j+1].title;
                    mediaImg.style.display = "none";
                    mediaVideo.style.display = "block";
                }
                if (arrayGallery[j+1].hasOwnProperty("image")) {
                    mediaImg.setAttribute("src", arrayGallery[j+1].url);
                    mediaImg.id = arrayGallery[j+1].id;
                    mediaName.textContent = arrayGallery[j+1].title;
                    mediaVideo.style.display = "none";
                    mediaImg.style.display = "block";
                } 
            }
        }


    );

// Event listener previous
    const prevModal = document.querySelector('.lightbox__prev')
        prevModal.addEventListener('click', e => {
            let imgID = mediaImg.id;
            let videoID = mediaVideo.id;
            mediaName.textContent = "";

            if (imgID =="") {
                let i = 0;
                i = arrayGallery.findIndex(element => element.id == videoID);
                if (i == 0) {
                    i = arrayGallery.length;
                }
                if (arrayGallery[i-1].hasOwnProperty("video")) {
                    mediaVideo.setAttribute("src", arrayGallery[i-1].url);
                    mediaVideo.id = arrayGallery[i-1].id;
                    mediaName.textContent = arrayGallery[i-1].title;
                    mediaImg.style.display = "none";
                    mediaVideo.style.display = "block";
                }
                if (arrayGallery[i-1].hasOwnProperty("image")) {
                    mediaVideo.id = "";
                    mediaImg.setAttribute("src", arrayGallery[i-1].url);
                    mediaImg.id = arrayGallery[i-1].id;
                    mediaName.textContent = arrayGallery[i-1].title;
                    mediaVideo.style.display = "none";
                    mediaImg.style.display = "block";
                } 
            }

            if (videoID =="") {
                let j = 0;
                j = arrayGallery.findIndex(element => element.id == imgID);
                if (j == 0) {
                    j = arrayGallery.length;
                }
                if (arrayGallery[j-1].hasOwnProperty("video")) {
                    mediaImg.id = "";
                    mediaVideo.setAttribute("src", "");
                    mediaImg.setAttribute("src", "");
                    mediaVideo.setAttribute("src", arrayGallery[j-1].url);
                    mediaVideo.id = arrayGallery[j-1].id;
                    mediaName.textContent = arrayGallery[j-1].title;
                    mediaImg.style.display = "none";
                    mediaVideo.style.display = "block";
                }
                if (arrayGallery[j-1].hasOwnProperty("image")) {
                    mediaImg.setAttribute("src", arrayGallery[j-1].url);
                    mediaImg.id = arrayGallery[j-1].id;
                    mediaName.textContent = arrayGallery[j-1].title;
                    mediaVideo.style.display = "none";
                    mediaImg.style.display = "block";
                } 
            }
        }


    );

}
