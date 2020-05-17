const { fahrenheit, celsius } = require('../dist/index');

test('Conversion works', () => {
    expect(fahrenheit(1)).toBe(33.8);
    expect(celsius(1)).toBe(-17.22);
});

test('error works', () => {
    expect(fahrenheit('h')).toBe(NaN);
    expect(celsius('h')).toBe(NaN);
});