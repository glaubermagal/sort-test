import { sort } from '../src/sort';

describe('test sort function', () => {
    it('handle standard packages', () => {
        expect(sort(10, 10, 10, 5)).toBe('STANDARD');
        expect(sort(0.1, 0.2, 0.19, 1.2)).toBe('STANDARD');
    });
    
    it('handle bulky packages', () => {
        expect(sort(149, 149, 149, 19.9)).toBe('SPECIAL');
        expect(sort(150, 150, 150, 19.9)).toBe('SPECIAL');
        expect(sort(150, 40, 60, 15)).toBe('SPECIAL');
    });
  
    it('handle heavy packages', () => {
        expect(sort(140, 40, 60, 20)).toBe('SPECIAL');
        expect(sort(150, 150, 150, 20)).toBe('REJECTED');
    });
  
    it('throw an error for invalid dimensions or mass', () => {
        const expectedError = 'Invalid dimensions or mass';

        expect(() => sort(0, 0, 0, 0)).toThrow(expectedError);
        expect(() => sort(0, 0, 0, -1)).toThrow(expectedError);
        expect(() => sort(-10, 20, 151, 50)).toThrow(expectedError);
        expect(() => sort(10, 10, -10, 5)).toThrow(expectedError);
        expect(() => sort(201, 202, 203, -50)).toThrow(expectedError);
    });
});