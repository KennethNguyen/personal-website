const projects = () => {
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('projects');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Projects';
    projectsSection.appendChild(sectionTitle);

    (document.querySelector('.showcase')).appendChild(projectsSection);
}

export {projects};