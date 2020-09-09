import {projects} from './projects.js';
import {aboutMe} from './aboutMe.js';
import {clearContent} from './clearContent.js';
import {resume} from './resume.js';

// Display projects page upon load
//projects();

resume();

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
