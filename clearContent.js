const clearContent = () => {
    const content = document.querySelector('.showcase');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export {clearContent};