// -------------- BROWSER OBJECT MODEL (BOM) ------------------
// The Browser Object Model (BOM) allows JavaScript to interact with the web browser environment.
// It provides objects that help manipulate the browser window, handle navigation, retrieve user information, and more.

// The "window" object is the global object in the browser, and almost all BOM objects are properties or methods of "window".

// ------------ 1. window Object ------------
// The window object represents the entire browser window and provides access to the browser environment.
console.log("Window Object Example:");
console.log(window.innerWidth); // Get the width of the window's viewport
console.log(window.innerHeight); // Get the height of the window's viewport

// ------------ 2. document Object ------------
// The document object represents the HTML document loaded in the browser. It is a part of the DOM but is accessible via the window object.
console.log("\nDocument Object Example:");
let element = window.document.getElementById("example");  // Get an element by its ID
console.log(element);

// ------------ 3. location Object ------------
// The location object provides information about the current URL and allows you to manipulate the URL.
console.log("\nLocation Object Example:");
console.log(window.location.href); // Get the current URL
// Uncomment the line below to redirect the page
// window.location.href = "https://www.example.com";  // Change the current URL

// ------------ 4. history Object ------------
// The history object allows you to manipulate the browser's session history (e.g., going forward/back in history).
console.log("\nHistory Object Example:");
window.history.back(); // Go back to the previous page
// window.history.forward(); // Go forward to the next page

// ------------ 5. navigator Object ------------
// The navigator object provides information about the user's browser and system environment.
console.log("\nNavigator Object Example:");
console.log(window.navigator.userAgent);  // Get the browser's user agent string
console.log(window.navigator.language);  // Get the default language of the browser

// ------------ 6. screen Object ------------
// The screen object provides information about the user's screen, such as its width and height.
console.log("\nScreen Object Example:");
console.log(window.screen.width);  // Get the screen's width
console.log(window.screen.height); // Get the screen's height

// ------------ 7. setTimeout() & setInterval() ------------
// setTimeout() executes a function after a delay, while setInterval() executes a function repeatedly at specified intervals.
console.log("\nsetTimeout and setInterval Example:");

// setTimeout Example: Delay execution for 3 seconds
setTimeout(function() {
    console.log("This message appears after 3 seconds.");
}, 3000);

// setInterval Example: Repeated execution every 2 seconds
let interval = setInterval(function() {
    console.log("This message appears every 2 seconds.");
}, 2000);

// To stop the interval after 10 seconds
setTimeout(function() {
    clearInterval(interval);  // Stop the repeated interval after 10 seconds
    console.log("Stopped interval execution.");
}, 10000);

// ------------ 8. alert(), confirm(), prompt() ------------
// These methods provide simple ways to interact with the user through the browser.

console.log("\nUser Interaction Example:");
// alert() - Display a simple alert message
// alert("This is an alert!");

// confirm() - Display a confirmation dialog box with OK and Cancel buttons
// let userConfirmed = confirm("Do you want to proceed?");
// console.log(userConfirmed);

// prompt() - Ask the user for input and store the response
// let userName = prompt("What is your name?");
// console.log(userName);

// ------------ 9. localStorage & sessionStorage ------------
// localStorage and sessionStorage allow you to store data in the browser. The data stored in localStorage persists even after the browser is closed, while sessionStorage data lasts for the session.

console.log("\nlocalStorage and sessionStorage Example:");

// localStorage - Stores data that persists even after the browser is closed
window.localStorage.setItem("username", "JohnDoe"); // Store a value
let storedUsername = window.localStorage.getItem("username"); // Retrieve the value
console.log("Stored Username in localStorage:", storedUsername);

// sessionStorage - Stores data only for the current session (until the browser is closed)
window.sessionStorage.setItem("sessionID", "123456"); // Store session data
let storedSessionID = window.sessionStorage.getItem("sessionID"); // Retrieve session data
console.log("Stored Session ID in sessionStorage:", storedSessionID);

// ------------ 10. XMLHttpRequest ------------
// XMLHttpRequest allows JavaScript to send HTTP requests and handle the response, used for making AJAX requests.

console.log("\nXMLHttpRequest Example:");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);  // Example URL to fetch JSON data
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log("Data fetched successfully: ", JSON.parse(xhr.responseText));
    } else {
        console.error("Request failed with status: " + xhr.status);
    }
};
xhr.send(); // Send the request

// ------------ 11. Geolocation Object ------------
// The Geolocation object allows you to access the geographical location of the user (with permission).

console.log("\nGeolocation Example:");
navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
}, function(error) {
    console.error("Error occurred: " + error.message);
});

// ------------ 12. Notification Object ------------
// The Notification object allows you to send browser notifications to the user (with permission).

console.log("\nNotification Example:");
if (Notification.permission === "granted") {
    new Notification("You have a new message!");
} else {
    Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
            new Notification("You have a new message!");
        }
    });
}

// ------------ 13. Canvas Object ------------
// The Canvas object allows you to draw graphics within a browser element (e.g., for games, graphics rendering).

console.log("\nCanvas Example:");
// Assuming there is an HTML canvas element with id 'myCanvas' in the HTML
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI * 2, true);  // Draw a circle
ctx.fillStyle = "blue";
ctx.fill();  // Fill the circle with color

// End of the BOM explanation and examples.
