import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import attachThemeAttrs from '../attachThemeAttrs';
import defaultTheme from '../../defaultTheme';
describe('attachThemeAttrs', function () {
  var interpolatedProps = null;

  var interpolatedFn = function interpolatedFn(props) {
    interpolatedProps = props;
  };

  var StyledComponent = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: relative;\n        ", "\n    "])), function (props) {
    return interpolatedFn(props);
  });
  beforeEach(function () {
    interpolatedProps = null;
  });
  it('should return a merge object with props and default themes values when props.theme.rainbow is an empty', function () {
    mount(React.createElement(StyledComponent, {
      test: true
    }));
    expect(interpolatedProps.test).toBe(true);
    expect(interpolatedProps.palette).toEqual(defaultTheme.palette);
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
    mount(React.createElement(StyledComponent, {
      test: true,
      theme: theme
    }));
    expect(interpolatedProps.test).toBe(true);
    expect(interpolatedProps.palette).toEqual(theme.rainbow.palette);
  });
});