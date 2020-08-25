!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=e=>{const t=document.createElement("img");return t.classList.add("projectScreenshot"),t.src=e,t.style.minWidth="50vmin",t.style.minHeight="50vmin",t.style.width="100%",t.style.height="100%",t},o=(e,t,n)=>{const a=document.createElement("h2");a.classList.add("projectTitle"),a.innerHTML=e;const o=document.createElement("p");o.innerHTML=t;const s=document.createElement("p");return s.innerHTML=n,[a,o,s]},s=(e,t)=>[c(e,"Live Demo","projectLiveButton"),c(t,"Source Code","projectCodeButton")],c=(e,t,n)=>{const a=document.createElement("a");a.classList.add("projectLink"),a.href=e,a.target="_blank";const o=document.createElement("button");return o.classList.add("projectButton",""+n),o.innerHTML=t,a.append(o),a},i=()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("projects");const t=document.createElement("h1");t.innerHTML="Projects";const n=document.createElement("div");n.classList.add("projectsFlexContainer");const c=document.createElement("div");c.classList.add("projectItem");const i=document.createElement("div");i.classList.add("leftSection"),i.append(a("./images/exampleTodo.png"));const d=document.createElement("div");d.classList.add("rightSection");const[r,l,m]=o("Todo List","A todo list for users to add tasks to a list and keep track of which tasks need to be done","Utilized: React, JavaScript, CSS"),p=document.createElement("div");p.classList.add("linksContainer");const[u,h]=s("https://kennethnguyen.github.io/todo-list/","https://github.com/KennethNguyen/todo-list");p.append(u,h),d.append(r,l,m,p),c.append(i,d);const g=document.createElement("div");g.classList.add("projectItem");const f=document.createElement("div");f.classList.add("leftSection"),f.append(a("./images/exampleWeather.png"));const y=document.createElement("div");y.classList.add("rightSection");const[v,L,E]=o("Weather","A weather app to determine the weather of any place in the world using OpenWeatherMap API","Utilized: React, JavaScript, Bootstrap/CSS"),b=document.createElement("div");b.classList.add("linksContainer");const[S,k]=s("https://kennethnguyen.github.io/weather-app/","https://github.com/KennethNguyen/weather-app");b.append(S,k),y.append(v,L,E,b),g.append(f,y);const w=document.createElement("div");w.classList.add("projectItem");const I=document.createElement("div");I.classList.add("leftSection"),I.append(a("./images/exampleLibrary.png"));const j=document.createElement("div");j.classList.add("rightSection");const[C,T,M]=o("Library","A library for users to keep track of their books","Utilized: Utilized: HTML, JavaScript, CSS"),P=document.createElement("div");P.classList.add("linksContainer");const[x,H]=s("https://kennethnguyen.github.io/library/","https://github.com/KennethNguyen/library");P.append(x,H),j.append(C,T,M,P),w.append(I,j);const D=document.createElement("div");D.classList.add("projectItem");const O=document.createElement("div");O.classList.add("leftSection"),O.append(a("./images/exampleScript.png"));const A=document.createElement("div");A.classList.add("rightSection");const[N,U,R]=o("Reddit FMF Deal Scraper","A script that scrapes /r/frugalmalefashion for deals and notifies the Reddit user of said deals in a Private Message","Utilized: Python, PRAW (Python Reddit API Wrapper)"),z=document.createElement("div");z.classList.add("linksContainer");const[,K]=s("","https://github.com/KennethNguyen/reddit-fmf-deal-scraper");z.append(K),A.append(N,U,R,z),D.append(O,A);const B=document.createElement("div");B.classList.add("projectItem");const V=document.createElement("div");V.classList.add("leftSection"),V.append(a("./images/exampleTicTacToe.png"));const W=document.createElement("div");W.classList.add("rightSection");const[_,q,F]=o("Tic-Tac-Toe","A tic-tac-toe game able to play with 2 players","Utilized: HTML, JavaScript, CSS"),J=document.createElement("div");J.classList.add("linksContainer");const[G,Q]=s("https://kennethnguyen.github.io/tic-tac-toe/","https://github.com/KennethNguyen/tic-tac-toe");J.append(G,Q),W.append(_,q,F,J),B.append(V,W);const X=document.createElement("div");X.classList.add("notesProject","projectItem");const Y=document.createElement("div");Y.classList.add("leftSection"),Y.append(a("./images/exampleNotes.png"));const Z=document.createElement("div");Z.classList.add("rightSection");const[$,ee,te]=o("Notes","A full-stack CRUD notes web application","Utilized: Py4Web, Vue.js, SQLite (through DAL connection), Bulma/CSS"),ne=document.createElement("div");ne.classList.add("linksContainer");const[,ae]=s("","https://github.com/KennethNguyen/py4web-notes-app");ne.append(ae),Z.append($,ee,te,ne),X.append(Y,Z);const oe=document.createElement("div");oe.classList.add("covidProject","projectItem");const se=document.createElement("div");se.classList.add("leftSection"),se.append(a("./images/exampleCOVID19.png"));const ce=document.createElement("div");ce.classList.add("rightSection");const[ie,de,re]=o("COVID19 US Tracker","A COVID-19 tracker that visualizes the statistics (total positive cases, recoveries, and deaths) of COVID-19 data in the United States provided by the COVID Tracking Project API. ","Utilized: React, Material-UI, Chart.js, COVID Tracking Project API"),le=document.createElement("div");le.classList.add("linksContainer");const[me,pe]=s("https://covid19-us-tracker-visual.herokuapp.com/","https://github.com/KennethNguyen/COVID19-US-tracker");le.append(me,pe),ce.append(ie,de,re,le),oe.append(se,ce),n.append(oe,X,D,c,g,w,B),e.append(t,n),document.querySelector(".showcase").appendChild(e)},d=()=>{const e=document.querySelector(".showcase");for(;e.firstChild;)e.removeChild(e.firstChild)};i(),document.getElementById("project").addEventListener("click",(function(){d(),i()})),document.getElementById("about").addEventListener("click",(function(){d(),(()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("aboutMe");const t=document.createElement("h1");t.innerHTML="About Me";const n=document.createElement("div");n.classList.add("aboutGrid");const a=document.createElement("div");a.classList.add("aboutElement"),a.id="personalSelf";const o=document.createElement("h2");o.innerHTML="Who Am I?";const s=document.createElement("p");s.classList.add("aboutText"),s.innerHTML="I am a fourth year B.S. Computer Science major at University of California, Santa Cruz. Driven and focused, I like to see exceptional results and strive to produce such results. While working on a project, I think about ways to optimize or further improve any component of the project for performance reasons and for the consumer's usage. Typically, I make notes on what I want to implement next on a project if I do not get to it. I am constantly learning new technology skills and improving myself as a programmer. My interests lie in learning and discovering new technologies and being able to deploy software that people want to use to help themselves, others, or the environment.",a.append(o,s);const c=document.createElement("div");c.classList.add("aboutElement"),c.id="hobbies";const i=document.createElement("h2");i.innerHTML="Hobbies";const d=document.createElement("p");d.classList.add("aboutText"),d.innerHTML="Outside of programming and school, my favorite thing to do is discover new songs and jam out to music. The main genres of music I listen to are hip-hop/rap, lo-fi hip hop, and EDM. I enjoy sports and usually watch the NBA and NFL during their respective playoff seasons. Not too long ago, I started gaining an interest in JDM cars and enjoy learning about car culture and performance aspects. I am also an avid gamer and especially hooked onto the Metroidvania, Soulsborne, and Platformer genres. Off of the screens, I like cooking because I can experiment with different recipes and ingredients to refine flavors and discover new tastes.",c.append(i,d);const r=document.createElement("div");r.classList.add("aboutElement"),r.id="topGames";const l=document.createElement("h2");l.innerHTML="My Top Games";const m=document.createElement("img");m.src="./images/hollow-knight-icon.png",m.style.width="auto",m.style.height="auto";const p=document.createElement("img");p.src="./images/celeste-icon.png",p.style.width="auto",p.style.height="auto";const u=document.createElement("img");u.src="./images/dark-souls-3-icon.png",u.style.width="auto",u.style.height="auto",r.append(l,m,p,u),n.append(a,c,r),e.append(t,n),document.querySelector(".showcase").appendChild(e)})()})),document.getElementById("resume").addEventListener("click",(function(){d(),(()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("resume");const t=document.createElement("h1");t.innerHTML="Resume";const n=document.createElement("div");n.classList.add("userLinks");const a=document.createElement("a");a.classList.add("linkItem"),a.innerHTML="View PDF in a new tab",a.href="KennethNguyen-Resume.pdf",a.target="_blank";const o=document.createElement("a");o.classList.add("linkItem"),o.innerHTML="Direct Download",o.href="KennethNguyen-Resume.pdf",o.download="KennethNguyen-Resume.pdf",n.append(a,o);const s=document.createElement("embed");s.classList.add("resumePDF"),s.src="KennethNguyen-Resume.pdf",s.style.maxHeight="775",s.height="775",s.width="80%",e.append(t,n,s),document.querySelector(".showcase").appendChild(e)})()}))}]);