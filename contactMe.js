const contactMe = () => {
    // Change background of Contact Me section to a shade of black - Don Juan
    (document.querySelector('.showcase')).style.backgroundColor = "#5b4e4b";
    
    // Create the title for Contact Me section
    const contactSection = document.createElement('div');
    contactSection.classList.add('contactMe');
 
    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Contact Me';

    contactSection.appendChild(sectionTitle);

    (document.querySelector('.showcase')).appendChild(contactSection);
}

export {contactMe};