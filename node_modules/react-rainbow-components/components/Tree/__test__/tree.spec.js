"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _treeChildren = _interopRequireDefault(require("../treeChildren"));

var data = [{
  label: 'Tree Item',
  isChecked: false
}, {
  label: 'Tree Item',
  isChecked: false
}, {
  label: 'Tree Branch',
  isLoading: false,
  isExpanded: true,
  isChecked: false,
  children: [{
    label: 'Tree Item',
    isChecked: false
  }, {
    label: 'Tree Branch',
    isLoading: false,
    isExpanded: true,
    isChecked: false,
    children: [{
      label: 'Tree Item',
      isChecked: false
    }]
  }]
}, {
  label: 'Tree Branch',
  isExpanded: true,
  isChecked: false,
  children: [{
    label: 'Tree Item',
    isChecked: false
  }, {
    label: 'Tree Branch',
    isLoading: false,
    isExpanded: true,
    isChecked: false,
    children: [{
      label: 'Tree Item',
      isChecked: false
    }]
  }]
}];
describe('<Tree/>', function () {
  it('should call onNodeExpand with the right parameters when the button is clicked', function () {
    var onNodeExpandMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      onNodeExpand: onNodeExpandMock
    }));
    component.find(_ButtonIcon["default"]).at(1).simulate('click');
    expect(onNodeExpandMock).toHaveBeenCalledTimes(1);
    expect(onNodeExpandMock).toHaveBeenCalledWith({
      nodePath: [2, 1],
      name: 'node-3.2'
    });
  });
  it('should call onNodeCheck with the right parameters when the node is selected', function () {
    var onNodeCheckMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      onNodeCheck: onNodeCheckMock
    }));
    component.find('PrimitiveCheckbox').at(2).find('input').simulate('change');
    expect(onNodeCheckMock).toHaveBeenCalledTimes(1);
    expect(onNodeCheckMock).toHaveBeenCalledWith({
      nodePath: [2],
      name: 'node-3'
    });
  });
  it('should call onNodeSelect with the right data', function () {
    var onNodeSelectMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      onNodeSelect: onNodeSelectMock
    }));
    component.find('li').at(1).simulate('click');
    expect(onNodeSelectMock).toHaveBeenCalledTimes(1);
    expect(onNodeSelectMock).toHaveBeenCalledWith({
      nodePath: [1],
      name: 'node-2'
    });
  });
  it('should render the correct number of children', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    expect(component.find('Child').length).toBe(10);
  });
  it('should have the container ul element a role tree', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var container = component.find('ul').at(0);
    expect(container.prop('role')).toBe('tree');
  });
  it('should have the role group in the child ul element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var container = component.find('ul').at(1);
    expect(container.prop('role')).toBe('group');
  });
  it('should set the first li element with tabIndex 0', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var firstLi = component.find('li').at(0);
    expect(firstLi.prop('tabIndex')).toBe(0);
  });
  it('should all li element with tabIndex -1 except the first one', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var secondLi = component.find('li').at(1);
    expect(secondLi.prop('tabIndex')).toBe(-1);
    var thirdLi = component.find('li').at(2);
    expect(thirdLi.prop('tabIndex')).toBe(-1);
  });
  it('should tabIndex 0 to the selected node', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      selectedNode: "node-3.2"
    }));
    var li = component.find('li').at(4);
    expect(li.prop('tabIndex')).toBe(0);
  });
  it('should generate the right node names', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var firstLi = component.find('li').at(0);
    expect(firstLi.prop('id')).toBe('node-1');
    var secondLi = component.find('li').at(1);
    expect(secondLi.prop('id')).toBe('node-2');
    var fourthLi = component.find('li').at(3);
    expect(fourthLi.prop('id')).toBe('node-3.1');
    var fifthLi = component.find('li').at(4);
    expect(fifthLi.prop('id')).toBe('node-3.2');
  });
  it('should set tabIndex to -1 in expand collapse button', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var firstExpandButton = component.find(_ButtonIcon["default"]).at(0);
    expect(firstExpandButton.prop('tabIndex')).toBe(-1);
    var fourthExpandButton = component.find(_ButtonIcon["default"]).at(2);
    expect(fourthExpandButton.prop('tabIndex')).toBe(-1);
  });
  it('should pass right aria-level number', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var firstLi = component.find('li').at(0);
    expect(firstLi.prop('aria-level')).toBe(1);
    var fourthLi = component.find('li').at(3);
    expect(fourthLi.prop('aria-level')).toBe(2);
    var sixthLi = component.find('li').at(5);
    expect(sixthLi.prop('aria-level')).toBe(3);
  });
  it('should pass the right aria-label', function () {
    var ariaLabel = 'labelSample';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      ariaLabel: ariaLabel
    }));
    var container = component.find('ul').at(0);
    expect(container.prop('aria-label')).toBe(ariaLabel);
  });
  it('should pass the right aria-labelledby', function () {
    var ariaLabelledBy = 'labelledBySample';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      ariaLabelledBy: ariaLabelledBy
    }));
    var container = component.find('ul').at(0);
    expect(container.prop('aria-labelledby')).toBe(ariaLabelledBy);
  });
  it('should not set aria-expanded when the node does not have children', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var firstLi = component.find('li').at(1);
    expect(firstLi.prop('aria-expanded')).toBeUndefined();
  });
  it('should set the aria-expanded value of the node when it has children', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data
    }));
    var node = component.find('li').at(2);
    expect(node.prop('aria-expanded')).toBe(true);
  });
  it('should render an empty tree when data is invalid', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: null
    }));
    var treeChildren = component.find(_treeChildren["default"]);
    expect(treeChildren.prop('data')).toEqual([]);
  });
});