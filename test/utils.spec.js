const { addition, subtraction } = require('../utils');

describe('addition', () => {
    it('should add two numbers together', () => {
        expect.hasAssertions();
        expect(addition(1, 2)).toBe(3);
    });
});

describe('subtraction', () => {
    it('should subract one number from another', () => {
        expect.hasAssertions();
        expect(subtraction(2, 1)).toBe(1);
    });
});
