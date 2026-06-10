import "./styles.css";

import {
  getProjects,
  addProject,
  addTodoToProject,
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

renderProjects(getProjects());