let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
  };
  
  let personalDetail = {
    name: "Minh Cường",
    dob: "06 June 1995",
    spokenLanguages: ["English", "France", "German"],
    nationality: "Vietnam",
    interest: ["Music", "Reading", "Journey"],
    techs: [
      {
        id: 1,
        imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
        techName: "Android",
        exp: 2,
      },
      {
        id: 2,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        techName: "Angular",
        exp: 1,
      },
      {
        id: 3,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        techName: "Bootstrap",
        exp: 3,
      },
      {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        techName: "Vue",
        exp: 2,
      },
      {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        techName: "React",
        exp: 2 / 3,
      },
      {
        id: 6,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        techName: "Mongodb",
        exp: 0.25,
      },
      {
        id: 7,
        imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
        techName: "Laravel",
        exp: 1,
      },
      {
        id: 8,
        imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
        techName: "Node.js",
        exp: 5 / 6,
      },
    ],
  };
  
  let projects = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
  ];

localStorage.setItem('personalDetail', JSON.stringify(personalDetail));
localStorage.setItem('projects', JSON.stringify(projects));
localStorage.setItem('heroInfo', JSON.stringify(heroInfo));

    function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}


    const storedHeroInfo = getDataFromLocalStorage('heroInfo');
    const storedPersonalDetail = getDataFromLocalStorage('personalDetail');
    const storedProjects = getDataFromLocalStorage('projects');

    if (storedHeroInfo) {
    document.querySelector('.left1 h1').innerHTML = `
        <img height="25px" style="margin-top: 9.3px" src="${storedHeroInfo.imgUrl}" alt="" />
        ${storedHeroInfo.name}
    `;
    document.querySelector('.left h1').innerHTML = storedHeroInfo.name;
    document.querySelector('.left1 h3').innerHTML = storedHeroInfo.job;
}

    if (storedPersonalDetail) {
    document.getElementById('dateOfBirth').textContent = storedPersonalDetail.dob;
    document.getElementById('spokenLanguages').textContent = storedPersonalDetail.spokenLanguages.join(' - ');
    document.getElementById('nationality').textContent = storedPersonalDetail.nationality;
    document.getElementById('interest').textContent = storedPersonalDetail.interest.join(', ');

    const techContainer = document.getElementById('listTech');
    techContainer.innerHTML = '';

    storedPersonalDetail.techs.forEach(tech => {
        const techCard = document.createElement('div');
        techCard.className = 'card';
        techCard.innerHTML = `
            <span style="color: ${getColorForTech(tech.id)}" class="fa-brands fa-${tech.techName.toLowerCase()}"></span>
            <div>
                <span>${tech.techName}</span>
                <span>${tech.exp} Years Experience</span>
            </div>
        `;
        techContainer.appendChild(techCard);
    });
}

if (storedProjects) {

    const projectsContainer = document.querySelector('.get-in-touch');
    projectsContainer.innerHTML = '';

    storedProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.imgUrl}" alt="${project.projectName}">
            <h3>${project.projectName}</h3>
            <p>${project.link}</p>
            <ul>${project.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
        `;
        projectsContainer.appendChild(projectCard);
    });
}
window.addEventListener('storage', function (event) {
    if (event.key === 'heroInfo' || event.key === 'personalDetail' || event.key === 'projects') {
        updatePageData();
    }
});
function updatePageData() {
    const storedHeroInfo = getDataFromLocalStorage('heroInfo');
    const storedPersonalDetail = getDataFromLocalStorage('personalDetail');
    const storedProjects = getDataFromLocalStorage('projects');

    if (storedHeroInfo) {
        document.querySelector('.left1 h1').innerHTML = `
            <img height="25px" style="margin-top: 9.3px" src="${storedHeroInfo.imgUrl}" alt="" />
            ${storedHeroInfo.name}
        `;
        document.querySelector('.left h1').innerHTML = storedHeroInfo.name;
        document.querySelector('.left1 h3').innerHTML = storedHeroInfo.job;
    }

    if (storedPersonalDetail) {
        document.getElementById('dateOfBirth').textContent = storedPersonalDetail.dob;
        document.getElementById('spokenLanguages').textContent = storedPersonalDetail.spokenLanguages.join(' - ');
        document.getElementById('nationality').textContent = storedPersonalDetail.nationality;
        document.getElementById('interest').textContent = storedPersonalDetail.interest.join(', ');

        const techContainer = document.getElementById('listTech');
        techContainer.innerHTML = '';

        storedPersonalDetail.techs.forEach(tech => {
            const techCard = document.createElement('div');
            techCard.className = 'card';
            techCard.innerHTML = `
                <span style="color: ${getColorForTech(tech.id)}" class="fa-brands fa-${tech.techName.toLowerCase()}"></span>
                <div>
                    <span>${tech.techName}</span>
                    <span>${tech.exp} Years Experience</span>
                </div>
            `;
            techContainer.appendChild(techCard);
        });
    }

    if (storedProjects) {
        const projectsContainer = document.querySelector('.get-in-touch');
        projectsContainer.innerHTML = '';

        storedProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${project.imgUrl}" alt="${project.projectName}">
                <h3>${project.projectName}</h3>
                <p>${project.link}</p>
                <ul>${project.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
}
window.addEventListener('load', updatePageData);


