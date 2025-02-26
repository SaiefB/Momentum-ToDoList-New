// DOM.js

//Import
import { myTasks, Task, validateForm, addTask, removeFromArray } from "./logic";

// Collect DOM elements
const addBtn = document.querySelector(".contentAddButton");
const modal = document.querySelector(".formSection")
const overlay =document.querySelector(".overlay")


// Modal open function
function addTaskButton() {
    addBtn.onclick = function () {
        console.log("-----addTaskButton function initiated-----");
        console.log("addTaskButton clicked");
        modal.style.display = "block";
        overlay.style.display = "block";
        console.log("taskModal displayed and overlay added");
    }
}

export {addTaskButton};

