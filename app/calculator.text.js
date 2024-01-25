import { expect } from 'chai';
import { add, sub, mul, div } from './calculator.js';

describe('Calculator', () => {
    // Test for addition
    describe('add', () => {
        it('should return 7 when adding 5 and 2', () => {
            const result = add(5, 2);
            expect(result).to.equal(7, `Expected add(5, 2) to equal 7, but got ${result}`);
        });

        it('should not return 8 when adding 5 and 2', () => {
            const result = add(5, 2);
            expect(result).to.not.equal(8, `add(5, 2) should not equal 8, but got ${result}`);
        });
    });

    // Test for subtraction
    describe('sub', () => {
        it('should return 3 when subtracting 2 from 5', () => {
            const result = sub(5, 2);
            expect(result).to.equal(3, `Expected sub(5, 2) to equal 3, but got ${result}`);
        });

        it('should not return 5 when subtracting 2 from 5', () => {
            const result = sub(5, 2);
            expect(result).to.not.equal(5, `sub(5, 2) should not equal 5, but got ${result}`);
        });
    });

    // Test for multiplication
    describe('mul', () => {
        it('should return 10 when multiplying 5 and 2', () => {
            const result = mul(5, 2);
            expect(result).to.equal(10, `Expected mul(5, 2) to equal 10, but got ${result}`);
        });

        it('should not return 12 when multiplying 5 and 2', () => {
            const result = mul(5, 2);
            expect(result).to.not.equal(12, `mul(5, 2) should not equal 12, but got ${result}`);
        });
    });

    // Test for division
    describe('div', () => {
        it('should return 5 when dividing 10 by 2', () => {
            const result = div(10, 2);
            expect(result).to.equal(5, `Expected div(10, 2) to equal 5, but got ${result}`);
        });

        it('should throw an error when dividing by 0', () => {
            expect(() => div(10, 0)).to.throw(Error, 'Division by zero');
        });
    });
});
