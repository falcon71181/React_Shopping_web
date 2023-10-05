import insertChildOrderly from '../insertChildOrderly';
describe('insertChildOrderly', function () {
  it('should insert the child in the right order if the item in the nodes is at middle', function () {
    var children = [{
      ref: 'item1'
    }, {
      ref: 'item2'
    }, {
      ref: 'item4'
    }, {
      ref: 'item5'
    }];
    var newChildren = [{
      ref: 'item1'
    }, {
      ref: 'item2'
    }, {
      ref: 'item3'
    }, {
      ref: 'item4'
    }, {
      ref: 'item5'
    }];
    var nodes = ['item1', 'item2', 'item3', 'item4', 'item5'];
    expect(insertChildOrderly(children, {
      ref: 'item3'
    }, nodes)).toEqual(newChildren);
  });
  it('should insert the child in the right order if the item in the nodes is at end', function () {
    var children = [{
      ref: 'item1'
    }, {
      ref: 'item2'
    }, {
      ref: 'item3'
    }];
    var newChildren = [{
      ref: 'item1'
    }, {
      ref: 'item2'
    }, {
      ref: 'item3'
    }, {
      ref: 'item4'
    }];
    var nodes = ['item1', 'item2', 'item3', 'item4'];
    expect(insertChildOrderly(children, {
      ref: 'item4'
    }, nodes)).toEqual(newChildren);
  });
});