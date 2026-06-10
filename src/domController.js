export function renderProjects(projects) {
  const content = document.querySelector("#content");

  content.textContent = "";

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.name;

    projectDiv.appendChild(projectTitle);

    project.todos.forEach((todo) => {
      const todoDiv = document.createElement("div");

      todoDiv.textContent =
        `${todo.title} (${todo.priority})`;

      projectDiv.appendChild(todoDiv);
    });

    content.appendChild(projectDiv);
  });
}