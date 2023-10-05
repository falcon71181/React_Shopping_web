"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = _interopRequireDefault(require(".."));

var _templateObject, _templateObject2;

describe('<HighlightedText />', function () {
  var parts = [{
    value: 'Apples',
    type: 'text'
  }, {
    value: 'varieties',
    type: 'hit'
  }, {
    value: 'Honeycrisp',
    type: 'text'
  }];
  it('should return 3 <span> with theirs respective values because the default wrapper is a span', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      parts: parts
    }));
    var container = component.find('span');
    expect(container.length).toBe(3);
    parts.forEach(function (_ref, index) {
      var value = _ref.value;
      expect(container.at(index).html().includes(value)).toBe(true);
    });
  });
  it('it should not return a <p> container', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      parts: parts,
      isInline: true
    }));
    expect(component.html().includes('<p>')).toBe(false);
  });
  it('should return a custom <span> with id="hitText" in the container at(1) which corresponds to the text that has a type hit', function () {
    var TextContainer = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n            color: #808080;\n        "])));

    var HitContainer = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n            color: #fff;\n        "])));

    var HitComponent = function HitComponent(_ref2) {
      var children = _ref2.children;
      return _react["default"].createElement(HitContainer, {
        id: "hitText"
      }, children);
    };

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      parts: parts,
      textComponent: TextContainer,
      hitComponent: HitComponent
    }));
    var container = component.find('span');
    expect(container.at(1).prop('id')).toBe('hitText');
  });
});