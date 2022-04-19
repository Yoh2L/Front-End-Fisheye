function photographerFactory (data) {
    const { name, portrait, city, country, tagline} = data;

    function generatephotographerCard () {
        const contactBtn = document.querySelector('.contact_button');
        const photHeader = document.querySelector('.photograph-header');

        // Creation de la  bio de l'artiste
        const photBio = document.createElement('div');
        photBio.classList.add('bio');
        photBio.setAttribute("alt", "Photographer bio");
        photBio.setAttribute("tabindex", 0);

        // Nom de l'artiste
        const photName = document.createElement( 'h2' );
        photName.textContent = name;
        photName.setAttribute("alt", "Photographer name");
        photName.setAttribute("tabindex", 0);

        // Localisation
        const photCity = document.createElement( 'h3' );
        photCity.textContent = city + ", " + country;
        photCity.setAttribute("alt", "Photographer city");
        photCity.setAttribute("tabindex", 0);

        // Speach de l'artiste
        const photSpeach = document.createElement( 'SPAN' );
        photSpeach.textContent = tagline;
        photSpeach.setAttribute("alt", "Photographer speach");
        photSpeach.setAttribute("tabindex", 0);

        // Creation de la photo de l'artiste
        const picture = `./assets/photographers/Photographers_ID_Photos/${portrait}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("tabindex", 0);

        // Gestion de l'arborescence DOM
        photHeader.appendChild(photBio);
        photHeader.appendChild(contactBtn);
        photBio.appendChild(photName);
        photBio.appendChild(photCity);
        photBio.appendChild(photSpeach);
        photHeader.appendChild(img);
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
            const media = document.createElement( image ?'img': 'video' );
            media.setAttribute("src", url)
            media.setAttribute("alt", title);
            media.setAttribute("tabindex", 0);
            media.classList.add('article-media');
            media.id = id;

            // Subtext
            const subText = document.createElement( 'div');
            subText.classList.add('subtext');
            subText.setAttribute("tabindex", 0);

            // Titre du media
            const picTitle = document.createElement( 'h3' );
            picTitle.textContent = title;
            picTitle.setAttribute("tabindex", 0);
            
            // Likes
            const totalLikes = document.createElement( 'div' );
            totalLikes.classList.add('likes');
            totalLikes.setAttribute("tabindex", 0);

            const nbrLikes = document.createElement( 'SPAN');
            nbrLikes.classList.add('nbrLikes');
            nbrLikes.setAttribute("alt", "number of likes");
            nbrLikes.textContent = likes;
            nbrLikes.setAttribute("tabindex", 0);

            // Icone de coeur
            const heart_fas = document.createElement( 'SPAN');
            heart_fas.classList.add('fas', 'fa-heart');
            heart_fas.setAttribute("alt", "like icon");
            heart_fas.setAttribute("aria-label", "heart icon");
            heart_fas.setAttribute("tabindex", 0);

            // Gestion de l'arborescence DOM
            article.appendChild(link);
            link.appendChild(media);
            article.appendChild(subText);
            subText.appendChild(picTitle);
            subText.appendChild(totalLikes);
            totalLikes.appendChild(nbrLikes);
            totalLikes.appendChild(heart_fas);

            return (article);
        
    }
    return { generateGallery }
}
