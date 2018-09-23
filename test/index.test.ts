import { expect } from 'chai';
import index from '../src/function';

describe('funtions', () => {
    it('compare numbers', () => {
        const result: number = 4;
        expect(index.sum(2, 2)).to.be.equal(result);
    });

});
