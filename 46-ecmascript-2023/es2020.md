# **ECMAScript Features (2020) / ES11**  

---

### **New Features Introduced in ES11 (ES2020)**  
1. `BigInt`  
2. Nullish Coalescing Operator `??`  
3. Optional Chaining Operator `?.`  
4. `Promise.allSettled()`  

---

## **1. BigInt**  

BigInt is a new data type introduced in JavaScript to handle **very large integers** that cannot be represented accurately using `Number`.  

### **Creating BigInts**  

1. **Using the `n` suffix**  

```javascript
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // Output: 123456789012345678901234567890n
console.log(typeof bigNumber); // Output: "bigint"
```

2. **Using the `BigInt()` constructor**  

```javascript
const anotherLargeNumber = BigInt("123456789012345678901234567890");
console.log(anotherLargeNumber);
console.log(typeof anotherLargeNumber);
```

3. **BigInt with Operations**  

```javascript
let maxNumber = Number.MAX_SAFE_INTEGER; // 9007199254740991
maxNumber = BigInt(maxNumber);
let num = maxNumber + 10n;
console.log(num); // Output: 9007199254741001n
```

---

## **2. Nullish Coalescing Operator (`??`)**  

The nullish coalescing operator (`??`) provides a way to handle `null` or `undefined` values. Unlike `||`, it does **not** treat `0`, `false`, or `""` as falsy values.  

```javascript
let favNum = 0; // A valid number but falsy in JavaScript
let userFavNum = favNum || 10; // Will return 10 because 0 is falsy
console.log(userFavNum); // Output: 10

userFavNum = favNum ?? 10; // Will return 0 because ?? only checks for null/undefined
console.log(userFavNum); // Output: 0
```

---

## **3. Optional Chaining Operator (`?.`)**  

The optional chaining operator (`?.`) prevents errors when accessing **nested properties** of an object that might be `null` or `undefined`.  

### **Without Optional Chaining**  

```javascript
const person = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 12345,
  },
};

const city = person.address ? person.address.city : "City not available";
console.log(city); // Output: "New York"
```

### **With Optional Chaining (`?.`)**  

```javascript
const city = person.address?.city ?? "City not available";
console.log(city); // Output: "New York"
```

If `address` was `null` or `undefined`, the expression would safely return `"City not available"` instead of throwing an error.  

### **Accessing Deeply Nested Properties**  

```javascript
const person = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 12345,
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
};

// Without Optional Chaining
const latitude = person.address && person.address.coordinates
  ? person.address.coordinates.latitude
  : "Not available";

console.log(latitude); // Output: 40.7128

// With Optional Chaining
const latitude2 = person.address?.coordinates?.latitude ?? "Not available";
console.log(latitude2); // Output: 40.7128
```

---

## **4. `Promise.allSettled()`**  

This method returns a **promise** that resolves when **all promises** in the iterable **have settled** (either **fulfilled** or **rejected**).  

### **Before ES11: Using `Promise.all()`**  

`Promise.all()` fails if **one** promise rejects.  

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error");
const promise3 = Promise.resolve("Another Success");

Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(error => console.log("Error:", error));

// Output: "Error: Error"
```

### **With `Promise.allSettled()`**  

Instead of failing early, `Promise.allSettled()` returns an array with the **status and value/reason** for each promise.  

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error");
const promise3 = Promise.resolve("Another Success");

Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));

// Output:
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Error" },
  { status: "fulfilled", value: "Another Success" }
]
```

This is useful when you want to wait for all promises to complete **regardless of success or failure**.  

---

### **Summary**  
- **BigInt** allows handling large integers beyond `Number.MAX_SAFE_INTEGER`.  
- **Nullish Coalescing (`??`)** prevents unwanted falsy value issues.  
- **Optional Chaining (`?.`)** simplifies accessing nested properties safely.  
- **`Promise.allSettled()`** ensures all promises are handled, regardless of success or failure.  

These ES11 features improve JavaScript's flexibility, readability, and error handling.