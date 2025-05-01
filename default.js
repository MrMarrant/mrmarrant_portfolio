const powerButton = document.querySelector('.power');
powerButton.addEventListener('click', function() {
    window.open('../index.html', "_self");
});

const resumeButton = document.querySelector('.resume');
resumeButton.addEventListener('click', function() {
    window.open('../pages/resume.html', "_self");
});

const skillsButton = document.querySelector('.skills');
skillsButton.addEventListener('click', function() {
    window.open('../pages/skills.html', "_self");
});

const projectsButton = document.querySelector('.projects');
projectsButton.addEventListener('click', function() {
    window.open('../pages/projects.html', "_self");
});

const linksButton = document.querySelector('.links');
linksButton.addEventListener('click', function() {
    window.open('../pages/links.html', "_self");
});

function displaySkills(name, skill, divName) {
  if (divName === undefined) divName = "skills-container-back";
  const container = document.getElementById(divName);

  const line = document.createElement("div");
  line.className = "skill-line";

  const nameEl = document.createElement("div");
  nameEl.className = "skill-name";
  nameEl.textContent = name;
  line.appendChild(nameEl);

  for (let i = 0; i < 10; i++) {
    const square = document.createElement("div");
    square.className = "square";
    if (i < skill) {
      square.classList.add("white");
    }
    line.appendChild(square);
  }

  const score = document.createElement("div");
  score.className = "skill-score";
  score.innerHTML = `[<span class="value">${skill}</span>/10]`;
  line.appendChild(score);

  container.appendChild(line);
}

function addProjectCard(imgProject, imgTech, projectName, projectDescription, url) {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project-content w-100 d-flex justify-content-between align-items-center';
  projectDiv.addEventListener('click', function() {
    window.open(url, "_self");
});
  
  const imgProjectElement = document.createElement('img');
  imgProjectElement.src = imgProject;
  imgProjectElement.alt = 'Image project';
  imgProjectElement.className = 'img-project';

  const textDiv = document.createElement('div');
  textDiv.className = 'text-center';

  const title = document.createElement('h1');
  title.className = 'fw-bold mb-1';
  title.textContent = projectName;

  const description = document.createElement('p');
  description.className = 'mb-0';
  description.textContent = projectDescription;

  textDiv.appendChild(title);
  textDiv.appendChild(description);

  const imgTechElement = document.createElement('img');
  imgTechElement.src = imgTech;
  imgTechElement.alt = 'Image Tech';
  imgTechElement.className = 'img-tech';

  projectDiv.appendChild(imgProjectElement);
  projectDiv.appendChild(textDiv);
  projectDiv.appendChild(imgTechElement);

  const section = document.getElementById('projects-list');
  if (section) {
    section.appendChild(projectDiv);
  } else {
    console.error("No projects section found.");
  }
}

function addLinksCard(imgLink, url)
{
  const linkDiv = document.createElement('div');
  linkDiv.className = 'col-auto';
  linkDiv.addEventListener('click', function() {
    window.open(url, "_self");
  });
    const gridDiv = document.createElement('div');
    gridDiv.className = 'grid-item link-card';

  const imgLinkElement = document.createElement('img');
  imgLinkElement.src = imgLink;
  imgLinkElement.alt = 'Image Link';

  linkDiv.appendChild(gridDiv);
  gridDiv.appendChild(imgLinkElement);

  const section = document.getElementById('links-list');
  if (section) {
    section.appendChild(linkDiv);
  } else {
    console.error("No links section found.");
  }
}