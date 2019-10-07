const projects = () => {
    // Change background of Projects section to a shade of black - River Bed
    (document.querySelector('.showcase')).style.backgroundColor = "#444d56";

    // Create the title for Projects section
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('projects');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Projects';

    const projectsGrid = document.createElement('div');
    projectsGrid.classList.add('projectsGrid');

    // Todo List Element
    const todoProject = document.createElement('div');
    todoProject.classList.add('todoProject', 'projectItem');

    const todoTitle = document.createElement('h2');
    todoTitle.innerHTML = 'Todo List';

    const todoDescription = document.createElement('p');
    todoDescription.innerHTML = 'A todo list'

    const todoLive = document.createElement('a');
    todoLive.classList.add('projectLink');
    todoLive.href = 'https://kennethnguyen.github.io/todo-list/';
    todoLive.target = '_blank';
    todoLive.innerHTML = 'Live Demo';

    const todoCode = document.createElement('a');
    todoCode.classList.add('projectLink');
    todoCode.href = 'https://github.com/KennethNguyenx solid white;/todo-list';
    todoCode.target = '_blank';
    todoCode.innerHTML = 'Source Code';

    todoProject.append(todoTitle, todoDescription, todoLive, todoCode);

    // Weather App Element
    const weatherProject = document.createElement('div');
    weatherProject.classList.add('weatherProject', 'projectItem');

    const weatherTitle = document.createElement('h2');
    weatherTitle.innerHTML = 'Weather';

    const weatherDescription = document.createElement('p');
    weatherDescription.innerHTML = 'A weather app'

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

    weatherProject.append(weatherTitle, weatherDescription, weatherLive, weatherCode);

    // Library Element
    const libraryProject = document.createElement('div');
    libraryProject.classList.add('libraryProject', 'projectItem');

    const libraryTitle = document.createElement('h2');
    libraryTitle.innerHTML = 'Library';

    const libraryDescription = document.createElement('p');
    libraryDescription.innerHTML = 'A library'

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

    libraryProject.append(libraryTitle, libraryDescription, libraryLive, libraryCode);

    // Tic-Tac-Toe Element
    const ticProject = document.createElement('div');
    ticProject.classList.add('ticProject', 'projectItem');

    const ticTitle = document.createElement('h2');
    ticTitle.innerHTML = 'Tic-Tac-Toe';

    const ticDescription = document.createElement('p');
    ticDescription.innerHTML = 'A tic-tac-toe game'

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

    ticProject.append(ticTitle, ticDescription, ticLive, ticCode);

    // Calculator Element
    const calculatorProject = document.createElement('div');
    calculatorProject.classList.add('calculatorProject', 'projectItem');

    const calculatorTitle = document.createElement('h2');
    calculatorTitle.innerHTML = 'Calculator';

    const calculatorDescription = document.createElement('p');
    calculatorDescription.innerHTML = 'A calculator'

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

    calculatorProject.append(calculatorTitle, calculatorDescription, calculatorLive, calculatorCode);

    // Discover Recipes Element
    const recipeProject = document.createElement('div');
    recipeProject.classList.add('recipeProject', 'projectItem');

    const recipeTitle = document.createElement('h2');
    recipeTitle.innerHTML = 'Discover Recipe';

    const recipeDescription = document.createElement('p');
    recipeDescription.innerHTML = 'A recipe app'

    const recipeLive = document.createElement('a');
    recipeLive.classList.add('projectLink');
    recipeLive.href = 'https://kennethnguyen.github.io/discover-recipes/';
    recipeLive.target = '_blank';
    recipeLive.innerHTML = 'Live Demo';

    const recipeCode = document.createElement('a');
    recipeCode.classList.add('projectLink');
    recipeCode.href = 'https://github.com/KennethNguyen/discover-recipes';
    recipeCode.target = '_blank';
    recipeCode.innerHTML = 'Source Code';

    recipeProject.append(recipeTitle, recipeDescription, recipeLive, recipeCode);

    // Append all project elements to the flexbox
    projectsGrid.append(todoProject, weatherProject, libraryProject, ticProject, calculatorProject, recipeProject);

    projectsSection.append(sectionTitle, projectsGrid);

    (document.querySelector('.showcase')).appendChild(projectsSection);
}

export {projects};