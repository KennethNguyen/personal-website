const aboutMe = () => {
    // Change background of About Me section to a shade of black - Cape Cod
    (document.querySelector('.showcase')).style.backgroundColor = '#19443c';

    // Create the title for About Me section
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('aboutMe');

    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'About Me';

    // The content for the About Me section in a grid
    const aboutGrid = document.createElement('div');
    aboutGrid.classList.add('aboutGrid');

    // Personal Self section
    const personalSelf = document.createElement('div');
    personalSelf.classList.add('aboutElement');
    personalSelf.id = 'personalSelf';

    const personalTitle = document.createElement('h2');
    personalTitle.innerHTML = "I'm Kenneth Nguyen";

    const personalText = document.createElement('p');
    personalText.classList.add('aboutText');
    personalText.innerHTML = "I am a third year B.S. Computer Science major at University of California, Santa Cruz. Driven and focused, I like to see exceptional results and strive to produce such results. While working on a project, I think about ways to optimize or further improve any component of the project. Typically, I make notes on what I want to implement next on a project if I do not get to it. I am constantly learning new technology skills and improving myself as a programmer. My interests lie in learning and discovering new technologies and being able to deploy software that people want to use."

    personalSelf.append(personalTitle, personalText);

    // Hobbies section
    const hobbies = document.createElement('div');
    hobbies.classList.add('aboutElement');
    hobbies.id = 'hobbies';
    
    const hobbiesTitle = document.createElement('h2');
    hobbiesTitle.innerHTML = "Hobbies";

    const hobbiesText = document.createElement('p');
    hobbiesText.classList.add('aboutText');
    hobbiesText.innerHTML = "Outside of programming and school, my favorite thing to do is discover new songs and jam out to music. The main genres of music I listen to are hip-hop/rap, lo-fi hip hop, and EDM.  I enjoy sports and usually watch the NBA and NFL during their respective playoff seasons. I am also an avid gamer and especially hooked onto the Metroidvania, Soulsborne, and Platformer genres. Off of the screens, I like cooking because I can experiment with different recipes and ingredients to refine flavors and discover new tastes."

    hobbies.append(hobbiesTitle, hobbiesText);

    // Top Games section
    const topGames = document.createElement('div');
    topGames.classList.add('aboutElement');
    topGames.id = 'topGames';

    const topGamesTitle = document.createElement('h2');
    topGamesTitle.innerHTML = "My Top Games";

    const hollowKnight = document.createElement('img');
    hollowKnight.src="./images/hollow-knight-icon.png";
    hollowKnight.style.width = 'auto';
    hollowKnight.style.height = 'auto';

    const celeste = document.createElement('img');
    celeste.src="./images/celeste-icon.png";
    celeste.style.width = 'auto';
    celeste.style.height = 'auto';

    const darkSouls = document.createElement('img');
    darkSouls.src="./images/dark-souls-3-icon.png";
    darkSouls.style.width = 'auto';
    darkSouls.style.height = 'auto';

    topGames.append(topGamesTitle, hollowKnight, celeste, darkSouls);
    
    // Lofi Hip Hop Youtube Video
    const lofi = document.createElement('iframe');
    lofi.src="https://www.youtube.com/embed/hHW1oY26kxQ";
    lofi.style.width = 'auto';
    lofi.style.minWidth = '600px';
    lofi.style.height = 'auto';
    lofi.style.minHeight = '260px';

    // Append all content elements to grid
    aboutGrid.append(personalSelf, hobbies, topGames);

    // Append grid and lofi music video to About Me div
    aboutSection.append(sectionTitle, aboutGrid, lofi);
    
    (document.querySelector('.showcase')).appendChild(aboutSection);
}

export {aboutMe};