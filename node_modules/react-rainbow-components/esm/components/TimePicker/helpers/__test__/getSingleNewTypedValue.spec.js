import getSingleNewTypedValue from '../getSingleNewTypedValue';
describe('getSingleNewTypedValue', function () {
  it('should return null when a invalid prev value is passed', function () {
    var prevValues = [123, {}, []];
    prevValues.forEach(function (prevValue) {
      return expect(getSingleNewTypedValue(prevValue, '1')).toBe(null);
    });
  });
  it('should return null when a invalid value is passed', function () {
    var values = [undefined, null, 123, {}, [], ''];
    values.forEach(function (value) {
      return expect(getSingleNewTypedValue('01', value)).toBe(null);
    });
  });
  it('should return the same value passed when a prev value is not passed and a valid value is passed', function () {
    var values = [undefined, null, '', 0];
    values.forEach(function (value) {
      return expect(getSingleNewTypedValue(value, '12')).toBe('12');
    });
  });
  it('should return null when prev value and value are the same', function () {
    expect(getSingleNewTypedValue('01', '01')).toBe(null);
  });
  it('should return the "2" new value', function () {
    var values = ['012', '201', '021'];
    values.forEach(function (value) {
      return expect(getSingleNewTypedValue('01', value)).toBe('2');
    });
  });
  it('should return the "0" new value', function () {
    var values = ['002', '020'];
    values.forEach(function (value) {
      return expect(getSingleNewTypedValue('02', value)).toBe('0');
    });
  });
});