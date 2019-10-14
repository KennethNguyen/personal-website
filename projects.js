// Chop up project components instead of making one big file probably

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

    const todoImage = document.createElement('img');
    todoImage.classList.add('projectScreenshot');
    todoImage.src = "./images/exampleTodo.png";
    todoImage.width = 750;
    todoImage.height = 500;

    todoLeftSection.append(todoImage);

    // Todo Right Section (Title, Description, Utilized, Links)
    const todoRightSection = document.createElement('div');
    todoRightSection.classList.add('rightSection');

    const todoTitle = document.createElement('h2');
    todoTitle.classList.add('projectTitle');
    todoTitle.innerHTML = 'Todo List';

    const todoDescription = document.createElement('p');
    todoDescription.innerHTML = 'A todo list for users to add tasks to a list and keep track of which tasks need to be done'

    const todoSkills = document.createElement('p');
    todoSkills.innerHTML = 'Utilized: React.js, JavaScript, CSS'

    const todoLinks = document.createElement('div');
    todoLinks.classList.add('linksContainer');

    const todoLive = document.createElement('a');
    todoLive.classList.add('projectLink');
    todoLive.href = 'https://kennethnguyen.github.io/todo-list/';
    todoLive.target = '_blank';
    todoLive.innerHTML = 'Live Demo';

    const todoCode = document.createElement('a');
    todoCode.classList.add('projectLink');
    todoCode.href = 'https://github.com/KennethNguyen/todo-list';
    todoCode.target = '_blank';
    todoCode.innerHTML = 'Source Code';

    todoLinks.append(todoLive, todoCode);
    todoRightSection.append(todoTitle, todoDescription, todoSkills, todoLinks);

    todoProject.append(todoLeftSection, todoRightSection);

    // Weather App Element
    const weatherProject = document.createElement('div');
    weatherProject.classList.add('projectItem');

    // Weather Left Section (Image)
    const weatherLeftSection = document.createElement('div');
    weatherLeftSection.classList.add('leftSection');

    const weatherImage = document.createElement('img');
    weatherImage.src = "./images/exampleWeather.png";
    weatherImage.width = 750;
    weatherImage.height = 500;

    weatherLeftSection.append(weatherImage);

    // Weather Right Section (Title, Description, Utilized, Links)
    const weatherRightSection = document.createElement('div');
    weatherRightSection.classList.add('rightSection');

    const weatherTitle = document.createElement('h2');
    weatherTitle.classList.add('projectTitle');
    weatherTitle.innerHTML = 'Weather';

    const weatherDescription = document.createElement('p');
    weatherDescription.innerHTML = 'A weather app to determine the weather of any place in the world using OpenWeatherMap API'

    const weatherSkills = document.createElement('p');
    weatherSkills.innerHTML = 'Utilized: React.js, JavaScript, Bootstrap/CSS'

    const weatherLinks = document.createElement('div');
    weatherLinks.classList.add('linksContainer');

    const weatherLive = document.createElement('a');
    weatherLive.classList.add('projectLink');
    weatherLive.href = 'https://kennethnguyen.github.io/weather-app/';
    weatherLive.target = '_blank';
    weatherLive.innerHTML = 'Live Demo';

    const weatherCode = document.createElement('a');
    weatherCode.classList.add('projectLink');
    weatherCode.href = 'https://github.com/KennethNguyen/weather-app';
    weatherCode.target = '_blank';
    weatherCode.innerHTML = 'Source Code';

    weatherLinks.append(weatherLive, weatherCode);
    weatherRightSection.append(weatherTitle, weatherDescription, weatherSkills, weatherLinks);
    
    weatherProject.append(weatherLeftSection, weatherRightSection);

    // Library Element
    const libraryProject = document.createElement('div');
    libraryProject.classList.add('projectItem');

    // Library Left Section (Image)
    const libraryLeftSection = document.createElement('div');
    libraryLeftSection.classList.add('leftSection');

    const libraryImage = document.createElement('img');
    libraryImage.src = "./images/exampleLibrary.png";
    libraryImage.width = 750;
    libraryImage.height = 500;

    libraryLeftSection.append(libraryImage);

    // Library Right Section (Title, Description, Utilized, Links)
    const libraryRightSection = document.createElement('div');
    libraryRightSection.classList.add('rightSection');

    const libraryTitle = document.createElement('h2');
    libraryTitle.classList.add('projectTitle');
    libraryTitle.innerHTML = 'Library';

    const libraryDescription = document.createElement('p');
    libraryDescription.innerHTML = 'A library for users to keep track of their books'

    const librarySkills = document.createElement('p');
    librarySkills.innerHTML = 'Utilized: HTML, JavaScript, CSS'    

    const libraryLinks = document.createElement('div');
    libraryLinks.classList.add('linksContainer');

    const libraryLive = document.createElement('a');
    libraryLive.classList.add('projectLink');
    libraryLive.href = 'https://kennethnguyen.github.io/library/';
    libraryLive.target = '_blank';
    libraryLive.innerHTML = 'Live Demo';

    const libraryCode = document.createElement('a');
    libraryCode.classList.add('projectLink');
    libraryCode.href = 'https://github.com/KennethNguyen/library';
    libraryCode.target = '_blank';
    libraryCode.innerHTML = 'Source Code';

    libraryLinks.append(libraryLive, libraryCode);
    libraryRightSection.append(libraryTitle, libraryDescription, librarySkills, libraryLinks);

    libraryProject.append(libraryLeftSection, libraryRightSection);

    // Tic-Tac-Toe Element
    const ticProject = document.createElement('div');
    ticProject.classList.add('projectItem');

    // Tic-Tac-Toe Left Section (Image)
    const ticLeftSection = document.createElement('div');
    ticLeftSection.classList.add('leftSection');

    const ticImage = document.createElement('img');
    ticImage.src = "./images/exampleTicTacToe.png";
    ticImage.width = 750;
    ticImage.height = 500;

    ticLeftSection.append(ticImage);    

    // Tic-Tac-Toe Right Section (Title, Description, Utilized, Links)
    const ticRightSection = document.createElement('div');
    ticRightSection.classList.add('rightSection');

    const ticTitle = document.createElement('h2');
    ticTitle.classList.add('projectTitle');
    ticTitle.innerHTML = 'Tic-Tac-Toe';

    const ticSkills = document.createElement('p');
    ticSkills.innerHTML = 'Utilized: HTML, JavaScript, CSS'   

    const ticDescription = document.createElement('p');
    ticDescription.innerHTML = 'A tic-tac-toe game able to play with 2 players';

    const ticLinks = document.createElement('div');
    ticLinks.classList.add('linksContainer');

    const ticLive = document.createElement('a');
    ticLive.classList.add('projectLink');
    ticLive.href = 'https://kennethnguyen.github.io/tic-tac-toe/';
    ticLive.target = '_blank';
    ticLive.innerHTML = 'Live Demo';

    const ticCode = document.createElement('a');
    ticCode.classList.add('projectLink');
    ticCode.href = 'https://github.com/KennethNguyen/tic-tac-toe';
    ticCode.target = '_blank';
    ticCode.innerHTML = 'Source Code';
   
    ticLinks.append(ticLive, ticCode);
    ticRightSection.append(ticTitle, ticDescription, ticSkills, ticLinks);

    ticProject.append(ticLeftSection, ticRightSection);

    // Calculator Element
    const calculatorProject = document.createElement('div');
    calculatorProject.classList.add('calculatorProject', 'projectItem');

    // Calculator Left Section (Image)
    const calculatorLeftSection = document.createElement('div');
    calculatorLeftSection.classList.add('leftSection');

    const calculatorImage = document.createElement('img');
    calculatorImage.src = "./images/exampleCalculator.png";
    calculatorImage.width = 750;
    calculatorImage.height = 500;

    calculatorLeftSection.append(calculatorImage);   

    // Calculator Right Section (Title, Description, Utilized, Links)    
    const calculatorRightSection = document.createElement('div');
    calculatorRightSection.classList.add('rightSection');

    const calculatorTitle = document.createElement('h2');
    calculatorTitle.classList.add('projectTitle');
    calculatorTitle.innerHTML = 'Calculator';

    const calculatorDescription = document.createElement('p');
    calculatorDescription.innerHTML = 'A basic four function calculator'

    const calculatorSkills = document.createElement('p');
    calculatorSkills.innerHTML = 'Utilized: HTML, JavaScript, CSS'   

    const calculatorLinks = document.createElement('div');
    calculatorLinks.classList.add('linksContainer');

    const calculatorLive = document.createElement('a');
    calculatorLive.classList.add('projectLink');
    calculatorLive.href = 'https://kennethnguyen.github.io/calculator/';
    calculatorLive.target = '_blank';
    calculatorLive.innerHTML = 'Live Demo';

    const calculatorCode = document.createElement('a');
    calculatorCode.classList.add('projectLink');
    calculatorCode.href = 'https://github.com/KennethNguyen/calculator';
    calculatorCode.target = '_blank';
    calculatorCode.innerHTML = 'Source Code';

    calculatorLinks.append(calculatorLive, calculatorCode);
    calculatorRightSection.append(calculatorTitle, calculatorDescription, calculatorSkills, calculatorLinks);

    calculatorProject.append(calculatorLeftSection, calculatorRightSection)

    // Discover Recipes Element
    const recipeProject = document.createElement('div');
    recipeProject.classList.add('recipeProject', 'projectItem');

    // Recipe Left Section (Image)
    const recipeLeftSection = document.createElement('div');
    recipeLeftSection.classList.add('leftSection');

    const recipeImage = document.createElement('img');
    recipeImage.src = "./images/exampleRecipeWIP.jpg";
    recipeImage.width = 750;
    recipeImage.height = 500;

    recipeLeftSection.append(recipeImage);  

    // Recipe Right Section (Title, Description, Utilized, Links)    
    const recipeRightSection = document.createElement('div');
    recipeRightSection.classList.add('rightSection');    

    const recipeTitle = document.createElement('h2');
    recipeTitle.classList.add('projectTitle');
    recipeTitle.innerHTML = 'Discover Recipe (WORK IN PROGRESS)';

    const recipeDescription = document.createElement('p');
    recipeDescription.innerHTML = 'A recipe app to discover new recipes using Food2Fork API'

    const recipeSkills = document.createElement('p');
    recipeSkills.innerHTML = 'Utilized: React.js, JavaScript, CSS'   

    const recipeLinks = document.createElement('div');
    recipeLinks.classList.add('linksContainer');

    /* Currently not on github pages
    const recipeLive = document.createElement('a');
    recipeLive.classList.add('projectLink');
    recipeLive.href = 'https://kennethnguyen.github.io/discover-recipes/';
    recipeLive.target = '_blank';
    recipeLive.innerHTML = 'Live Demo';
    */

    const recipeCode = document.createElement('a');
    recipeCode.classList.add('projectLink');
    recipeCode.href = 'https://github.com/KennethNguyen/discover-recipes';
    recipeCode.target = '_blank';
    recipeCode.innerHTML = 'Source Code';

    recipeLinks.append(recipeCode);
    recipeRightSection.append(recipeTitle, recipeDescription, recipeSkills, recipeLinks);

    recipeProject.append(recipeLeftSection, recipeRightSection);
    
    // Append all project elements to the flexbox
    projectsFlexContainer.append(todoProject, weatherProject, libraryProject, ticProject, calculatorProject, recipeProject);

    projectsSection.append(sectionTitle, projectsFlexContainer);

    (document.querySelector('.showcase')).appendChild(projectsSection);
}

export {projects};