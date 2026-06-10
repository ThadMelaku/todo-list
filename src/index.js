import "./styles.css";

import {
  getProjects,
  addProject,
  addTodoToProject,
  deleteTodo,
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
  renderProjects(getProjects(), handleDeleteTodo);
}

function handleDeleteTodo(projectId, todoId) {
  deleteTodo(projectId, todoId);
  renderApp();
}

renderApp();