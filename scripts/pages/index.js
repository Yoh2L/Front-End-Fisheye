    async function getPhotographers() {
        let json = "./data/photographers.json"
        try {
            let response = await fetch(json);
            return await response.json();
        } catch (error) {
            console.error(error);
        }


    }

    function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
/*         const data = await getPhotographers();
        const photographers = data.photographers; */
        displayData(photographers);
    };
    
    init();
