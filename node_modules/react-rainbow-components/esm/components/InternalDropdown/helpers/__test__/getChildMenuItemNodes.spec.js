import getChildMenuItemNodes from '../getChildMenuItemNodes';
describe('getChildMenuItemNodes', function () {
  var elements = [{
    element: 'div',
    innerText: 'Julio'
  }, {
    element: 'div',
    innerText: 'Pepe'
  }];
  var ref = {
    querySelectorAll: jest.fn(function () {
      return elements;
    })
  };
  it('should call querySelectorAll with a[role="menuitem"]', function () {
    getChildMenuItemNodes(ref);
    expect(ref.querySelectorAll).toHaveBeenCalledWith('div[role="option"]');
  });
  it('should return the elements resolved by querySelectorAll', function () {
    expect(getChildMenuItemNodes(ref)).toEqual(elements);
  });
  it('should return an empty array if anything is passed', function () {
    expect(getChildMenuItemNodes()).toEqual([]);
  });
});