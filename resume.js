// TODO: Display resume, create a download link
const resume = () => {
    // Change background of Resume section to a shade of black - Fuscous Gray
    (document.querySelector('.showcase')).style.backgroundColor = '#565350';

    const resumeSection = document.createElement('div');
    resumeSection.classList.add('resume');

    const resumeTitle = document.createElement('h1');
    resumeTitle.innerHTML = 'Resume';

    const resumePDF = document.createElement('iframe');
    resumePDF.src = "./KennethNguyen-Resume.pdf"

    resumeSection.append(resumeTitle. resumePDF);

    (document.querySelector('.showcase')).appendChild(resumeSection);
}

export {resume};