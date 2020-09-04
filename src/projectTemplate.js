// Create project title
const createTitle = (projectTitle) => {
    const title = document.createElement('h2');
    title.classList.add('projectTitle');
    title.innerHTML = projectTitle;
    return title;
}

// Create project image
const createImage = (imageSrc) => {
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.classList.add('projectScreenshot');
    image.src = imageSrc;
    image.style.minWidth = '50vmin';
    image.style.minHeight = '50vmin';
    image.style.width = '100%';
    image.style.height = '100%';
    imageContainer.append(image);
    return imageContainer;
}

// Create the description/skills section of a project
const createDescription = (projectDescription, projectSkills) => {
    const description = document.createElement('p');
    description.innerHTML = projectDescription;
    
    const skills = document.createElement('p');
    skills.innerHTML = projectSkills;

    return [description, skills];
}

// Create a links container that includes the live demo button and the source code button (if provided)
const createLinks = (projectDemo, projectSource) => {
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('linksContainer');

    const demo = createLinksHelper(projectDemo, 'Live Demo', 'projectLiveButton');
    
    const sourceCode = createLinksHelper(projectSource, 'Source Code', 'projectCodeButton');

    linksContainer.append(demo, sourceCode);

    return linksContainer;
}

// Create a link button with onclick to either the project's live demo or source code
const createLinksHelper = (link, buttonDescription, buttonClass) => {
    const projectLink = document.createElement('a');
    projectLink.classList.add('projectLink');
    projectLink.href = link;
    projectLink.target = '_blank';project
    
    const linkButton = document.createElement('button');
    linkButton.classList.add('projectButton', `${buttonClass}`);
    linkButton.innerHTML = buttonDescription;
    projectLink.append(linkButton);
    
    return projectLink;
}

export {createTitle, createImage, createDescription, createLinks};