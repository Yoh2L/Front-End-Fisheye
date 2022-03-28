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

        const subTxt = document.createElement( 'div' );
        subTxt.setAttribute("alt", "Photographer bio");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const photName = document.createElement( 'h2' );
        const photCity = document.createElement( 'h3' );
        const photSpeach = document.createElement( "SPAN" );
        photSpeach.setAttribute("alt", "Photographer speach");
        const photPrice = document.createElement( "SPAN" );
        photPrice.setAttribute("alt", "Photographer price");
        photName.textContent = name;
        photCity.textContent = city + ", " + country;
        photSpeach.textContent = tagline;
        photPrice.textContent = price + "€/jour";
        article.appendChild(anchor);
        article.appendChild(subTxt);
        anchor.appendChild(img);
        anchor.appendChild(photName);
        subTxt.appendChild(photCity);
        subTxt.appendChild(photSpeach);
        subTxt.appendChild(photPrice);
        return (article);
    }
    return { getUserCardDOM }
}