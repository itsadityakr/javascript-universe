# How JavaScript Works  

Think of JavaScript as a **chef** following a recipe. Before cooking, the chef needs to understand the recipe, prepare ingredients, and then start cooking step by step. JavaScript follows a similar process.  

---

## 1. Parsing (Understanding the Code)  

This is like **reading the recipe** before cooking.  

### 1. Lexical Analysis (Breaking into Words)  
- JavaScript first **reads your code** and breaks it into small pieces called **tokens** (like words in a recipe).  
- Example:  
  ```js
  let age = 25;
  ```
  Here, the tokens are: `let`, `age`, `=`, `25`, `;`  

### 2. Syntax Analysis (Making Sense of It)  
- JavaScript **checks if the words make sense** together and creates a **tree-like structure** called an **AST (Abstract Syntax Tree)**.  
- This helps the computer understand how different parts of the code relate to each other.  
```
var a = 42;
var b = 5;
function addA(d) {
    return a + d;
}
var c = addA(2) + b;
```

## Node and Token Count
- **Number of Nodes:** 24  
- **Number of Tokens:** 32  

## Token Breakdown
| Token Type   | Token Value    |
|-------------|---------------|
| **Keyword**  | `var`         |
| **Identifier** | `a`         |
| **Punctuator** | `=`        |
| **Numeric**  | `42`         |
| **Punctuator** | `;`        |
| **Keyword**  | `var`         |
| **Identifier** | `b`         |
| **Punctuator** | `=`        |
| **Numeric**  | `5`         |
| **Punctuator** | `;`        |
| **Keyword**  | `function`    |
| **Identifier** | `addA`      |
| **Punctuator** | `(`        |
| **Identifier** | `d`        |
| **Punctuator** | `)`        |
| **Punctuator** | `{`        |
| **Keyword**  | `return`      |
| **Identifier** | `a`        |
| **Punctuator** | `+`        |
| **Identifier** | `d`        |
| **Punctuator** | `;`        |
| **Punctuator** | `}`        |
| **Keyword**  | `var`         |
| **Identifier** | `c`        |
| **Punctuator** | `=`        |
| **Identifier** | `addA`      |
| **Punctuator** | `(`        |
| **Numeric**  | `2`         |
| **Punctuator** | `)`        |
| **Punctuator** | `+`        |
| **Identifier** | `b`        |
| **Punctuator** | `;`        |

<img src="../Ω_assets/images/ast.png">

---

## 2. Compilation (JIT - Just In Time Compilation)  

Now, JavaScript needs to **prepare before execution**.  

- The **AST (recipe)** is converted into an intermediate code (like **prepping ingredients**).  
- Then, **JIT (Just-In-Time Compilation)** translates it into **machine code** just before running it (like cooking when needed).  

This makes JavaScript **fast and efficient**.  

---

## 3. Execution (Running the Code)  

Now, the JavaScript engine **runs the code step by step**.  

### Inside Execution:  

#### 1. Call Stack (The Chef's To-Do List)  
- JavaScript uses a **call stack** to keep track of which function it is currently executing.  
- Works like **a stack of plates**—the last function added gets executed first (**LIFO: Last In, First Out**).  

#### 2. Heap Memory (Storage Area)  
- JavaScript stores **objects and dynamic data** in the **heap** (like a pantry where ingredients are stored).  

---

## 4. Creation Phase vs Execution Phase  

### 1. Creation Phase (Setting Up the Kitchen)  
- JavaScript **sets up** the global environment.  
- It creates **variables** but sets their value to `undefined`.  
- Functions are stored in memory **ready to be used**.  

Example:  
```js
console.log(name); // undefined
var name = "Alice";
```
- JavaScript **sees** `var name`, but it **doesn't assign** `"Alice"` yet.  

### 2. Execution Phase (Cooking Time)  
- JavaScript **runs the code line by line**, assigning values and executing functions.  

---

## 5. Final Takeaways  
- JavaScript **first reads and understands** your code (**Parsing**).  
- It **prepares everything before running** (**Compilation**).  
- It **executes the code step by step** (**Execution**).  

That’s how JavaScript works—like a chef reading, prepping, and cooking.

---