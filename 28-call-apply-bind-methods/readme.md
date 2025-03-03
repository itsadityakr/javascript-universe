# **JavaScript: `call()`, `apply()`, and `bind()` Methods**  

In JavaScript, functions are **first-class objects**, meaning they can be assigned to variables, passed as arguments, and even have their own methods. Three important methods— **`call()`**, **`apply()`**, and **`bind()`**— allow us to explicitly control the `this` value of a function.

---

## **1. What are `call()`, `apply()`, and `bind()`?**  
These methods are used to **set the `this` context** of a function and invoke it accordingly.

| **Method** | **Execution** | **Arguments** |
|------------|--------------|---------------|
| `call()`  | Executes **immediately** | Passed **individually** |
| `apply()` | Executes **immediately** | Passed as an **array** |
| `bind()`  | **Returns a new function** (not executed immediately) | Passed **individually** |

> ✅ **All three methods are used with functions, not objects.**  

---

## **2. `call()` Method**
### **Syntax**:  
```js
function.call(thisArg, arg1, arg2, ...)
```
- Invokes the function **immediately**.
- The first argument (`thisArg`) specifies the value of `this` inside the function.
- Subsequent arguments are passed **individually**.

### **Example**:
```js
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };

greet.call(person, "Hello"); 
// Output: Hello, John!
```

---

## **3. `apply()` Method**
### **Syntax**:  
```js
function.apply(thisArg, [arg1, arg2, ...])
```
- Similar to `call()`, but arguments are passed as an **array**.

### **Example**:
```js
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };

greet.apply(person, ["Hey"]); 
// Output: Hey, John!
```

### **When to Use `apply()`?**
- When you already have arguments in an **array or array-like structure**.
- Commonly used in built-in functions like `Math.max()`:

```js
let numbers = [10, 5, 20, 8];
console.log(Math.max.apply(null, numbers)); 
// Output: 20
```

### **Modern Alternative**
With the **spread operator (`...`)**, `apply()` is rarely needed anymore:
```js
console.log(Math.max(...numbers)); // Output: 20
```

---

## **4. `bind()` Method**
### **Syntax**:  
```js
function.bind(thisArg, arg1, arg2, ...)
```
- **Does NOT invoke the function immediately**.
- Returns a **new function** with the `this` value set.

### **Example**:
```js
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };

const boundFunction = greet.bind(person, "Hello");
boundFunction(); 
// Output: Hello, John!
```

### **When to Use `bind()`?**
- When you need to **store the function** for later use.
- Useful in **event listeners**:
```js
const user = {
  name: "Alice",
  greet() {
    console.log(`Hi, ${this.name}!`);
  },
};

const sayHello = user.greet.bind(user);
setTimeout(sayHello, 2000); // Output after 2s: Hi, Alice!
```

---

## **5. Real-World Example: Borrowing Methods**
### **Scenario**: Using a method from one object with another object.

```js
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
// Output: Hi, I'm Vinod. I'm 29 years old, and I identify as Male.
```

---

## **6. Comparing `call()`, `apply()`, and `bind()`**
### **Key Differences**
| Feature       | `call()` | `apply()` | `bind()` |
|--------------|---------|---------|---------|
| Execution    | **Immediately** | **Immediately** | **Returns a new function** |
| Arguments    | **Individual values** | **Array** | **Individual values** |
| Modifies `this`? | ✅ Yes | ✅ Yes | ✅ Yes |

### **Code Comparison**
```js
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "Vinod" };

// Using call()
greet.call(person, "Hello"); 
// Output: Hello, Vinod!

// Using apply()
greet.apply(person, ["Hey"]); 
// Output: Hey, Vinod!

// Using bind()
const boundFunc = greet.bind(person, "Hello");
boundFunc(); 
// Output: Hello, Vinod!
```

---

## **7. Summary & Best Practices**
| Method | Use Case |
|--------|----------|
| `call()`  | When you want to invoke a function **immediately**, passing arguments **one by one**. |
| `apply()` | When you want to invoke a function **immediately**, passing arguments as an **array**. |
| `bind()`  | When you want to create a **new function** with a preset `this` value and arguments for **later execution**. |

### **Key Takeaways**
✅ `call()` and `apply()` **execute immediately**.  
✅ `apply()` is useful when arguments are in an **array**.  
✅ `bind()` **returns a new function** that can be executed later.  
✅ `bind()` is useful for **event listeners and delayed function execution**.  

---