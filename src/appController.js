import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

const projects = [createProject("Default")];

function getProjects() {
  return projects;
}

function addTodoToProject(projectId, title, description, dueDate, priority) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = createTodo(title, description, dueDate, priority);
  project.todos.push(todo);
}

export { getProjects, addTodoToProject };