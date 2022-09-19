const myFizzBuzz = module.require('./fizzBuzz');

describe('Testes', () => {
    it('It exists?', () => {
        expect(typeof myFizzBuzz).toBe('function');
    });
    it('It return the expected value?', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz('15')).toBe(false);
    })
});