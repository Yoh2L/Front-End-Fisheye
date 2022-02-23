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

    const photographerDOM = photographerFactory(photographer);
    photographerDOM.generatephotographerCard();

    const galleryDOM = galleryFactory(arrayGallery)
    galleryDOM.generateGallery();
    asidePhot(arrayGallery, photographer.price)
    Lightbox(arrayGallery);

};

init();



