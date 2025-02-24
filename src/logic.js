//Logic.js
console.log("-----myTasks array created-----")
const myTasks = [];

// Inbox Class Constructor
class Task {
    constructor(taskTitle, description, dueDate, priority, project) {
        console.log("-----Task Constructor Initiated-----")
        this.taskTitle = taskTitle;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
}

// Validates the form - checks if all fields are entered
function validateForm(task, description, date, priority, project) {
    console.log("-----Task validateForm function initiated-----");
    if (task === "" || description === "" || date === "" || priority === "" || project === "") {
        alert("Please complete all required fields");
        console.log("validateForm check: false");
        return false;
    }
    console.log("validateForm check: true");
    return true;
}

// Function to Add Task to Inbox
function addTask(taskTitle, description, dueDate, priority, project) {
    console.log("-----addTask Function initiated-----")
    const newTask = new Task(taskTitle, description, dueDate, priority, project);
    console.log("newTask created");
    myTasks.push(newTask);
    console.log("newTask pushed to myTasks, newTask array: ", newTask);
    console.log("myTask Array:", myTasks);
}

//Function to remove task from array
function removeFromArray() {
    console.log("-----removeFromArray function initiated-----")
    console.log("current myTasks array: " + myTasks);
    console.log("removeFromArray function initiated")
    const taskIndex = parseInt(event.target.getAttribute("data-index"), 10);
            myTasks.splice(taskIndex, 1); // Remove task from the array
            console.log("selected task removed from myTask array")
            console.log("updated myTask array: " + myTasks);
}

// Project Section
console.log("-----myProjects array created-----");
const myProjects = [];

// Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project constructor initiated-----");
    };
};

function validateProjectForm() {
    console.log("-----validateProjectForm function initiated-----");
    const projectTitle = projectInput.value;
    console.log("projectTitle saved");
    if (projectTitle === "") {
        alert("Please enter a project title");
        console.log("validateProjectForm check: false");
        return false;
    }
    console.log("validateProjectForm check: true");
    return true;
}

function addProject(projectTitle) {
    console.log("-----addProject function initiated-----");
    const newProject = new Project(projectTitle);
    myProjects.push(newProject);
    console.log("newProject pushed to myProjects array, newProject array: ", newProject);
    console.log("updated myProject Array:", myProjects);
}

// Function to remove project from array
function removeFromProjectArray() {
    console.log("-----removeFromProjectArray function initiated-----");
    console.log("current myProjects array: " + myProjects);
    console.log("removeFromProjectArray function initiated");
    const projectIndex = parseInt(event.target.getAttribute("data-index"), 10);
        myProjects.splice(projectIndex, 1); // Remove project from the array
        console.log("selected project removed from myProjects array");
        console.log("updated myProjects array: " + myProjects);
}
   

export { validateForm, addTask, myTasks, removeFromArray, validateProjectForm, addProject, myProjects, removeFromProjectArray};

