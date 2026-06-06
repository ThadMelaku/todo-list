import "./styles.css";

import { getProjects, addTodoToProject } from "./appController.js";

const defaultProjectId = getProjects()[0].id;

addTodoToProject(
  defaultProjectId,
  "Finish Australia trip planning",
  "Book Flights",
  "2026-06-10",
  "medium"
);

console.log(getProjects());