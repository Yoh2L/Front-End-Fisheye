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
    const data = await getPhotographers();
    

    dataPhoto(data);
    displayGallery(data);

};

init();



