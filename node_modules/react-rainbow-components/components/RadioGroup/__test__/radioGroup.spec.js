"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _label = _interopRequireDefault(require("../styled/label"));

var _contentContainer = _interopRequireDefault(require("../styled/contentContainer"));

describe('<RadioGroup />', function () {
  it('renders correctly in vertical orientation (default)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      options: options
    }));
    var elem = component.find(_contentContainer["default"]);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('column');
  });
  it('renders correctly in vertical orientation (explicit)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      options: options,
      orientation: "vertical"
    }));
    var elem = component.find(_contentContainer["default"]);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('column');
  });
  it('renders correctly in horizontal orientation (explicit)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      options: options,
      orientation: "horizontal"
    }));
    var elem = component.find(_contentContainer["default"]);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('row');
  });
  it('should render a label when label prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "RadioGroup Label"
    }));
    expect(component.find(_label["default"]).exists()).toBe(true);
  });
  it('should set "left" to labelAlignment prop passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "RadioGroup Label",
      labelAlignment: "left"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('left');
  });
  it('should set "right" to labelAlignment prop passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "RadioGroup Label",
      labelAlignment: "right"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('right');
  });
  it('should set "left" to labelAlignment if prop not passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "RadioGroup Label"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('left');
  });
});