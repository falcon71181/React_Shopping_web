import isValidMaxRowSelection from '../isValidMaxRowSelection';
describe('isValidMaxRowSelection', function () {
  it('should return false when any arguments are passed', function () {
    expect(isValidMaxRowSelection()).toBe(false);
  });
  it('should return true when maxRowSelection and rowsLength are the same', function () {
    var values = [0, 1, 2];
    values.forEach(function (value) {
      expect(isValidMaxRowSelection(value, value)).toBe(true);
    });
  });
  it('should return true when maxRowSelection is less than rowsLength', function () {
    var values = [2, 3, 4];
    values.forEach(function (value) {
      var maxRowSelection = 1;
      var rowsLength = value;
      expect(isValidMaxRowSelection(maxRowSelection, rowsLength)).toBe(true);
    });
  });
  it('should return false when maxRowSelection is greater than rowsLength', function () {
    var values = [3, 4, 5, '3', '4', '5'];
    values.forEach(function (value) {
      var maxRowSelection = value;
      var rowsLength = 2;
      expect(isValidMaxRowSelection(maxRowSelection, rowsLength)).toBe(false);
    });
  });
  it('should return false when maxRowSelection value is other than number', function () {
    var values = [{}, [], 'asd', undefined, null];
    values.forEach(function (value) {
      var maxRowSelection = value;
      var rowsLength = 3;
      expect(isValidMaxRowSelection(maxRowSelection, rowsLength)).toBe(false);
    });
  });
});