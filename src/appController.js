import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

const projects = [createProject("Default")];

let activeProjectId = projects[0].id;

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

function getActiveProjectId() {
  return activeProjectId;
}

function setActiveProject(projectId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  activeProjectId = projectId;
}

function toggleTodoExpanded(projectId, todoId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = project.todos.find((todo) => todo.id === todoId);

  if (!todo) return;

  todo.expanded = !todo.expanded;
}

function updateTodo(projectId, todoId, updatedTodo) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = project.todos.find((todo) => todo.id === todoId);

  if (!todo) return;

  todo.title = updatedTodo.title;
  todo.description = updatedTodo.description;
  todo.dueDate = updatedTodo.dueDate;
  todo.priority = updatedTodo.priority;
}

export {
  getProjects,
  addProject,
  addTodoToProject,
  deleteTodo,
  toggleTodoComplete,
  toggleTodoExpanded,
  updateTodo,
  getActiveProjectId,
  setActiveProject,
};