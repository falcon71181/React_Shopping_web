import getRowIndexByKey from '../getRowIndexByKey';
describe('getRowIndexByKey', function () {
  it('should return undefined when any argument is passed', function () {
    expect(getRowIndexByKey()).toBeUndefined();
  });
  it('should return undefined when the key passed does not exists in indexes', function () {
    var keys = ['', 'abcd', 123, undefined, null, [], {}, function () {}];
    var indexes = {};
    keys.forEach(function (key) {
      expect(getRowIndexByKey(indexes, key)).toBeUndefined();
    });
  });
  it('should return the right index', function () {
    var indexes = {
      name: {
        rowIndex: 1
      }
    };
    var key = 'name';
    expect(getRowIndexByKey(indexes, key)).toBe(1);
  });
});