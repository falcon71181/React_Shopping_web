import React from 'react';
import { mount } from 'enzyme';
import MarkdownOutput from '../index';
import useMarkdownToReact from '../hooks/useMarkdownToReact';
import { defaultRenderer, inlineRenderer } from '../renderers';
jest.mock('../hooks/useMarkdownToReact', function () {
  return jest.fn();
});
describe('<MarkdownOutput />', function () {
  it('should call useMarkdownToReact hook with right value', function () {
    var value = '# This is a level 1 header';
    mount(React.createElement(MarkdownOutput, {
      value: value
    }));
    expect(useMarkdownToReact).toHaveBeenCalledWith(value, defaultRenderer);
  });
  it('should use the inline renderer when variant is "inline"', function () {
    var value = '# This is a level 1 header';
    mount(React.createElement(MarkdownOutput, {
      value: value,
      variant: "inline"
    }));
    expect(useMarkdownToReact).toHaveBeenCalledWith(value, inlineRenderer);
  });
});