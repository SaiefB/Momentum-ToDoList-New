// DOM.js

//Import
import {Task, addTask, validateTaskForm, myProjects, addProject, validateProjectForm, removeFromProjectArray} from "./logic";

// ---------------------------- Collect DOM Elements --------------------------
const addBtn = document.querySelector(".contentAddButton");
const modal = document.querySelector(".formSection");
const overlay =document.querySelector(".overlay");
const closeBtn = document.querySelector(".modalClose");
const modalCancel = document.querySelector(".cancelBtn");
const submitBtn = document.querySelector(".submit");

const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");
const projectInput = document.getElementById("projectDropDown");

const contentSection = document.querySelector(".content")
const taskItemContainer = document.querySelector(".taskItemContainer");

// ---------------------------- Task Section ------------------------------------

// Modal open function
function openTaskModal() {
    addBtn.onclick = function () {
        console.log("-----openTaskModal function called-----");
        console.log("addTaskButton clicked");
        modal.style.display = "block";
        overlay.style.display = "block";
        console.log("taskModal and overlay displayed");
    };
};

// Modal close function
function closeTaskModal() {
    closeBtn.onclick = function () {
        console.log("-----closeTaskModal function called-----");
        console.log("closeBtn clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal and overlay hidden");
    };
};

// modal cancel function
function cancelTaskModal() {
    modalCancel.onclick = function () {
        console.log("-----cancelTaskModal function called-----");
        console.log("task cancel button clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal and overlay hidden");
    };
};

// function to submit taskForm
function submitTask() {
    submitBtn.onclick = function (event) {
        console.log("-----submitTask function called-----");
        console.log("submitBtn clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal and overlay hidden");
        event.preventDefault();
        const task = taskInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;
        const priority = priorityInput.value;
        const project = projectInput.value;
        console.log("Project selected: ", project);

        if (validateTaskForm(task, description, date, priority, project)) {
            addTask(task, description, date, priority, project);
            clearTaskForm();
            /* displayTasks(); */
        };
    };
};

// function to clear task form
function clearTaskForm() {
    console.log("-----clearTaskForm function called-----");
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
    projectInput.value = "";
    console.log("task form cleared");
};



// ---------------------------- Project Section ------------------------------

// Collect Project DOM section
const projectAddBtn = document.querySelector(".projectAddBtn");
const projectAddModal = document.querySelector(".projectFormSection");
const cancelNewProjectBtn = document.querySelector(".projectCancelBtn");
const projectSubmitBtn = document.querySelector(".projectSubmit");
const projectTitleInput = document.querySelector(".projectTitleInput");
const projectList = document.querySelector(".projectList");

const contentTitle = document.querySelector(".contentTitle");

// Function to open project modal
function openProjectModal() {
    projectAddBtn.onclick = function () {
        console.log("-----openProjectModal function initiated-----");
        console.log("projectAddBtn clicked");
        projectAddBtn.style.display = "none";
        projectAddModal.style.display = "flex";
        console.log("projectAddBtn hidden");
        console.log("projectAddModal displayed");
    };
};

// Function to close project modal
function closeProjectModal() {
    cancelNewProjectBtn.onclick = function() {
        console.log("-----closeProjectModal function initiated-----");
        console.log("projectCancelBtn clicked");
        projectAddBtn.style.display = "block";
        projectAddModal.style.display = "none";
        console.log("projectAddBtn displayed");
        console.log("projectModal hidden");
    };
};

// Function to submit project
function submitProject() {
    projectSubmitBtn.onclick = function(event) {
        console.log("-----submitProject function initiated-----");
        console.log("submitProject clicked");
        event.preventDefault();
        const project = projectTitleInput.value;

        if (validateProjectForm(project)) {
            addProject(project);
            clearProjectForm();
            displayProjectAside();
        };
    };
};

// Function to clear project form
function clearProjectForm() {
    console.log("-----clearProjectForm function initiated-----");
    projectTitleInput.value = "";
    console.log("project form cleared");
};

//Function to display projects in the aside
function displayProjectAside() {
    console.log("-----displayProjectAside function initiated-----");
    projectList.innerHTML = "";
    console.log("projectList innerHTML cleared");

    myProjects.forEach((project, index) => {
        const projectAsideEntry = `
            <button class="projectBtn projectItem" data-index="${index}">
                <div class="projectItemLeftDiv">
                    <i class="fa-solid fa-box-archive"></i>
                    ${project.projectTitle}
                </div>
                <div class="projectItemRightDiv">
                    <p class="projectDelete">
                        <i class="fa-solid fa-trash" data-index="${index}"></i>
                    </p>
                </div>
            </button>
        `;
        projectList.innerHTML += projectAsideEntry;
        console.log("projectEntry added to projectList");
    });
};

// function to delete projects
function deleteProject() {
    projectList.addEventListener("click", (event) => {
        // check if delete icon is clicked
        if (event.target.classList.contains("fa-trash")) {
            console.log("-----deleteProject function initiated-----");
            console.log("delete icon clicked");
            removeFromProjectArray();
            displayProjectAside(); // update projectList
        };
    });
};

// function to get project index
function getProjectIndex() {
    projectList.addEventListener("click", (event) => {
        console.log("-----getProjectIndex function initiated-----");
        console.log("projectItem clicked");

        const projectBtn = event.target.closest(".projectBtn"); // Find the closest projectBtn
        if (!projectBtn) return; // If no projectBtn is found, return.

        const projectIndex = parseInt(projectBtn.getAttribute("data-index"), 10); // Get the projectIndex
        console.log("projectIndex: ", projectIndex);
        if (!isNaN(projectIndex)) { // if projectIndex is a number then...
            displayProjects(projectIndex); // Display tasks for selected project
        };
    });
};

// Function to display project
function displayProjects(projectIndex) {
    console.log("-----displayProjects function initiated-----");
    console.log("projectIndex: ", projectIndex);
    contentSection.innerHTML = "";
    console.log("contentSection innerHTML cleared");

    if (projectIndex >= 0 && projectIndex < myProjects.length) {
        const project = myProjects[projectIndex];

        const projectEntry = `
        <div class="projectContainer">
            <h1>${project.projectTitle}</h1>
            <div class="taskItemContainer"><div>
            <button class="contentAddButton">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        `;

        contentSection.innerHTML += projectEntry; // display project
        console.log("projectEntry added to contentSection");
    };
};

export {openTaskModal, closeTaskModal, cancelTaskModal, submitTask, openProjectModal, closeProjectModal, submitProject, clearProjectForm, deleteProject, getProjectIndex};