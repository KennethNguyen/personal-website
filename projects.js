import {createImage, createRight, linkDiv} from './projectTemplate.js';

const projects = () => {
    // Change background of Projects section to a shade of black - River Bed
    (document.querySelector('.showcase')).style.backgroundColor = "#444d56";

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
                                  'Utilized: React.js, JavaScript, CSS'
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
                                  'Utilized: React.js, JavaScript, Bootstrap/CSS'
    );

    const weatherLinks = document.createElement('div');
    weatherLinks.classList.add('linksContainer');
    const [weatherLive, weatherCode] = linkDiv('https://kennethnguyen.github.io/weather-app/',
                                         'https://github.com/KennethNguyen/weather-app'
    );

    const weatherDisclaimer = document.createElement('p');
    weatherDisclaimer.innerHTML = '*Disclaimer: User must disable https secure connection to fetch the API call if using the demo. This is not needed if repo is cloned and is run using npm start'

    weatherLinks.append(weatherLive, weatherCode);
    weatherRightSection.append(weatherTitle, weatherDescription, weatherSkills, weatherLinks, weatherDisclaimer);
    
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

    // Calculator Element
    const calculatorProject = document.createElement('div');
    calculatorProject.classList.add('calculatorProject', 'projectItem');

    // Calculator Left Section (Image)
    const calculatorLeftSection = document.createElement('div');
    calculatorLeftSection.classList.add('leftSection');
    calculatorLeftSection.append(createImage("./images/exampleCalculator.png"));   

    // Calculator Right Section (Title, Description, Utilized, Links)    
    const calculatorRightSection = document.createElement('div');
    calculatorRightSection.classList.add('rightSection');
    const [calculatorTitle, calculatorDescription, calculatorSkills] = createRight('Calculator',
                                  'A basic four function calculator',
                                  'Utilized: HTML, JavaScript, CSS'
    );  

    const calculatorLinks = document.createElement('div');
    calculatorLinks.classList.add('linksContainer');
    const [calculatorLive, calculatorCode] = linkDiv('https://kennethnguyen.github.io/calculator/',
                                         'https://github.com/KennethNguyen/calculator'
    );

    calculatorLinks.append(calculatorLive, calculatorCode);
    calculatorRightSection.append(calculatorTitle, calculatorDescription, calculatorSkills, calculatorLinks);

    calculatorProject.append(calculatorLeftSection, calculatorRightSection)

    // Append all project elements to the flexbox
    projectsFlexContainer.append(todoProject, weatherProject, libraryProject, ticProject, calculatorProject);

    projectsSection.append(sectionTitle, projectsFlexContainer);

    (document.querySelector('.showcase')).appendChild(projectsSection);
}

export {projects};