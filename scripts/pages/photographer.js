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

// Recuperation URL / ID / Data json
    const url = document.URL;
    const idPhot = url.substring(url.indexOf("=")+1);

// Recherche data photographe + filtres de ses medias   
    const arrayPhot = photographers.find(m => m.id == idPhot)
    let arrayGallery = media.filter(m => m.photographerId == idPhot)
    arrayGallery = arrayGallery.map(media =>{
        media.url = `assets/photographers/${arrayPhot.name}/${media.image||media.video}`;
        return media;
    })

    dataPhoto(arrayPhot);
    displayGallery(arrayGallery);
    asidePhot(arrayGallery, arrayPhot.price)

};

init();



