# JS Interview Questions #6
---
## **Conditional Statements and Loops in JavaScript**

---


### **1. What is the difference between `if-else` and `switch` statements in JavaScript?**  
#### **Understanding Conditional Flow**  
Both `if-else` and `switch` statements are used to control the flow of execution based on conditions.

#### **Key Differences**  
| Feature | `if-else` | `switch` |
|---------|----------|----------|
| **Use case** | Multiple conditions, complex expressions | Multiple fixed values, simple checks |
| **Syntax** | Uses Boolean expressions | Compares a single value |
| **Performance** | Can be slower for many conditions | Faster when checking multiple cases |
| **Readability** | Can become nested and hard to read | More structured |

#### **Example: `if-else`**
```js
let fruit = "apple";
if (fruit === "apple") {
    console.log("It's an apple!");
} else if (fruit === "banana") {
    console.log("It's a banana!");
} else {
    console.log("Unknown fruit.");
}
```

#### **Example: `switch`**
```js
switch (fruit) {
    case "apple":
        console.log("It's an apple!");
        break;
    case "banana":
        console.log("It's a banana!");
        break;
    default:
        console.log("Unknown fruit.");
}
```
Use `switch` for fixed values and `if-else` for complex conditions.

---

### **2. When should you use a ternary operator instead of an `if-else` statement?**  
#### **What is the Ternary Operator?**  
The **ternary operator** (`? :`) is a shorthand for `if-else` statements.  

#### **Best Use Cases**
- Short, simple conditions
- Returning values based on a condition

#### **Example:**
```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
```
Ternary operators improve readability for simple conditions but should be avoided for complex logic.

---

### **3. What happens when you use a non-Boolean value in an `if` condition?**  
#### **Truthy and Falsy Values**  
JavaScript **coerces** non-Boolean values to `true` or `false` in conditions.

#### **Truthy Values (evaluates to `true`)**  
- Non-empty strings (`"hello"`)
- Non-zero numbers (`42`)
- Objects (`{}`)
- Arrays (`[]`)
- `Infinity`

#### **Falsy Values (evaluates to `false`)**  
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `false`

#### **Example:**
```js
if ("hello") {
    console.log("Truthy!"); // This will run
}

if (0) {
    console.log("Falsy!"); // This will NOT run
}
```
Be mindful of **implicit type conversion** when using non-Boolean values in conditions.

---

### **4. How does JavaScript handle truthy and falsy values in conditional statements?**  
#### **Understanding JavaScript's Type Coercion**
JavaScript automatically **converts** values when used in logical expressions.

#### **Example:**
```js
if ([]) console.log("Empty array is truthy!"); // This runs
if ({}) console.log("Empty object is truthy!"); // This runs
if (null) console.log("Null is falsy!"); // This does NOT run
```
Knowing **truthy and falsy values** helps avoid unexpected behavior.

---

### **5. What are the advantages and disadvantages of using a `switch` statement over multiple `if-else` conditions?**  
#### **Advantages**
- Better readability for multiple fixed values  
- Faster execution in some cases  
- More structured and organized  

#### **Disadvantages**
- Limited to single variable checks  
- Cannot evaluate complex expressions  
- Forgetting `break` can cause fall-through issues  

---

### **6. How does JavaScript’s optional chaining (`?.`) help prevent runtime errors in conditionals?**  
#### **Understanding Optional Chaining (`?.`)**
- It prevents errors when accessing **deeply nested** properties.

#### **Example: Without Optional Chaining**
```js
let user = null;
console.log(user.profile.name); // TypeError: Cannot read property 'name' of null
```

#### **Example: With Optional Chaining**
```js
console.log(user?.profile?.name); // undefined (No error!)
```
Use `?.` to **safely access** nested properties without crashes.

---

### **7. Can you replace `if-else` conditions with logical operators (`&&`, `||`, `??`)? Provide examples.**  
Using `&&` (AND)
```js
let user = "Alice";
user && console.log(`Hello, ${user}!`); // Runs only if user is truthy
```

Using `||` (OR)
```js
let name = "";
let displayName = name || "Guest";
console.log(displayName); // "Guest"
```

Using `??` (Nullish Coalescing)
```js
let data = null;
console.log(data ?? "Default Value"); // "Default Value"
```
Logical operators help **write cleaner, concise conditions**.

---

### **8. Why does `if(0)` evaluate to `false` while `if("0")` evaluates to `true`?**  
#### **Understanding Falsy vs. Truthy**  
- `0` is **falsy**, so `if (0)` **does NOT run**.
- `"0"` is a **non-empty string**, which is **truthy**, so `if ("0")` **runs**.

#### **Example:**
```js
if (0) console.log("Falsy!"); // Does NOT run
if ("0") console.log("Truthy!"); // Runs
```
JavaScript **treats non-empty strings as truthy values**.

---

### **9. What is the difference between `==` and `===` in conditional statements?**  
#### **Comparison Operators**
| Operator | Type | Example | Result |
|----------|------|---------|--------|
| `==` | Loose equality | `"5" == 5` | `true` |
| `===` | Strict equality | `"5" === 5` | `false` |

#### **Why Prefer `===`?**
- Avoids unintended **type coercion**.
- Ensures **type safety** in comparisons.

#### **Example:**
```js
console.log("5" == 5); // true (due to coercion)
console.log("5" === 5); // false (strict type check)
```
Always use `===` unless you specifically need loose equality.

---

### **10. How do you use a conditional statement inside a template literal in JavaScript?**  
Using Ternary Operator Inside Template Literals
```js
let age = 20;
console.log(`You are ${age >= 18 ? "an adult" : "a minor"}.`);
```

Using Logical Operators
```js
let user = null;
console.log(`Hello, ${user || "Guest"}!`);
```
**Template literals** make conditional text formatting easier.


---

### **11. How to Determine if a Number is Prime?**  

#### **Understanding Prime Numbers**  
A **prime number** is a number greater than `1` that is **only divisible by `1` and itself**. Examples include `2, 3, 5, 7, 11, 13, 17, ...`.  

A **composite number** is any number greater than `1` that is **divisible by other numbers** besides `1` and itself (e.g., `4, 6, 8, 9, 10`).

#### **Algorithm Explanation**  
- If `n ≤ 1`, it **cannot** be a prime number.  
- A number `n` is **not prime** if it has a divisor other than `1` and itself.  
- Instead of checking **all numbers from `2` to `n-1`**, we optimize the process by checking **up to `sqrt(n)`**, because any factor larger than `sqrt(n)` would already have a corresponding smaller factor.  

#### **Pseudo-code**
```
FUNCTION isPrime(n):
    IF n <= 1:
        RETURN false  // Prime numbers are greater than 1
    
    FOR i FROM 2 TO sqrt(n):  
        IF n MOD i == 0:
            RETURN false  // Found a divisor, so it's not prime
    
    RETURN true  // No divisors found, it's prime

// Example usage:
INPUT number
IF isPrime(number):
    PRINT "Prime"
ELSE:
    PRINT "Not Prime"
```

#### **JavaScript Implementation**
```javascript
function isPrime(n) {
    // Prime numbers are greater than 1
    if (n <= 1) return false;

    // Loop from 2 to sqrt(n) for efficiency
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // If n is divisible by any i, it is not prime
        if (n % i === 0) return false;
    }

    // If no divisor is found, it's prime
    return true;
}

// Example usage
let number = parseInt(prompt("Enter a number:"));  // Get user input
console.log(isPrime(number) ? "Prime" : "Not Prime");  // Output result
```

---

### **12. How to Implement a Login System Using `if-else`?**  

#### **Understanding Login Systems**  
A **login system** typically requires a **username** and **password**. The system should:  
- **Verify if the credentials match** the stored values.  
- Grant **access if they match**, otherwise, deny access.  

#### **Security Considerations**  
- Never store **passwords in plain text**. Use **hashing** for real-world applications.  
- **Case-sensitivity** matters when comparing usernames/passwords.

#### **Pseudo-code**
```
FUNCTION login(username, password):
    SET stored_username = "admin"
    SET stored_password = "12345"

    IF username == stored_username AND password == stored_password:
        PRINT "Login Successful"
    ELSE:
        PRINT "Invalid Username or Password"

// Example usage:
INPUT user_name
INPUT user_password
CALL login(user_name, user_password)
```

#### **JavaScript Implementation**
```javascript
function login(username, password) {
    // Hardcoded username and password (not secure in real applications)
    const storedUsername = "admin";
    const storedPassword = "12345";

    // Check if user input matches stored credentials
    if (username === storedUsername && password === storedPassword) {
        console.log("Login Successful"); // Access granted
    } else {
        console.log("Invalid Username or Password"); // Access denied
    }
}

// Example usage
let userName = prompt("Enter username:");  // Get username input
let userPassword = prompt("Enter password:");  // Get password input
login(userName, userPassword);  // Call function
```

---

### **13. How Does the FizzBuzz Program Work?**  

#### **Understanding FizzBuzz**  
FizzBuzz is a **classic programming problem** used in coding interviews. The goal is:  
- **Print "FizzBuzz"** if the number is **divisible by both `3` and `5`**.  
- **Print "Fizz"** if the number is **divisible by `3`**.  
- **Print "Buzz"** if the number is **divisible by `5`**.  
- **Print the number** if none of the above conditions are met.

#### **Why Do We Check `3` and `5` First?**  
If we first check `i % 3 == 0`, then check `i % 5 == 0`, we may print `"Fizz"` and then `"Buzz"` separately. Instead, checking **both first (`i % 3 == 0 && i % 5 == 0`)** ensures `"FizzBuzz"` is printed correctly.

#### **Pseudo-code**
```
FUNCTION fizzBuzz(n):
    FOR i FROM 1 TO n:
        IF i MOD 3 == 0 AND i MOD 5 == 0:
            PRINT "FizzBuzz"
        ELSE IF i MOD 3 == 0:
            PRINT "Fizz"
        ELSE IF i MOD 5 == 0:
            PRINT "Buzz"
        ELSE:
            PRINT i

// Example usage:
INPUT max_number
CALL fizzBuzz(max_number)
```

#### **JavaScript Implementation**
```javascript
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // If divisible by both 3 and 5, print "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // If divisible by only 3, print "Fizz"
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // If divisible by only 5, print "Buzz"
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Otherwise, print the number itself
        else {
            console.log(i);
        }
    }
}

// Example usage
let maxNumber = parseInt(prompt("Enter a number:"));  // Get user input
fizzBuzz(maxNumber);  // Call function
```

---
### 14. What is the difference between `for`, `while`, and `do-while` loops in JavaScript?  

#### Explanation  
Loops in JavaScript are used to execute a block of code repeatedly until a specified condition evaluates to `false`. The three primary loop constructs in JavaScript are:  

- **`for` loop**: Used when the number of iterations is known beforehand.
- **`while` loop**: Used when the number of iterations is unknown and depends on a condition.
- **`do-while` loop**: Similar to `while`, but guarantees execution of the loop body at least once.  

#### Differences  
| Loop Type   | Condition Check | Use Case |
|------------|---------------|-----------|
| `for` loop  | Before each iteration | When the number of iterations is known |
| `while` loop | Before each iteration | When the loop should continue while a condition is `true` |
| `do-while` loop | **After** each iteration | When the loop must run **at least once** |

#### Examples  

##### `for` loop  
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0 to 4
}
```
##### `while` loop  
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```
##### `do-while` loop  
```javascript
let i = 10;
do {
    console.log(i); // Runs at least once
    i++;
} while (i < 5);
```

---

### 15. How does a `for...in` loop differ from a `for...of` loop?  

#### Explanation  
JavaScript provides `for...in` and `for...of` loops for iterating over collections. However, they serve different purposes:  

- **`for...in`**: Iterates over the **property names (keys)** of an object.
- **`for...of`**: Iterates over the **values** of an iterable (arrays, strings, sets, maps, etc.).  

#### Differences  
| Loop Type | Used For | Iterates Over |
|-----------|----------|--------------|
| `for...in` | Objects | Property names (keys) |
| `for...of` | Arrays, Strings, Maps, Sets | Values |

#### Examples  

##### `for...in` (for objects)  
```javascript
const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(key, person[key]); // name Alice, age 25, city New York
}
```

##### `for...of` (for arrays)  
```javascript
const numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num); // 10, 20, 30
}
```

---

### 16. Why should you avoid using `for...in` loops for iterating over arrays?  

#### Explanation  
- `for...in` iterates over **keys (indexes)** instead of values.  
- It includes **inherited properties**, which can lead to unexpected behavior.  

#### Example of unwanted behavior  
```javascript
Array.prototype.customMethod = function() {};
const arr = [1, 2, 3];

for (let key in arr) {
    console.log(key); // Outputs: "0", "1", "2", "customMethod"
}
```

#### Correct Approach: Using `for...of`  
```javascript
const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value); // 1, 2, 3
}
```

---

### 17. How can you break out of a loop in JavaScript? How does `continue` work?  

#### Explanation  
- **`break`**: Immediately terminates the loop when encountered.  
- **`continue`**: Skips the current iteration and proceeds to the next cycle.  

#### Example using `break`  
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i); // Output: 1, 2
}
```

#### Example using `continue`  
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i); // Output: 1, 2, 4, 5
}
```

---

### 18. How can you iterate over an object’s properties safely using loops?  

#### Explanation  
The safest way to iterate over an object is:  
1. **Using `for...in`** but checking with `hasOwnProperty()`.  
2. **Using `Object.keys()`, `Object.values()`, or `Object.entries()`**.  

#### Example: Using `hasOwnProperty()`  
```javascript
const person = { name: "Alice", age: 25 };

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key]); // name Alice, age 25
    }
}
```

#### Using `Object.keys()`  
```javascript
Object.keys(person).forEach(key => {
    console.log(key, person[key]); // name Alice, age 25
});
```

---

### 19. How does JavaScript handle infinite loops, and how can you prevent them?  

#### Explanation  
- An **infinite loop** is a loop that never terminates because its exit condition is never met.  
- Infinite loops can **freeze the browser** and cause **performance issues**.  

#### Example of an infinite loop  
```javascript
while (true) {
    console.log("This will never stop!");
}
```

#### Preventing infinite loops  
- **Ensure the condition eventually becomes `false`**.  
- **Use a counter limit**.  

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++; // Prevents infinite loop
}
```

---

### 20. What are the advantages of using `Array.forEach()` over traditional `for` loops?  

#### Explanation  
- `Array.forEach()` is a **higher-order function** that executes a provided function once for each element in the array.  
- It is **cleaner** and **easier to read** compared to `for` loops.  

#### Comparison  
| Feature | `forEach()` | `for` Loop |
|---------|------------|------------|
| Simplicity | More readable | More complex |
| Break Support | Does not support `break` | Supports `break` |
| Performance | Slightly slower | Faster |

#### Example using `.forEach()`  
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // 1, 2, 3
```

#### When to use `forEach()`  
- When iterating through an array without needing to use `break` or `continue`.  
- When writing **cleaner and more readable** code.  

---

### 21. Write a pseudo-code to print the Fibonacci series up to `n` terms using a loop  

#### Explanation  
The **Fibonacci series** is a sequence where each number is the sum of the two preceding ones. The sequence starts with `0` and `1`.  

Mathematically:  

Fn = Fn-1 + Fn-2, where n > 1

where,
- \( F(0) = 0 \)  
- \( F(1) = 1 \)  

To generate the Fibonacci series up to `n` terms, we use a loop to iteratively compute each term by summing the last two terms.  

#### Pseudo-code  
```
BEGIN  
  INPUT n  
  SET first = 0, second = 1  
  PRINT first, second  
  FOR i FROM 2 TO n-1 DO  
    next = first + second  
    PRINT next  
    first = second  
    second = next  
  END FOR  
END  
```

#### JavaScript Implementation  
```javascript
function fibonacci(n) {
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    let first = 0, second = 1;
    
    console.log(first); // First Fibonacci number
    if (n > 1) {
        console.log(second); // Second Fibonacci number
    }

    for (let i = 2; i < n; i++) {
        let next = first + second; // Calculate next Fibonacci number
        console.log(next); // Print current Fibonacci number
        first = second; // Shift first to second
        second = next; // Shift second to next
    }
}

// Example Usage
fibonacci(7);
```

#### Expected Output  
```
0
1
1
2
3
5
8
```

---

### 22. Write a pseudo-code that finds the factorial of a number using a loop  

#### Explanation  
The **factorial** of a number `n` (denoted as `n!`) is the product of all positive integers from `1` to `n`.  

Mathematically:  

n! = n * (n - 1) * (n - 2) * (n - 3)

where , 
- \( 0! = 1 \) by definition.

We can compute factorial using a loop by multiplying each number from `1` to `n`.

#### Pseudo-code  
```
BEGIN  
  INPUT n  
  SET factorial = 1  
  FOR i FROM 1 TO n DO  
    factorial = factorial * i  
  END FOR  
  PRINT factorial  
END  
```

#### JavaScript Implementation  
```javascript
function factorial(n) {
    if (n < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let result = 1; // Initialize factorial result

    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply result by current number
    }

    console.log(`Factorial of ${n} is ${result}`);
}

// Example Usage
factorial(5);
```

#### Expected Output  
```
Factorial of 5 is 120
```

---

### 23. Write a pseudo-code that reverses a given string using a loop  

#### Explanation  
Reversing a string means changing the order of characters so that the first character becomes the last, the second becomes the second-last, and so on.  

To achieve this:  
- Start with an empty string (`reversedString`).  
- Iterate through the input string from the last character to the first.  
- Append each character to `reversedString`.  

#### Pseudo-code  
```
BEGIN  
  INPUT string  
  SET reversedString = ""  
  FOR i FROM length of string - 1 TO 0 DO  
    reversedString = reversedString + string[i]  
  END FOR  
  PRINT reversedString  
END  
```

#### JavaScript Implementation  
```javascript
function reverseString(str) {
    let reversed = ""; // Initialize empty string to store reversed result

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Append each character from end to start
    }

    console.log(`Reversed string: ${reversed}`);
}

// Example Usage
reverseString("hello");
```

#### Expected Output  
```
Reversed string: olleh
```


---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)