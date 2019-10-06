import {projects} from './projects.js';
import {aboutMe} from './aboutMe.js';
import {clearContent} from './clearContent.js';
import {resume} from './resume.js';

// Display projects page upon load
//projects();

// Line below is element that is currently WIP 
projects();

document.getElementById('project').addEventListener('click', function () {
    clearContent();
    projects();
});

document.getElementById('about').addEventListener('click', function () {
    clearContent();
    aboutMe();
});

/* WIP, goal is to get the resume tab a section of its own and display the resume and have a download link
document.getElementById('resume').addEventListener('click', function () {
    clearContent();
    resume();
});
*/