// Rezultat testova

// Definisem vrijable sa let jer su promenljive
let testPassed = 8;
let testFailed = 2;

// Ukupan broj tesova ne moze biti const jer se moze menjati ukupan broj
let testNumber = testPassed + testFailed;

console.log(`Passed: ${testPassed}/${testNumber} (${testPassed * 100 / testNumber}%)`)
console.log(`Failed: ${testFailed}/${testNumber} (${testFailed * 100 / testNumber}%)`)

testPassed = 6;
testFailed = 4;

console.log(`Passed: ${testPassed}/${testNumber} (${testPassed * 100 / testNumber}%)`)
console.log(`Failed: ${testFailed}/${testNumber} (${testFailed * 100 / testNumber}%)`)
