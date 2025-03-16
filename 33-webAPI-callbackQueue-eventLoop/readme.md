# JavaScript Asynchronous Execution: Call Stack, Web API, Callback Queue, and Event Loop

## 1. Call Stack
The **Call Stack** is a mechanism that keeps track of function calls in JavaScript. It executes functions **synchronously**, meaning one at a time, in a **Last In, First Out (LIFO)** order.

---

## 2. Web API
### What it is:
The **Web API** is part of the browser (not JavaScript itself) and handles asynchronous operations such as:
- `setTimeout()`
- `setInterval()`
- Fetching data (`fetch()`, `XMLHttpRequest`)
- DOM events (click, keypress)

### How it works:
- When an asynchronous function (e.g., `setTimeout()`) is called, it is sent to the Web API instead of blocking the Call Stack.
- The Web API starts a timer or listens for an event.

### Example:
```js
console.log("Start");

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 2000);

console.log("End");
```

### Execution Process:
1. "Start" is printed.
2. `setTimeout()` is sent to the Web API with a 2-second timer.
3. "End" is printed immediately.
4. After 2 seconds, the callback (`console.log("Hello from setTimeout")`) is sent to the **Callback Queue**.

### Final Output:
```
Start
End
(After 2 seconds)
Hello from setTimeout
```

---

## 3. Callback Queue
### What it is:
The **Callback Queue** holds asynchronous functions that are ready to be executed once the Call Stack is empty.

### How it works:
- Once an asynchronous task (like `setTimeout`) completes, its callback moves to the Callback Queue.
- The **Event Loop** checks if the Call Stack is empty.
- If the Call Stack is empty, the callback is moved from the Callback Queue to the Call Stack and executed.

### Example (Continuing from Web API example):
```js
console.log("Start");

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 2000);

console.log("End");
```

- The callback function (`console.log("Hello from setTimeout")`) waits in the Callback Queue after 2 seconds.
- The **Event Loop** moves it to the Call Stack only when the stack is empty.
- "Hello from setTimeout" is printed after "Start" and "End".

---

## 4. Event Loop
### What it is:
The **Event Loop** is a mechanism that constantly checks:
1. If the Call Stack is empty.
2. If there are any functions in the Callback Queue waiting to be executed.
3. If the stack is empty, it moves callbacks from the queue to the stack for execution.

### How it works:
- Keeps running forever (or until the program stops).
- Ensures JavaScript remains **non-blocking** and **asynchronous**.

### Example:
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout completed");
}, 3000);

console.log("End");
```

### The Event Loop Process:
1. "Start" is printed.
2. `setTimeout()` sends the callback to the Web API with a 3-second timer.
3. "End" is printed.
4. After 3 seconds, the callback (`console.log("Timeout completed")`) moves to the Callback Queue.
5. The **Event Loop** sees the Call Stack is empty.
6. Moves the callback to the Call Stack, and "Timeout completed" is printed.

### Final Output:
```
Start
End
(After 3 seconds)
Timeout completed
```

---

## How They Work Together
1. **Call Stack** executes functions synchronously.
2. **Web API** handles asynchronous operations.
3. **Callback Queue** stores completed asynchronous tasks.
4. **Event Loop** moves tasks from the queue to the stack when it’s empty.

This is how JavaScript handles asynchronous programming while remaining **single-threaded**. 🚀

