import {createTitle, createImage, createDescription, createLinks} from './projectTemplate.js';

const projects = () => {
    // Change background of Projects section
    (document.querySelector('.showcase')).style.backgroundColor = "#fff9e3";

    // Create the section title for Projects section
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('projects');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Projects';

    // Create the flex container for all the project cards/elements
    const projectsFlexContainer = document.createElement('div');
    projectsFlexContainer.classList.add('projectsFlexContainer');

    // Frydge Main Div Element
    const frydgeProject = document.createElement('div');
    frydgeProject.classList.add('projectItem');

    const frydgeTitle = createTitle('Frydge');
    const frydgeImage = createImage("./images/exampleFrydge.png", "Frydge Splash Page");
    const [frydgeDescription, frydgeSkills] = createDescription(
        'A web app for users to keep track of existing groceries and their expiration dates, prices, etc. in one or more households. Supports multiple concurrent users, has realtime updates, and is mobile responsive!',
        'Technologies: React, Context API, Ant-Design, Firebase Authentication, Cloud Firestore, Jira'
    );
    const frydgeLinks = createLinks(
        'https://frydge.me', 
        ''
    );

    // Append all Frydge project elements to main project div
    frydgeProject.append(frydgeTitle, frydgeImage, frydgeDescription, frydgeSkills, frydgeLinks);

    // Covid Project Main Div Element
    const covidProject = document.createElement('div');
    covidProject.classList.add('projectItem');

    const covidTitle = createTitle('COVID-19 US Tracker')
    const covidImage = createImage("./images/exampleCOVID19.png", "COVID-19 Tracker Page");   
    const [covidDescription, covidSkills] = createDescription(
        'A COVID-19 tracker that visualizes the statistics (total positive cases, recoveries, and deaths) of COVID-19 data in the United States provided by the COVID Tracking Project API. ',
        'Technologies: React, Material-UI, Chart.js, COVID Tracking Project API'
    );  
    const covidLinks = createLinks(
        'https://covid19-us-tracker-visual.herokuapp.com/',
        'https://github.com/KennethNguyen/COVID19-US-tracker'
    );

    // Append all Covid project elements to main project div
    covidProject.append(covidTitle, covidImage, covidDescription, covidSkills, covidLinks)

    // Reddit FMF Script Main Div Element
    const redditProject = document.createElement('div');
    redditProject.classList.add('projectItem');

    const redditTitle = createTitle('Reddit FMF Deal Scraper');
    const redditImage = createImage("./images/exampleScript.png", "Reddit r/frugalmalefashion deal scraper result");
    const [redditDescription, redditSkills] = createDescription(
        'A script that scrapes /r/frugalmalefashion for deals and notifies the Reddit user of said deals in a Private Message',
        'Technologies: Python3, PRAW (Python Reddit API Wrapper)'
    );
    const redditLinks = createLinks(
        '', 
        'https://github.com/KennethNguyen/reddit-fmf-deal-scraper'
    );

    // Append all Reddit FMF Script project elements to main project div
    redditProject.append(redditTitle, redditImage, redditDescription, redditSkills, redditLinks);

    // Todo List Project Main Div Element
    const todoProject = document.createElement('div');
    todoProject.classList.add('projectItem');

    const todoTitle = createTitle('Todo List');
    const todoImage = createImage('./images/exampleTodo.png', "To-Do App Page");
    const [todoDescription, todoSkills] = createDescription(
        'A todo list for users to add tasks to a list and keep track of which tasks need to be done',
        'Technologies: React, JavaScript, CSS'
    );
    const todoLinks = createLinks(
        'https://kennethnguyen.github.io/todo-list/',
        'https://github.com/KennethNguyen/todo-list'
    );

    // Append all Todo project elements to main project div
    todoProject.append(todoTitle, todoImage, todoDescription, todoSkills, todoLinks);

    // Weather App Project Main Div Element
    const weatherProject = document.createElement('div');
    weatherProject.classList.add('projectItem');

    const weatherTitle = createTitle('Weather');
    const weatherImage = createImage("./images/exampleWeather.png", "Weather App Page");
    const [weatherDescription, weatherSkills] = createDescription(
        'A weather app to determine the weather of any place in the world using OpenWeatherMap API',
        'Technologies: React, JavaScript, Bootstrap/CSS'
    );
    const weatherLinks = createLinks(
        'https://kennethnguyen.github.io/weather-app/',
        'https://github.com/KennethNguyen/weather-app'
    );
    
    // Append all Weather project elements to main project div
    weatherProject.append(weatherTitle, weatherImage, weatherDescription, weatherSkills, weatherLinks);

    // Library Project Main Div Element
    const libraryProject = document.createElement('div');
    libraryProject.classList.add('projectItem');

    const libraryTitle = createTitle('Library');
    const libraryImage = createImage("./images/exampleLibrary.png", "Library App Page");
    const [libraryDescription, librarySkills] = createDescription(
        'A library for users to keep track of their books',
        'Technologies: HTML, JavaScript, CSS'
    );
    const libraryLinks = createLinks(
        'https://kennethnguyen.github.io/library/',
        'https://github.com/KennethNguyen/library'
    );

    // Append all Library project elements to main project div
    libraryProject.append(libraryTitle, libraryImage, libraryDescription, librarySkills, libraryLinks);

    // Tic-Tac-Toe Project Main Div Element
    const ticProject = document.createElement('div');
    ticProject.classList.add('projectItem');
    
    const ticTitle = createTitle('Tic-Tac-Toe');
    const ticImage = createImage("./images/exampleTicTacToe.png", "Tic-Tac-Toe App Page");    
    const [ticDescription, ticSkills] = createDescription(
        'A tic-tac-toe game able to play with 2 players',
        'Technologies: HTML, JavaScript, CSS'
    );
    const ticLinks = createLinks(
        'https://kennethnguyen.github.io/tic-tac-toe/',
        'https://github.com/KennethNguyen/tic-tac-toe'
    );

    // Append all Tic-Tac-Toe project elements to main project div
    ticProject.append(ticTitle, ticImage, ticDescription, ticSkills, ticLinks);

    // Notes Project Main Div Element
    const notesProject = document.createElement('div');
    notesProject.classList.add('projectItem');

    const notesTitle = createTitle('Notes');
    const notesImage = createImage("./images/exampleNotes.png", "Notes App Page"); 
    const [notesDescription, notesSkills] = createDescription(
        'A RESTful, full-stack CRUD notes web application',
        'Technologies: Py4Web, Vue.js, SQLite (through DAL connection), Bulma/CSS'
    );
    const notesLinks = createLinks(
        '',
        'https://github.com/KennethNguyen/py4web-notes-app'
    );

    // Append all Notes project elements to main project div
    notesProject.append(notesTitle, notesImage, notesDescription, notesSkills, notesLinks)

    // Append all project elements to the flexbox
    projectsFlexContainer.append(frydgeProject, covidProject, redditProject, todoProject, weatherProject, libraryProject, ticProject, notesProject);

    projectsSection.append(sectionTitle, projectsFlexContainer);

    (document.querySelector('.showcase')).appendChild(projectsSection);
}

export {projects};