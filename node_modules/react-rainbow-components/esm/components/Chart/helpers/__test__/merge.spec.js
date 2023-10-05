import merge from '../merge';
describe('merge', function () {
  it('should merge the objects recursively', function () {
    var obj1 = {
      key1: 'value1',
      key2: {
        subKey1: true
      }
    };
    var obj2 = {
      key2: {
        subKey2: 25
      },
      key3: 'value3'
    };
    var resultObj = {
      key1: 'value1',
      key2: {
        subKey1: true,
        subKey2: 25
      },
      key3: 'value3'
    };
    expect(merge(obj1, obj2)).toEqual(resultObj);
  });
  it('should overwrite existing keys', function () {
    var obj1 = {
      key: 'value'
    };
    var obj2 = {
      key: true
    };
    expect(merge(obj1, obj2)).toEqual(obj2);
  });
});