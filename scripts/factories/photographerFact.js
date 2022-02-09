function dataPhoto(arrayPhot) {

// Creation du photograph-header
    const contactBtn = document.querySelector('.contact_button');
    const photHeader = document.querySelector('.photograph-header');
    const photBio = document.createElement('div');
    photBio.classList.add('bio');
    const photPic = document.createElement('div');
    const photName = document.createElement( 'h2' );
    const photCity = document.createElement( 'h3' );
    const photSpeach = document.createElement( 'SPAN' );

    const picture = `./assets/photographers/Photographers_ID_Photos/${arrayPhot.portrait}`;
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)

    photName.textContent = arrayPhot.name;
    photCity.textContent = arrayPhot.city + ", " + arrayPhot.country;
    photSpeach.textContent = arrayPhot.tagline;

    photHeader.appendChild(photBio);
    photHeader.appendChild(contactBtn);
    photBio.appendChild(photName);
    photBio.appendChild(photCity);
    photBio.appendChild(photSpeach);
    photHeader.appendChild(photPic);
    photPic.appendChild(img);
    photHeader.insertBefore(photBio, contactBtn);
};


function displayGallery(arrayGallery) {

// Generation de la galerie du photographe
    const photGallery = document.querySelector(".photograph-gallery");
    arrayGallery.forEach(element => {
        const article = document.createElement( 'article' );

        const media = document.createElement( element.image ?'img': 'video' );
        media.setAttribute("src", element.url)
        media.classList.add('article-media');

        const subText = document.createElement( 'div');
        subText.classList.add('subtext');

        const picTitle = document.createElement( 'h3' );
        picTitle.textContent = element.title;
        
        const likes = document.createElement( 'div' );
        likes.classList.add('likes');

        const heart = document.createElement( 'SPAN');
        heart.classList.add('fas', 'fa-heart');

        const nbrLikes = document.createElement( 'SPAN');
        nbrLikes.textContent = element.likes;


        photGallery.appendChild(article);
        article.appendChild(media);
        article.appendChild(subText);
        subText.appendChild(picTitle);
        subText.appendChild(likes);
        likes.appendChild(nbrLikes);
        likes.appendChild(heart);

    });

}

function asidePhot(arrayGallery, price) {

    //Affichage tarif + compteur de likes fixé au bas de l'écran
    const photSumn = document.querySelector('.photograph-sumn');
    let totalLikes = 0;

    arrayGallery.forEach(element => {
        totalLikes += parseInt(element.likes);
    });
    
    /* const toto = arrayGallery.reduce((acc,cur)=>acc+= parseInt(cur.likes),0) */

    const asideTotalLikes = document.createElement( 'div' );
    const asideLikes = document.createElement( 'SPAN' );
    const asideHeart = document.createElement( 'SPAN' );
    asideHeart.classList.add('aside-heart');
    const asidePrice = document.createElement( 'SPAN' );

    asideLikes.textContent = totalLikes;
    asideHeart.classList.add('fas', 'fa-heart');
    asidePrice.textContent = price + " €/jour";

    photSumn.appendChild(asideTotalLikes);
    asideTotalLikes.appendChild(asideLikes);
    asideTotalLikes.appendChild(asideHeart);
    photSumn.appendChild(asidePrice);
}