function photographerFactory (data) {
    const { name, portrait, city, country, tagline} = data;

    function generatephotographerCard () {
        const contactBtn = document.querySelector('.contact_button');
        const photHeader = document.querySelector('.photograph-header');

        // Creation de la  bio de l'artiste
        const photBio = document.createElement('div');
        photBio.classList.add('bio');
        const photName = document.createElement( 'h2' );
        const photCity = document.createElement( 'h3' );
        const photSpeach = document.createElement( 'SPAN' );
        photName.textContent = name;
        photCity.textContent = city + ", " + country;
        photSpeach.textContent = tagline;

        // Creation de la photo de l'artiste
        const photPic = document.createElement('div');
        const picture = `./assets/photographers/Photographers_ID_Photos/${portrait}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        // Gestion de l'arborescence DOM
        photHeader.appendChild(photBio);
        photHeader.appendChild(contactBtn);
        photBio.appendChild(photName);
        photBio.appendChild(photCity);
        photBio.appendChild(photSpeach);
        photHeader.appendChild(photPic);
        photPic.appendChild(img);
        photHeader.insertBefore(photBio, contactBtn);

        return (photHeader);
    }
    return { generatephotographerCard }
}


// Generation de la galerie du photographe
function galleryFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price, url} = data;
    console.log(data);

function generateGallery() {


    const photGallery = document.querySelector(".photograph-gallery");

    // Generation de tous les articles de l'artiste
    data.forEach(element => {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", element.url);
        const media = document.createElement( element.image ?'img': 'video' );
        media.setAttribute("src", element.url)
        media.classList.add('article-media');

        const subText = document.createElement( 'div');
        subText.classList.add('subtext');

        const picTitle = document.createElement( 'h3' );
        picTitle.textContent = element.title;
        
        const totalLikes = document.createElement( 'div' );
        totalLikes.classList.add('likes');

        const heart = document.createElement( 'SPAN');
        heart.classList.add('fas', 'fa-heart');

        const nbrLikes = document.createElement( 'SPAN');
        nbrLikes.textContent = element.likes;


        photGallery.appendChild(article);
        article.appendChild(link);
        link.appendChild(media);
        article.appendChild(subText);
        subText.appendChild(picTitle);
        subText.appendChild(totalLikes);
        totalLikes.appendChild(nbrLikes);
        totalLikes.appendChild(heart);
        return (photGallery);
    } 
    );
    
}
    return { generateGallery }
}



/* function displayGallery(arrayGallery) {


    const photGallery = document.querySelector(".photograph-gallery");

    // Generation de tous les articles de l'artiste
    arrayGallery.forEach(element => {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", element.url);
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
        article.appendChild(link);
        link.appendChild(media);
        article.appendChild(subText);
        subText.appendChild(picTitle);
        subText.appendChild(likes);
        likes.appendChild(nbrLikes);
        likes.appendChild(heart);

    });

}
 */
