const resume = () => {
    // Change background of Resume section to a shade of black - Fuscous Gray
    (document.querySelector('.showcase')).style.backgroundColor = '#fff9e3';

    const resumeSection = document.createElement('div');
    resumeSection.classList.add('resume');

    const resumeTitle = document.createElement('h1');
    resumeTitle.innerHTML = 'Resume';

    const userLinks = document.createElement('div');
    userLinks.classList.add('userLinks');

    // Create a clickable link to view PDF in a new tab
    const newTabLink = document.createElement('a');
    newTabLink.classList.add('linkItem');
    newTabLink.innerHTML = 'View PDF in a new tab';
    newTabLink.href = "KennethNguyen-Resume.pdf";
    newTabLink.target = '_blank';

    // Create a clickable link to directly download Resume
    const downloadLink = document.createElement('a');
    downloadLink.classList.add('linkItem');
    downloadLink.innerHTML = 'Direct Download';
    downloadLink.href = "KennethNguyen-Resume.pdf";
    downloadLink.download = "KennethNguyen-Resume.pdf"

    userLinks.append(newTabLink, downloadLink);

    // Create a viewable resume directly on the webpage
    const resumePDF = document.createElement('embed');
    resumePDF.classList.add('resumePDF');
    resumePDF.src = "KennethNguyen-Resume.pdf";
    resumePDF.type = "application/pdf";
    resumePDF.alt = "PDF format of Resume. Click above links to view in a new tab or download."
    resumePDF.style.maxHeight = '775'
    resumePDF.height = '775';
    resumePDF.width = '80%';

    // Append all elements together to the resume section
    resumeSection.append(resumeTitle, userLinks, resumePDF);

    (document.querySelector('.showcase')).appendChild(resumeSection);
}

export {resume};