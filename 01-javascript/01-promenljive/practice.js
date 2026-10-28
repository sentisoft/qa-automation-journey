// Test data not changed
const UserEmail = "dados@gmail.com"

// Counter changed during test
let counter = 0;
counter = 1;

console.log(`User email: ${UserEmail} and skill is ${counter}`);
console.log(UserEmail, counter)

const browserName = "cromium";
const timeoutMs = 500;
const isHeadless = true;
let lastError;

console.log(typeof browserName, typeof timeoutMs, typeof isHeadless, typeof lastError);
console.log(lastError);

console.log("2" + "2");
console.log(2 + 2);

