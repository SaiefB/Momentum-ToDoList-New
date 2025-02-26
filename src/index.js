//index.js

import "./styles.css";
import { addTaskButton } from "./DOM";

document.addEventListener("DOMContentLoaded", () => {
    console.log("-----DOM Loaded-----");
    addTaskButton();
});