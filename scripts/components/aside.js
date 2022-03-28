//Affichage tarif + compteur de likes fixé au bas de l'écran
function asidePhot(arrayGallery, price) {
    
    const photSumn = document.querySelector('.photograph-sumn');

    // Calcul du total de likes sur l'ensemble des photos
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

    asideLikes.classList.add('asideLikes');
    asideLikes.setAttribute("alt", "total likes");
    asideLikes.textContent = totalLikes;
    asideHeart.classList.add('fas', 'fa-heart');
    asideHeart.setAttribute("alt", "heart icon");
    asidePrice.textContent = price + " €/jour";
    asidePrice.setAttribute("alt", "Photographer price");

    photSumn.appendChild(asideTotalLikes);
    asideTotalLikes.appendChild(asideLikes);
    asideTotalLikes.appendChild(asideHeart);
    photSumn.appendChild(asidePrice);
}