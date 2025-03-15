// ===================== JavaScript: call(), apply(), and bind() =====================
// These methods allow us to explicitly set the `this` value of a function.
// ===================================================================================

// -----------------------------------------------------------------------------------
// 1. `call()` Method - Executes the function immediately with individually passed arguments
// -----------------------------------------------------------------------------------

function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };

greet.call(person, "Hello");
// Expected Output: Hello, John!

// -----------------------------------------------------------------------------------
// 2. `apply()` Method - Similar to `call()`, but arguments are passed as an array
// -----------------------------------------------------------------------------------

greet.apply(person, ["Hey"]);
// Expected Output: Hey, John!

// Example with Math.max()
let numbers = [10, 5, 20, 8];
console.log(Math.max.apply(null, numbers));
// Expected Output: 20

// Using the modern spread operator instead of `apply()`
console.log(Math.max(...numbers));
// Expected Output: 20

// -----------------------------------------------------------------------------------
// 3. `bind()` Method - Returns a new function with `this` set, but does NOT execute it immediately
// -----------------------------------------------------------------------------------

const boundFunction = greet.bind(person, "Hello");
boundFunction();
// Expected Output: Hello, John!

// -----------------------------------------------------------------------------------
// 4. Real-World Example: Using `call()` to borrow a method from another object
// -----------------------------------------------------------------------------------

const bioData = {
  name: "Thapa Technical",
  age: 30,
  gender: "Male",

  greet: function () {
    console.log(
      `Hi, I'm ${this.name}. I'm ${this.age} years old, and I identify as ${this.gender}.`
    );
  },
};

// Using call() with another object
let student = { name: "Vinod", age: 29, gender: "Male" };

bioData.greet.call(student);
// Expected Output: Hi, I'm Vinod. I'm 29 years old, and I identify as Male.

// -----------------------------------------------------------------------------------
// 5. Using `bind()` for Event Listeners - Ensuring `this` refers to the correct object
// -----------------------------------------------------------------------------------

const user = {
  name: "Alice",
  greet() {
    console.log(`Hi, ${this.name}!`);
  },
};

const sayHello = user.greet.bind(user);
setTimeout(sayHello, 2000);
// Expected Output after 2 seconds: Hi, Alice!

// -----------------------------------------------------------------------------------
// 6. Comparing `call()`, `apply()`, and `bind()`
// -----------------------------------------------------------------------------------

function introduce(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}

const person2 = { name: "Sam" };

// Using call()
introduce.call(person2, "New York", "USA");
// Expected Output: Hi, I'm Sam from New York, USA.

// Using apply()
introduce.apply(person2, ["London", "UK"]);
// Expected Output: Hi, I'm Sam from London, UK.

// Using bind()
const boundIntro = introduce.bind(person2, "Tokyo", "Japan");
boundIntro();
// Expected Output: Hi, I'm Sam from Tokyo, Japan.

// -----------------------------------------------------------------------------------
// Summary
// -----------------------------------------------------------------------------------
// - `call()`: Executes function immediately, passing arguments individually.
// - `apply()`: Executes function immediately, passing arguments as an array.
// - `bind()`: Returns a new function with preset `this` value, but does NOT execute it immediately.

