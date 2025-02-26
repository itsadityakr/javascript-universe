# JS Interview Questions #10
---

## **Mathematics in JavaScript**  

---

### **1. What is the difference between `Math.floor()`, `Math.ceil()`, and `Math.round()`?**  

#### **Important Terms:**  
- **`Math.floor(x)`**: Rounds `x` **down** to the nearest integer.  
- **`Math.ceil(x)`**: Rounds `x` **up** to the nearest integer.  
- **`Math.round(x)`**: Rounds `x` to the **nearest** integer.  

#### **Answer:**  
```javascript
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.2));   // 5
console.log(Math.round(4.5));  // 5
console.log(Math.round(4.4));  // 4
```
`Math.floor()` is useful for truncating decimal values.  
`Math.ceil()` ensures rounding up, even if the decimal part is small.  
`Math.round()` chooses the closest integer (≥0.5 rounds up, <0.5 rounds down).  

---

### **2. How does `Math.random()` work, and how can you generate a random integer within a given range?**  

#### **Important Terms:**  
- **`Math.random()`** generates a pseudo-random decimal between `0` and `1` (exclusive).  
- **Scaling**: Multiplying by `(max - min + 1)` adjusts the range.  
- **`Math.floor()`** ensures integer values.  

#### **Answer:**  
```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // Random number between 1 and 10
```
`Math.random()` alone is insufficient for integers; you must **scale and floor** it properly.  

---

### **3. What is the difference between `parseInt()`, `parseFloat()`, and `Number()`?**  

#### **Important Terms:**  
- **`parseInt()`**: Extracts **only integer values** from a string.  
- **`parseFloat()`**: Extracts a **decimal number** from a string.  
- **`Number()`**: Converts an **entire string** into a number or returns `NaN`.  

#### **Answer:**  
```javascript
console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14em"));// 3.14
console.log(Number("123.45"));   // 123.45
console.log(Number("42px"));     // NaN
```
Use `parseInt()` or `parseFloat()` when extracting numbers from strings, and `Number()` when converting **entire** values.  

---

### **4. How do you check if a number is an integer in JavaScript?**  

#### **Important Terms:**  
- **`Number.isInteger(x)`**: Returns `true` if `x` is an integer.  
- **Modulo (`%`) Check**: Determines if a number has no decimal part.  

#### **Answer:**  
```javascript
console.log(Number.isInteger(10));    // true
console.log(Number.isInteger(10.5));  // false
console.log(10 % 1 === 0);            // true (alternative method)
```
`Number.isInteger(x)` is the **best way** to check integer values in JavaScript.  

---

### **5. What is the difference between `==` and `===` when comparing numbers in JavaScript?**  

#### **Important Terms:**  
- **`==` (Loose Equality)**: Converts values before comparing.  
- **`===` (Strict Equality)**: Requires values **and types** to match.  

#### **Answer:**  
```javascript
console.log(5 == "5");   // true (type conversion happens)
console.log(5 === "5");  // false (types are different)
console.log(0 == false); // true (0 is treated as false)
console.log(0 === false);// false (different types)
```
Use **`===`** for better type safety to **avoid unintended conversions**.  

---

### **6. How does JavaScript handle floating-point precision issues?**  

#### **Important Terms:**  
- **Floating-point arithmetic** causes rounding errors (`0.1 + 0.2 ≠ 0.3`).  
- **`toFixed(n)`** and **`toPrecision(n)`** help round decimals.  
- **`Number.EPSILON`** helps compare floating points safely.  

#### **Answer:**  
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004 (Precision error)
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true (Safe comparison)
```
JavaScript uses **binary floating-point representation**, leading to small rounding errors.  

---

### **7. What is the purpose of `Math.trunc()` and how is it different from `Math.floor()`?**  

#### **Important Terms:**  
- **`Math.trunc(x)`**: Removes the decimal part without rounding.  
- **`Math.floor(x)`**: Rounds down, but only affects negative numbers differently.  

#### **Answer:**  
```javascript
console.log(Math.trunc(4.7));  // 4
console.log(Math.floor(4.7));  // 4
console.log(Math.trunc(-4.7)); // -4
console.log(Math.floor(-4.7)); // -5
```
`Math.trunc()` is useful when you **only want the integer part** without rounding effects.  

---

### **8. How can you calculate the power of a number without using `Math.pow()`?**  

#### **Important Terms:**  
- **Exponentiation (`**`)** is the modern method.  
- **Loop-based multiplication** is an alternative.  

#### **Answer:**  
```javascript
console.log(2 ** 3); // 8 (Modern method)
function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) result *= base;
  return result;
}
console.log(power(2, 3)); // 8
```
Using **`**` (exponentiation operator) is **faster and recommended** in modern JavaScript.  

---

### **9. How do you find the greatest common divisor (GCD) of two numbers in JavaScript?**  

#### **Important Terms:**  
- **GCD**: The largest number that divides two numbers exactly.  
- **Euclidean Algorithm**: Uses remainder (`%`) to find GCD efficiently.  

#### **Answer:**  
```javascript
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(56, 98)); // 14
```
The **Euclidean Algorithm** runs in **O(log n) time**, making it highly efficient.  

---

### **10. How do you determine if a number is prime?**  

#### **Important Terms:**  
- **Prime Number**: A number greater than 1 that has no divisors other than `1` and itself.  
- **Divisibility Check (`O(√n)`)**: Only check up to `√n` for efficiency.  

#### **Answer:**  
```javascript
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
```
Checking up to `√n` instead of `n` significantly **reduces iterations** and improves efficiency.  

---

### **11. What is the difference between `Math.abs()` and `Math.sign()`?**  

#### **Important Terms:**  
- **`Math.abs(x)`**: Returns the absolute value (non-negative version) of `x`.  
- **`Math.sign(x)`**: Returns `1` for positive numbers, `-1` for negative numbers, and `0` for zero.  

#### **Answer:**  
```javascript
console.log(Math.abs(-10));  // 10
console.log(Math.abs(5));    // 5
console.log(Math.sign(-10)); // -1
console.log(Math.sign(5));   // 1
console.log(Math.sign(0));   // 0
```
Use `Math.abs()` to ensure **positive values** and `Math.sign()` to **determine the sign** of a number.  

---

### **12. How do you round a number to a specific decimal place?**  

#### **Important Terms:**  
- **`toFixed(n)`**: Returns a **string** with `n` decimal places.  
- **Multiplication & `Math.round()`**: Keeps the result as a number.  

#### **Answer:**  
```javascript
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68" (string output)

function roundToDecimal(num, decimalPlaces) {
  let factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
}

console.log(roundToDecimal(5.6789, 2)); // 5.68
```
Use `toFixed()` when you need a **string**, and `Math.round()` for **numeric rounding**.  

---

### **13. How can you generate a random floating-point number within a range?**  

#### **Important Terms:**  
- **Scaling `Math.random()`**: Adjusts the range from `[0,1)` to `[min,max)`.  

#### **Answer:**  
```javascript
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomFloat(1.5, 5.5)); // Random float between 1.5 and 5.5
```
Multiply `Math.random()` by the range (`max - min`) and **add `min`** to shift the values.  

---

### **14. What is the best way to check if a number is a perfect square?**  

#### **Important Terms:**  
- **Perfect Square**: A number that is the square of an integer.  
- **`Math.sqrt(x) % 1 === 0`**: Checks if `x` has an integer square root.  

#### **Answer:**  
```javascript
function isPerfectSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(26)); // false
```
Using `Math.sqrt()` ensures efficient **O(1) complexity**.  

---

### **15. How can you convert a decimal number to a binary, octal, or hexadecimal string?**  

#### **Important Terms:**  
- **`num.toString(base)`**: Converts `num` to a string in the given base (2 for binary, 8 for octal, 16 for hex).  

#### **Answer:**  
```javascript
let num = 255;
console.log(num.toString(2));  // "11111111"  (Binary)
console.log(num.toString(8));  // "377"       (Octal)
console.log(num.toString(16)); // "ff"        (Hexadecimal)
```
Use `.toString(base)` to easily convert **numbers to different bases**.  

---

### **16. How do you efficiently compute the factorial of a large number?**  

#### **Important Terms:**  
- **Recursive Factorial**: `O(n)` complexity but prone to stack overflow.  
- **Iterative Factorial**: Avoids recursion issues.  

#### **Answer:**  
```javascript
function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(50)); // Large factorial using BigInt
```
Using `BigInt` allows computing **large factorials without overflow**.  

---

### **17. How do you implement a function that checks if a number is a Fibonacci number?**  

#### **Important Terms:**  
- **A number `n` is Fibonacci if and only if** `5*n² + 4` or `5*n² - 4` is a perfect square.  

#### **Answer:**  
```javascript
function isPerfectSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

console.log(isFibonacci(13)); // true
console.log(isFibonacci(14)); // false
```
Using the **mathematical property** avoids unnecessary looping.  

---

### **18. How do you calculate the sum of all digits in a given number?**  

#### **Important Terms:**  
- **Convert number to string** and iterate over digits.  

#### **Answer:**  
```javascript
function sumOfDigits(n) {
  return [...n.toString()].reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(1234)); // 10
```
Using `.reduce()` provides a **concise and efficient** way to sum digits.  

---

### **19. How can you check if a number is even or odd without using the modulo operator (`%`)?**  

#### **Important Terms:**  
- **Bitwise AND (`&`)**: `x & 1` returns `0` for even numbers and `1` for odd numbers.  

#### **Answer:**  
```javascript
function isEven(n) {
  return (n & 1) === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```
Using **bitwise operations** is **faster** than `%` for large numbers.  

---

### **20. How do you compute the n-th root of a number without using `Math.pow()` or `**`?**  

#### **Important Terms:**  
- **Newton’s Method** provides an iterative approach to finding roots.  

#### **Answer:**  
```javascript
function nthRoot(num, n, precision = 0.000001) {
  let x = num;
  let delta;
  do {
    let xPrev = x;
    x = ((n - 1) * x + num / Math.pow(x, n - 1)) / n;
    delta = Math.abs(x - xPrev);
  } while (delta > precision);
  return x;
}

console.log(nthRoot(27, 3)); // 3
```
Newton’s method allows **precise root calculation** without `Math.pow()`.  

---

### **21. Generate a Random Integer Within a Range**  

#### **Important Concepts:**  
- **`Math.random()`** generates a number between `0` and `1`.  
- **Scaling and `Math.floor()`** adjust the number to fit the desired range.  

#### **Solution:**  
```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // Random integer between 1 and 10
```
This ensures that the random number is **inclusive of both min and max**.

---

### **22. Check if a Number is a Prime Number**  

#### **Important Concepts:**  
- A **prime number** is only divisible by `1` and itself.  
- **Optimized check**: No need to check beyond `√n`.  

#### **Solution:**  
```javascript
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(29)); // true
console.log(isPrime(18)); // false
```
Using `Math.sqrt(n)` reduces the number of iterations, improving efficiency.

---

### **23. Find the Greatest Common Divisor (GCD) of Two Numbers**  

#### **Important Concepts:**  
- **GCD**: The largest number that divides both `a` and `b`.  
- **Euclidean Algorithm**: `GCD(a, b) = GCD(b, a % b)` until `b = 0`.  

#### **Solution:**  
```javascript
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(48, 18)); // 6
```
The **recursive Euclidean algorithm** is the most efficient way to find GCD.

---

### **24. Convert a Decimal Number to Binary Without Using `.toString(2)`**  

#### **Important Concepts:**  
- **Repeated division by 2** and collecting remainders.  
- **Stacking remainders** in reverse order gives the binary representation.  

#### **Solution:**  
```javascript
function decimalToBinary(n) {
  let binary = "";
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary || "0";
}

console.log(decimalToBinary(10)); // "1010"
console.log(decimalToBinary(255)); // "11111111"
```
This method manually **simulates `.toString(2)`**, ensuring full control over the process.

---

### **25. Calculate the n-th Fibonacci Number Using Recursion and Iteration**  

#### **Important Concepts:**  
- **Recursive Approach**: Uses `F(n) = F(n-1) + F(n-2)`.  
- **Iterative Approach**: Avoids repeated calculations, improving efficiency.  

#### **Recursive Solution (Less Efficient):**  
```javascript
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10)); // 55
```
**Problem:** Exponential complexity `O(2^n)` makes it inefficient for large `n`.  

#### **Iterative Solution (Efficient `O(n)`)**  
```javascript
function fibonacciIterative(n) {
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacciIterative(10)); // 55
```
Using a loop **optimizes performance** and avoids stack overflow.

---

![Static Badge](https://img.shields.io/badge/Aditya%20Kumar-black?style=for-the-badge&logo=atlasos&logoColor=%23ffffff)