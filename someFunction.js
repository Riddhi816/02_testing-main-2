
function arrayShift(getArray, value) {
    let array = getArray();
    if (!array || array.length === 0) return -1; // Handle null or empty array
    let index = array.findIndex((element) => element === value);
    if (index < 0) return array[0];
    if (index == array.length - 1) return -1;
    return array[index + 1];
}
function runTests() {
    const testCases = [
        { getArray: () => [], value: 5, expected: -1 }, // Test Case 1: Empty Array
        { getArray: () => [1, 2, 3, 4], value: 5, expected: 1 }, // Test Case 2: Value Not Found in Array
        { getArray: () => [1, 3, 5, 7, 9], value: 5, expected: 7 } // Test Case 3: Value Found in Array, Not the Last Element
    ];

    testCases.forEach((testCase, index) => {
        const result = arrayShift(testCase.getArray, testCase.value);
        if (result === testCase.expected) {
            console.log(`Test Case ${index + 1}: Passed`);
        } else {
            console.log(`Test Case ${index + 1}: Failed. Expected ${testCase.expected}, but got ${result}`);
        }
    });
}
runTests();

module.exports = arrayShift;


