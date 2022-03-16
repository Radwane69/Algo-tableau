var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Array', function () {
    describe('minimum()', function () {
        it('should return -8', function () {
            assert.equal(minimum([-2, -8, -3, -1]), -8)
        });
        it('should return 1', function () {
            assert.equal(minimum([2, 8, 3, 1]), 1)
        });
        it('should return 3', function () {
            assert.equal(minimum([3]), 3)
        });
        it('should return undefined', function () {
            assert.equal(minimul([]), undefined)
        });
    });
});