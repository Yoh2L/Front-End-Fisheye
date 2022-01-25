    async function getPhotographers() {
        let url = "./data/photographers.json"
        try {
            let response = await fetch(url);
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

    var test = document.getElementsByTagName("a");
    var toto = Array.from(test);

    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener("click", (e) => {
            console.log("hello");
        })
    }