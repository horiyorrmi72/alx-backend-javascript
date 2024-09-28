const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumbers', function () {
    describe('SUMMATION', function () {
        it('1.4 + 4.5 should return 6 ', function () {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6)
        })
    });
    describe('SUBTRACTION', function () {
        it('1.4 - 4.5 should return -4 ', function () {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4)
            // console.log(calculateNumber("SUBTRACT", 1.4, 4.5))
        })
    });
    describe('DIVISION', function () {
        it('1.4 / 4.5 should return 0.2 ', function () {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2)
        })
    });
    describe('DIVISION', function () {
        it(`1.4 / 0 should return 'Error '`, function () {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error')
        })
    });
});

		
		
		
