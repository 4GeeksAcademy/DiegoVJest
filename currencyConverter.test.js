// currencyConverter.test.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./currencyConverter');

test('convert 100 USD to JPY', () => {
    expect(fromDollarToYen(100)).toBeCloseTo(10953);
});

test('convert 50 EUR to USD', () => {
    expect(fromEuroToDollar(50)).toBeCloseTo(59);
});

test('convert 1000 JPY to GBP', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(6.7);
});
