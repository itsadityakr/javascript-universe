# ECMAScript Features (2024) / ES15

---

ECMAScript 2024 (ES15), officially approved in June 2024, introduces several new features to enhance JavaScript's functionality and developer experience.  

---

## 1. `Object.groupBy()` and `Map.groupBy()`
These static methods allow grouping elements of an iterable based on the return value of a provided callback function.  

- `Object.groupBy()` returns an **object** where each key corresponds to a group.  
- `Map.groupBy()` returns a **Map** with grouped elements.

```javascript
const data = [
  { category: 'fruit', name: 'apple' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'banana' },
];

const groupedByCategory = Object.groupBy(data, item => item.category);
console.log(groupedByCategory);
/*
{
  fruit: [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' }
  ],
  vegetable: [
    { category: 'vegetable', name: 'carrot' }
  ]
}
*/
```

---

## 2. `Promise.withResolvers()`
This method provides a way to obtain the **resolve** and **reject** functions associated with a new Promise, making promise creation more straightforward.

```javascript
const { promise, resolve, reject } = Promise.withResolvers();

promise
  .then(value => console.log('Resolved with:', value))
  .catch(error => console.error('Rejected with:', error));

// To resolve the promise
resolve('Success');

// To reject the promise
reject('Error');
```

---

## 3. New `Set` Methods: `union()`, `intersection()`, `difference()`, `symmetricDifference()`
New methods added to the `Set` prototype allow for common set operations.

- **`union()`** – Combines elements from two sets.
- **`intersection()`** – Finds common elements between two sets.
- **`difference()`** – Finds elements present in the first set but not in the second.
- **`symmetricDifference()`** – Finds elements present in either set but not both.

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const unionSet = setA.union(setB);
console.log(unionSet); // Set { 1, 2, 3, 4, 5 }

const intersectionSet = setA.intersection(setB);
console.log(intersectionSet); // Set { 3 }

const differenceSet = setA.difference(setB);
console.log(differenceSet); // Set { 1, 2 }

const symmetricDifferenceSet = setA.symmetricDifference(setB);
console.log(symmetricDifferenceSet); // Set { 1, 2, 4, 5 }
```

---

## 4. RegExp 'v' Flag for Enhanced Unicode Support
The new **'v' flag** in regular expressions improves Unicode support, allowing precise pattern matching, especially with Unicode property escapes.

```javascript
const regex = /\p{Script=Greek}/v;

console.log(regex.test('α')); // true
console.log(regex.test('a')); // false
```

---

### Summary  
These ES2024 features improve JavaScript by simplifying common tasks, enhancing performance, and improving Unicode support. Developers can now write **cleaner**, **more efficient**, and **maintainable** code.

---