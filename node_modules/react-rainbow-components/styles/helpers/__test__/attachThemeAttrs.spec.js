"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _enzyme = require("enzyme");

var _attachThemeAttrs = _interopRequireDefault(require("../attachThemeAttrs"));

var _defaultTheme = _interopRequireDefault(require("../../defaultTheme"));

var _templateObject;

describe('attachThemeAttrs', function () {
  var interpolatedProps = null;

  var interpolatedFn = function interpolatedFn(props) {
    interpolatedProps = props;
  };

  var StyledComponent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        position: relative;\n        ", "\n    "])), function (props) {
    return interpolatedFn(props);
  });
  beforeEach(function () {
    interpolatedProps = null;
  });
  it('should return a merge object with props and default themes values when props.theme.rainbow is an empty', function () {
    (0, _enzyme.mount)(_react["default"].createElement(StyledComponent, {
      test: true
    }));
    expect(interpolatedProps.test).toBe(true);
    expect(interpolatedProps.palette).toEqual(_defaultTheme["default"].palette);
  });
  it('should return a merge object with props and props.theme.rainbow when props.theme.rainbow was passed', function () {
    var theme = {
      rainbow: {
        palette: {
          brand: {
            main: {
              color: 'red'
            }
          }
        }
      }
    };
    (0, _enzyme.mount)(_react["default"].createElement(StyledComponent, {
      test: true,
      theme: theme
    }));
    expect(interpolatedProps.test).toBe(true);
    expect(interpolatedProps.palette).toEqual(theme.rainbow.palette);
  });
});