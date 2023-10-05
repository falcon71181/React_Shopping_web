"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../../libs/constants");

var _ = require("..");

var _PicklistOption = _interopRequireDefault(require("../../PicklistOption"));

var _InternalOverlay = _interopRequireDefault(require("../../InternalOverlay"));

jest.mock('../../InternalOverlay', function () {
  return jest.fn(function () {
    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    return _react["default"].createElement("div", (0, _extends2["default"])({}, props, {
      "data-id": "internal-dropdown"
    }));
  });
});
var mockStartListening = jest.fn();
var mockStopListening = jest.fn();
jest.mock('../../../libs/WindowResize', function () {
  return jest.fn().mockImplementation(function () {
    return {
      startListening: mockStartListening,
      stopListening: mockStopListening
    };
  });
});
jest.useFakeTimers();
describe('<Picklist />', function () {
  beforeEach(function () {
    mockStartListening.mockClear();
    mockStopListening.mockClear();
  });
  it('should set the value label as value in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist",
      value: {
        label: 'Option 1'
      }
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    })));
    expect(component.find('input').prop('value')).toBe('Option 1');
  });
  it('should open menu when click the picklist input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
    component.find('input').simulate('click');
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
  });
  it('should open menu when picklist is focused and press a navigation key', function () {
    var keyCodes = [_constants.UP_KEY, _constants.LEFT_KEY, _constants.RIGHT_KEY, _constants.DOWN_KEY];
    keyCodes.forEach(function (keyCode) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
        label: "Picklist"
      }, _react["default"].createElement(_PicklistOption["default"], {
        label: "Option 1",
        name: "option1"
      }), _react["default"].createElement(_PicklistOption["default"], {
        label: "Option 2",
        name: "option2"
      }), _react["default"].createElement(_PicklistOption["default"], {
        label: "Option 3",
        name: "option3"
      })));
      var input = component.find('input');
      input.simulate('focus');
      expect(component.find('[aria-expanded=true]').exists()).toBe(false);
      expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
      input.simulate('keyDown', {
        keyCode: keyCode
      });
      expect(component.find('[aria-expanded=true]').exists()).toBe(true);
      expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    });
  });
  it('should open menu when picklist is focused and press SPACE key', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    var input = component.find('input');
    input.simulate('focus');
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
    input.simulate('keyDown', {
      keyCode: _constants.SPACE_KEY
    });
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
  });
  it('should close menu when is opened and click the picklist input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    component.find('input').simulate('click');
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
  });
  it('should close menu when is opened and press ESCAPE key', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    component.find('input').simulate('keyDown', {
      keyCode: _constants.ESCAPE_KEY
    });
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
  });
  it('should close menu when is opened and press TAB key', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    component.find('input').simulate('keyDown', {
      keyCode: _constants.TAB_KEY
    });
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
  });
  it('should not open menu when is readOnly and click the picklist label', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist",
      readOnly: true
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
    component.find('label').simulate('click');
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
  });
  it('should listen for window resize when opened', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.find('input').simulate('click');
    expect(mockStartListening).toHaveBeenCalled();
  });
  it('should cancel the resize listener when closed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    component.find('input').simulate('click');
    expect(mockStopListening).toHaveBeenCalled();
  });
  it('should cancel the resize listener when unmounted', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      label: "Picklist"
    }, _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_PicklistOption["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.unmount();
    expect(mockStopListening).toHaveBeenCalled();
  });
});