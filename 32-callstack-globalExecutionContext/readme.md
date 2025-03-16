# Call Stack in JavaScript
The Call Stack is a **LIFO (Last In, First Out)** data structure used by JavaScript to manage function execution. It keeps track of function calls in the order they are made and removes them when they complete.

## How the Call Stack Works
1. When a function is called, it is **pushed onto the stack**.
2. If that function calls another function, the new function is added **on top** of the stack.
3. Once a function completes, it is **popped off** the stack.
4. This process continues until the stack is empty.

## Example 1: Simple Call Stack Execution
```javascript
function firstFunction() {
  console.log("First Function");
}

function secondFunction() {
  console.log("Second Function");
  firstFunction();
}

secondFunction();
```
### Expected Output:
```
Second Function
First Function
```
### Call Stack Execution:
1. `secondFunction()` is called → **Pushed onto the stack**.
2. "Second Function" is printed.
3. `firstFunction()` is called inside `secondFunction()` → **Pushed onto the stack**.
4. "First Function" is printed.
5. `firstFunction()` completes → **Popped off the stack**.
6. `secondFunction()` completes → **Popped off the stack**.

---

## Example 2: Nested Function Calls
```javascript
function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
  third();
}

function third() {
  console.log("Third");
}

first();
```
### Expected Output:
```
First
Second
Third
```
### Call Stack Execution:
1. `first()` is called → **Pushed onto the stack**.
2. "First" is printed.
3. `second()` is called inside `first()` → **Pushed onto the stack**.
4. "Second" is printed.
5. `third()` is called inside `second()` → **Pushed onto the stack**.
6. "Third" is printed.
7. `third()` completes → **Popped off the stack**.
8. `second()` completes → **Popped off the stack**.
9. `first()` completes → **Popped off the stack**.

---

## Call Stack with Errors (Stack Overflow)
```javascript
function recursive() {
  recursive();
}

// recursive(); // Uncommenting this will cause a stack overflow error
```
### Expected Behavior:
- `recursive()` keeps calling itself **infinitely**.
- The Call Stack **keeps growing** but never pops anything off.
- Eventually, JavaScript throws a **"Maximum call stack size exceeded"** error.

---

## Call Stack with Asynchronous Code
JavaScript's Call Stack only handles **synchronous** code. Asynchronous tasks (like `setTimeout`) are **not** directly managed by the Call Stack.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");
```
### Expected Output:
```
Start
End
(After 2 seconds)
Inside Timeout
```
### Call Stack Execution:
1. "Start" is printed.
2. `setTimeout()` is called → Sent to **Web API (not added to the stack)**.
3. "End" is printed.
4. After **2 seconds**, the callback (`console.log("Inside Timeout")`) is moved to the **Callback Queue**.
5. The **Event Loop** checks if the stack is empty and moves the callback to the Call Stack.
6. "Inside Timeout" is printed.

---

# Global Execution Context (GEC) in JavaScript
The **Global Execution Context (GEC)** is the default execution context created when a JavaScript program starts. It consists of **two main phases**:
1. **Creation Phase (Memory Allocation)**
2. **Execution Phase (Code Execution)**

## Example: Understanding GEC
```javascript
console.log(x); // undefined
console.log(foo); // Function definition

var x = 10;
function foo() {
  console.log("Hello");
}
```
### Memory Allocation in Creation Phase:
| Name  | Value |
|-------|-------|
| `x`   | undefined |
| `foo` | Function definition |
| `this` | `window` (in browsers) |

### Execution Phase:
1. `console.log(x);` → **`undefined`** (since `x` is declared but not yet assigned).
2. `console.log(foo);` → **Prints function definition** (since functions are hoisted).
3. `x = 10;` → Assigns **10** to `x`.
4. Function `foo()` is available to be called.

---

## Function Execution Context (FEC)
Every time a function is called, a **new Function Execution Context (FEC)** is created.

```javascript
var x = 10;

function foo() {
  var y = 20;
  console.log(x + y);
}

foo(); // Expected Output: 30
```
### Execution Context Stack (Call Stack):
1. **Global Execution Context (GEC) is created**.
2. `foo()` is called → **New Function Execution Context (FEC) is created**.
3. `foo()` completes → **FEC is popped off the Call Stack**.
4. Only **GEC remains until program ends**.

---

## The `window` Object in Global Execution Context
In **browsers**, the global object is **`window`**. Any global variable declared with `var` becomes a property of `window`.

```javascript
var a = 100;
console.log(window.a); // 100
console.log(this.a);   // 100
```
### Explanation:
- The **global object** is automatically created in the **Creation Phase**.
- In browsers, it's called **`window`**.
- Any global variable declared with `var` becomes a **property of `window`**.
- `this` in the global scope **refers to `window` in browsers**.

---

## Summary
- The **Call Stack** is a **LIFO** data structure that manages function execution.
- Functions **push onto the stack** when called and **pop off** when completed.
- **Recursive calls** without a base case lead to **Stack Overflow**.
- **Asynchronous tasks** are handled by the **Web API, Callback Queue, and Event Loop**, **not directly by the Call Stack**.
- **Global Execution Context (GEC)** runs first, followed by **Function Execution Contexts (FECs)** for each function call.
- The **window object** holds global variables in **browsers**.

Understanding these concepts helps in debugging and optimizing JavaScript performance.

---