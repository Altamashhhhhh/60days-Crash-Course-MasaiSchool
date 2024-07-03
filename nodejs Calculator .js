const process = require("node:process");
const crypto = require("crypto");

// Destructure command line arguments
const [, , operator, arg2, arg3] = process.argv;

// Parse arguments to numbers
let num1 = parseFloat(arg2);
let num2 = parseFloat(arg3);

// Helper function to validate numbers
function validate(numbers, requiredLength) {
  if (numbers.length < requiredLength) {
    throw new Error(`Please enter ${requiredLength} number(s).`);
  }
  if (numbers.some(isNaN)) {
    throw new Error("Please provide valid number(s).");
  }
}

// Calculation function based on the operator
function calculation(operator, numbers) {
  let result;

  switch (operator) {
    case "add":
      validate(numbers, 2);
      result = numbers.reduce((curr, prev) => curr + prev);
      break;
    case "sub":
      validate(numbers, 2);
      result = numbers.reduce((curr, prev) => curr - prev);
      break;
    case "mult":
      validate(numbers, 2);
      result = numbers.reduce((curr, prev) => curr * prev);
      break;
    case "divide":
      validate(numbers, 2);
      result = numbers.reduce((curr, prev) => curr / prev);
      break;
    case "sin":
      validate(numbers, 1);
      result = Math.sin(numbers[0]);
      break;
    case "cos":
      validate(numbers, 1);
      result = Math.cos(numbers[0]);
      break;
    case "tan":
      validate(numbers, 1);
      result = Math.tan(numbers[0]);
      break;
    case "random":
      // Ensure the length is provided and valid
      if (numbers.length === 0 || numbers[0] <= 0 || isNaN(numbers[0])) {
        throw new Error("Provide length for random number generation.");
      }
      let length = Math.floor(numbers[0]);
      result = crypto.randomBytes(length).toString("hex");
      console.log(result);
      return; // Exit after printing the random result
    default:
      throw new Error("Invalid input");
  }
  return result;
}

// Try to perform the calculation and catch any errors
try {
  const result = calculation(operator, [num1, num2]);
  if (result !== undefined) {
    console.log(result);
  }
} catch (error) {
  console.error(error.message);
}
