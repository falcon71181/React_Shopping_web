import getNode from '../getNode';
var tree = [{
  label: 'Tree Item'
}, {
  label: 'Tree Item'
}, {
  label: 'Tree Branch',
  isExpanded: true,
  children: [{
    label: 'Tree Item'
  }, {
    label: 'Tree Branch',
    isLoading: false,
    children: [{
      label: 'Tree Item'
    }]
  }]
}, {
  label: 'Tree Branch',
  children: [{
    label: 'Tree Item'
  }, {
    label: 'Tree Item'
  }, {
    label: 'Tree Item'
  }, {
    label: 'Tree Item'
  }, {
    label: 'Tree Item'
  }]
}];
describe('getNode', function () {
  it('should return the right node when nodePath has only one element', function () {
    var nodePath = [2];
    var expectedNode = {
      label: 'Tree Branch',
      isExpanded: true,
      children: [{
        label: 'Tree Item'
      }, {
        label: 'Tree Branch',
        isLoading: false,
        children: [{
          label: 'Tree Item'
        }]
      }]
    };
    expect(getNode(tree, nodePath)).toStrictEqual(expectedNode);
  });
  it('should return the right node when nodePath has more than one element', function () {
    var nodePath = [2, 1];
    var expectedNode = {
      label: 'Tree Branch',
      isLoading: false,
      children: [{
        label: 'Tree Item'
      }]
    };
    expect(getNode(tree, nodePath)).toStrictEqual(expectedNode);
  });
});