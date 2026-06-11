import "./styles.css";

import {
  getProjects,
  addProject,
  addTodoToProject,
  deleteTodo,
  toggleTodoComplete,
} from "./appController.js";

import { renderProjects } from "./domController.js";

addProject("Training Dashboard");

const trainingProjectId = getProjects()[1].id;

addTodoToProject(
  trainingProjectId,
  "Build weekly mileage chart",
  "Display running data",
  "2026-06-15",
  "high"
);

function renderApp() {
  renderProjects(getProjects(), handleDeleteTodo, handleToggleTodo);
}

function handleDeleteTodo(projectId, todoId) {
  deleteTodo(projectId, todoId);
  renderApp();
}

function handleToggleTodo(projectId, todoId) {
  toggleTodoComplete(projectId, todoId);
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
    trainingProjectId,
    title,
    description,
    dueDate,
    priority
  );

  form.reset();
  renderApp();
});

renderApp();