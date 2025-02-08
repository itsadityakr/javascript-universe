### **JavaScript - Advanced Calculator Project**

The JavaScript in this advanced calculator handles the calculation logic, UI updates, and user interaction. The script defines functions to process button clicks, perform various mathematical operations, and update the user interface in real-time.

Here is an in-depth breakdown of the JavaScript code:

---

### **1. Global Variables**

```javascript
let currentInput = "";
let result = null;

const inputDisplay = document.getElementById("input");
const resultDisplay = document.getElementById("result");

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});
```

- **`currentInput`**: Stores the expression that the user is currently entering. This variable tracks the input as it's being built by the user.
- **`result`**: Stores the result of the evaluated expression. Initially set to `null`.
- **`inputDisplay`**: This references the `<div>` element with the `id="input"`, where the user's ongoing input (expression) is displayed.
- **`resultDisplay`**: This references the `<div>` element with the `id="result"`, where the evaluated result is displayed.
- **`buttons`**: This references all the calculator buttons, which are selected using `querySelectorAll(".button")`. An event listener is added to each button to handle clicks by calling the `handleButtonClick` function.

---

### **2. Event Listener for Button Clicks**

```javascript
function handleButtonClick(event) {
    const value = event.target.textContent;
```

- **`handleButtonClick`**: This function is triggered whenever any button is clicked. The clicked button's value (text content) is captured using `event.target.textContent`.
- The next section processes this `value` based on what the user clicked, handling specific logic for different calculator operations.

---

### **3. AC (All Clear) Button**

```javascript
if (value === "AC") {
    currentInput = "";
    result = null;
    updateScreen("0");
}
```

- **AC Button**: Clears the calculator by resetting `currentInput` and `result` to their initial values (`""` and `null`, respectively).
- The screen is updated with "0" to indicate a cleared state.

---

### **4. Backspace (←) Button**

```javascript
else if (value === "←") {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        updateScreen("0");
    } else {
        updateScreen(currentInput);
    }
}
```

- **Backspace Button**: Removes the last character from `currentInput` by using `slice(0, -1)`. If `currentInput` becomes empty, the screen is reset to "0"; otherwise, it updates to reflect the new input.

---

### **5. Special Operations (x^y, √, Logarithms)**

```javascript
else if (value === "x^y") {
    currentInput += "**";
    updateScreen(currentInput);
} else if (value === "√") {
    currentInput = `Math.sqrt(${currentInput})`;
    updateScreen(currentInput);
} else if (value === "log₂") {
    currentInput = `Math.log2(${currentInput})`;
    updateScreen(currentInput);
} else if (value === "log₁₀") {
    currentInput = `Math.log10(${currentInput})`;
    updateScreen(currentInput);
}
```

- **x^y**: This button translates the exponentiation operation ("x^y") into the JavaScript exponentiation operator (`**`).
- **Square Root (√)**: Updates `currentInput` to use the `Math.sqrt()` function for square root calculations.
- **Logarithms (log₂, log₁₀)**: These buttons convert the input to `Math.log2()` and `Math.log10()` for logarithmic calculations to base 2 and 10, respectively.

---

### **6. Factorial (n!) Button**

```javascript
else if (value === "n!") {
    currentInput = `factorial(${currentInput})`;
    updateScreen(currentInput);
}
```

- **Factorial Button**: Converts the input into a factorial expression using the `factorial()` function, which is defined later in the script.

---

### **7. Angle Conversion (Deg → Rad and Rad → Deg)**

```javascript
else if (value === "Deg → Rad") {
    currentInput = `(${currentInput} * Math.PI) / 180`;
    updateScreen(currentInput);
} else if (value === "Rad → Deg") {
    currentInput = `(${currentInput} * 180) / Math.PI`;
    updateScreen(currentInput);
}
```

- **Deg → Rad**: Converts degrees to radians using the formula `(degrees * Math.PI) / 180`.
- **Rad → Deg**: Converts radians to degrees using the formula `(radians * 180) / Math.PI`.

---

### **8. Parentheses Buttons (Open and Close)**

```javascript
else if (value === "(" || value === ")") {
    currentInput += value;
    updateScreen(currentInput);
}
```

- **Parentheses Buttons**: Adds the corresponding parentheses to `currentInput`. These are useful for grouping operations, especially for complex expressions.

---

### **9. Decimal Button**

```javascript
else if (value === ".") {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateScreen(currentInput);
    }
}
```

- **Decimal Button**: Ensures that the user can only add one decimal point to each number in the expression. The `if` condition checks if the current input already contains a decimal point before adding another.

---

### **10. Basic Arithmetic Operations ( +, -, ×, ÷, %)**
```javascript
else if (value === "+") {
    currentInput += "+";
    updateScreen(currentInput);
} else if (value === "-") {
    currentInput += "-";
    updateScreen(currentInput);
} else if (value === "×") {
    currentInput += "*";
    updateScreen(currentInput);
} else if (value === "÷") {
    currentInput += "/";
    updateScreen(currentInput);
} else if (value === "%") {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateScreen(currentInput);
}
```

- **Arithmetic Operations**: The basic arithmetic operations (`+`, `-`, `×`, `÷`) are mapped to their JavaScript equivalents:
  - `×` becomes `*` (multiplication operator).
  - `÷` becomes `/` (division operator).
- **Percentage (%)**: The percentage operation divides the current input by 100 and updates the input.

---

### **11. Equal (=) Button**

```javascript
else if (value === "=") {
    resultDisplay.style.color = "rgba(255, 255, 255, 1)";
}
```

- **Equal Button**: Changes the result display color to full opacity, preparing for the final result to be shown.

---

### **12. General Button Press**

```javascript
else {
    currentInput += value;
    updateScreen(currentInput);
}
```

- **General Buttons**: For any button not specifically handled by the previous conditions (i.e., numeric digits and operators), the `value` is added to `currentInput`. The screen is then updated with the new `currentInput`.

---

### **13. Update Screen Function**

```javascript
function updateScreen(input) {
    try {
        // Handle leading zeros and possible errors
        if (
            input.startsWith("0") &&
            !input.startsWith("0.") &&
            input.length > 1
        ) {
            input = input.slice(1); // Remove leading zeros
        }

        // Evaluate and calculate result
        result = eval(input);
        inputDisplay.textContent = input; // Update the input display with the current expression
        resultDisplay.textContent = result; // Update the result display dynamically
    } catch (error) {
        inputDisplay.textContent = input;
        resultDisplay.textContent = "Error";
    }
}
```

- **updateScreen**: This function is responsible for updating both the input and result displays.
  - **Leading Zeros**: It removes any unnecessary leading zeros from the `currentInput`.
  - **Evaluation**: It uses `eval()` to evaluate the mathematical expression in `currentInput` and stores the result in `result`. The `inputDisplay` and `resultDisplay` are updated with the current expression and its result.
  - **Error Handling**: If there's an error during evaluation (e.g., invalid syntax), the displays show the expression and "Error".

---

### **14. Factorial Function**

```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

- **Factorial Function**: A recursive function that calculates the factorial of a number (`n!`). It multiplies `n` by the factorial of `n-1` until `n` is 1, at which point it returns 1.

---

### **Conclusion**

The JavaScript code for this advanced calculator manages the entire user interaction and mathematical calculation process. It efficiently handles a wide variety of operations, including basic arithmetic, special mathematical functions, and angle conversion, while updating the user interface in real-time. The use of `eval()` allows for the evaluation of complex mathematical expressions, making the calculator highly flexible.