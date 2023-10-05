import getChildNodes from '../getChildNodes';
describe('getChildNodes', function () {
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
    getChildNodes({
      ref: ref,
      selector: 'div[role="option"]'
    });
    expect(ref.querySelectorAll).toHaveBeenCalledWith('div[role="option"]');
  });
  it('should return the elements resolved by querySelectorAll', function () {
    expect(getChildNodes({
      ref: ref
    })).toEqual(elements);
  });
  it('should return an empty array if anything is passed', function () {
    expect(getChildNodes()).toEqual([]);
  });
});