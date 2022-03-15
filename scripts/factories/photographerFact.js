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
    const { title, image, likes, url, id} = data;

function generateGallery() {
    
    // Generation de tous les articles de l'artiste
    
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", url);
        const media = document.createElement( image ?'img': 'video' );
        media.setAttribute("src", url)
        media.classList.add('article-media');
        media.id = id;

        const subText = document.createElement( 'div');
        subText.classList.add('subtext');

        const picTitle = document.createElement( 'h3' );
        picTitle.textContent = title;
        
        const totalLikes = document.createElement( 'div' );
        totalLikes.classList.add('likes');

/*         const heart_div = document.createElement( 'div' );
        heart_div.classList.add('heart_div');
        const heart_far = document.createElement( 'SPAN');
        heart_far.classList.add('far', 'fa-heart'); */
        const heart_fas = document.createElement( 'SPAN');
        heart_fas.classList.add('fas', 'fa-heart');

        const nbrLikes = document.createElement( 'SPAN');
        nbrLikes.classList.add('nbrLikes');
        nbrLikes.textContent = likes;


        article.appendChild(link);
        link.appendChild(media);
        article.appendChild(subText);
        subText.appendChild(picTitle);
        subText.appendChild(totalLikes);
        totalLikes.appendChild(nbrLikes);
        totalLikes.appendChild(heart_fas);
/*         heart_div.appendChild(heart_fas);
        heart_div.appendChild(heart_far); */
        return (article);
    
}
    return { generateGallery }
}
