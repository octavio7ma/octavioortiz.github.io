interface Task {
  id: number;
  text: string;
}

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

let tasks: Task[] = [];

function renderTasks(): void {
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

function addTask(): void {
  const text = taskInput.value.trim();

  if (text === "") return;

  const newTask: Task = {
    id: Date.now(),
    text: text
  };

  tasks.push(newTask);

  taskInput.value = "";

  renderTasks();
}

function deleteTask(id: number): void {
  tasks = tasks.filter(task => task.id !== id);

  renderTasks();
}

addBtn.addEventListener("click", addTask);

(window as any).deleteTask = deleteTask;