// =============================
// Window Object Properties
// =============================

// 1. Window Dimensions
// These properties allow you to interact with the size of the browser window.

// `innerWidth` and `innerHeight` - Viewport dimensions (excluding toolbars, scrollbars, etc.)
console.log("Viewport Dimensions (innerWidth, innerHeight):", window.innerWidth, window.innerHeight);

// `outerWidth` and `outerHeight` - Total window dimensions including browser chrome (toolbars, scrollbars)
console.log("Total Window Dimensions (outerWidth, outerHeight):", window.outerWidth, window.outerHeight);

// `screenX` and `screenY` - Position of the window on the screen in pixels (top-left corner)
console.log("Window Position on Screen (screenX, screenY):", window.screenX, window.screenY);

// `scrollX` and `scrollY` - Horizontal and vertical scroll offsets (distance the page has been scrolled)
console.log("Scroll Offsets (scrollX, scrollY):", window.scrollX, window.scrollY);

// `pageXOffset` and `pageYOffset` - Aliases for `scrollX` and `scrollY`
console.log("Page Offsets (pageXOffset, pageYOffset):", window.pageXOffset, window.pageYOffset);

// ==============================
// Screen Information
// Information about the user's screen and display capabilities.

// `screen.width` and `screen.height` - The width and height of the user's screen in pixels.
console.log("Screen Dimensions (width, height):", screen.width, screen.height);

// `screen.availWidth` and `screen.availHeight` - The available screen dimensions excluding the taskbar and other UI elements.
console.log("Available Screen Dimensions (availWidth, availHeight):", screen.availWidth, screen.availHeight);

// `screen.colorDepth` - The color depth of the screen (e.g., 24 or 32 bits per pixel).
console.log("Screen Color Depth:", screen.colorDepth);

// `screen.pixelDepth` - The pixel depth of the screen (often the same as colorDepth).
console.log("Screen Pixel Depth:", screen.pixelDepth);

// ==============================
// Location and History
// Location refers to the URL of the current page, while history manages the browser's navigation history.

// `location` - Represents the URL of the current document.
console.log("Current URL (location.href):", window.location.href);

// Redirecting to a new page (e.g., navigating to another URL)
window.location.href = "https://example.com";

// `history` - Provides access to the session history.
console.log("Browser History Length:", window.history.length);

// Go back one page in history (equivalent to clicking the "Back" button)
window.history.back();

// Go forward one page in history (equivalent to clicking the "Forward" button)
window.history.forward();

// `history.go(n)` - Go forward or back by 'n' pages in history
window.history.go(-2);  // Go back two pages

// ==============================
// Storage
// `localStorage` and `sessionStorage` provide storage capabilities within the browser.

// `localStorage` - Persistent storage (data remains even after the browser is closed).
localStorage.setItem("user", "John Doe");
console.log("Local Storage (user):", localStorage.getItem("user"));

// `sessionStorage` - Temporary storage for the session (data is lost when the tab is closed).
sessionStorage.setItem("sessionData", "12345");
console.log("Session Storage (sessionData):", sessionStorage.getItem("sessionData"));

// ==============================
// Document and DOM
// `document` is used to interact with the loaded HTML document and its elements.

// `document` - Represents the DOM document of the current page.
console.log("Document Title:", document.title);

// Example of modifying the document: changing the title of the page
document.title = "New Page Title";

// `frames` - Array-like object containing all `<iframe>` elements within the window.
console.log("Number of Frames:", window.frames.length);

// ==============================
// Browser Information
// `navigator` provides information about the user's browser and environment.

// `navigator.userAgent` - A string representing the browser and its version.
console.log("User Agent:", navigator.userAgent);

// `navigator.platform` - The platform (OS) the browser is running on.
console.log("Platform:", navigator.platform);

// `navigator.language` - The preferred language of the user.
console.log("Language:", navigator.language);

// `isSecureContext` - Whether the page is being served in a secure context (HTTPS).
console.log("Is Secure Context:", window.isSecureContext);

// ==============================
// Performance
// The `performance` object allows you to measure page load time, resource timings, and other performance-related data.

// `performance.now()` - Returns the time in milliseconds (with sub-millisecond precision) since the page was loaded.
// This is useful for measuring precise times, such as the performance of a script or process.
console.log("Performance Now (time since page load in ms):", performance.now());

// Example of measuring the performance of a script execution
const startTime = performance.now();
for (let i = 0; i < 1000000; i++) {
  // Some computation
}
const endTime = performance.now();
console.log(`Time taken for loop execution: ${endTime - startTime} ms`);

// ==============================
// Other Window Properties
// These properties provide additional capabilities for window management and access to window context.

// `closed` - Returns `true` if the window has been closed (useful for popups).
console.log("Is Window Closed:", window.closed);

// `opener` - Reference to the window that opened the current window (useful for popups or windows opened via JavaScript).
console.log("Opener Window:", window.opener);

// `parent` - Reference to the parent window (useful if the current window is within a frame).
console.log("Parent Window:", window.parent);

// `self` - A reference to the current window (same as `window`). It's used to refer to the window itself.
console.log("Self Reference:", window.self);

// `top` - Reference to the topmost window in a window hierarchy. In a frame, this is the window containing all frames.
console.log("Topmost Window:", window.top);

// `window` - A reference to the global window object, essentially the same as `self`.
console.log("Global Window Reference:", window.window);

// `status` - Sets or gets the text shown in the browser’s status bar (widely deprecated and not commonly used anymore).
// (Note: This property is mostly ignored by modern browsers.)
console.log("Window Status (deprecated):", window.status);

// `name` - Name of the window, often used to target the window in scripts or anchor links (useful in popups).
window.name = "myWindow";  // Set the window name
console.log("Window Name:", window.name);

// ==============================
// Example Usage of window Properties in Action

// Checking if the page is served securely (HTTPS)
if (window.isSecureContext) {
  console.log("This page is served over HTTPS.");
} else {
  console.log("This page is not served over HTTPS.");
}

// Dynamically adjusting page content based on viewport size
if (window.innerWidth < 600) {
  document.body.style.backgroundColor = "lightblue";
} else {
  document.body.style.backgroundColor = "lightgreen";
}

// Measuring script performance using `performance.now()`
const start = performance.now();
setTimeout(() => {
  const end = performance.now();
  console.log(`Time taken by setTimeout: ${end - start} ms`);
}, 1000);

