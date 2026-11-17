// Pass threshold

const passedText = "80";
const failedText = "20";
const passed = Number(passedText);
const failed = Number(failedText);
const total = passed + failed;
const passRate = (passed / total) * 100;

console.log(`Pass rate: ${passRate}%`);
if (passRate >= 80) {
    console.log("Build: PASS");
} else {
    console.log("Build: FAIL");
}