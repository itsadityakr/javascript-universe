function validateCode() {
    // Retrieve the user input from the text field with the ID "codeInput"
    const code = document.getElementById("codeInput").value;

    // Get the output element where results will be displayed
    const output = document.getElementById("output");

    try {
        // Attempt to create a new function from the user-provided code
        // If the code has syntax errors, this will throw an exception
        new Function(code);

        // If no exception is thrown, the code is syntactically correct
        output.innerHTML = "✅ No syntax errors found!";
        output.className = "success"; // Apply a success styling class
    } catch (error) {
        // If an error occurs, it means there's a syntax issue in the user input
        output.innerHTML = `❌ Syntax Error: ${error.message}`; // Display the error message
        output.className = "error"; // Apply an error styling class
    }
}
