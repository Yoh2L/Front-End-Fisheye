import Lightbox from "../components/lightbox.js";

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
    Lightbox(arrayGallery);
    
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
            const mediaID = element.parentElement.parentElement.firstChild.firstChild.id;
            const mediaLikes = arrayGallery.find(element => element.id == mediaID);

            if (mediaLikes.like == "liked") {
                nbrLikes.textContent--;
                mediaLikes.likes--;
                mediaLikes.like = "";
                asideLikes.textContent--;
                console.log(mediaLikes);
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