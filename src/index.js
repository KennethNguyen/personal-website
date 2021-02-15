import {projects} from './projects.js';
import {aboutMe} from './aboutMe.js';
import {clearContent} from './clearContent.js';
import {resume} from './resume.js';

// Display projects page upon load
//projects();

aboutMe();

document.getElementById('project').addEventListener('click', function () {
    clearContent();
    projects();
});

document.getElementById('about').addEventListener('click', function () {
    clearContent();
    aboutMe();
});

document.getElementById('resume').addEventListener('click', function () {
    clearContent();
    resume();
});


// document.getElementById('project').addEventListener('click', function () {
//     document.querySelector('.projects').style.display = "block"
//     document.querySelector('.aboutMe').style.display = "none"
//     document.querySelector('.resume').style.display = "none"
// });

// document.getElementById('about').addEventListener('click', function () {
//     if (document.querySelector('.aboutMe') == null) {
//         aboutMe()
//     }
//     document.querySelector('.projects').style.display = "none"
//     document.querySelector('.aboutMe').style.display = "block"
//     document.querySelector('.resume').style.display = "none"
// });

// document.getElementById('resume').addEventListener('click', function () {
//     if (document.querySelector('.resume') == null) {
//         resume()
//     }
//     document.querySelector('.projects').style.display = "none"
//     document.querySelector('.aboutMe').style.display = "none"
//     document.querySelector('.resume').style.display = "block"
// });
