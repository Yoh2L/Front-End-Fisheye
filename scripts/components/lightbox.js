export default class Lightbox {

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
close (e) {
    e.preventDefault();
    this.element.classList.add('fadeOut');
    window.setTimeout(() => {
        this.element.parentElement.removeChild(this.element);
    }, 500)
}


/* @param url de l'image
@return html element */
    buildDOM (url) {
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
    }
}

