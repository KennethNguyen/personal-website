const projects = () => {
    // Change background of Projects section to a shade of black - River Bed
    (document.querySelector('.showcase')).style.backgroundColor = "#444d56";

    // Create the title for Contact Me section
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('projects');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Projects';
    projectsSection.appendChild(sectionTitle);

    (document.querySelector('.showcase')).appendChild(projectsSection);
}

export {projects};