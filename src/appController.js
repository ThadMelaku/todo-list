import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

const projects = [createProject("Default")];

function getProjects() {
  return projects;
}

function addProject(name) {
  const project = createProject(name);
  projects.push(project);
}

function addTodoToProject(projectId, title, description, dueDate, priority) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = createTodo(title, description, dueDate, priority);
  project.todos.push(todo);
}

function deleteTodo(projectId, todoId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  project.todos = project.todos.filter((todo) => todo.id !== todoId);
}

function toggleTodoComplete(projectId, todoId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = project.todos.find((todo) => todo.id === todoId);

  if (!todo) return;

  todo.completed = !todo.completed;
}

export {
  getProjects,
  addProject,
  addTodoToProject,
  deleteTodo,
  toggleTodoComplete,
};