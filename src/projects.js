import {createImage, createRight, linkDiv} from './projectTemplate.js';

const projects = () => {
    // Change background of Projects section to a shade of black - River Bed
    (document.querySelector('.showcase')).style.backgroundColor = "#fff9e3";

    // Create the title for Projects section
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('projects');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Projects';

    const projectsFlexContainer = document.createElement('div');
    projectsFlexContainer.classList.add('projectsFlexContainer');

    // Todo List Element
    const todoProject = document.createElement('div');
    todoProject.classList.add('projectItem');

    // Todo Left Section (Image)
    const todoLeftSection = document.createElement('div');
    todoLeftSection.classList.add('leftSection');
    todoLeftSection.append(createImage('./images/exampleTodo.png'));

    // Todo Right Section (Title, Description, Utilized, Links)
    const todoRightSection = document.createElement('div');
    todoRightSection.classList.add('rightSection');
    const [todoTitle, todoDescription, todoSkills] = createRight('Todo List',
                                  'A todo list for users to add tasks to a list and keep track of which tasks need to be done',
                                  'Utilized: React, JavaScript, CSS'
    );

    const todoLinks = document.createElement('div');
    todoLinks.classList.add('linksContainer');
    const [todoLive, todoCode] = linkDiv('https://kennethnguyen.github.io/todo-list/',
                                         'https://github.com/KennethNguyen/todo-list'
    );

    todoLinks.append(todoLive, todoCode);
    todoRightSection.append(todoTitle, todoDescription, todoSkills, todoLinks);

    todoProject.append(todoLeftSection, todoRightSection);

    // Weather App Element
    const weatherProject = document.createElement('div');
    weatherProject.classList.add('projectItem');

    // Weather Left Section (Image)
    const weatherLeftSection = document.createElement('div');
    weatherLeftSection.classList.add('leftSection');
    weatherLeftSection.append(createImage("./images/exampleWeather.png"));

    // Weather Right Section (Title, Description, Utilized, Links)
    const weatherRightSection = document.createElement('div');
    weatherRightSection.classList.add('rightSection');
    const [weatherTitle, weatherDescription, weatherSkills] = createRight('Weather',
                                  'A weather app to determine the weather of any place in the world using OpenWeatherMap API',
                                  'Utilized: React, JavaScript, Bootstrap/CSS'
    );

    const weatherLinks = document.createElement('div');
    weatherLinks.classList.add('linksContainer');
    const [weatherLive, weatherCode] = linkDiv('https://kennethnguyen.github.io/weather-app/',
                                         'https://github.com/KennethNguyen/weather-app'
    );

    weatherLinks.append(weatherLive, weatherCode);
    weatherRightSection.append(weatherTitle, weatherDescription, weatherSkills, weatherLinks);
    
    weatherProject.append(weatherLeftSection, weatherRightSection);

    // Library Element
    const libraryProject = document.createElement('div');
    libraryProject.classList.add('projectItem');

    // Library Left Section (Image)
    const libraryLeftSection = document.createElement('div');
    libraryLeftSection.classList.add('leftSection');
    libraryLeftSection.append(createImage("./images/exampleLibrary.png"));

    // Library Right Section (Title, Description, Utilized, Links)
    const libraryRightSection = document.createElement('div');
    libraryRightSection.classList.add('rightSection');
    const [libraryTitle, libraryDescription, librarySkills] = createRight('Library',
                                  'A library for users to keep track of their books',
                                  'Utilized: Utilized: HTML, JavaScript, CSS'
    );

    const libraryLinks = document.createElement('div');
    libraryLinks.classList.add('linksContainer');
    const [libraryLive, libraryCode] = linkDiv('https://kennethnguyen.github.io/library/',
                                         'https://github.com/KennethNguyen/library'
    );

    libraryLinks.append(libraryLive, libraryCode);
    libraryRightSection.append(libraryTitle, libraryDescription, librarySkills, libraryLinks);

    libraryProject.append(libraryLeftSection, libraryRightSection);

    // Reddit FMF Script Element
    const redditProject = document.createElement('div');
    redditProject.classList.add('projectItem');

    // Reddit FMF Script Left Section (Image)
    const redditLeftSection = document.createElement('div');
    redditLeftSection.classList.add('leftSection');
    redditLeftSection.append(createImage("./images/exampleScript.png"));

    // Reddit FMF Script Right Section (Title, Description, Utilized, Links)
    const redditRightSection = document.createElement('div');
    redditRightSection.classList.add('rightSection');
    const [redditTitle, redditDescription, redditSkills] = createRight('Reddit FMF Deal Scraper',
                                                                'A script that scrapes /r/frugalmalefashion for deals and notifies the Reddit user of said deals in a Private Message',
                                                                'Utilized: Python, PRAW (Python Reddit API Wrapper)'
    );

    const redditLinks = document.createElement('div');
    redditLinks.classList.add('linksContainer');
    const [, redditCode] = linkDiv('', 'https://github.com/KennethNguyen/reddit-fmf-deal-scraper');

    redditLinks.append(redditCode);
    redditRightSection.append(redditTitle, redditDescription, redditSkills, redditLinks);
    
    redditProject.append(redditLeftSection, redditRightSection);

    // Tic-Tac-Toe Element
    const ticProject = document.createElement('div');
    ticProject.classList.add('projectItem');

    // Tic-Tac-Toe Left Section (Image)
    const ticLeftSection = document.createElement('div');
    ticLeftSection.classList.add('leftSection');
    ticLeftSection.append(createImage("./images/exampleTicTacToe.png"));    

    // Tic-Tac-Toe Right Section (Title, Description, Utilized, Links)
    const ticRightSection = document.createElement('div');
    ticRightSection.classList.add('rightSection');
    const [ticTitle, ticDescription, ticSkills] = createRight('Tic-Tac-Toe',
                                  'A tic-tac-toe game able to play with 2 players',
                                  'Utilized: HTML, JavaScript, CSS'
    );

    const ticLinks = document.createElement('div');
    ticLinks.classList.add('linksContainer');
    const [ticLive, ticCode] = linkDiv('https://kennethnguyen.github.io/tic-tac-toe/',
                                         'https://github.com/KennethNguyen/tic-tac-toe'
    );
   
    ticLinks.append(ticLive, ticCode);
    ticRightSection.append(ticTitle, ticDescription, ticSkills, ticLinks);

    ticProject.append(ticLeftSection, ticRightSection);

    // Notes Element
    const notesProject = document.createElement('div');
    notesProject.classList.add('notesProject', 'projectItem');

    // Notes Left Section (Image)
    const notesLeftSection = document.createElement('div');
    notesLeftSection.classList.add('leftSection');
    notesLeftSection.append(createImage("./images/exampleNotes.png"));   

    // Notes Right Section (Title, Description, Utilized, Links)    
    const notesRightSection = document.createElement('div');
    notesRightSection.classList.add('rightSection');
    const [notesTitle, notesDescription, notesSkills] = createRight('Notes',
                                  'A full-stack CRUD notes web application',
                                  'Utilized: Py4Web, Vue.js, SQLite (through DAL connection), Bulma/CSS'
    );  

    const notesLinks = document.createElement('div');
    notesLinks.classList.add('linksContainer');
    const [, notesCode] = linkDiv('', 'https://github.com/KennethNguyen/py4web-notes-app');

    notesLinks.append(notesCode);
    notesRightSection.append(notesTitle, notesDescription, notesSkills, notesLinks);

    notesProject.append(notesLeftSection, notesRightSection)

    // Covid Element
    const covidProject = document.createElement('div');
    covidProject.classList.add('covidProject', 'projectItem');

    // Covid Left Section (Image)
    const covidLeftSection = document.createElement('div');
    covidLeftSection.classList.add('leftSection');
    covidLeftSection.append(createImage("./images/exampleCOVID19.png"));   

    // Covid Right Section (Title, Description, Utilized, Links)    
    const covidRightSection = document.createElement('div');
    covidRightSection.classList.add('rightSection');
    const [covidTitle, covidDescription, covidSkills] = createRight('COVID19 US Tracker',
                                  'A COVID-19 tracker that visualizes the statistics (total positive cases, recoveries, and deaths) of COVID-19 data in the United States provided by the COVID Tracking Project API. ',
                                  'Utilized: React, Material-UI, Chart.js, COVID Tracking Project API'
    );  

    const covidLinks = document.createElement('div');
    covidLinks.classList.add('linksContainer');
    const [covidLive, covidCode] = linkDiv('https://covid19-us-tracker-visual.herokuapp.com/',
                                    'https://github.com/KennethNguyen/COVID19-US-tracker'
    );

    covidLinks.append(covidLive, covidCode);
    covidRightSection.append(covidTitle, covidDescription, covidSkills, covidLinks);

    covidProject.append(covidLeftSection, covidRightSection)

    // Append all project elements to the flexbox
    projectsFlexContainer.append(covidProject, notesProject, redditProject, todoProject, weatherProject, libraryProject, ticProject);

    projectsSection.append(sectionTitle, projectsFlexContainer);

    (document.querySelector('.showcase')).appendChild(projectsSection);
}

export {projects};