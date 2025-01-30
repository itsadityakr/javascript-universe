let add = document.getElementById("add-btn");

add.addEventListener("click", () => {
    let inputValue = document.getElementById("input").value;
    if (!inputValue.trim()) return;

    console.log(inputValue);

    addTaskToDOM(inputValue);
    saveTask(inputValue);
});

function addTaskToDOM(taskText) {
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task-item');

    let taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    taskContainer.appendChild(taskTextElement);
    document.querySelector('.todos').appendChild(taskContainer);

    taskContainer.addEventListener("click", () => {
        taskContainer.remove();
        deleteTaskFromStorage(taskText);
    });
}

function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('todo_tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
}

function deleteTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('todo_tasks')) || [];
    let updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
}

document.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem('todo_tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
});