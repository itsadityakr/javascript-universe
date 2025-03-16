### **What is the DOM?**

The **Document Object Model (DOM)** is an interface that allows programs (like JavaScript) to interact with the content of a webpage. It is a tree structure that represents the content and structure of an HTML document.

- **HTML document = Tree structure in the DOM**
- The **DOM tree** consists of different types of nodes (like elements, text, and attributes) that represent the HTML tags, their content, and the document structure.

Each HTML element becomes a **node** in the DOM, and these nodes are organized hierarchically. This tree structure allows JavaScript to access any part of the page and modify it.

Think of the DOM like a **map** or a **blueprint** for the webpage, and JavaScript as the **tool** that allows you to interact with and change that map.

---

### **DOM Tree Overview**

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(15).png" alt="DOM Tree Visualization" width="500">

The DOM (Document Object Model) represents the structure of an HTML document as a tree-like hierarchy. Here's how it works:

- **Element Nodes (Tags):**  
  Tags like `<html>`, `<head>`, `<body>` are element nodes. They form the structure of the tree, where `<html>` is the root node, and its children are `<head>` and `<body>`.

- **Text Nodes:**  
  The content inside elements (like text) is represented as text nodes, labeled as `#text`.  
  - A text node contains only a string.  
  - Text nodes cannot have children and are always leaves of the tree.  
  - Example: The `<title>` tag contains the text "About elk", which forms a `#text` node.

---

### **Special Characters in Text Nodes**

Text nodes may include special characters:
- **Newline (↵):** Represented in JavaScript as `\n`.
- **Space (␣):** Spaces are valid characters and part of the DOM.  

Example:
```html
<head>
    <title>About elk</title>
</head>
```
- The `<head>` tag contains spaces and newlines before `<title>`, and these become `#text` nodes.

---

### **Important Notes:**

1. **Spaces/Newlines Before `<head>`:**  
   - These are ignored for historical reasons and do not become `#text` nodes.

2. **Content After `</body>`:**  
   - If anything is placed after `</body>`, it is automatically moved inside the `<body>` element at the end.  
   - This is because the HTML specification requires all content to be inside `<body>`.

---

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(16).png" alt="DOM Node Types" width="500">

---

### **How Does the DOM Work?**

The DOM is built by the browser as it processes an HTML document. Here’s how it works:

1. **HTML Parsing:**  
   - The browser reads the HTML code from top to bottom.

2. **Building the DOM Tree:**  
   - The browser converts the HTML code into a tree-like structure of objects (the DOM).
   - Each HTML element becomes an element node.
   - Text within elements becomes text nodes.

3. **Interactive Structure:**  
   - The DOM is now interactive and can be accessed and manipulated using JavaScript.

---


#### **For example:**
If you have this simple HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
```

The browser parses this HTML code and creates the following DOM tree:

```
Document
  ├── html
  │   ├── head
  │   │   └── title
  │   └── body
  │       ├── h1
  │       └── p
```

The **Document** is the root of the DOM, and it contains two child nodes: **html** and **body**. Each of these nodes can have their own children, and those children can be other elements or text.

---

### **HTML Code Example** ⬇️
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(39).png" alt="" width="500">

This is an example of embedding an image into an HTML page. The `<img>` tag specifies the source of the image (`src`), alternate text (`alt`), and the width of the image.

---

### **WebPage - Document 1** ⬇️
Preview of a webpage structure:

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(38).png" alt="" width="500">

This is the visual representation of the webpage rendered in the browser. It shows how HTML elements are styled and laid out.

---

### **Console Logs and Definitions** ⬇️

#### **1. `document`**
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(37).png" alt="" width="500">

 
The `document` object is the root of the HTML document and represents the entire webpage. It allows access to and manipulation of all elements on the page.
 
Logging `document` in the console outputs the entire DOM (Document Object Model), which is the structured representation of the HTML content.

---

#### **2. `document.body`** ⬇️
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(36).png" alt="" width="500">

`document.body` refers to the `<body>` element of the webpage. The `<body>` contains the main content of the HTML document.

When logged, it outputs the entire `<body>` section of the document, including all child elements.

---

#### **3. `document.body.childNodes`** ⬇️
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(33).png" alt="" width="500">


`childNodes` is a property of a DOM element that returns a live NodeList of all child nodes, including text nodes, element nodes, and comments.

Logging `document.body.childNodes` lists all child nodes of the `<body>`. These include not just HTML tags but also whitespace or text nodes.

---

#### **4. `document.body.children`** ⬇️
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(34).png" alt="" width="500">

`children` is a property that returns an HTMLCollection of only the element nodes (excluding text or comment nodes) that are direct children.

It outputs a collection of the child elements under `<body>` without including text or comment nodes.

---

#### **5. `document.body.firstChild` and `document.body.firstElementChild`** ⬇️
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(35).png" alt="" width="500">

- `firstChild`: Returns the first child node (including text and comments).
- `firstElementChild`: Returns the first child that is an element node.

- `firstChild` could return a text node (e.g., whitespace).
- `firstElementChild` ensures the returned node is an actual HTML element.

---

#### **6. `document.body.sibling` and `document.body.parent`** ⬇️
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(29).png" alt="" width="500">


- `sibling`: Accesses the next or previous sibling of an element in the DOM.
- `parent`: Refers to the parent node of the element.

You can traverse up (`parentNode`) or sideways (`nextSibling` / `previousSibling`) in the DOM tree.

---

### **Class, ID, Tag, and Query Selectors** ⬇️

---

#### **WebPage - Document 2**
<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(28).png" alt="" width="500">

The page has various HTML elements with classes, IDs, and tags that you can target using JavaScript DOM methods.

---

### **Iterators and Search**

#### **Search by Class Name** ⬇️

**Code Example:**  
```javascript
for (let elem of document.getElementsByClassName("list-of--nodes")) {
   console.log(elem.innerHTML);
}
```

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(17).png" alt="" width="500">
 
`getElementsByClassName()` retrieves a live collection of elements with a specific class.

Iterates over all elements with the class `list-of--nodes` and logs their HTML content (`innerHTML`).

---

**With `innerText`:**   ⬇️
```javascript
for (let elem of document.getElementsByClassName("list-of--nodes")) {
   console.log(elem.innerText);
}
```

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(18).png" alt="" width="500">

`innerText` retrieves the text inside an element, excluding hidden elements and preserving formatting.

Outputs the visible text inside the elements.

---

**With `textContent`:**   ⬇️
```javascript
for (let elem of document.getElementsByClassName("list-of--nodes")) {
   console.log(elem.textContent);
}
```

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(19).png" alt="" width="500">
  
`textContent` retrieves the text inside an element, including hidden elements but without formatting.

---

#### **Search by Tag Name** ⬇️

```javascript
for (let elem of document.getElementsByTagName("list")) {
   console.log(elem);
}
```

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(20).png" alt="" width="500">


`getElementsByTagName()` retrieves a collection of elements by tag name.

Iterates through all `<list>` tags and logs them.

---

### **Query Selectors**

#### **Targeting by ID** ⬇️
```javascript
document.querySelector("#heading");
```

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(21).png" alt="" width="500">

`querySelector()` selects the first matching element using CSS selectors.

---

#### **Modifying Content** ⬇️
```javascript
document.querySelector("#heading").innerHTML = "World";
```

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(22).png" alt="" width="500">


Changes the content of the element with the ID `heading` to "World."

---

#### **Querying Multiple Elements** ⬇️
```javascript
document.querySelectorAll("li");
```

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(24).png" alt="" width="500">
  
`querySelectorAll()` retrieves all matching elements as a NodeList.

---

### **InnerText, InnerHTML, TextContent** ⬇️

<img src="https://raw.githubusercontent.com/itsadityakr/javascript-universe/refs/heads/main/%CE%A9_assets/images/image%20(26).png" alt="" width="500">

#### **Differences and Behavior**

- **`innerHTML`**: Includes HTML tags and structures within an element.
- **`innerText`**: Retrieves the text as it is displayed to the user, excluding hidden content.
- **`textContent`**: Retrieves all text, including hidden content, but excludes tags.

---

### **Types of Nodes in the DOM**

In the DOM, everything is represented as a **node**, and there are different types of nodes. Understanding these types helps us navigate and manipulate the DOM more effectively.

1. **Element Node**
   - Represents an HTML tag (e.g., `<div>`, `<p>`, `<h1>`).
   - Each element in the HTML document is an **element node** in the DOM.

   Example:
   ```html
   <p>This is a paragraph.</p>
   ```
   The `<p>` tag is an **element node**.

2. **Text Node**
   - Represents the text inside an element.
   - The text in HTML elements is stored as text nodes in the DOM.

   Example:
   ```html
   <p>This is a paragraph.</p>
   ```
   "This is a paragraph." is a **text node**.

3. **Attribute Node**
   - Represents the attributes of an HTML element, such as `id`, `class`, `href`, etc.
   - These nodes are stored as part of element nodes, but they are considered separate in the DOM.

   Example:
   ```html
   <a href="https://example.com">Click here</a>
   ```
   `href="https://example.com"` is an **attribute node**.

4. **Comment Node**
   - Represents comments in the HTML document.
   - These nodes contain the comment text.

   Example:
   ```html
   <!-- This is a comment -->
   ```
   The `<!-- This is a comment -->` is a **comment node**.

5. **Document Node**
   - Represents the entire HTML document itself.

   Example:
   ```html
   <html>...</html>
   ```
   The `<html>` tag and everything inside it is represented by the **document node**.

6. **DocumentType Node**
   - Represents the `DOCTYPE` declaration (e.g., `<!DOCTYPE html>`).
   
   Example:
   ```html
   <!DOCTYPE html>
   ```
   `<!DOCTYPE html>` is a **document type node**.

---



### **Document Object Model (DOM) Overview**

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree-like structure, where each element is a node. Using JavaScript, we can manipulate this structure to create dynamic and interactive web pages.

---

### **DOM Properties**

DOM properties allow you to access and modify elements or their content within the document.

1. **`document`**: Represents the entire HTML document.
   ```javascript
   console.log(document); // Displays the entire document object
   ```

2. **`getElementById(id)`**: Finds an element by its `id` attribute.
   ```javascript
   let header = document.getElementById('header');
   console.log(header); // Displays the element with id="header"
   ```

3. **`getElementsByClassName(className)`**: Retrieves all elements with a specific class name.
   ```javascript
   let paragraphs = document.getElementsByClassName('paragraph');
   console.log(paragraphs); // Displays all elements with class="paragraph"
   ```

4. **`querySelector(selector)`**: Retrieves the first element that matches a CSS selector.
   ```javascript
   let firstParagraph = document.querySelector('p');
   console.log(firstParagraph); // Displays the first <p> element
   ```

5. **`querySelectorAll(selector)`**: Retrieves all elements that match a CSS selector.
   ```javascript
   let allParagraphs = document.querySelectorAll('p');
   console.log(allParagraphs); // Displays all <p> elements
   ```

6. **`innerHTML`**: Gets or sets the HTML content inside an element.
   ```javascript
   let content = document.getElementById('main').innerHTML; // Get HTML content
   document.getElementById('main').innerHTML = '<p>Updated content!</p>'; // Set HTML content
   ```

7. **`textContent`**: Gets or sets the text content (ignores HTML tags) inside an element.
   ```javascript
   let text = document.getElementById('message').textContent; // Get text
   document.getElementById('message').textContent = 'New text!'; // Set text
   ```

---

### **DOM Methods**

DOM methods are actions you can perform on elements in the document, such as creating, modifying, or removing elements.

1. **`createElement(tagName)`**: Creates a new HTML element.
   ```javascript
   let newDiv = document.createElement('div');
   ```

2. **`appendChild(node)`**: Appends a child node as the last child of an element.
   ```javascript
   let container = document.getElementById('container');
   container.appendChild(newDiv); // Adds newDiv to container
   ```

3. **`removeChild(node)`**: Removes a child node from an element.
   ```javascript
   let parent = document.getElementById('parent');
   let child = document.getElementById('child');
   parent.removeChild(child); // Removes #child from the parent
   ```

4. **`addEventListener(event, function)`**: Adds an event listener to an element.
   ```javascript
   let button = document.getElementById('myButton');
   button.addEventListener('click', function() {
     alert('Button clicked!');
   });
   ```

5. **`setAttribute(name, value)`**: Sets a specific attribute on an element.
   ```javascript
   let image = document.createElement('img');
   image.setAttribute('src', 'image.jpg'); // Set the 'src' attribute for the image
   ```

6. **`getAttribute(name)`**: Gets the value of a specific attribute from an element.
   ```javascript
   let srcValue = image.getAttribute('src'); // Get the 'src' attribute
   console.log(srcValue); // Outputs 'image.jpg'
   ```

---

### **DOM Navigation**

DOM navigation allows you to traverse through parent, child, and sibling nodes within the document's structure.

#### **Parent, Child, and Sibling Navigation**

1. **`parentNode`**: Accesses the parent node of an element.
   ```javascript
   let child = document.getElementById('child');
   let parent = child.parentNode;
   console.log(parent); // Logs the parent node of #child
   ```

2. **`children`**: Retrieves all child elements of an element (excluding text nodes).
   ```javascript
   let parent = document.getElementById('parent');
   let children = parent.children; // Gets child elements
   ```

3. **`firstElementChild`**: Gets the first child element.
   ```javascript
   let firstChild = parent.firstElementChild;
   ```

4. **`lastElementChild`**: Gets the last child element.
   ```javascript
   let lastChild = parent.lastElementChild;
   ```

5. **`nextElementSibling`**: Retrieves the next sibling element.
   ```javascript
   let nextSibling = child.nextElementSibling;
   ```

6. **`previousElementSibling`**: Retrieves the previous sibling element.
   ```javascript
   let prevSibling = child.previousElementSibling;
   ```

---

### **DOM Searching**

JavaScript provides multiple methods to locate elements in the DOM.

1. **`getElementById(id)`**: Finds an element by its `id`.
   ```javascript
   let header = document.getElementById('header');
   ```

2. **`getElementsByClassName(className)`**: Finds all elements with the specified class name.
   ```javascript
   let items = document.getElementsByClassName('menu');
   ```

3. **`querySelector(selector)`**: Finds the first element matching the CSS selector.
   ```javascript
   let firstButton = document.querySelector('button');
   ```

4. **`querySelectorAll(selector)`**: Finds all elements matching the CSS selector.
   ```javascript
   let allButtons = document.querySelectorAll('button');
   ```

---

### **DOM CRUD Operations**

DOM CRUD operations allow you to **create**, **read**, **update**, and **delete** elements dynamically.

1. **Create**: Use `createElement()` to create new elements.
2. **Read**: Use `innerHTML`, `textContent`, or `getAttribute()` to read content.
3. **Update**: Modify content using `innerHTML`, `textContent`, or `setAttribute()`.
4. **Delete**: Remove elements using `removeChild()` or directly from the parent node.

---

### **Practical Example**

Here’s a real-world example of DOM manipulation where a new paragraph is added when a button is clicked:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation</title>
</head>
<body>
  <button id="addParagraph">Add Paragraph</button>
  <script>
    document.getElementById('addParagraph').addEventListener('click', function() {
      let newParagraph = document.createElement('p');
      newParagraph.textContent = 'This is a new paragraph added dynamically!';
      document.body.appendChild(newParagraph);
    });
  </script>
</body>
</html>
```

---

### **Additional Notes**

#### **Key DOM Methods for Searching and Traversing:**

1. `getElementById(id)`
2. `getElementsByClassName(className)`
3. `getElementsByTagName(tagName)`
4. `querySelector(selector)`
5. `querySelectorAll(selector)`

#### **Key DOM Navigation Properties:**

- `parentNode`
- `children`
- `firstElementChild`
- `lastElementChild`
- `nextElementSibling`
- `previousElementSibling`

#### **CSS Integration with DOM**:

Using DOM, you can dynamically apply or modify styles:
```javascript
let element = document.getElementById('box');
element.style.color = 'red'; // Change text color to red
```

---

### **Conclusion**

The DOM is the bridge between HTML and JavaScript, enabling you to create dynamic and responsive user interfaces. By mastering DOM properties, methods, navigation, and CRUD operations, you can build highly interactive and modern web applications.

--- 

