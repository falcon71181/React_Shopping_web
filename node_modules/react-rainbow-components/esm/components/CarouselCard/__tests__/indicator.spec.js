import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Indicator from '../indicators/indicator';
describe('<Indicator />', function () {
  it('should set the right props if the indicator is selected', function () {
    var _render = render(React.createElement(Indicator, {
      selectedItem: "indicator-1",
      id: "indicator-1",
      containerId: "container-1",
      header: "Header"
    })),
        getByRole = _render.getByRole;

    var indicator = getByRole('tab');
    expect(indicator).toHaveAttribute('aria-selected', 'true');
    expect(indicator).toHaveAttribute('tabindex', '0');
  });
  it('should set the right props if the indicator is not selected', function () {
    var _render2 = render(React.createElement(Indicator, {
      selectedItem: "indicator-2",
      id: "indicator-1",
      containerId: "container-1",
      header: "Header"
    })),
        getByRole = _render2.getByRole;

    var indicator = getByRole('tab');
    expect(indicator).toHaveAttribute('aria-selected', 'false');
    expect(indicator).toHaveAttribute('tabindex', '-1');
  });
  it('should set the assistive text as title to the button element', function () {
    var _render3 = render(React.createElement(Indicator, {
      selectedItem: "indicator-1",
      id: "indicator-1",
      containerId: "container-1",
      header: "Header"
    })),
        getByText = _render3.getByText,
        getByRole = _render3.getByRole;

    expect(getByText('Header Tab')).toBeDefined();
    expect(getByRole('tab')).toHaveAttribute('title', 'Header Tab');
  });
  it('should set title and text in AssistiveText to undefined when header is not a string', function () {
    var _render4 = render(React.createElement(Indicator, {
      selectedItem: "indicator-1",
      id: "indicator-1",
      containerId: "container-1",
      header: React.createElement("span", null, "Header")
    })),
        getByRole = _render4.getByRole;

    var indicator = getByRole('tab');
    expect(indicator).toHaveTextContent('');
    expect(indicator).not.toHaveAttribute('title');
  });
  it('should set the right accesivillity props', function () {
    var _render5 = render(React.createElement(Indicator, {
      selectedItem: "indicator-1",
      id: "indicator-1",
      containerId: "container-1",
      header: "Header"
    })),
        getByRole = _render5.getByRole;

    var indicator = getByRole('tab');
    expect(indicator).toHaveAttribute('id', 'indicator-1');
    expect(indicator).toHaveAttribute('aria-controls', 'container-1');
  });
  it('should call the function passed in onSelect prop', function () {
    var onSelectMockFn = jest.fn();

    var _render6 = render(React.createElement(Indicator, {
      selectedItem: "indicator-1",
      id: "indicator-1",
      containerId: "container-1",
      header: "Header",
      onSelect: onSelectMockFn
    })),
        getByRole = _render6.getByRole;

    fireEvent.click(getByRole('tab'));
    expect(onSelectMockFn).toHaveBeenCalledWith('indicator-1');
  });
});