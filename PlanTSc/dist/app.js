"use strict";
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
      ${task.text}
      <button onclick="deleteTask(${task.id})">X</button>
    `;
        taskList.appendChild(li);
    });
}
function addTask() {
    const text = taskInput.value.trim();
    if (text === "")
        return;
    const newTask = {
        id: Date.now(),
        text: text
    };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
addBtn.addEventListener("click", addTask);
window.deleteTask = deleteTask;
