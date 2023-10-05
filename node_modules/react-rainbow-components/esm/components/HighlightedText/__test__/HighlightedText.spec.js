import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';
import HighlightedText from '..';
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
    var component = mount(React.createElement(HighlightedText, {
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
    var component = mount(React.createElement(HighlightedText, {
      parts: parts,
      isInline: true
    }));
    expect(component.html().includes('<p>')).toBe(false);
  });
  it('should return a custom <span> with id="hitText" in the container at(1) which corresponds to the text that has a type hit', function () {
    var TextContainer = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            color: #808080;\n        "])));
    var HitContainer = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            color: #fff;\n        "])));

    var HitComponent = function HitComponent(_ref2) {
      var children = _ref2.children;
      return React.createElement(HitContainer, {
        id: "hitText"
      }, children);
    };

    var component = mount(React.createElement(HighlightedText, {
      parts: parts,
      textComponent: TextContainer,
      hitComponent: HitComponent
    }));
    var container = component.find('span');
    expect(container.at(1).prop('id')).toBe('hitText');
  });
});