import isMax from '../isMax';
describe('isMax helper', function () {
  it('should return false when number + step < max', function () {
    var number = 2;
    var step = 3;
    var max = 6;
    var isMaxCondition = isMax(number, step, max);
    expect(isMaxCondition).toBe(false);
  });
  it('should return false when number + step = max', function () {
    var number = 3;
    var step = 3;
    var max = 6;
    var isMaxCondition = isMax(number, step, max);
    expect(isMaxCondition).toBe(false);
  });
  it('should return true when number + step > max', function () {
    var number = 4;
    var step = 3;
    var max = 6;
    var isMaxCondition = isMax(number, step, max);
    expect(isMaxCondition).toBe(true);
  });
});