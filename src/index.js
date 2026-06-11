import "./styles.css";

import {
  getProjects,
  addProject,
  addTodoToProject,
  deleteTodo,
  toggleTodoComplete,
  toggleTodoExpanded,
  updateTodo,
  getActiveProjectId,
  setActiveProject,
} from "./appController.js";

import { renderProjects } from "./domController.js";

function renderApp() {
  renderProjects(
    getProjects(),
    getActiveProjectId(),
    handleDeleteTodo,
    handleToggleTodo,
    handleSelectProject,
    handleToggleDetails,
    handleEditTodo
  );
}

function handleDeleteTodo(projectId, todoId) {
  deleteTodo(projectId, todoId);
  renderApp();
}

function handleToggleTodo(projectId, todoId) {
  toggleTodoComplete(projectId, todoId);
  renderApp();
}

function handleSelectProject(projectId) {
  setActiveProject(projectId);
  renderApp();
}

function handleToggleDetails(projectId, todoId) {
  toggleTodoExpanded(projectId, todoId);
  renderApp();
}

function handleEditTodo(projectId, todoId, updatedTodo) {
  updateTodo(projectId, todoId, updatedTodo);
  renderApp();
}

const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#todo-title").value;
  const description = document.querySelector("#todo-description").value;
  const dueDate = document.querySelector("#todo-due-date").value;
  const priority = document.querySelector("#todo-priority").value;

  addTodoToProject(
  getActiveProjectId(),
  title,
  description,
  dueDate,
  priority
);

  form.reset();
  renderApp();
});

const projectForm = document.querySelector("#project-form");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const projectName = document.querySelector("#project-name").value;

  addProject(projectName);

  projectForm.reset();
  renderApp();
});

renderApp();