const aboutMe = () => {
    // Change background of About Me section to a shade of black - Cape Cod
    (document.querySelector('.showcase')).style.backgroundColor = '#fff9e3';

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
    personalTitle.innerHTML = "Who Am I?";

    const personalText = document.createElement('p');
    personalText.classList.add('aboutText');
    personalText.innerHTML = "My name has been all over this website a lot but just so there's no confusion on who I am, I am Kenneth. I'm currently a fourth year B.S. Computer Science major at University of California, Santa Cruz. I enjoy learning about anything and everything, from how to perfectly toast toast (you read that right) to how to speedrun creating a full-stack RESTful To-Do App. I am an aspiring full-stack web developer but moreso a front-end enthusiast. I am constantly learning new technologies and skills and improving myself as a programmer. As a developer, my interests lie in creating applications that people will want to use to help themselves, others, and/or the environment."

    personalSelf.append(personalTitle, personalText);

    // Hobbies section
    const hobbies = document.createElement('div');
    hobbies.classList.add('aboutElement');
    hobbies.id = 'hobbies';
    
    const hobbiesTitle = document.createElement('h2');
    hobbiesTitle.innerHTML = "Hobbies";

    const hobbiesText = document.createElement('p');
    hobbiesText.classList.add('aboutText');
    hobbiesText.innerHTML = "I like to code, it's honestly relaxing and fun to work on side projects but there are a lot of other activities I enjoy. One of my favorite things to do is listen to music, specifically hip-hop/rap, EDM, and lo-fi beats, but I am open to all music types except country. I usually watch the NBA and NFL during their playoff seasons and my pick for the NBA 2020 Champions are the Lakers (hopefully this ages well). Not too long ago, I started gaining an interest in JDM cars and enjoy learning about car culture and performance aspects. I am also an avid gamer and especially hooked onto the Metroidvania, Soulsborne, and Platformer genres. Off the screens, I like cooking because I can expand my taste buds trying different recipes and find new ways to minimize burning down my house."

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
    
    /*
    // Lofi Hip Hop Youtube Video
    const lofi = document.createElement('iframe');
    lofi.src="https://www.youtube.com/embed/hHW1oY26kxQ";
    lofi.style.width = 'auto';
    lofi.style.minWidth = '600px';
    lofi.style.height = 'auto';
    lofi.style.minHeight = '260px';
    */
    // Append all content elements to grid
    aboutGrid.append(personalSelf, hobbies, topGames);

    // Append grid and lofi music video to About Me div
    aboutSection.append(sectionTitle, aboutGrid);
    // aboutSection.append(sectionTitle, aboutGrid, lofi);
    
    (document.querySelector('.showcase')).appendChild(aboutSection);
}

export {aboutMe};