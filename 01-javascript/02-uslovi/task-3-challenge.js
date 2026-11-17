// Pass threshold

const passedText = "80";
const failedText = "20"
const passed = Number(passedText);
const failed = Number(failedText);
const total = passed + failed;

const buildPass = passed >= 80;

if (buildPass) {
    console.log(`Pass rate: ${(passed / total) * 100}%`);
    console.log(`Build: PASS`);
} else {
    console.log(`Pass rate: ${(passed / total) * 100}%`);
    console.log(`Build: FAIL`);
}