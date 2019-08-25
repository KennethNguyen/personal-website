const aboutMe = () => {
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('aboutMe');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'About Me';
    aboutSection.appendChild(sectionTitle);

    (document.querySelector('.showcase')).appendChild(aboutSection);
}

export {aboutMe};