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

export {createImage};