## Event Bubbling & Capturing and Working with Forms & User Input

---

### ✅ **Event Bubbling & Capturing**

#### **Understanding Event Propagation**

In JavaScript, events have a **propagation phase**, meaning they travel through the DOM tree in a specific order when triggered. This helps in understanding **event bubbling** and **event capturing**.

- **Event Propagation**: The mechanism that dictates how events are passed from one element to another. Every time an event occurs, it travels down or up the DOM tree in either of two ways: **capturing** or **bubbling**.

- **Bubbling** (default behavior): The event starts from the innermost element where the event occurred and bubbles up to its ancestors. For example, if you click on a button inside a `<div>`, the click event will propagate from the button to the parent `<div>`, and then to the parent of the `<div>`, and so on up the DOM.

- **Capturing**: The event starts from the root of the DOM tree and travels down to the target element where the event occurred. This is the opposite of bubbling.

#### **Event Bubbling**
In event bubbling, when an event happens on an element, it "bubbles up" to its ancestors. This means that if you attach an event listener to a parent element, it can listen for events on child elements as well.

#### **Example of Event Bubbling**:
```html
<div id="parent">
  <button id="child">Click Me!</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked!");
  });

  document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked!");
  });
</script>
```

If you click the button (`#child`), the output will be:
```
Child clicked!
Parent clicked!
```
Here, the event bubbles from the button (child) to its parent (`#parent`).

---

#### **Event Capturing**

In event capturing, the event is caught by the root element and propagates down to the target. By default, event listeners are in the bubbling phase, but we can use the `useCapture` parameter in `addEventListener()` to listen during the capturing phase.

#### **Example of Event Capturing**:
```html
<div id="parent">
  <button id="child">Click Me!</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked!");
  }, true);  // Setting `true` to listen during the capturing phase

  document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked!");
  }, true);  // Also in capturing phase
</script>
```

Here, if you click the button (`#child`), the output will be:
```
Parent clicked!
Child clicked!
```
In this case, both listeners trigger during the **capturing phase**, and the event travels from parent to child.

---

#### **`stopPropagation()`**

Sometimes, you may want to **stop the event from propagating further** in the DOM. This is especially useful if you want to prevent an event from reaching an ancestor element.

- **`event.stopPropagation()`**: This method prevents further propagation of the current event in the DOM. If called in the capturing or bubbling phase, it stops the event from reaching the next level in the DOM.

#### **Example of `stopPropagation()`**:
```html
<div id="parent">
  <button id="child">Click Me!</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked!");
  });

  document.getElementById("child").addEventListener("click", function(event) {
    console.log("Child clicked!");
    event.stopPropagation();  // Stops the event from bubbling up to the parent
  });
</script>
```

When clicking on the button (`#child`), the output will be:
```
Child clicked!
```
In this case, `event.stopPropagation()` prevents the click event from reaching the parent element (`#parent`), and hence, the `"Parent clicked!"` log will not be shown.

---

#### **Event Delegation**

Event delegation is a technique where you attach a single event listener to a **parent element** to handle events on **multiple child elements**. This approach is highly efficient because it allows you to handle events for a large number of child elements without adding individual listeners to each one.

##### **Why It’s Useful**:
- **Dynamic Content**: It's great for handling elements that are added dynamically to the DOM (e.g., via AJAX or JavaScript).
- **Memory Efficiency**: You reduce the number of event listeners, improving performance, especially when handling many elements.

#### **Example of Event Delegation**:
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      console.log("Item clicked:", event.target.textContent);
    }
  });
</script>
```

In this example, clicking any `<li>` will trigger the event listener on the `<ul>`. The `event.target` is used to identify which `<li>` was clicked. Even if new `<li>` elements are added dynamically, they will still be captured by the same event listener on the parent.

---

### ✅ **Working with Forms & User Input**

Forms are an essential part of web applications, and working with form elements and user input is fundamental for interactivity. JavaScript provides various ways to access and manipulate form values, validate inputs, and handle events related to forms.

---

#### **Accessing Form Values**

Form elements like `<input>`, `<select>`, and `<textarea>` allow users to enter data. You can access their values using properties like `.value`, `.checked`, and `.selected`.

1. **`.value`**: Accesses the current value of form elements like text inputs, textareas, and select elements.
   - Example for text input:
     ```html
     <input type="text" id="username" />
     <button id="submit">Submit</button>

     <script>
       document.getElementById("submit").addEventListener("click", function() {
         let username = document.getElementById("username").value;
         console.log("Username entered:", username);
       });
     </script>
     ```

2. **`.checked`**: Used for checkboxes or radio buttons. Returns `true` if the checkbox is checked or the radio button is selected.
   - Example for checkbox:
     ```html
     <input type="checkbox" id="subscribe" />
     <button id="submit">Submit</button>

     <script>
       document.getElementById("submit").addEventListener("click", function() {
         let isChecked = document.getElementById("subscribe").checked;
         console.log("Is subscribed:", isChecked);
       });
     </script>
     ```

3. **`.selected`**: Used for `<option>` elements in a `<select>` dropdown. Returns `true` if the option is selected.
   - Example for select:
     ```html
     <select id="country">
       <option value="us">United States</option>
       <option value="ca">Canada</option>
     </select>
     <button id="submit">Submit</button>

     <script>
       document.getElementById("submit").addEventListener("click", function() {
         let selectedCountry = document.getElementById("country").value;
         console.log("Selected country:", selectedCountry);
       });
     </script>
     ```

---

#### **Form Validation using JavaScript**

You can validate form inputs using JavaScript, typically by listening for events like `submit`, `input`, or `blur` (when the input field loses focus). Form validation can be used to ensure that the user fills in the required fields, that the input is in the correct format, or to provide real-time feedback.

1. **`submit` Event**: Triggered when the form is submitted.
2. **`input` Event**: Triggered when the user types into an input field.
3. **`blur` Event**: Triggered when the input field loses focus.

#### **Example of Basic Form Validation**:
```html
<form id="registrationForm">
  <input type="text" id="username" placeholder="Username" required />
  <input type="password" id="password" placeholder="Password" required />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Both fields are required!");
      event.preventDefault();  // Prevent form submission
    }
  });
</script>
```

#### **Validating Input in Real-Time**:
You can use the `input` or `blur` event to provide **real-time feedback** as the user types or when they leave the input field.

```html
<form>
  <input type="email" id="email" placeholder="Enter your email" />
  <span id="error"></span>
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("email").addEventListener("blur", function() {
    let email = document.getElementById("email").value;
    let errorSpan = document.getElementById("error");

    // Simple regex for email validation
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      errorSpan.textContent = "Please enter a valid email address.";
      errorSpan.style.color = "red";
    } else {
      errorSpan.textContent = "";
    }
  });
</script>
```

In this example, the user is alerted in real-time if they enter an invalid email address when they leave the email input field.

---

### **Summary:**

| **Concept**                       | **Details**                                                                                                                                                       |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Event Bubbling**                 | Events propagate from the target element up to the root of the DOM. Default behavior in event propagation.                                                       |
| **Event Capturing**                | Events propagate from the root element down to the target element. Controlled with `useCapture`.                                                                |
| **`stopPropagation()`**            | Stops the event from propagating further up or down the DOM.                                                                                                    |
| **Event Delegation**               | Attach one event listener to a parent element to handle events on multiple child elements. Useful for dynamically added elements.                                  |
| **Accessing Form Values**          | Use `.value` for text inputs, `.checked` for checkboxes/radio buttons, `.selected` for select options.                                                            |
| **Form Validation**                | Use events like `submit`, `input`, or `blur` for real-time or on-submit validation.                                                                                 |

---