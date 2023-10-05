import isMin from '../isMin';
describe('isMax helper', function () {
  it('should return false when number - step > min', function () {
    var number = -2;
    var step = 3;
    var min = -6;
    var isMaxCondition = isMin(number, step, min);
    expect(isMaxCondition).toBe(false);
  });
  it('should return false when number - step = min', function () {
    var number = -3;
    var step = 3;
    var min = -6;
    var isMaxCondition = isMin(number, step, min);
    expect(isMaxCondition).toBe(false);
  });
  it('should return true when number - step < min', function () {
    var number = -4;
    var step = 3;
    var min = -6;
    var isMaxCondition = isMin(number, step, min);
    expect(isMaxCondition).toBe(true);
  });
});