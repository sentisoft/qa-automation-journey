/*
First, each condition is evaluated to true or false. Then if chooses which block to run.
&& checks from left to right and stops at the first false: if the left side is false,
the right side is not checked, because the whole result is already false.
|| stops at the first true value. This is called short-circuit evaluation.
Order is important: the most important check goes first.
*/

// Practice 1
console.log("Practice 1");
const statusCode = 200;

if (statusCode === 200) {
  console.log("PASS");
} else {
  console.log("FAIL");
}

// Practice 2
console.log("Practice 2");
const email = "test@example.com";
const password = "";
const attempts = 3;

console.log(attempts !== 0); // not equal
console.log(attempts > 3); // greater than
console.log(attempts >= 3); // greater than or equal
console.log(attempts < 5); // less than

const hasCredentials = email !== "" && password !== "";
const isLocked = attempts >= 3;

console.log(hasCredentials); // false: password is empty
console.log(email === "" || password === ""); // at least one is empty
console.log(!isLocked); // false: account is locked

const isMissingCredentials = email === "" || password === "";

if (isMissingCredentials) {
  console.log("Missing email or password");
} else {
  console.log("Login allowed");
}

// Practice 3
console.log("Practice 3");
const userName = "Dado";

if (userName) { // JavaScript converts the value to boolean (truthy or falsy).
  console.log("Name is filled in");
} else {
  console.log("Name is empty");
}

console.log(Boolean("Dado")); // true
console.log(Boolean("")); // false
console.log(Boolean(42)); // true
console.log(Boolean(0)); // false

// Practice 4
console.log("Practice 4");
const errorMessage = "";

if (errorMessage) {
  console.log(`Error: ${errorMessage}`);
} else {
  console.log("No error");
}

if (errorMessage !== "") {
  console.log(`Error: ${errorMessage}`);
} else {
  console.log("No error");
}
