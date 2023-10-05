import isButtonDisabled from '../isButtonDisabled';
describe('isButtonDisabled helper', function () {
  it('should return true when isMinOrMax', function () {
    var isMinOrMax = true;
    var disabled = false;
    var readOnly = false;
    var disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
    expect(disable).toBe(true);
  });
  it('should return true when disabled', function () {
    var isMinOrMax = false;
    var disabled = true;
    var readOnly = false;
    var disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
    expect(disable).toBe(true);
  });
  it('should return true when readOnly', function () {
    var isMinOrMax = false;
    var disabled = false;
    var readOnly = true;
    var disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
    expect(disable).toBe(true);
  });
  it('should return false', function () {
    var isMinOrMax = false;
    var disabled = false;
    var readOnly = false;
    var disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
    expect(disable).toBe(false);
  });
});