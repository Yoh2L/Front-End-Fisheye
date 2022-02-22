function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    

    function getUserCardDOM() {
        const picture = `./assets/photographers/Photographers_ID_Photos/${portrait}`;
        const article = document.createElement( 'article' );

        // Creation de l'ancre + Affectation de l'ID
        const anchor = document.createElement( 'a' );
        anchor.setAttribute('id', id )
        anchor.setAttribute('href',"./photographer.html?id=" + id);

        const subTxt = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const photName = document.createElement( 'h2' );
        const photCity = document.createElement( 'h3' );
        const photSpeach = document.createElement( "SPAN" );
        const photPrice = document.createElement( "SPAN" );
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