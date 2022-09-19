const test = module.require('./sum');

describe('Test if Sum is working well', () => {
    it('It can sum 4 + 5?', () => {
        expect(test(4, 5)).toBe(9);
    });
    it('It can return right results if 0?', () => {
        expect(test(0, 0)).toBe(0);
    });
    it('It can throw errors?', () => {
        expect(() => test(4, '5')).toThrowError();
        expect(() => test(4, '5')).toThrowError('parameters must be numbers');
    });
});