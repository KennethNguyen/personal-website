import {projects} from './projects.js';
import {aboutMe} from './aboutMe.js';
import {contactMe} from './contactMe.js';
import {clearContent} from './clearContent.js';

// Display projects page upon load
projects();

document.getElementById('project').addEventListener('click', function () {
    clearContent();
    projects();
});

document.getElementById('about').addEventListener('click', function () {
    clearContent();
    aboutMe();
});

document.getElementById('contact').addEventListener('click', function () {
    clearContent();
    contactMe();
});