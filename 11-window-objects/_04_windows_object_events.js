// ============================
// Window Object Events in Depth
// ============================

// 1. Page Lifecycle Events
// These events are associated with the loading, unloading, and error handling during the page's lifecycle.

// ============================
// onload Event
// Triggered when the page has finished loading, including all assets (images, scripts, etc.).

console.log("===== onload Event =====");

// Event listener for page load.
window.onload = function() {
  console.log("Page has finished loading.");
};

// ============================
// onbeforeunload Event
// Triggered just before the page is unloaded (e.g., when navigating away or closing the window).

console.log("===== onbeforeunload Event =====");

// Warning the user when they try to leave the page.
window.onbeforeunload = function(event) {
  return "Are you sure you want to leave?";
};

// ============================
// onunload Event
// Triggered when the page is being unloaded (e.g., when the user navigates away, closes the tab, or refreshes the page).

console.log("===== onunload Event =====");

// Event listener for page unload.
window.onunload = function() {
  console.log("Page is being unloaded.");
};

// ============================
// onerror Event
// Triggered when an error occurs in the script (e.g., syntax errors or resource loading issues).

console.log("===== onerror Event =====");

// Catching errors globally.
window.onerror = function(message, source, lineno, colno, error) {
  console.log(`Error occurred: ${message} at ${source}:${lineno}:${colno}`);
  return true; // Prevent the default error handling
};

// ============================
// onoffline Event
// Triggered when the browser goes offline (e.g., disconnects from the internet).

console.log("===== onoffline Event =====");

// Event listener for going offline.
window.onoffline = function() {
  console.log("You are now offline.");
};

// ============================
// ononline Event
// Triggered when the browser goes online (e.g., reconnects to the internet).

console.log("===== ononline Event =====");

// Event listener for going online.
window.ononline = function() {
  console.log("You are now online.");
};

// ============================
// 2. User Interaction Events
// These events are triggered by user interactions with the window (e.g., focus, resize, etc.).

// ============================
// onfocus Event
// Triggered when the window gains focus (e.g., when the user clicks on the window).

console.log("===== onfocus Event =====");

// Event listener for window focus.
window.onfocus = function() {
  console.log("Window has gained focus.");
};

// ============================
// onblur Event
// Triggered when the window loses focus (e.g., when the user clicks away from the window).

console.log("===== onblur Event =====");

// Event listener for window blur.
window.onblur = function() {
  console.log("Window has lost focus.");
};

// ============================
// onresize Event
// Triggered when the window is resized (either by the user or programmatically).

console.log("===== onresize Event =====");

// Event listener for window resize.
window.onresize = function() {
  console.log("Window has been resized. New dimensions:", window.innerWidth, window.innerHeight);
};

// ============================
// onscroll Event
// Triggered when the window is scrolled (e.g., the user scrolls the page).

console.log("===== onscroll Event =====");

// Event listener for window scroll.
window.onscroll = function() {
  console.log("Window has been scrolled. Current scroll position:", window.scrollY);
};

// ============================
// 3. Media and Input Events
// These events are triggered by user input actions such as keyboard and mouse events.

// ============================
// onkeydown Event
// Triggered when a key is pressed down (while the key is held).

console.log("===== onkeydown Event =====");

// Event listener for keydown.
window.onkeydown = function(event) {
  console.log("Key pressed:", event.key);
};

// ============================
// onkeyup Event
// Triggered when a key is released.

console.log("===== onkeyup Event =====");

// Event listener for keyup.
window.onkeyup = function(event) {
  console.log("Key released:", event.key);
};

// ============================
// onmousemove Event
// Triggered when the mouse is moved over the window.

console.log("===== onmousemove Event =====");

// Event listener for mousemove.
window.onmousemove = function(event) {
  console.log("Mouse moved to:", event.clientX, event.clientY);
};

// ============================
// onclick Event
// Triggered when the mouse is clicked on the window.

console.log("===== onclick Event =====");

// Event listener for click.
window.onclick = function(event) {
  console.log("Mouse clicked at:", event.clientX, event.clientY);
};

// ============================
// onmousedown Event
// Triggered when a mouse button is pressed down.

console.log("===== onmousedown Event =====");

// Event listener for mousedown.
window.onmousedown = function(event) {
  console.log("Mouse button pressed:", event.button); // 0 = left, 1 = middle, 2 = right
};

// ============================
// onmouseup Event
// Triggered when a mouse button is released.

console.log("===== onmouseup Event =====");

// Event listener for mouseup.
window.onmouseup = function(event) {
  console.log("Mouse button released:", event.button); // 0 = left, 1 = middle, 2 = right
};

// ============================
// 4. Timers and Animation Events
// These events are triggered during animation or transitions, and timer-based events.

// ============================
// onanimationstart Event
// Triggered when a CSS animation starts.

console.log("===== onanimationstart Event =====");

// Example CSS animation start event listener.
window.onanimationstart = function(event) {
  console.log("CSS animation started:", event.animationName);
};

// ============================
// onanimationend Event
// Triggered when a CSS animation ends.

console.log("===== onanimationend Event =====");

// Example CSS animation end event listener.
window.onanimationend = function(event) {
  console.log("CSS animation ended:", event.animationName);
};

// ============================
// ontransitionend Event
// Triggered when a CSS transition ends.

console.log("===== ontransitionend Event =====");

// Example CSS transition end event listener.
window.ontransitionend = function(event) {
  console.log("CSS transition ended:", event.propertyName);
};

// ============================
// Conclusion
// The `window` object offers a wide range of events that allow developers to interact with the page's lifecycle, handle user input, and trigger actions based on animations, transitions, and page state changes.
// Each event serves to enhance user interactivity and allow for dynamic behavior on the page.
