function dataPhoto(data) {

    const url = document.URL;
    const idPhot = url.substring(url.indexOf("=")+1);
    const photographers = data.photographers;
    const media = data.media;
    const arrayPhot = photographers.find(m => m.id == idPhot)
    const arrayGallery = media.filter(m => m.photographerId == idPhot)
    const photHeader = document.querySelector('.photograph-header');
    const photSumn = document.querySelector('.photograph-sumn');
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

    var totalLikes = 0;

    arrayGallery.forEach(element => {
        totalLikes += parseInt(element.likes);
    });



    const asideLikes = document.createElement( 'SPAN' );
    const asideHeart = document.createElement( 'SPAN' );
    const asidePrice = document.createElement( 'SPAN' );
    asideLikes.textContent = totalLikes;
    asideHeart.classList.add('fas');
    asideHeart.classList.add('fa-heart');
    asidePrice.textContent = arrayPhot.price + " €/jour";
    photSumn.appendChild(asideLikes);
    photSumn.appendChild(asideHeart);
    photSumn.appendChild(asidePrice);
};


function displayGallery(data) {

    const photGallery = document.querySelector(".photograph-gallery");
    const url = document.URL;
    const idPhot = url.substring(url.indexOf("=")+1);
    const photographers = data.photographers;
    const media = data.media;
    const arrayPhot = photographers.find(m => m.id == idPhot)
    const arrayGallery = media.filter(m => m.photographerId == idPhot)

    
    arrayGallery.forEach(element => {
        const article = document.createElement( 'article' );
        const picture = `assets/photographers/${arrayPhot.name}/${element.image}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const div = document.createElement( 'div');
        div.classList.add('subtext');
        const heart = document.createElement( 'SPAN');
        heart.classList.add('fas');
        heart.classList.add('fa-heart');
        const h3 = document.createElement( 'h3' );
        const span = document.createElement( 'SPAN');
        h3.textContent = element.title;
        span.textContent = element.likes;


        photGallery.appendChild(article);
        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h3);
        div.appendChild(span);
        div.appendChild(heart);

    });

}