// DOM.js

//Import
import { myTasks, Task, validateForm, addTask, removeFromArray } from "./logic";

// Collect DOM elements
const addBtn = document.querySelector(".contentAddButton");
const modal = document.querySelector(".formSection");
const overlay =document.querySelector(".overlay");
const closeBtn = document.querySelector(".modalClose");
const modalCancel = document.querySelector(".cancelBtn");
const submitBtn = document.querySelector(".submit");

// Modal open function
function addTaskButton() {
    addBtn.onclick = function () {
        console.log("-----addTaskButton function initiated-----");
        console.log("addTaskButton clicked");
        modal.style.display = "block";
        overlay.style.display = "block";
        console.log("taskModal displayed and overlay added");
    };
};

// modal close function
function closeButton() {
    closeBtn.onclick= function () {
        console.log("-----closeButton function initiated-----");
        console.log("modalClose button clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal hidden and overlay removed");
    };
};

// modal cancel function
function cancelButton() {
    modalCancel.onclick = function () {
        console.log("-----cancelButton function initiated-----");
        console.log("cancel button clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal hidden and overlay removed");
    };
};

const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");
const projectInput = document.getElementById("projectDropDown")

// Submit button function
function submitButton() {
    submitBtn.onclick = function (event) {
        console.log("-----submitButton function initiated-----");
        console.log("submitBtn clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal hidden and overlay removed");
        event.preventDefault();
        const task = taskInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;
        const priority = priorityInput.value;
        const project = projectInput.value;
        console.log("Project selected: ", project);

        if (validateForm(task, description, date, priority, project)) {
            addTask(task, description, date, priority, project);
            clearForm();
            /* displayTasks(); */
        };

    };
};

// Clear form function
function clearForm() {
    console.log("-----clearForm function initiated-----");
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
    projectInput.value = "";
    console.log("Form cleared");
}



// Export
export {addTaskButton, closeButton, cancelButton, submitButton, clearForm};

