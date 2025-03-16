// ============================================
// 1. SELECTING ELEMENTS FROM THE DOM
// ============================================
// - We use `document.querySelector` and `document.getElementById` to select HTML elements.
// - These elements are stored in variables so we can manipulate them later.

// Select the container where all todo items will be displayed
const todoListContainer = document.querySelector(".todoListContainer");

// Select the input field where users type their todos
const todoInput = document.getElementById("todoInput");

// ============================================
// 2. LOCAL STORAGE FUNCTIONS
// ============================================
// - Local Storage is a way to store data in the browser that persists even after the page is refreshed.
// - Data is stored as key-value pairs, and the value must be a string.
// - We use `JSON.stringify` to convert arrays/objects to strings and `JSON.parse` to convert them back.

// Function to get the todo list from local storage
const getTodoListFromLocalStorage = () => {
    // Retrieve the todo list from local storage
    const todoListString = localStorage.getItem("todoList");
    // Convert the string back to an array using `JSON.parse`
    // If there's no data in local storage, return an empty array
    return JSON.parse(todoListString) || [];
};

// Function to save the todo list to local storage
const saveTodoListToLocalStorage = (todoList) => {
    // Convert the array to a string using `JSON.stringify`
    // Save it to local storage with the key "todoList"
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

// ============================================
// 3. INITIALIZE THE TODO LIST
// ============================================
// - Retrieve the todo list from local storage when the page loads.
// - If there's no data in local storage, initialize an empty array.

let todoList = getTodoListFromLocalStorage();

// ============================================
// 4. DISPLAY A SINGLE TODO ITEM
// ============================================
// - This function creates a new HTML element for a todo item and adds it to the DOM.

const displayTodoItem = (todoText) => {
    // Create a new `div` element to hold the todo item
    const todoItemDiv = document.createElement("div");
    // Add a class to the div for styling
    todoItemDiv.classList.add("todoItem");
    // Set the inner HTML of the div
    // - A `<li>` element to display the todo text
    // - A `<button>` element to delete the todo
    todoItemDiv.innerHTML = `
        <li>${todoText}</li>
        <button class="deleteButton">Delete</button>
    `;
    // Append the new todo item to the container
    todoListContainer.appendChild(todoItemDiv);
};

// ============================================
// 5. ADD A NEW TODO ITEM
// ============================================
// - This function adds a new todo item to the list and updates the DOM and local storage.

const addTodoItem = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the value from the input field and remove extra spaces
    const todoText = todoInput.value.trim();

    // If the input is empty, do nothing
    if (!todoText) return;

    // Clear the input field after adding the todo
    todoInput.value = "";

    // Check if the todo already exists in the list
    if (!todoList.includes(todoText)) {
        // Add the new todo to the list
        todoList.push(todoText);
        // Remove duplicates (if any) using `Set`
        todoList = [...new Set(todoList)];
        // Save the updated list to local storage
        saveTodoListToLocalStorage(todoList);
        // Display the new todo item on the page
        displayTodoItem(todoText);
    }
};

// ============================================
// 6. DISPLAY ALL TODO ITEMS ON PAGE LOAD
// ============================================
// - When the page loads, display all todo items stored in local storage.

const displayAllTodoItems = () => {
    // Loop through each todo item in the list
    todoList.forEach((todoText) => {
        // Display the todo item on the page
        displayTodoItem(todoText);
    });
};

// Call this function to display all todos when the page loads
displayAllTodoItems();

// ============================================
// 7. REMOVE A TODO ITEM
// ============================================
// - This function removes a todo item from the list and updates the DOM and local storage.

const removeTodoItem = (event) => {
    // Check if the clicked element is the delete button
    if (!event.target.classList.contains("deleteButton")) return;

    // Get the delete button that was clicked
    const todoItemToRemove = event.target;
    // Get the text of the todo item to be removed
    const todoTextToRemove = todoItemToRemove.parentElement.querySelector("li").innerText;
    // Get the parent element (the div containing the todo item)
    const parentElement = todoItemToRemove.parentElement;

    // Remove the todo item from the list
    // - Use `filter` to create a new array without the deleted todo
    todoList = todoList.filter((todoText) => {
        return todoText.toLowerCase() !== todoTextToRemove.toLowerCase();
    });

    // Save the updated list to local storage
    saveTodoListToLocalStorage(todoList);
    // Remove the todo item from the DOM
    parentElement.remove();
};

// ============================================
// 8. EVENT LISTENERS
// ============================================
// - Event listeners are used to handle user interactions like clicks and form submissions.

// Event listener for deleting todo items
todoListContainer.addEventListener("click", (event) => {
    // Check if the clicked element is the delete button
    if (event.target.classList.contains("deleteButton")) {
        // Call the function to remove the todo item
        removeTodoItem(event);
    }
});

// Event listener for adding new todo items
document.querySelector(".addButton").addEventListener("click", (event) => {
    // Call the function to add a new todo item
    addTodoItem(event);
});