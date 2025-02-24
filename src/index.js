//index.js

import "./styles.css";
import { submitButton, closeButton, cancelButton, addTaskButton, deleteTaskFunction, todaySectionFunction, inboxSectionFunction, weekSectionFunction, addNewProject, closeNewProject, confirmNewProject, displayProjects, deleteProjectFunction, changeProject, addProjectTask } from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded and functions initialised");
    submitButton();
    closeButton();
    cancelButton();
    addTaskButton();
    deleteTaskFunction();
    todaySectionFunction();
    inboxSectionFunction();
    weekSectionFunction();
    addNewProject();
    closeNewProject();
    confirmNewProject();
    displayProjects();
    deleteProjectFunction();
    changeProject();
    /* addProjectTask(); */
});


// -----------------------------------------------------------------------------------------------------------------------