import "./styles.css";

import {
  getProjects,
  addProject,
  addTodoToProject,
  deleteTodo,
  toggleTodoComplete,
} from "./appController.js";

console.log("=== Initial Projects ===");
console.log(JSON.stringify(getProjects(), null, 2));

// Test addProject
addProject("Training Dashboard");

console.log("=== After addProject ===");
console.log(JSON.stringify(getProjects(), null, 2));

// Grab references we'll need
const defaultProject = getProjects()[0];
const trainingProject = getProjects()[1];

// Test addTodoToProject
addTodoToProject(
  trainingProject.id,
  "Build weekly mileage chart",
  "Display weekly totals from running data",
  "2026-06-15",
  "high"
);

console.log("=== After addTodoToProject ===");
console.log(JSON.stringify(getProjects(), null, 2));

// Grab the newly created todo
const todo = trainingProject.todos[0];

// Test toggleTodoComplete
toggleTodoComplete(trainingProject.id, todo.id);

console.log("=== After toggleTodoComplete ===");
console.log(JSON.stringify(getProjects(), null, 2));

// Test deleteTodo
deleteTodo(trainingProject.id, todo.id);

console.log("=== After deleteTodo ===");
console.log(JSON.stringify(getProjects(), null, 2));