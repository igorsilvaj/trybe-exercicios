const rmArr = module.require('./rmArr');

describe('Testes', () => {
    it('It exists?', () => {
        expect(typeof rmArr).toBe('function');
    });
    it('It return the expected value?', () => {
        expect(rmArr([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(rmArr([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(rmArr([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});