const contactMe = () => {
    const contactSection = document.createElement('div');
    contactSection.classList.add('contactMe');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Contact Me';
    contactSection.appendChild(sectionTitle);

    (document.querySelector('.showcase')).appendChild(contactSection);
}

export {contactMe};