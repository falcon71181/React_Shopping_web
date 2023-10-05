"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var mountWithRef = function mountWithRef(elWithRef, options) {
  var WithRef = function WithRef() {
    return elWithRef;
  };

  return (0, _enzyme.mount)(_react["default"].createElement(WithRef, null), options);
};

describe('<PrimitiveMenu/>', function () {
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
  it('should focus the button when the focus method is called', function () {
    var menuRef;
    var component = mountWithRef(_react["default"].createElement(_["default"], {
      ref: function ref(_ref) {
        return menuRef = _ref;
      },
      trigger: _ButtonIcon["default"]
    }));
    menuRef.focus();
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    var buttonDataId = component.find('button').prop('data-id');
    expect(focusedElementDataId).toBe(buttonDataId);
  });
  it('should blur the button when the blur method is called', function () {
    var menuRef;
    var component = mountWithRef(_react["default"].createElement(_["default"], {
      ref: function ref(_ref2) {
        return menuRef = _ref2;
      },
      trigger: _ButtonIcon["default"]
    }));
    var buttonDataId = component.find('button').prop('data-id');
    menuRef.focus();
    expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
    menuRef.blur();
    expect(document.activeElement.getAttribute('data-id')).toBeNull();
  });
  it('should set the isLoading passed in the MenuContent', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var component;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
              trigger: _ButtonIcon["default"],
              isLoading: true
            }, _react["default"].createElement("span", null)));
            component.find(_ButtonIcon["default"]).simulate('click');
            expect(component.find('MenuContent').prop('isLoading')).toBe(true);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      trigger: _ButtonIcon["default"]
    }, _react["default"].createElement("span", {
      "data-id": "menu-children"
    }, "menu content")));
    expect(component.find('span[data-id="menu-children"]').exists()).toBe(false);
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(component.find('span[data-id="menu-children"]').exists()).toBe(true);
    expect(component.find('span[data-id="menu-children"]').text()).toBe('menu content');
  });
  it('should set the role as menu in the ul element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      trigger: _ButtonIcon["default"]
    }, _react["default"].createElement("span", null)));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(component.find('ul').prop('role')).toBe('menu');
  });
  it('should set the title passed as the aria-label in the ul element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      trigger: _ButtonIcon["default"],
      title: "button title",
      assistiveText: "assistive description"
    }, _react["default"].createElement("span", null)));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(component.find('ul').prop('aria-label')).toBe('button title');
  });
  it('should set the assistiveText passed as the aria-label in the ul element when the title is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      trigger: _ButtonIcon["default"],
      assistiveText: "assistive description"
    }, _react["default"].createElement("span", null)));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(component.find('ul').prop('aria-label')).toBe('assistive description');
  });
});