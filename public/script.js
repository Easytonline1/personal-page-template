function toggleTheme() {
    document.body.classList.toggle("dark");
}

const themeButton = document.getElementById("theme-btn");
themeButton.addEventListener("click", function () {
    toggleTheem();
});

function showProjects(projects) {
    const list = document.getElementById("projects-list");
    projects.forEach(function (project) {
          const card = document.createElement("div");
          card.className = "project";
          card.innerHTML = "<h3>" + project.title + "</h3><p>" + project.description + "</p>";
          list.appendChild(card);
    });
}

function loadProjects() {
    fetch("projects.json")
      .then(function (response) {
              return response.json();
      })
      .then(function (projects) {
              showProjects(projects);
      })
      .catch(function () {
              const error = document.getElementById("projects-error");
              error.textContent = "تعذر تحميل الأعمال";
              error.hidden = false;
      });
}

loadProjects();
