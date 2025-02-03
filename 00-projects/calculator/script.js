let currentValue = "";
let previousValue = null;
let operator = null;

document.getElementById("num-7").addEventListener("click", () => {
    currentValue += "7";
    document.getElementById("input-console").value = currentValue;
});

document.getElementById("num-9").addEventListener("click", () => {
    currentValue += "9";
    document.getElementById("input-console").value = currentValue;
});

document.getElementById("num-multiply").addEventListener("click", () => {
    if (currentValue) {
        previousValue = parseFloat(currentValue);
        currentValue = "";
        operator = "*";
    }
    document.getElementById("input-console").value = operator;
});

document.getElementById("num-add").addEventListener("click", () => {
    if (currentValue) {
        previousValue = parseFloat(currentValue);
        currentValue = "";
        operator = "+";
    }
    document.getElementById("input-console").value = operator;
});

document.getElementById("num-equals").addEventListener("click", () => {
    if (previousValue !== null && currentValue !== "") {
        let result;
        let currentVal = parseFloat(currentValue);
        switch (operator) {
            case "*":
                result = previousValue * currentVal;
                break;
            case "+":
                result = previousValue + currentVal;
                break;
            default:
                return;
        }
        document.getElementById("input-console").value = result;
        console.log(result);
        previousValue = null;
        currentValue = result.toString();
        operator = null;
    }
});
