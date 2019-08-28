import {projects} from './projects.js';
import {aboutMe} from './aboutMe.js';
import {clearContent} from './clearContent.js';

// Display projects page upon load
//projects();

// Line below is element that is currently WIP 
aboutMe();

document.getElementById('project').addEventListener('click', function () {
    clearContent();
    projects();
});

document.getElementById('about').addEventListener('click', function () {
    clearContent();
    aboutMe();
});