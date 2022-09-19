const {encode, decode} = module.require('./encrypt');

describe('Test', () => {
    it('Exists?', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Works well?', () => {
        expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
        expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
    })
});