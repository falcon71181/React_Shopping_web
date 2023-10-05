"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MenuItem = _interopRequireDefault(require("../../../MenuItem"));

var _actionsCell = _interopRequireDefault(require("../actionsCell"));

var _ButtonIcon = _interopRequireDefault(require("../../../ButtonIcon"));

var columnChildren = [_react["default"].createElement(_MenuItem["default"], null), _react["default"].createElement(_MenuItem["default"], null)];
describe('<ActionsCell />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
  });
  it('should not render anything when columnChildren is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_actionsCell["default"], null));
    expect(component.children().length).toBe(0);
  });
  it('should render the menu items passed as columnChildren', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_actionsCell["default"], {
      columnChildren: columnChildren,
      rowsLength: 3,
      rowIndex: 1
    }));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(component.find(_MenuItem["default"]).length).toBe(2);
  });
  it('should render only one menu item', function () {
    var singleColumnChild = _react["default"].createElement(_MenuItem["default"], null);

    var component = (0, _enzyme.mount)(_react["default"].createElement(_actionsCell["default"], {
      columnChildren: singleColumnChild,
      rowsLength: 3,
      rowIndex: 1
    }));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(component.find(_MenuItem["default"]).length).toBe(1);
  });
  it('should set the menuAlignment to "right" in ButtonMenu component', function () {
    var values = [1, 2, 3, 4, 5];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_actionsCell["default"], {
        columnChildren: columnChildren,
        rowsLength: value,
        rowIndex: 1
      }));
      expect(component.find('ButtonMenu').prop('menuAlignment')).toBe('right');
    });
  });
  it('should set the menuAlignment to "bottom-right" in ButtonMenu component', function () {
    var values = [4, 5, 6];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_actionsCell["default"], {
        columnChildren: columnChildren,
        rowsLength: value,
        rowIndex: 3
      }));
      expect(component.find('ButtonMenu').prop('menuAlignment')).toBe('bottom-right');
    });
  });
  it('should not render any MenuItem when columnChildren are invalid', function () {
    var values = [[], ['asd'], [123]];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_actionsCell["default"], {
        columnChildren: value,
        rowsLength: 3,
        rowIndex: 1
      }));
      expect(component.find(_MenuItem["default"]).length).toBe(0);
    });
  });
  it('should fire an event when a MenuItem is clicked', function () {
    var onClickMockFn = jest.fn();
    var menuItemsChildren = [_react["default"].createElement(_MenuItem["default"], {
      onClick: onClickMockFn
    }), _react["default"].createElement(_MenuItem["default"], null)];
    var rowData = {
      name: 'John',
      email: 'john@gmail.com'
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_actionsCell["default"], {
      columnChildren: menuItemsChildren,
      rowsLength: 3,
      rowIndex: 1,
      rowData: rowData
    }));
    component.find(_ButtonIcon["default"]).simulate('click');
    component.find(_MenuItem["default"]).at(0).simulate('click');
    expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object), {
      name: 'John',
      email: 'john@gmail.com'
    });
  });
});