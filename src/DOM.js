// DOM.js

//Import
import { myTasks, Task, validateForm, addTask, removeFromArray, myProjects, addProject, validateProjectForm, removeFromProjectArray} from "./logic";

// Collect DOM elements
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
            displayTasks();
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
};

// display all tasks function
function displayTasks() {
    console.log("-----displayTasks function initiated-----");
    taskItemContainer.innerHTML = "";
    console.log("taskItemContainer innerHTML cleared");

    myTasks.forEach((task, index) => {
        const taskEntry = `
        <button class="contentButton" data-index="${index}">
            <div class="contentButtonLeftDiv">
                <i class="fa-regular fa-circle"></i>
                <p>${task.taskTitle}</p>
                <p>${task.description}</p>
                <p>${task.priority}</p>
            </div>
            <div class="contentButtonRightDiv">
                <p>${task.dueDate}</p>
                <p class="delete">
                    <i class="fa-solid fa-trash" data-index="${index}"></i>
                </p>
            </div>
        </button>
        `;
        taskItemContainer.innerHTML += taskEntry;
        console.log("taskEntry added to taskItemContainer");
    });
};

// delete task function
function deleteTask() {
    taskItemContainer.addEventListener("click", (event) => {
        console.log("-----deleteTask function initiated-----");
        // check if delete icon is clicked
        if (event.target.classList.contains("fa-trash")) {
            removeFromArray();
            displayTasks();
        };
    });
};

/* --------- Project Section ------------ */

// Collect DOM elements
const projectAddBtn = document.querySelector(".projectAddBtn");
const projectAddModal = document.querySelector(".projectFormSection");
const cancelNewProjectBtn = document.querySelector(".projectCancelBtn");
const projectSubmitBtn = document.querySelector(".projectSubmit");
const projectTitleInput = document.querySelector(".projectTitleInput")
const projectList = document.querySelector(".projectList");

// Function to open project modal
function openProjectModal() {
    projectAddBtn.onclick = function() {
        console.log("-----openProjectModal function initiated-----");
        console.log("projectAddBtn clicked");
        projectAddBtn.style.display = "none";
        projectAddModal.style.display = "flex";
        console.log("projectAddBtn hidden");
        console.log("projectModal displayed");
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
        console.log("Project selected: ", project);

        if (validateProjectForm(project)) {
            addProject(project);
            /* clearProjectForm(); */
            displayProjectAside();

            // Call modalProjectSelectOptions after project is added
            /* setTimeout(() => {
                modalProjectSelectOptions();
                console.log("modalProjectSelectOptions updated");
            }, 0); */
        };
    };
};

// Function to clear project form
function clearProjectForm() {
    console.log("-----clearProjectForm function initiated-----");
    projectTitleInput.value = "";
    console.log("Project form cleared");
};

// Function to display projects in aside
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

// Function to delete projects
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

const contentTitle = document.querySelector(".contentTitle");

// Function to change projects
function getProjectIndex() { // previously called changeProject
    projectList.addEventListener("click", (event) => {
        console.log("-----getProjectIndex function initiated-----");
        console.log("-----projectItem clicked-----");

        const projectBtn = event.target.closest(".projectBtn"); // Find the closest projectBtn
        if (!projectBtn) return; // If no projectBtn is found, return

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
            <div class="taskItemContainer"></div>
            <button class="contentAddButton">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        `;

        contentSection.innerHTML += projectEntry; // Display project
        console.log("projectEntry added to contentSection");
        /* addProjectTask(); */
    };
};

// Export
export {addTaskButton, closeButton, cancelButton, submitButton, clearForm, displayTasks, deleteTask, openProjectModal, closeProjectModal, submitProject, deleteProject, getProjectIndex};

