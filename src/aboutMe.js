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
    personalText.innerHTML = "My name has been all over this website a lot but just so there's no confusion on who I am, my name's Kenneth. I'm currently a fourth year B.S. Computer Science major at University of California, Santa Cruz. I enjoy learning about anything and everything, from how to perfectly toast toast (you read that right) to how to optimize React applications. I am an aspiring full-stack developer but moreso a front-end enthusiast. I am consistently learning new technologies and skills to improve myself as a programmer. As a developer, my interests lie in creating applications that people will enjoy using to help themselves, others, and/or the environment.";

    const jobPlug = document.createElement('p');
    jobPlug.classList.add('aboutText');
    jobPlug.innerHTML = "Right now I am looking for a full time software engineering or web development related role!";

    personalSelf.append(personalTitle, personalText, jobPlug);

    // Hobbies section
    const hobbies = document.createElement('div');
    hobbies.classList.add('aboutElement');
    hobbies.id = 'hobbies';
    
    const hobbiesTitle = document.createElement('h2');
    hobbiesTitle.innerHTML = "Hobbies";

    const hobbiesText = document.createElement('p');
    hobbiesText.classList.add('aboutText');
    hobbiesText.innerHTML = "I like to code, it's honestly relaxing and fun to work on side projects but there are a lot of other activities I enjoy. One of my favorite things to do is listen to music, specifically hip-hop/rap, EDM, lo-fi beats, and R&B but I am open to all music types except country. I usually watch the NBA and NFL during their playoff seasons (pretty surprised to see Tom Brady win another Super Bowl). Not too long ago, I started gaining an interest in JDM cars and enjoy learning about car culture and performance aspects. I am also an avid gamer and especially hooked onto the Metroidvania, Soulsborne, and Platformer genres. I like cooking because I can expand my taste buds trying different recipes and find new ways to minimize burning down my house."

    hobbies.append(hobbiesTitle, hobbiesText);

    // Top Games section
    const topGames = document.createElement('div');
    topGames.classList.add('aboutElement');
    topGames.id = 'topGames';

    const topGamesTitle = document.createElement('h2');
    topGamesTitle.innerHTML = "My Top Games";

    const hollowKnight = document.createElement('img');
    hollowKnight.src="./images/hollow-knight-icon.png";
    hollowKnight.alt="Hollow Knight Game Icon";
    hollowKnight.style.width = 'auto';
    hollowKnight.style.height = 'auto';

    const celeste = document.createElement('img');
    celeste.src="./images/celeste-icon.png";
    celeste.alt="Celeste Game Icon";
    celeste.style.width = 'auto';
    celeste.style.height = 'auto';

    const darkSouls = document.createElement('img');
    darkSouls.src="./images/dark-souls-3-icon.png";
    darkSouls.alt="Dark Souls Game Icon";
    darkSouls.style.width = 'auto';
    darkSouls.style.height = 'auto';

    topGames.append(topGamesTitle, hollowKnight, celeste, darkSouls);
    
    // Append all content elements to grid
    aboutGrid.append(personalSelf, hobbies, topGames);

    // Append grid and lofi music video to About Me div
    aboutSection.append(sectionTitle, aboutGrid);
    
    (document.querySelector('.showcase')).appendChild(aboutSection);
}

export {aboutMe};