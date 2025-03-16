// =========================================
//        JavaScript Objects - Guide
// =========================================

// 1. Creating an Object using Object Literal
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

console.log(car.brand);  // Output: Toyota
console.log(car.model);  // Output: Camry
console.log(car.year);   // Output: 2022

// =========================================
// 2. Creating an Object using `new Object()`
let person = new Object();
person.name = "Aditya";
person.age = 30;
person.isStudent = false;

console.log(person.name);  // Output: Aditya

// =========================================
// 3. Creating an Object using `Object.create()`
let personPrototype = {
  greet: function () {
    console.log("Hello, welcome!");
  }
};

let newPerson = Object.create(personPrototype);
newPerson.name = "John";
console.log(newPerson.name); // Output: John
newPerson.greet(); // Output: Hello, welcome!

// =========================================
// 4. Accessing Object Properties

// Using Dot Notation
console.log(car.brand);  // Output: Toyota

// Using Bracket Notation
console.log(car["model"]);  // Output: Camry

// =========================================
// 5. Modifying and Adding Properties
car.year = 2023;  // Modifying existing property
car.color = "Blue"; // Adding a new property

console.log(car.year);  // Output: 2023
console.log(car.color); // Output: Blue

// =========================================
// 6. Deleting Properties
delete car.color;  // Removes the 'color' property
console.log(car.color); // Output: undefined

// =========================================
// 7. Methods in Objects (Functions inside Objects)
let user = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

user.greet(); // Output: Hello, Alice

// Shorter ES6 Method Syntax
let employee = {
  name: "Bob",
  greet() {
    console.log("Hello, " + this.name);
  }
};

employee.greet(); // Output: Hello, Bob

// =========================================
// 8. Dynamic Property Names (Computed Property Names)
let key = "email";
let student = {
  [key]: "student@example.com"
};

console.log(student.email); // Output: student@example.com

// =========================================
// 9. Checking if a Property Exists
console.log("name" in user);  // Output: true
console.log(user.hasOwnProperty("age")); // Output: false

// =========================================
// 10. Looping Through an Object's Properties
for (let prop in car) {
  console.log(prop + ": " + car[prop]);
}
// Output:
// brand: Toyota
// model: Camry
// year: 2023

// =========================================
// 11. Object.keys() and Object.values()
console.log(Object.keys(car));  // Output: ["brand", "model", "year"]
console.log(Object.values(car)); // Output: ["Toyota", "Camry", 2023]

// =========================================
// 12. Object Destructuring
let { brand, model } = car;
console.log(brand);  // Output: Toyota
console.log(model);  // Output: Camry

// =========================================
// 13. Object.freeze() - Preventing Changes
let account = {
  balance: 1000
};
Object.freeze(account);
account.balance = 5000; // This will NOT change the value

console.log(account.balance); // Output: 1000

// =========================================
// 14. Copying Objects
// Using Spread Operator (...)
let copiedCar = { ...car };
copiedCar.year = 2025;

console.log(car.year); // Output: 2023
console.log(copiedCar.year); // Output: 2025

// =========================================
// 15. Deep Copying an Object (To copy nested objects)
let userProfile = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001
  }
};

// Using JSON methods (Deep Copy)
let deepCopy = JSON.parse(JSON.stringify(userProfile));
deepCopy.address.city = "Los Angeles";

console.log(userProfile.address.city); // Output: New York
console.log(deepCopy.address.city); // Output: Los Angeles

// =========================================
// 16. Objects inside an Array (Data Modeling)
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

console.log(users[1].name);  // Output: Bob

// =========================================
// 17. Object Inheritance using Prototypes
let animal = {
  type: "Mammal",
  speak() {
    console.log("Animal sound");
  }
};

let dog = Object.create(animal);
dog.breed = "Labrador";
dog.speak = function () {
  console.log("Woof! Woof!");
};

console.log(dog.type); // Output: Mammal (inherited)
dog.speak(); // Output: Woof! Woof!

// =========================================
// 18. Conclusion:
// - Objects are key-value pairs used for storing complex data
// - Methods allow objects to perform actions
// - Object properties can be accessed, modified, and deleted
// - Objects can be copied, frozen, and inherited
// - Prototypes allow objects to inherit properties

console.log("JavaScript Objects Guide Complete!");
