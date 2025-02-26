//index.js

import "./styles.css";
import { addTaskButton, closeButton, cancelButton, submitButton, clearForm, displayTasks } from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    console.log("-----DOM Loaded-----");
    addTaskButton();
    closeButton();
    cancelButton();
    submitButton();
    clearForm();
    displayTasks();
});