const { fahrenheit } = require('../dist/index');

test('Conversion works', () => {
    expect(fahrenheit(1)).toBe(33.8);
});