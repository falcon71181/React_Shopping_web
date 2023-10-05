import setFocus from '../setFocus';
describe('setFocus', function () {
  it('should call ref focus() and select() methods when ref is valid', function () {
    var ref = {
      current: {
        focus: jest.fn(),
        select: jest.fn()
      }
    };
    setFocus(ref);
    expect(ref.current.focus).toHaveBeenCalled();
  });
  it('should not call ref focus() nor select() methods when ref is invalid', function () {
    var ref = {
      current: {
        focus: jest.fn(),
        select: jest.fn()
      }
    };
    var invalidRef = null;
    setFocus(invalidRef);
    expect(ref.current.focus).not.toHaveBeenCalled();
  });
});