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