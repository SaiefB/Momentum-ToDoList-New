// DOM.js

//Import
import { addTask, validateForm, myTasks, removeFromArray, validateProjectForm, addProject, myProjects, removeFromProjectArray} from "./logic";

// Collect DOM elements
const taskInput = document.querySelector(".task");
const descriptionInput = document.querySelector(".description");
const dateInput = document.querySelector(".date");
const priorityInput = document.querySelector(".priority");
const submitBtn = document.querySelector(".submit");
const modal = document.querySelector(".formSection");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modalClose");
const addBtn = document.querySelector(".contentAddButton");
const taskEntries = document.querySelector(".taskItemContainer");
const modalCancel = document.querySelector(".cancelBtn");

// Inbox/Today/This Week Section Variables

const inboxSection = document.querySelector(".inboxSection");
const inboxSectionBtn = document.querySelector(".inboxBtn");
const todaySection = document.querySelector(".todaySection");
const todaySectionBtn = document.querySelector(".todayBtn");
const weekSection = document.querySelector(".weekSection");
const weekSectionBtn = document.querySelector(".weekBtn");

// Project Variables

const projectAddBtn = document.querySelector(".projectAddBtn");
const projectAddModal = document.querySelector(".projectFormSection");
const cancelNewProjectBtn = document.querySelector(".projectCancelBtn");

const projectSubmitBtn = document.querySelector(".projectSubmit");
const projectInput = document.querySelector(".projectInput");
const mainSection = document.querySelector(".mainSection")
const projectList = document.querySelector(".projectList");
const contentAddBtn = document.querySelector(".contentAddButton");
let projectTaskItemContainer = "";

const projectItem = document.querySelector(".projectItem");

const select = document.getElementById("projectDropDown");

// Submit button functionality
function submitButton() {
    submitBtn.onclick = function (event) {
        console.log("-----submitButton function initiated-----");
        console.log("Task submitButton clicked")
        event.preventDefault();
        const task = taskInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;
        const priority = priorityInput.value;
        const project = select.value;
        console.log("select.value: " + project)

        if (validateForm(task, description, date, priority, project)) {
            addTask(task, description, date, priority, project);
            clearForm();
            displayTasks();
        };
    };
};

// Clear form fields
function clearForm() {
    console.log("-----clearForm function initiated-----");
    console.log("Task form cleared");
    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
    /* select.value = "inbox"; */
};

// Display tasks
function displayTasks() {
    console.log("-----displayTasks function initiated------");
    if (select.value === "inbox") { // TODO: this
        console.log("Inbox selected");
        taskEntries.innerHTML = ""; // Clears the current task entries to avoid duplication
        console.log("taskEntries innerHTML cleared");

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
            taskEntries.innerHTML += taskEntry;
            console.log("taskEntries innerHTML updated with new task")
        });

    } else { // TODO: this
        console.log(`${select.value} selected`);
        /* mainSection.innerHTML = ""; // Clear previous project entries */
        /* console.log("mainSection cleared"); */


        myTasks.forEach((task, index) => {
            if (task.project === select.value) {
                console.log(`task.project: ${task.project}`);
                console.log(`select.value: ${select.value}`);
                console.log("Project task found");
                const projectTaskEntry = `
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
                taskEntries.innerHTML += projectTaskEntry

                console.log("mainSection updated with new project task");
            };
        });

    };
    
};

// Delete Task functionality using Event Delegation
function deleteTaskFunction() {
    taskEntries.addEventListener("click", (event) => {
        console.log("deleteTask button clicked")
        // Check if a delete button was clicked
        if (event.target.classList.contains("fa-trash")) {
            removeFromArray();
            displayTasks(); // Re-render the task list
        };
    });
}

// Modal open and close function
function addTaskButton() {
    addBtn.onclick = function () {
        console.log("-----addTaskButton function initiated-----");
        console.log("addTaskButton clicked");
        modal.style.display = "block";
        overlay.style.display = "block";
        console.log("taskModal displayed and overlay added");
    };
}

function closeButton() {
    closeBtn.onclick = function () {
        console.log("-----closeButton function initiated-----");
        console.log("Task closeButton clicked");
        modal.style.display = "none";
        overlay.style.display = "none";
        console.log("taskModal and overlay removed");
    };
}

function cancelButton() {
    modalCancel.onclick = function() {
        console.log("-----cancelButton function initiated-----");
        console.log("Task cancel button clicked");
        modal.style.display = "none";
        overlay.style.display = "none"; 
        console.log("taskModal and overlay removed");
    }
}

/* --------- Inbox/Today/This Week Section ------------ */

function inboxSectionFunction() {
    inboxSectionBtn.onclick = function() {
        console.log("-----inboxSectionFunction initiated-----");
        console.log("inboxSection button clicked");
        inboxSection.style.display = "block";
        todaySection.style.display = "none";
        weekSection.style.display = "none";
        mainSection.style.display = "none";
        console.log("inboxSection displayed");
        console.log("todaySection removed");
        console.log("weekSection removed");
        console.log("mainSection removed");
    }
}

function todaySectionFunction() {
    todaySectionBtn.onclick = function() {
        console.log("-----todaySectionFunction initiated-----");
        console.log("todaySection button clicked");
        inboxSection.style.display = "none";
        todaySection.style.display = "block";
        weekSection.style.display = "none"
        mainSection.style.display = "none";
        console.log("inboxSection removed");
        console.log("todaySection displayed");
        console.log("weekSection removed");
        console.log("mainSection removed");
    }
}

function weekSectionFunction() {
    weekSectionBtn.onclick = function() {
        console.log("-----weekSectionFunction initiated-----");
        console.log("weekSection button clicked");
        inboxSection.style.display = "none";
        todaySection.style.display = "none";
        weekSection.style.display = "block"
        mainSection.style.display = "none";
        console.log("inboxSection removed");
        console.log("todaySection removed");
        console.log("weekSection displayed"); 
        console.log("mainSection removed");
    }
}

/* --------- Project Section ------------ */

function addNewProject() {
    projectAddBtn.onclick = function() {
        console.log("-----addNewProject function initiated-----");
        console.log("addNewProject button clicked");
        projectAddBtn.style.display = "none";
        projectAddModal.style.display = "flex";
        console.log("projectAddBtn removed");
        console.log("projectAddModal displayed");
    }
}

function closeNewProject() {
    cancelNewProjectBtn.onclick = function() {
        console.log("-----closeNewProject function initiated-----");
        console.log("createNewProjectBtn clicked");
        projectAddBtn.style.display = "flex";
        projectAddModal.style.display = "none";
        console.log("projectAddBtn displayed");
        console.log("projectAddModal removed");
    }
}

function confirmNewProject() {
    projectSubmitBtn.onclick = function(event) {
        console.log("-----confirmNewProject function initiated-----");
        console.log("projectSubmitBtn clicked");
        event.preventDefault();
        const project = projectInput.value;

        if (validateProjectForm(project)) {
            mainSection.innerHTML = "";
            console.log("main section cleared");
            addProject(project);
            clearProjectForm();
            displayProjectsAside();
            console.log("projectList updated");

            // Call modalProjectSelectOptions after project is added
            setTimeout(() => {
                modalProjectSelectOptions();
                console.log("modalProjectSelectOptions updated");
            }, 0);
        }
    }
};

// Clear Project Input
function clearProjectForm() {
    console.log("-----clearProjectForm function initiated-----");
    projectInput.value = "";
    console.log("projectForm cleared");
};

function displayProjectsAside() {
    console.log("-----displayProjectsAside function initiated-----");
    projectList.innerHTML = ""; // Clears the current project entries to avoid duplication 
    console.log("projectList cleared");

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
        console.log("projectList updated with new project");
    })
}

function deleteProjectFunction() {
    projectList.addEventListener("click", (event) => {
        console.log("-----deleteProjectFunction initiated-----");
        // check if a delete button was clicked
        if (event.target.classList.contains("fa-trash")) {
            console.log("deleteProject button clicked")
            removeFromProjectArray();
            displayProjectsAside(); // re-render the project list
        };
    });
};

function changeProject() {
    projectList.onclick = function() {
        console.log("-----changeProject function initiated-----");
        console.log("changeProject function initiated");
        inboxSection.style.display = "none";
        todaySection.style.display = "none";
        weekSection.style.display = "none"
        mainSection.style.display = "block";
        console.log("inboxSection removed");
        console.log("todaySection removed");
        console.log("weekSection removed"); 
        console.log("mainSection displayed");
        projectList.addEventListener("click", (event) => {
            console.log("projectItem clicked");
            
            const projectBtn = event.target.closest(".projectBtn"); // Find the clicked project button
            if (!projectBtn) return; // Ignore clicks outside a project button
            
            const projectIndex = parseInt(projectBtn.getAttribute("data-index"), 10);
            if (!isNaN(projectIndex)) {
                displayProjects(projectIndex); // Show only the selected project
            }
        });
    };
}

function displayProjects(projectIndex) {
    console.log("-----displayProjects function initiated-----");
    /* mainSection.innerHTML = ""; // Clear previous project entries */
    console.log("mainSection cleared");

    // Check if projectIndex is valid
    if (projectIndex >= 0 && projectIndex < myProjects.length) {
        const project = myProjects[projectIndex]; // Get the selected project

        const projectEntry = `
        <div class="projectContainer">
            <h1>${project.projectTitle}</h1>
            <div class="taskItemContainer"></div>
            <button class="contentAddButton">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        `;

        mainSection.innerHTML = projectEntry; // Display only the selected project
        console.log(`Displayed project: ${project.projectTitle}`);
        projectTaskItemContainer = document.querySelector(".projectTaskItemContainer");
        addProjectTask();
    } else {
        console.log("Invalid project index:", projectIndex);
    }
}

function addProjectTask() {
    mainSection.onclick = function() {
        console.log("-----addProjectTask function initiated-----");
        console.log("addProjectTask function initiated");

        mainSection.addEventListener("click", (event) => {
            console.log("addProjectTask button clicked");
            //check if a contentAddButton was clicked

            const addProjectTaskBtn = event.target.closest(".contentAddButton");
            if (!addProjectTaskBtn) return; // Ignore clicks outside a project button

            modal.style.display = "block";
            overlay.style.display = "block";
            console.log("taskModal displayed and overlay added");
        });
    };
};

function modalProjectSelectOptions() {
    
    console.log("-----modalProjectSelectOptions initiated-----");

    select.innerHTML = '<option value="inbox">Inbox</option>' //clears options to avoid duplication

    console.log("select: ", select)
    console.log("myProject: ", myProjects);
    myProjects.forEach((project, index) => {
        let option = document.createElement("option");
        option.value = `value${index + 1}`;
        option.text = project.projectTitle;
        select.add(option);
    })
}

// Export
export { submitButton, closeButton, cancelButton, addTaskButton, deleteTaskFunction, todaySectionFunction, inboxSectionFunction, weekSectionFunction, addNewProject, closeNewProject, confirmNewProject, displayProjects, deleteProjectFunction, changeProject, addProjectTask};


// create this again but not the way ive been doing, I need to have a single place i place the tasks and then filter that array to display the tasks which are assigned to that project.
