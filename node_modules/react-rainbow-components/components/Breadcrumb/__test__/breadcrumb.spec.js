"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('<Breadcrumb/>', function () {
  it('should render an anchor when href is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "index",
      href: "index"
    }));
    expect(component.find('a').exists()).toBe(true);
  });
  it('should render a button when href is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "index"
    }));
    expect(component.find('button').exists()).toBe(true);
  });
  it('should set the href passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "index",
      href: "index"
    }));
    expect(component.find('a').prop('href')).toBe('index');
  });
  it('should invoke onClick callback when we clicked in the breadcrumb', function () {
    var onClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "index",
      onClick: onClickMockFn
    }));
    component.find('button').simulate('click');
    expect(onClickMockFn.mock.calls.length).toBe(1);
  });
  it('should set the label passed as children', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "index"
    }));
    expect(component.find('button').text()).toBe('index');
  });
  it('should set the right aria-disabled value when the disabled is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "index",
      disabled: true
    }));
    expect(component.find('button').prop('aria-disabled')).toBe(true);
  });
  it('should set the label passed as children while href is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      href: "index",
      label: "index"
    }));
    expect(component.find('a').text()).toBe('index');
  });
  it('should set the right aria-disabled value when the disabled is passed while href is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      href: "index",
      label: "index",
      disabled: true
    }));
    expect(component.find('a').prop('aria-disabled')).toBe(true);
  });
});