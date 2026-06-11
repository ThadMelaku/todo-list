function saveAppData(projects, activeProjectId) {
  const appData = {
    projects,
    activeProjectId,
  };

  localStorage.setItem("todoAppData", JSON.stringify(appData));
}

function loadAppData() {
  const appData = localStorage.getItem("todoAppData");

  if (!appData) return null;

  return JSON.parse(appData);
}

export { 
  saveAppData, 
  loadAppData 
};