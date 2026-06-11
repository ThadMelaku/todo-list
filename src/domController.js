export function renderProjects(
  projects,
  activeProjectId,
  onDeleteTodo,
  onToggleTodo,
  onSelectProject,
  onToggleDetails,
  onEditTodo
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
      todoText.addEventListener("click", () => {
        onToggleDetails(project.id, todo.id);
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        onDeleteTodo(project.id, todo.id);
      });

      todoDiv.appendChild(checkbox);
      todoDiv.appendChild(todoText);
      todoDiv.appendChild(deleteButton);

      if (todo.expanded) {
        const detailsDiv = document.createElement("div");

        const description = document.createElement("p");
        description.textContent = `Description: ${todo.description}`;

        const dueDate = document.createElement("p");
        dueDate.textContent = `Due: ${todo.dueDate}`;

        const priority = document.createElement("p");
        priority.textContent = `Priority: ${todo.priority}`;

        const editForm = document.createElement("form");

        editForm.innerHTML = `
          <input name="title" type="text" value="${todo.title}" required>
          <input name="description" type="text" value="${todo.description}">
          <input name="dueDate" type="date" value="${todo.dueDate}">
          <select name="priority">
            <option value="low" ${todo.priority === "low" ? "selected" : ""}>Low</option>
            <option value="medium" ${todo.priority === "medium" ? "selected" : ""}>Medium</option>
            <option value="high" ${todo.priority === "high" ? "selected" : ""}>High</option>
          </select>
          <button type="submit">Save</button>
        `;

        editForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const formData = new FormData(editForm);

          onEditTodo(project.id, todo.id, {
            title: formData.get("title"),
            description: formData.get("description"),
            dueDate: formData.get("dueDate"),
            priority: formData.get("priority"),
          });
        });

        detailsDiv.appendChild(description);
        detailsDiv.appendChild(dueDate);
        detailsDiv.appendChild(priority);
        detailsDiv.appendChild(editForm);

        todoDiv.appendChild(detailsDiv);
      }

      


      projectDiv.appendChild(todoDiv);
    });

    content.appendChild(projectDiv);
  });
}