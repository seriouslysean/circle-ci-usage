const {
    add,
    subtract,
    multiply,
    divide,
} = require('../utils');

describe('add', () => {
    it('should add two numbers together', () => {
        expect.hasAssertions();
        expect(add(1, 2)).toBe(3);
    });
});

describe('subtract', () => {
    it('should subract one number from another', () => {
        expect.hasAssertions();
        expect(subtract(2, 1)).toBe(1);
    });
});

describe('multiply', () => {
    it('should multiply two numbers together', () => {
        expect.hasAssertions();
        expect(multiply(2, 2)).toBe(4);
    });
});

describe('divide', () => {
    it('should divide one number from another', () => {
        expect.hasAssertions();
        expect(divide(4, 2)).toBe(2);
    });
});
