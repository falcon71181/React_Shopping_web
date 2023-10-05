import isInArray from '../isInArray';
var arrayContainer = ['onion', 'carrot', 'tomato', 'chard'];
var itemToMatch = 'chard';
var itemNotMatch = 'pizza';
describe('<AccordionSection/> isInArray', function () {
  it('should return "true" when an item of the array match', function () {
    expect(isInArray(arrayContainer, itemToMatch)).toBe(true);
  });
  it('should return "false" when an item of the array not match', function () {
    expect(isInArray(arrayContainer, itemNotMatch)).toBe(false);
  });
});