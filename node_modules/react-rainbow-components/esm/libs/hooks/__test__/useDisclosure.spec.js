import { act, renderHook } from '@testing-library/react-hooks';
import useDisclosure from '../useDisclosure';
describe('useDisclosure', function () {
  it('should set isOpen to true when open function is called', function () {
    var hook = renderHook(function (value) {
      return useDisclosure(value);
    }, {
      initialProps: false
    });
    expect(hook.result.current.isOpen).toBe(false);
    act(function () {
      hook.result.current.open();
    });
    expect(hook.result.current.isOpen).toBe(true);
  });
  it('should set isOpen to false when close function is called', function () {
    var hook = renderHook(function (value) {
      return useDisclosure(value);
    }, {
      initialProps: true
    });
    expect(hook.result.current.isOpen).toBe(true);
    act(function () {
      hook.result.current.close();
    });
    expect(hook.result.current.isOpen).toBe(false);
  });
  it('should toggle  value of isOpen when toggle function is called', function () {
    var hook = renderHook(function (value) {
      return useDisclosure(value);
    }, {
      initialProps: false
    });
    act(function () {
      hook.result.current.toggle();
    });
    expect(hook.result.current.isOpen).toBe(true);
    act(function () {
      hook.result.current.toggle();
    });
    expect(hook.result.current.isOpen).toBe(false);
  });
});