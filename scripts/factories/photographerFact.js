function dataPhoto(photographers) {

    const url = document.URL;
    const idPhot = url.substring(url.indexOf("=")+1);
    const arrayPhot = photographers.find(m => m.id == idPhot)
    
    const photHeader = document.querySelector('.photograph-header');
    const section = document.createElement( 'section' );
    const h2 = document.createElement( 'h2' );
    const h3 = document.createElement( 'h3' );
    const span = document.createElement( 'SPAN' );
    const picture = `./assets/photographers/Photographers_ID_Photos/${arrayPhot.portrait}`;
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)

    
    h2.textContent = arrayPhot.name;
    h3.textContent = arrayPhot.city + ", " + arrayPhot.country;
    span.textContent = arrayPhot.tagline;

    photHeader.appendChild(section);
    section.appendChild(h2);
    section.appendChild(h3);
    section.appendChild(span);
    section.appendChild(img);


};


function displayGallery(data) {
    const photGallery = document.querySelector(".photograph-gallery");
    const url = document.URL;
    const idPhot = url.substring(url.indexOf("=")+1);
    const photographers = data.photographers;
    const media = data.media;
    const arrayPhot = photographers.find(m => m.id == idPhot)
    const arrayGallery = media.filter(m => m.photographerId == idPhot)
    console.log(arrayGallery);
    console.log(arrayGallery.length);
    
    arrayGallery.forEach(element => {
        const picture = `assets/photographers/${arrayPhot.name}/${element.image}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const article = document.createElement( 'article' );
        photGallery.appendChild(article);
        article.appendChild(img);

    });

}