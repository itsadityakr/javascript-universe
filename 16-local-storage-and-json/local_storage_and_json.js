// ==============================================
//  localStorage and JSON - Simplified Guide
// ==============================================

// localStorage is a way to store data in the browser
// The data remains even after you close the browser
// It can only store strings!

// -----------------------
// 1. Basic localStorage
// -----------------------

// Storing a simple string
localStorage.setItem('username', 'John');
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('userScore', '100');

// Getting stored values
const username = localStorage.getItem('username');     // returns 'John'
const isLoggedIn = localStorage.getItem('isLoggedIn'); // returns 'true'
const score = localStorage.getItem('userScore');       // returns '100'

// Removing a single item
localStorage.removeItem('userScore');

// Removing everything
localStorage.clear();

// -----------------------
// 2. Working with Objects
// -----------------------

// Create a user object
const user = {
    name: 'John',
    age: 25,
    city: 'New York',
    hobbies: ['reading', 'gaming']
};

// WRONG WAY - This won't work properly
localStorage.setItem('user', user);  // Will convert object to "[object Object]"

// RIGHT WAY - Convert object to string first
localStorage.setItem('user', JSON.stringify(user));

// Getting the object back
const savedUserString = localStorage.getItem('user');
const savedUser = JSON.parse(savedUserString);
// Now savedUser is a normal object again
// savedUser.name -> 'John'
// savedUser.hobbies[0] -> 'reading'

// -----------------------
// 3. Working with Arrays
// -----------------------

// Create an array
const fruits = ['apple', 'banana', 'orange'];

// WRONG WAY - This won't work properly
localStorage.setItem('fruits', fruits);  // Will convert array to string with commas

// RIGHT WAY - Convert array to string first
localStorage.setItem('fruits', JSON.stringify(fruits));

// Getting the array back
const savedFruitsString = localStorage.getItem('fruits');
const savedFruits = JSON.parse(savedFruitsString);
// Now savedFruits is a normal array again
// savedFruits[0] -> 'apple'

// -----------------------
// 4. Practical Example
// -----------------------

// User preferences object
const userPreferences = {
    theme: 'dark',
    fontSize: 16,
    notifications: true,
    lastVisit: new Date().toISOString()
};

// Save preferences
function savePreferences() {
    localStorage.setItem('preferences', JSON.stringify(userPreferences));
}

// Load preferences
function loadPreferences() {
    const savedPrefs = localStorage.getItem('preferences');
    if (savedPrefs) {
        return JSON.parse(savedPrefs);
    }
    return null;  // Return null if no preferences found
}

// Check if item exists
function checkIfExists(key) {
    return localStorage.getItem(key) !== null;
}

// Get number of stored items
const numberOfItems = localStorage.length;

// -----------------------
// Common Things to Remember:
// -----------------------
// 1. localStorage only stores strings
// 2. Use JSON.stringify() before storing objects or arrays
// 3. Use JSON.parse() when retrieving objects or arrays
// 4. Maximum storage varies by browser (usually 5-10 MB)
// 5. Each website has its own separate storage