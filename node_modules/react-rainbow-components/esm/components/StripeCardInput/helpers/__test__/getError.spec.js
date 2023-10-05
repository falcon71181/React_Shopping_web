import getError from '../getError';
describe('getError', function () {
  it('should return specific object when error is passed', function () {
    var error = {
      code: 1,
      type: 'type',
      message: 'message',
      otherField: 'invalid'
    };
    var result = getError(error);
    expect(result).toEqual({
      code: 1,
      type: 'type',
      message: 'message'
    });
  });
  it('should return undefined when no error is passed', function () {
    var result = getError();
    expect(result).toBe(undefined);
  });
});