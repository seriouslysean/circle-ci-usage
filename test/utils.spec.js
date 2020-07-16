const {
    add,
    subtract,
    multiply,
} = require('../utils');

describe('add', () => {
    it('should add two numbers together', () => {
        expect.hasAssertions();
        expect(add(1, 2)).toBe(3);
    });

    it('should convert strings to numbers', () => {
        expect.hasAssertions();
        expect(add('1', '2')).toBe(3);
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
