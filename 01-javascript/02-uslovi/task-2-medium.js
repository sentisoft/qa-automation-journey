// Rules for Login
const email = "test@example.com";
const password = "Secret123";
const attempts = 0;

const hasCredentials = email !== "" || password !== "";
const isLocked = attempts >= 3;

if (isLocked) {
    console.log("Account locked");
} else if (hasCredentials) {
    console.log("Missing email or password");
} else {
    console.log("Login allowed");
}