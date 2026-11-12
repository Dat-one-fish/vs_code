
const { sum } = require('./calculator');

    describe('Calculator', () => {
    test('should add two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
        })

    test('test the addition of two negative numbers', () => {
            expect(sum(-2, -3)).toBe(-5);
        })


    test('test if one argument is a string, throw an error', () => {
            expect(() => sum('-2', -3)).toThrow('Both arguments must be numbers');
        })
});