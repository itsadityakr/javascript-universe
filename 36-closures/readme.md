# Closures in JavaScript  

A **closure** is a function that **remembers** the variables from its **outer function**, even **after the outer function has executed**.  

---

## How Closures Work?  
1. When an **inner function** is returned from an **outer function**, it keeps a reference to the **variables** of the outer function.  
2. Even though the **outer function has finished executing**, its **variables are still accessible** inside the inner function.  
3. This happens because **JavaScript does not remove** the outer function’s variables **from memory** if an inner function still references them.

---

## Example: Basic Closure  
```js
function outerFunction() {
  var outerVariable = "I'm from outer";

  function innerFunction() {
    console.log(outerVariable); // ✅ Can access outerVariable
  }

  return innerFunction;
}

var closureFunction = outerFunction(); // outerFunction runs & returns innerFunction
console.dir(closureFunction); // Logs innerFunction (along with closure scope)
closureFunction(); // Output: "I'm from outer"
```

### What Happens Here?  
- `outerFunction()` **executes** and returns `innerFunction`.  
- Normally, `outerFunction` should **be removed from memory** once it finishes.  
- But since `innerFunction` **still references `outerVariable`**, JavaScript **keeps it in memory**.  
- When `closureFunction()` is called, `innerFunction` still **remembers** `outerVariable` and prints it.  

✅ This is a **closure** – an inner function **remembering** the variables of its **outer function**.

---

## Real-World Example: Function Factory (Multiplier Function)  
Closures can be used to **create functions dynamically**.  

```js
function multiplier(factor) {
  return function (number) {
    console.log(number, factor); // ✅ Remembers factor even after multiplier() executes
    return number * factor;
  };
}

const double = multiplier(2); // multiplier() runs, returns an inner function
console.log(double(5)); // Output: 5, 2  | 10
```

### How This Works?  
1. `multiplier(2)` executes and returns a function that multiplies numbers by 2.  
2. `double(5)` calls the returned function with `number = 5`.  
3. Even though `multiplier(2)` has finished, its variable `factor` **is still available** in the closure.  

✅ Closures allow **data persistence** and can be used for **configurable functions**.

---

## Why Closures Work?  
When a function is returned from another function, **its scope is saved in memory**, **not garbage collected** because:  
1. The **inner function still has a reference** to the outer function's variables.  
2. JavaScript does **not clear memory** until all references are removed.  

**Even though `outerFunction` is removed from the call stack, its variables are still in memory!**  

---

## Key Uses of Closures  
✅ **Data Encapsulation & Private Variables**  
✅ **Function Factories** (like `multiplier(factor)`)  
✅ **Event Handlers & Callbacks**  
✅ **Memoization & Caching**  
✅ **Module Pattern (Creating Private Variables)**  

---

## Final Thoughts  
- **Closures allow functions to “remember” their scope** even after execution.  
- **They help with private variables & function factories.**  
- **Closures are useful in many JavaScript design patterns.**  

---

## Complex Example: Module Pattern with Closures  

The **module pattern** uses closures to create **private variables** and expose only the necessary functionality.  

```js
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log("Count:", count);
    },
    decrement: function () {
      count--;
      console.log("Count:", count);
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(counter.getCount()); // Output: 1
```

### How This Works?  
1. `createCounter()` returns an object with methods (`increment`, `decrement`, `getCount`).  
2. The `count` variable is **private** and cannot be accessed directly from outside.  
3. The methods **retain access** to `count` through closures.  

✅ This pattern is useful for **encapsulation** and **data privacy**.  

---

## Real-World Application: Event Handlers  

Closures are commonly used in **event handlers** to retain access to variables even after the outer function has executed.  

```js
function setupButton() {
  let count = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    count++;
    console.log("Button clicked", count, "times");
  });
}

setupButton();
```

### How This Works?  
1. The `setupButton` function sets up an event listener for a button.  
2. The `count` variable is **retained in memory** because the event handler (inner function) references it.  
3. Every time the button is clicked, the `count` variable is updated and logged.  

✅ Closures ensure that the `count` variable persists across multiple button clicks.  

---

## Common Pitfalls with Closures  

### Accidental Closures in Loops  
A common mistake is creating closures inside loops without properly capturing the loop variable.  

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Output: 4, 4, 4
  }, 1000);
}
```

#### Why?  
- The `setTimeout` callback forms a closure and references the **same `i` variable** (which is `4` after the loop ends).  

#### Solution: Use `let` or IIFE  
```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Output: 1, 2, 3
  }, 1000);
}
```
OR  
```js
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i); // Output: 1, 2, 3
    }, 1000);
  })(i);
}
```

✅ **`let` creates a new block scope for each iteration**, while **IIFE captures the current value of `i`**.

---

### Memory Leaks  
Closures can cause **memory leaks** if they retain references to large objects unnecessarily.  

```js
function createHeavyClosure() {
  let largeArray = new Array(1000000).fill("data");

  return function () {
    console.log("Closure still holds reference to largeArray");
  };
}

let holdClosure = createHeavyClosure();
// 'largeArray' is retained in memory even if not needed
```

#### Solution: Release References  
```js
holdClosure = null; // Release the closure to allow garbage collection
```

✅ Always **release references** when closures are no longer needed.  

---

## Conclusion  
- **Closures** are a powerful feature in JavaScript that allow functions to **retain access** to their outer scope.  
- They are used in **data encapsulation**, **function factories**, **event handlers**, and more.  
- Be cautious of **common pitfalls** like accidental closures in loops and memory leaks.  

✅ **Key Takeaways:**  
- Closures enable **data persistence** and **private variables**.  
- Use `let` or IIFE to avoid issues with closures in loops.  
- Release references to closures when they are no longer needed to prevent memory leaks.