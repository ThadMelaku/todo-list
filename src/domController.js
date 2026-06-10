export function renderProjects(projects, onDeleteTodo) {
  const content = document.querySelector("#content");

  content.textContent = "";

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.name;

    projectDiv.appendChild(projectTitle);

    project.todos.forEach((todo) => {
      const todoDiv = document.createElement("div");

      const todoText = document.createElement("span");
      todoText.textContent = `${todo.title} (${todo.priority})`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
        onDeleteTodo(project.id, todo.id);
      });

      todoDiv.appendChild(todoText);
      todoDiv.appendChild(deleteButton);

      projectDiv.appendChild(todoDiv);
    });

    content.appendChild(projectDiv);
  });
}