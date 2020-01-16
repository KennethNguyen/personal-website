// Create project image
const createImage = (imageSrc) => {
    const image = document.createElement('img');
    image.classList.add('projectScreenshot');
    image.src = imageSrc;
    image.style.minWidth = '50vmin';
    image.style.minHeight = '50vmin';
    image.style.width = '100%';
    image.style.height = '100%';
    return image;
}

// Create the right section of a project container (Title, Description, Utilized, Links)
const createRight = (projectTitle, projectDescription, projectSkills) => {
    const title = document.createElement('h2');
    title.classList.add('projectTitle');
    title.innerHTML = projectTitle;
    
    const description = document.createElement('p');
    description.innerHTML = projectDescription;
    
    const skills = document.createElement('p');
    skills.innerHTML = projectSkills;

    return [title, description, skills];
}

// Specifies the link of the button, the description of the button, and appropriate class attribute
const linkDiv = (projectDemo, projectSource) => {
    const demo = linkHelper(projectDemo, 'Live Demo', 'projectLiveButton');
    
    const sourceCode = linkHelper(projectSource, 'Source Code', 'projectCodeButton');

    return [demo, sourceCode];
}

// Create a link button with onclick to either the project's live demo or source code
const linkHelper = (link, buttonDescription, buttonClass) => {
    const websiteLink = document.createElement('a');
    websiteLink.classList.add('projectLink');
    websiteLink.href = link;
    websiteLink.target = '_blank';
    
    const linkButton = document.createElement('button');
    linkButton.classList.add('projectButton', `${buttonClass}`);
    linkButton.innerHTML = buttonDescription;
    websiteLink.append(linkButton);
    
    return websiteLink;
}

export {createImage, createRight, linkDiv};