const randomizer = require('./randomizer');

const checkNumber = (element) => {
    if (typeof element === 'number') {
        return true
    } else {
        return false
    }
}

test('Check if the element is a number', () => {
    expect(checkNumber(randomizer())).toBeTruthy();
});

test('Check if the element is greater than 10', () => {
    expect(randomizer()).toBeGreaterThan(10);
});

test('Check if the element is less than 80', () => {
    expect(randomizer()).toBeLessThan(80);
});