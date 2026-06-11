export function renderProjects(
  projects,
  activeProjectId,
  onDeleteTodo,
  onToggleTodo,
  onSelectProject
) {
  const content = document.querySelector("#content");

  content.textContent = "";

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.name;

    const projectButton = document.createElement("button");
    projectButton.textContent = project.name;

    if (project.id === activeProjectId) {
      projectButton.textContent = `${project.name} (active)`;
    }

    projectButton.addEventListener("click", () => {
      onSelectProject(project.id);
    });

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectButton);

    if (project.id !== activeProjectId) {
      content.appendChild(projectDiv);
      return;
    }

    project.todos.forEach((todo) => {
      const todoDiv = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;

      checkbox.addEventListener("change", () => {
        onToggleTodo(project.id, todo.id);
      });

      const todoText = document.createElement("span");
      todoText.textContent = `${todo.title} (${todo.priority})`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
        onDeleteTodo(project.id, todo.id);
      });

      todoDiv.appendChild(checkbox);
      todoDiv.appendChild(todoText);
      todoDiv.appendChild(deleteButton);

      projectDiv.appendChild(todoDiv);
    });

    content.appendChild(projectDiv);
  });
}