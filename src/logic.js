//logic.js

// ---------------------------- Task Section ------------------------------------

// Inbox object - to hold all tasks
const inbox = {};

// Task Class Constructor - creates the task object
class Task {
    constructor(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {
        console.log("-----Task Constructor Initiated-----");
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskDueDate = taskDueDate;
        this.taskPriority = taskPriority;
        this.taskProject = taskProject;
    };
};

// Form Validation - checks if the form is filled out
function validateTaskForm(task, description, date, priority, project) {
    console.log("-----validateTaskForm function initiated-----");
    if (task === "" || description === "" || date === "" || priority === "" || project === "") {
        alert("Please fill out all fields");
        console.log("validateTaskForm check: false");
        return false;
    };
    console.log("validateTaskForm check: true");
    return true;
};

// function to add tasks to project
function addTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {
    console.log("-----addTask function initiated-----");
    const newTask = new Task(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject);
    console.log("newTask created: ", newTask);

    // find the correct project
    const projectIndex = myProjects.findIndex(project => project.projectTitle === taskProject);
    console.log("projectIndex: ", projectIndex);
    if (projectIndex !== -1 && myProjects.length > 0) {
        myProjects[projectIndex].tasks.push(newTask);
        console.log("newTask added to project: ", myProjects[projectIndex]);
    };
};

/* function addTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {
    console.log("-----addTask function initiated-----");
    const newTask = new Task(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject);
    console.log("newTask created: ", newTask);
    myTasks.push(newTask);
    console.log("newTask added to myTasks array: ", myTasks);
} */


// function to add a task to the inbox array

// ----------------------------- Project Section -------------------------------

// Project Array
console.log("-----myProject array created-----");
const myProjects = [];

//Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project constructor initiated-----");
        this.tasks = [];
        console.log(`Project Title: ${this.projectTitle}`);
        console.log(`Project Tasks: ${this.tasks}`);
    };
};

// Function to add a project to myProjects array
function addProject(projectTitle) {
    console.log("-----addProject function initiated-----");
    const newProject = new Project(projectTitle);
    console.log("newProject created: ", newProject);
    myProjects.push(newProject);
    console.log("newProject added to myProjects array, myProjects array: ", myProjects);
};

// Project form validation - checks if the project form is filled out
function validateProjectForm() {
    console.log("-----validateProjectForm function initiated-----");
    const projectTitle = projectTitleInput.value;
    console.log("projectTitle saved: ", projectTitle);
    if (projectTitle === "") {
        alert("Please enter a project title.");
        console.log("validateProjectForm check: false");
        return false;
    };
    console.log("validateProjectForm check: true");
    return true;
};

//function to remove projects from myProject array
function removeFromProjectArray() {
    console.log("-----removeFromProjectArray function initiated-----");
    console.log("current myProjects array: ", myProjects);
    const projectIndex = parseInt(event.target.getAttribute("data-index"), 10);
    console.log("projectIndex: ", projectIndex);
    myProjects.splice(projectIndex, 1);  // remove project from myProjects array
    console.log("project removed from myProjects array: ", myProjects);
};



export { Task, addTask, validateTaskForm, myProjects, addProject, validateProjectForm, removeFromProjectArray}