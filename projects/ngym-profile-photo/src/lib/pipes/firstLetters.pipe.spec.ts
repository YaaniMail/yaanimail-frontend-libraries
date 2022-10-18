import { FirstLettersPipe } from './firstLetters.pipe';

describe('FirstLettersPipe Test', () => {
    const firstLettersPipe = new FirstLettersPipe();

    it('should get first letters of text: null case', () => {
        expect(firstLettersPipe.transform(null)).toEqual('');
    });

    it('should get first letters of text: undefined case', () => {
        expect(firstLettersPipe.transform(undefined)).toEqual('');
    });

    it('should get first letters of text: 1 letter case', () => {
        expect(firstLettersPipe.transform('John')).toEqual('J');
    });

    it('should get first letters of text: 2 letter case', () => {
        expect(firstLettersPipe.transform('John Doe')).toEqual('JD');
    });

    it('should get first letters of text: 2 letter case', () => {
        expect(firstLettersPipe.transform('Michael John Doe')).toEqual('MD');
    });

    it('should get first letters of text: empty string', () => {
        expect(firstLettersPipe.transform('    ')).toEqual('-');
    });
});
