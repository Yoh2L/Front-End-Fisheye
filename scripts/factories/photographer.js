function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id} = data;

    

    function getUserCardDOM() {
        const picture = `assets/photographers/Photographers_ID_Photos/${portrait}`;
        const article = document.createElement( 'article' );
        const anchor = document.createElement( 'a' );
        anchor.setAttribute('id', id )
        anchor.setAttribute('href',"/photographer.html?id=" + id);
        const subTxt = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const span = document.createElement( "SPAN" );
        const span2 = document.createElement( "SPAN" );
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        span.textContent = tagline;
        span2.textContent = price + "€/jour";
        article.appendChild(anchor);
        article.appendChild(subTxt);
        anchor.appendChild(img);
        anchor.appendChild(h2);
        subTxt.appendChild(h3);
        subTxt.appendChild(span);
        subTxt.appendChild(span2);
        return (article);
    }
    return { getUserCardDOM }
}