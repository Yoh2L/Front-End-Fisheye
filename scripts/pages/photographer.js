async function getPhotographers() {
    let json = "./data/photographers.json"
    try {
        let response = await fetch(json);
        return await response.json();
    } catch (error) {
        console.error(error);
    }


};

function displayPhotographer(photographer) {

    const photographerDOM = photographerFactory(photographer);
    photographerDOM.generatephotographerCard();

};

function displayGallery(arrayGallery) {
    const photGallery = document.querySelector(".photograph-gallery");

    arrayGallery.forEach(media => {
        const mediaModel = galleryFactory(media);
        const mediaDOM = mediaModel.generateGallery();
        photGallery.appendChild(mediaDOM);
    });
    openModal(arrayGallery);
}

async function init() {
// Récupère les datas des photographes
    const {photographers, media} = await getPhotographers();

// Recuperation URL / ID

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idPhot = urlParams.get('id');

// Recherche data photographe + filtres de ses medias   
    const photographer = photographers.find(m => m.id == idPhot)
    
    let arrayGallery = media.filter(m => m.photographerId == idPhot)
    arrayGallery = arrayGallery.map(media =>{
        media.url = `assets/photographers/${photographer.name}/${media.image||media.video}`;
        return media;
    })

    displayPhotographer(photographer);
    asidePhot(arrayGallery, photographer.price)
    sort(arrayGallery);
    sortPopular(arrayGallery);
    const nextModal = document.querySelector('.lightbox__next');
    const prevModal = document.querySelector('.lightbox__prev');
    const closeModal = document.querySelector('.lightbox__close');
    nextModal.addEventListener('click', nextMedia.bind(arrayGallery));
    prevModal.addEventListener('click', prevMedia.bind(arrayGallery));
    closeModal.addEventListener('click', closeMedia);
    
    
};

init();



function sort(arrayGallery) {
    let getSelect = document.getElementById("select__sort");
    getSelect.addEventListener('change', e => {
        switch (e.target.value) {
            case "popular" :
                sortPopular(arrayGallery);
                break;
            case "title" :
                sortTitle(arrayGallery);
                break;
            case "date" :
                sortDate(arrayGallery);
            default:
        }
    })
};

function sortPopular(arrayGallery) {
    arrayGallery.sort(function(a, b) {
        if (a.likes < b.likes) {
            return 1;
        }
        if (a.likes > b.likes) {
            return -1;
        }
        return 0;
    });
    const photGallery = document.querySelector(".photograph-gallery");
    photGallery.innerHTML = "";
    displayGallery(arrayGallery);
    Likes(arrayGallery);
    
};

function sortTitle(arrayGallery) {
    arrayGallery.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    const photGallery = document.querySelector(".photograph-gallery");
    photGallery.innerHTML = "";
    displayGallery(arrayGallery);
    Likes(arrayGallery);
    
};

function sortDate(arrayGallery) {
    arrayGallery.sort(function(a,b) {
        if (a.date < b.date) {
            return -1;
        }
        if (a.date > b.date) {
            return 1;
        }
        return 0;
    });
    const photGallery = document.querySelector(".photograph-gallery");
    photGallery.innerHTML = "";
    displayGallery(arrayGallery);
    Likes(arrayGallery);
    
};


function Likes(arrayGallery) {
    const likes = document.querySelectorAll(".likes");

    likes.forEach(element => {element.addEventListener('click', e => {
            let nbrLikes = element.querySelector(".nbrLikes");
            let asideLikes = document.querySelector('.asideLikes');
            /* const mediaID = element.parentElement.parentElement.firstChild.firstChild.id; */
            const mediaID = e.target.closest("article").querySelector(".article-media").getAttribute("id");
            const mediaLikes = arrayGallery.find(element => element.id == mediaID);
            
            if (mediaLikes.like == "liked") {
                nbrLikes.textContent--;
                mediaLikes.likes--;
                mediaLikes.like = "";
                asideLikes.textContent--;
            }
            else {
                nbrLikes.textContent++;
                asideLikes.textContent++;
                mediaLikes.likes++;
                mediaLikes.like = "liked";
            }

            
        });
    });

}


    


// Open Modal
function openModal(arrayGallery) {


    const mediaVideo = document.querySelector('.media__video');
    const mediaImg = document.querySelector('.media__img');
    const mediaName = document.querySelector('.lightbox__media__name');
    const links = Array.from(document.querySelectorAll('.article-media'));
    
    const lightboxDOM = document.querySelector('.lightbox');

    lightboxDOM.style.display = "none";

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
            lightboxDOM.style.display = "block";
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
            lightboxDOM.style.display = "block";
            mediaVideo.style.display = "none";
            mediaImg.style.display = "block";

        }
        

    })});
};

// Close Modal
    function closeMedia() {
        const lightboxDOM = document.querySelector('.lightbox');
        lightboxDOM.style.display = "none";
        };


// Event listener next

    function nextMedia() {

        const mediaVideo = document.querySelector('.media__video');
        const mediaImg = document.querySelector('.media__img');
        const mediaName = document.querySelector('.lightbox__media__name');
        let imgID = mediaImg.id;
        let videoID = mediaVideo.id;
        mediaName.textContent = "";
        
        if (imgID =="") {
            let i = 0;
            i = this.findIndex(element => element.id == videoID);
            if (i == this.length - 1) {
                i = -1;
            }
            if (this[i+1].hasOwnProperty("video")) {
                mediaVideo.setAttribute("src", this[i+1].url);
                mediaVideo.id = this[i+1].id;
                mediaName.textContent = this[i+1].title;
                mediaImg.style.display = "none";
                mediaVideo.style.display = "block";
            }
            if (this[i+1].hasOwnProperty("image")) {
                mediaVideo.id = "";
                mediaVideo.setAttribute("src", "");
                mediaImg.setAttribute("src", this[i+1].url);
                mediaImg.id = this[i+1].id;
                mediaName.textContent = this[i+1].title;
                mediaVideo.style.display = "none";
                mediaImg.style.display = "block";
            } 
        }

        if (videoID =="") {
            let j = 0;
            j = this.findIndex(element => element.id == imgID);
            if (j == this.length - 1) {
                j = -1;
            }
            if (this[j+1].hasOwnProperty("video")) {
                mediaImg.id = "";
                mediaImg.setAttribute("src", "");
                mediaVideo.setAttribute("src", this[j+1].url);
                mediaVideo.id = this[j+1].id;
                mediaName.textContent = this[j+1].title;
                mediaImg.style.display = "none";
                mediaVideo.style.display = "block";
            }
            if (this[j+1].hasOwnProperty("image")) {
                mediaImg.setAttribute("src", this[j+1].url);
                mediaImg.id = this[j+1].id;
                mediaName.textContent = this[j+1].title;
                mediaVideo.style.display = "none";
                mediaImg.style.display = "block";
            } 
        }
    
};
        
// Event listener previous

    function prevMedia() {
        
        const mediaVideo = document.querySelector('.media__video');
        const mediaImg = document.querySelector('.media__img');
        const mediaName = document.querySelector('.lightbox__media__name');

        let imgID = mediaImg.id;
        let videoID = mediaVideo.id;
        mediaName.textContent = "";

        if (imgID =="") {
            let i = 0;
            i = this.findIndex(element => element.id == videoID);
            if (i == 0) {
                i = this.length;
            }
            if (this[i-1].hasOwnProperty("video")) {
                mediaVideo.setAttribute("src", this[i-1].url);
                mediaVideo.id = this[i-1].id;
                mediaName.textContent = this[i-1].title;
                mediaImg.style.display = "none";
                mediaVideo.style.display = "block";
            }
            if (this[i-1].hasOwnProperty("image")) {
                mediaVideo.id = "";
                mediaImg.setAttribute("src", this[i-1].url);
                mediaImg.id = this[i-1].id;
                mediaName.textContent = this[i-1].title;
                mediaVideo.style.display = "none";
                mediaImg.style.display = "block";
            } 
        }

        if (videoID =="") {
            let j = 0;
            j = this.findIndex(element => element.id == imgID);
            if (j == 0) {
                j = this.length;
            }
            if (this[j-1].hasOwnProperty("video")) {
                mediaImg.id = "";
                mediaVideo.setAttribute("src", "");
                mediaImg.setAttribute("src", "");
                mediaVideo.setAttribute("src", this[j-1].url);
                mediaVideo.id = this[j-1].id;
                mediaName.textContent = this[j-1].title;
                mediaImg.style.display = "none";
                mediaVideo.style.display = "block";
            }
            if (this[j-1].hasOwnProperty("image")) {
                mediaImg.setAttribute("src", this[j-1].url);
                mediaImg.id = this[j-1].id;
                mediaName.textContent = this[j-1].title;
                mediaVideo.style.display = "none";
                mediaImg.style.display = "block";
            } 
        }
    }


    
