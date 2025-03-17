// Global Scope
var globalVar = "I am global";

function testFunction() {
  console.log(globalVar); // Expected output: "I am global"
}

testFunction();
console.log(globalVar); // Expected output: "I am global"

// Function Scope
function exampleFunction() {
  var functionScopedVar = "I am inside a function";
  console.log(functionScopedVar); // Expected output: "I am inside a function"
}

exampleFunction();

// console.log(functionScopedVar); // ❌ ReferenceError: functionScopedVar is not defined

// Block Scope
if (true) {
  let blockScopedLet = "I'm block-scoped";
  const blockScopedConst = "Me too!";
  var functionScopedVar = "I'm function-scoped (even inside a block)";
}

// console.log(blockScopedLet); // ❌ ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // ❌ ReferenceError: blockScopedConst is not defined
console.log(functionScopedVar); // Expected output: "I'm function-scoped (even inside a block)"

// Lexical Scope & Scope Chaining
const globalVariable = "I am global";

function outerFunction() {
  const outerVar = "I am in outerFunction";

  function innerFunction() {
    const innerVar = "I am in innerFunction";

    console.log(globalVariable); // Expected output: "I am global"
    console.log(outerVar); // Expected output: "I am in outerFunction"
    console.log(innerVar); // Expected output: "I am in innerFunction"
  }

  innerFunction();
}

outerFunction();

// console.log(innerVar); // ❌ ReferenceError: innerVar is not defined

// Global vs. Local Variables
const globalScopeVariable = "I'm a global variable";

function myFunction() {
  const functionScopeVariable = "I'm a function variable";

  if (true) {
    const blockScopeVariable = "I'm a block variable";
    console.log(blockScopeVariable); // Expected output: "I'm a block variable"
  }

  console.log(functionScopeVariable); // Expected output: "I'm a function variable"
}

myFunction();

console.log(globalScopeVariable); // Expected output: "I'm a global variable"
// console.log(functionScopeVariable); // ❌ ReferenceError: functionScopeVariable is not defined
// console.log(blockScopeVariable); // ❌ ReferenceError: blockScopeVariable is not defined
