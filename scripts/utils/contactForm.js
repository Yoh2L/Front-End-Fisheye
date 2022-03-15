function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const photName = document.querySelector('h2');
    const photName__div = document.querySelector(".photName__div");
    photName__div.innerHTML = photName.textContent;

    const sendForm = document.querySelector(".sendForm");
    let fname__form = document.getElementById("fname");
    const name__form = document.getElementById("name");
    const email__form = document.getElementById("email");
    const message__form = document.getElementById("message");

    sendForm.addEventListener('click', event => {
        event.preventDefault();
        console.log(fname__form.value);
        console.log(name__form.value);
        console.log(email__form.value);
        console.log(message__form.value);
        fname__form.value = "";
        name__form.value = "";
        email__form.value = "";
        message__form.value = "";
        modal.style.display = "none";
    })
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

}
