function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    

    function getUserCardDOM() {
        const picture = `./assets/photographers/Photographers_ID_Photos/${portrait}`;
        const article = document.createElement( 'article' );
        article.setAttribute("alt", "Photographer card");

        // Creation de l'ancre + Affectation de l'ID
        const anchor = document.createElement( 'a' );
        anchor.setAttribute('id', id )
        anchor.setAttribute('href',"./photographer.html?id=" + id);

        const PhotPic = document.createElement( 'div' );
        PhotPic.setAttribute("tabindex", 0);

        const subTxt = document.createElement( 'section' );
        subTxt.setAttribute("alt", "Photographer bio");
        subTxt.setAttribute("tabindex", 0);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        const photName = document.createElement( 'h2' );
        photName.textContent = name;

        const photCity = document.createElement( 'h3' );
        photCity.textContent = city + ", " + country;

        const photSpeach = document.createElement( "SPAN" );
        photSpeach.setAttribute("alt", "Photographer speach");
        photSpeach.textContent = tagline;

        const photPrice = document.createElement( "SPAN" );
        photPrice.setAttribute("alt", "Photographer price");
        photPrice.textContent = price + "€/jour";

        // Arborescence DOM
        article.appendChild(anchor);
        anchor.appendChild(PhotPic);
        anchor.appendChild(subTxt);
        PhotPic.appendChild(img);
        PhotPic.appendChild(photName);
        subTxt.appendChild(photCity);
        subTxt.appendChild(photSpeach);
        subTxt.appendChild(photPrice);
        
        return (article);
    }
    return { getUserCardDOM }
}