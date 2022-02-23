/* export default class Lightbox {

    constructor () {
        const links = document.querySelectorAll('.article-media')
        console.log(links);
            links.forEach(link => link.addEventListener('click', e =>
                {
                e.preventDefault();
                document.body.appendChild(this.buildDOM(e.target.getAttribute('src')));
            }));
    }

/* @param url de l'image */


/* fermeture lightbox / mouse event */
/* close (e) {
    e.preventDefault();
    this.element.classList.add('fadeOut');
    window.setTimeout(() => {
        this.element.parentElement.removeChild(this.element);
    }, 500)
}
 */

/* @param url de l'image
@return html element */
/*     buildDOM (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<div class="lightbox">
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
            <img src="${url}" alt="">
        </div>`
    dom.querySelector('.lightbox__close').addEventListener('click',
    this.close.bind(this))
    return dom
    } */
//}

export default function Lightbox(data) {
    const lightboxDOM = document.querySelector('.lightbox');
    lightboxDOM.style.display = "none";
    const links = Array.from(document.querySelectorAll('.article-media'));
    const gallery = links.map(link => link.getAttribute('src'));
    const mediaUrl = document.querySelector('.lightbox__media');

// Open Modal
    links.forEach(link => link.addEventListener('click', e =>
        {
        e.preventDefault();
        mediaUrl.setAttribute("src", e.target.getAttribute('src'));
        lightboxDOM.style.display = "block";
    }));

// Close Modal
    const closeModal = document.querySelector('.lightbox__close')
        closeModal.addEventListener('click', e => { 
            lightboxDOM.style.display = "none" 
        });

// Event listener next
    const nextModal = document.querySelector('.lightbox__next')
        nextModal.addEventListener('click', e => {
            const url2 = mediaUrl.src.split('assets')[1];
            let url = "assets" + url2;
            url = decodeURI(url);
            let i = gallery.findIndex(image => image == url)
            if (i == gallery.length - 1) {
                i = -1;
            }
            mediaUrl.setAttribute("src", gallery[i + 1]);
        });

// Event listener previous
    const prevModal = document.querySelector('.lightbox__prev')
        prevModal.addEventListener('click', e => {
            const url2 = mediaUrl.src.split('assets')[1];
            let url = "assets" + url2;
            url = decodeURI(url);
            let i = gallery.findIndex(image => image == url)
            if (i == 0) {
                i = gallery.length;
            }
            mediaUrl.setAttribute("src", gallery[i - 1]);
        });


}

