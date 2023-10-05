import React from 'react';
import { mount } from 'enzyme';
import SortArrowIcon from '../sortArrowIcon';
import StyledSortArrowIcon from '../styled/sortArrowIcon';
describe('<SortArrowIcon />', function () {
  it('should set the prop arrowAscendent to true when direction is asc', function () {
    var component = mount(React.createElement(SortArrowIcon, {
      direction: "asc"
    }));
    expect(component.find(StyledSortArrowIcon).prop('arrowAscendent')).toBe(true);
  });
  it('should set the prop arrowAscendent to true when direction is desc', function () {
    var component = mount(React.createElement(SortArrowIcon, {
      direction: "desc"
    }));
    expect(component.find(StyledSortArrowIcon).prop('arrowAscendent')).toBe(false);
  });
});