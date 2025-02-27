//Logic.js

console.log("-----myTasks array created-----");
const myTasks = [];

//Task Class Constructor
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
    };
    console.log("validateForm check: true");
    return true;
};

// Function to add tasks to inbox section
function addTask(taskTitle, description, dueDate, priority, project) {
    console.log("-----addTask function initiated-----");
    const newTask = new Task(taskTitle, description, dueDate, priority, project);
    console.log("newTask Created: ", newTask);
    myTasks.push(newTask);
    console.log("newTask added to myTasks array, myTasks array: ", myTasks);
};

// Function to remove tasks from myTasks array
function removeFromArray() {
    console.log("-----removeFromArray function initiated-----");
    console.log("current myTasks array: " + myTasks);
    console.log("removeFromArray function initiated");
    const taskIndex = parseInt(event.target.getAttribute("data-index"), 10);
    console.log("taskIndex: ", taskIndex);
    myTasks.splice(taskIndex, 1); // remove task from myTasks array
    console.log("Task removed from myTasks array: ", myTasks);
};

// Project Section
console.log("-----myProjects array created-----");
const myProjects = [];

// Project Class Constructor
class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        console.log("-----Project Constructor Initiated-----");
    };
};



export { myTasks, Task, validateForm, addTask, removeFromArray };