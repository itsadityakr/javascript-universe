
## DOM Manipulation

---

### 1. **Changing Text Content**: `.innerText`, `.textContent`

#### 1.1 **`element.innerText`**
- **When to Use**: Use `.innerText` when you need to **get or set the visible text** content of an element, and you want to take into account **CSS styles**, such as hidden text (e.g., from `display: none`) or text within elements like `<span>`.
- **Behavior**: It **honors** the CSS styling (including **visibility**, **line breaks**, and **white space**). It also triggers a **reflow** when you set it (which might affect performance in large DOMs).
- **Performance**: Slightly slower than `.textContent` because it needs to calculate visible styles.

#### Example (Setting Text):
```javascript
let element = document.getElementById("example");
element.innerText = "Hello, world!";  // Changes visible text
```

#### 1.2 **`element.textContent`**
- **When to Use**: Use `.textContent` when you want to **get or set the raw text** of an element, regardless of how it’s styled. It **does not account for CSS** (like `display: none` or visibility) and includes all text nodes, even those that may be hidden.
- **Behavior**: It's **faster** than `.innerText` because it doesn't trigger reflow or consider styles. However, it might include text inside **hidden elements** (which `.innerText` wouldn't).
- **Performance**: Faster than `.innerText` because it doesn't require calculating visual styles.

#### Example (Setting Text):
```javascript
let element = document.getElementById("example");
element.textContent = "Hello, world!";  // Changes raw text, including invisible ones
```

#### Key Differences:
- `.innerText` is **style-sensitive** (respecting visibility and layout).
- `.textContent` is **faster** and **doesn't consider styles**, so it’s ideal when you don’t care about visibility and need raw text.

#### Best Use Case:
- Use `.textContent` for **performance** and when you don't need to worry about the display or visibility.
- Use `.innerText` when you need to account for **styling** or **display** (e.g., when working with **hidden** content or **dynamic UI**).

---

### 2. **Changing HTML Content**: `.innerHTML`

#### When to Use:
- Use `.innerHTML` when you want to **get or set the HTML content** inside an element.
- It allows you to modify **HTML markup**, so you can **inject new elements**, change attributes, or alter nested HTML inside an element.

#### Behavior:
- When you **set** `.innerHTML`, it **replaces** the entire inner content of the element with the new HTML.
- When you **get** `.innerHTML`, it returns the **HTML string** (including any child elements, tags, and markup) inside the element.

#### Risks:
- **Security risk**: Be cautious when setting HTML from **untrusted sources** (e.g., user input). It can lead to **XSS (Cross-Site Scripting)** attacks if you directly insert content that could include malicious scripts.
- **Performance**: Rewriting the entire inner content can cause a **reflow/repaint** of the element, affecting performance for large or complex DOMs.

#### Example (Setting HTML):
```javascript
let container = document.getElementById("content");
container.innerHTML = "<p>This is <strong>HTML</strong> content</p>";
```

#### Best Use Case:
- When you want to **insert HTML structure** (e.g., dynamically creating complex elements).
- Ideal for **rendering templates** or injecting HTML content that requires **markup changes**.

---

### 3. **Changing Attributes**: `.setAttribute()`, `.getAttribute()`, `.removeAttribute()`

#### 3.1 **`element.setAttribute(attributeName, value)`**
- **When to Use**: Use `.setAttribute()` to **set** a specific attribute's value.
- **Behavior**: This method modifies the specified **attribute** of the element and updates it with the new value. If the attribute doesn't exist, it will be created.

#### Example:
```javascript
let img = document.getElementById("image");
img.setAttribute("src", "path/to/new/image.jpg");  // Changes the src of the image
```

#### 3.2 **`element.getAttribute(attributeName)`**
- **When to Use**: Use `.getAttribute()` to **retrieve** the value of a specific attribute of an element.
- **Behavior**: This method returns the **value** of the attribute. If the attribute doesn’t exist, it returns `null`.

#### Example:
```javascript
let img = document.getElementById("image");
let src = img.getAttribute("src");
console.log(src);  // Logs the current src value of the image
```

#### 3.3 **`element.removeAttribute(attributeName)`**
- **When to Use**: Use `.removeAttribute()` to **remove** a specific attribute from an element.
- **Behavior**: This method deletes the specified attribute from the element, and it no longer exists.

#### Example:
```javascript
let img = document.getElementById("image");
img.removeAttribute("alt");  // Removes the alt attribute from the image
```

#### Best Use Case:
- **`.setAttribute()`** is best when you need to **set** an attribute’s value (e.g., change `src`, `href`, `alt`, etc.).
- **`.getAttribute()`** is perfect when you need to **retrieve** the current attribute value.
- **`.removeAttribute()`** is useful when you need to **remove** unnecessary or incorrect attributes.

---

### 4. **Changing Styles**: `.style.propertyName`

#### When to Use:
- Use `.style.propertyName` when you want to **set or get the inline CSS styles** for a specific element.
- It directly modifies the **style** attribute of the element, and the changes are **applied immediately**.

#### Behavior:
- This method allows you to access **inline styles** directly (not computed styles).
- The **property name** must be written in camelCase (e.g., `backgroundColor` instead of `background-color`).
- It only works with **inline styles** — it doesn't modify styles defined in external CSS or `<style>` blocks.

#### Example (Setting Style):
```javascript
let box = document.getElementById("box");
box.style.backgroundColor = "blue";  // Sets the background color to blue
```

#### Example (Getting Style):
```javascript
let box = document.getElementById("box");
let bgColor = box.style.backgroundColor;  // Gets the inline background color
console.log(bgColor);  // Logs the current background color (if set inline)
```

#### Important Notes:
- **Inline Styles Only**: `.style` only reflects **inline styles** directly applied to the element. It does not give access to the styles defined in external or internal CSS.
- To read **computed styles** (styles after applying CSS rules from stylesheets), use `window.getComputedStyle()` instead.

#### Best Use Case:
- Use `.style.propertyName` for **modifying inline styles** directly in JavaScript. For example, setting a dynamic style change, like background color, width, etc., based on user interaction.

---

### Summary of DOM Manipulation Methods

| **Method**           | **Purpose**                                      | **Best Use Case**                                 | **Performance Consideration**          |
|----------------------|--------------------------------------------------|--------------------------------------------------|----------------------------------------|
| `.innerText`          | Gets or sets **visible** text content            | When you need **styled and visible text**        | **Slower** due to reflow               |
| `.textContent`        | Gets or sets **raw** text content                | For **performance**, or when you don't need styling| **Faster**, doesn't reflow            |
| `.innerHTML`          | Gets or sets **HTML content**                    | When injecting or modifying HTML markup          | **Risk** of XSS, **slower** in large DOMs|
| `.setAttribute()`      | Sets an attribute value                          | Changing element attributes                      | **Fast**, updates only specific attribute |
| `.getAttribute()`      | Gets the current value of an attribute           | Retrieving attribute values                      | **Fast**, but not for computed styles   |
| `.removeAttribute()`   | Removes an attribute                             | Removing unnecessary or erroneous attributes     | **Fast**, modifies attribute list      |
| `.style.propertyName`  | Gets or sets **inline** styles                   | Modifying inline styles dynamically              | Direct manipulation of inline styles   |

---

