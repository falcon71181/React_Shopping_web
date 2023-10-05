"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _strengthBar = _interopRequireDefault(require("../strengthBar"));

var _styled = require("../styled");

describe('<StrengthBar />', function () {
  it('should render a StyledStateBar with the right `passwordState`', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_strengthBar["default"], {
      passwordState: "weak"
    }));
    var styledStateBar = component.find(_styled.StyledStateBar);
    expect(styledStateBar.length).toBe(1);
    expect(styledStateBar.prop('passwordState')).toBe('weak');
  });
  it('should render the password state label when passed', function () {
    var passwordStateLabels = {
      weak: 'Weak',
      average: 'Average',
      strong: 'Strong'
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_strengthBar["default"], {
      passwordState: "weak",
      passwordStateLabels: passwordStateLabels
    }));
    expect(component.find(_styled.StyledStateLabel).length).toBe(1);
  });
});