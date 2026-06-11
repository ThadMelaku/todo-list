import { createProject } from "./project.js";
import { createTodo } from "./todo.js";
import { saveAppData, loadAppData } from "./storage.js";

const savedData = loadAppData();
const projects = savedData?.projects || [createProject("Default")];
let activeProjectId = savedData?.activeProjectId || projects[0].id;

function getProjects() {
  return projects;
}

function addProject(name) {
  const project = createProject(name);
  projects.push(project);
  save();
}

function addTodoToProject(projectId, title, description, dueDate, priority) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = createTodo(title, description, dueDate, priority);
  project.todos.push(todo);
  save();
}

function deleteTodo(projectId, todoId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  project.todos = project.todos.filter((todo) => todo.id !== todoId);
  save();
}

function toggleTodoComplete(projectId, todoId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = project.todos.find((todo) => todo.id === todoId);

  if (!todo) return;

  todo.completed = !todo.completed;
  save();
}

function getActiveProjectId() {
  return activeProjectId;
}

function setActiveProject(projectId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  activeProjectId = projectId;
  save();
}

function toggleTodoExpanded(projectId, todoId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return;

  const todo = project.todos.find((todo) => todo.id === todoId);

  if (!todo) return;

  todo.expanded = !todo.expanded;
  save();
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
  save();
}

function save() {
  saveAppData(projects, activeProjectId);
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